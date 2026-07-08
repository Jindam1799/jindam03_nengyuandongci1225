document.addEventListener('DOMContentLoaded', () => {
  // --- 화면 및 UI 엘리먼트 ---
  const screenIntro = document.getElementById('screen-intro');
  const screenLobby = document.getElementById('screen-lobby');
  const screenGame = document.getElementById('screen-game');

  const popupOverlay = document.getElementById('popup-overlay');
  const popupIntro = document.getElementById('popup-intro');
  const popupSuccess = document.getElementById('popup-success');
  const popupReview = document.getElementById('popup-review');

  const dayButtonsContainer = document.getElementById('day-buttons');
  const levelIndicator = document.getElementById('level-indicator');
  const timerDisplay = document.getElementById('timer');
  const koreanSentence = document.getElementById('korean-sentence');
  const answerSlots = document.getElementById('answer-slots');
  const wordBank = document.getElementById('word-bank');

  const bgmLobby = document.getElementById('bgm-lobby');

  // 버튼
  const btnCloseIntro = document.getElementById('btn-close-intro');
  const btnNextSentence = document.getElementById('btn-next-sentence');
  const btnReturnLobby = document.getElementById('btn-return-lobby');
  const btnIngameLobby = document.getElementById('btn-ingame-lobby');

  // 녹음 관련 버튼
  const btnRecordVoice = document.getElementById('btn-record-voice');
  const btnPlayMyVoice = document.getElementById('btn-play-my-voice');
  const btnPlayTts = document.getElementById('btn-play-tts');

  // --- 상태 변수 ---
  let currentDayData = [];
  let currentSentenceIndex = 0;
  let timerInterval = null;
  let timeLeft = 30;
  let targetSentenceData = [];
  let currentAnswer = [];
  let currentFullChinese = '';

  // 오답 추적을 위한 객체 배열 (복습창 하이라이트용)
  let mistakeTracker = {};

  // --- Web Audio API (툭 사운드 생성) ---
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();

  function playClickSound() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sine'; // 부드러운 툭 소리
    oscillator.frequency.setValueAtTime(400, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
      100,
      audioCtx.currentTime + 0.1,
    );

    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioCtx.currentTime + 0.1,
    );

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1);
  }

  // --- TTS 음성 세팅 ---
  let synthVoices = [];
  function loadVoices() {
    if ('speechSynthesis' in window)
      synthVoices = window.speechSynthesis.getVoices();
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }

  // --- 녹음 세팅 (MediaRecorder) ---
  let mediaRecorder;
  let audioChunks = [];
  let myRecordedAudioUrl = null;
  let myRecordedAudioObj = null;

  // 1. 초기 흐름 제어
  screenIntro.addEventListener('click', () => {
    showPopup(popupIntro);
  });

  btnCloseIntro.addEventListener('click', () => {
    hidePopup(popupIntro);
    switchScreen(screenLobby);
    initLobby();
    bgmLobby.play().catch((e) => console.log(e));
  });

  function initLobby() {
    dayButtonsContainer.innerHTML = '';
    const days = Object.keys(window.sentenceData);
    days.forEach((day) => {
      const btn = document.createElement('button');
      btn.innerText = day.toUpperCase();
      btn.addEventListener('click', () => startGame(day));
      dayButtonsContainer.appendChild(btn);
    });
  }

  btnIngameLobby.addEventListener('click', () => {
    stopTimer();
    switchScreen(screenLobby);
    bgmLobby.play().catch((e) => console.log(e));
  });

  btnReturnLobby.addEventListener('click', () => {
    hidePopup(popupReview);
    switchScreen(screenLobby);
    bgmLobby.play().catch((e) => console.log(e));
  });

  // 2. 게임 시작 & 문장 로드
  function startGame(dayKey) {
    currentDayData = window.sentenceData[dayKey];
    currentSentenceIndex = 0;
    mistakeTracker = {}; // 오답 기록 초기화

    bgmLobby.pause();
    bgmLobby.currentTime = 0;

    switchScreen(screenGame);
    loadSentence();
  }

  function loadSentence() {
    const sentenceObj = currentDayData[currentSentenceIndex];

    // 상태 초기화
    answerSlots.innerHTML = '';
    wordBank.innerHTML = '';
    currentAnswer = [];
    screenGame.classList.remove('shake-screen');

    // 녹음 초기화
    myRecordedAudioUrl = null;
    if (myRecordedAudioObj) {
      myRecordedAudioObj.pause();
      myRecordedAudioObj = null;
    }
    btnPlayMyVoice.disabled = true;
    btnRecordVoice.innerText = '🎙️ 녹음하기';
    btnRecordVoice.classList.remove('recording');

    // 데이터 구성
    targetSentenceData = sentenceObj.chinese.hanzi.map((h, i) => ({
      hanzi: h,
      pinyin: sentenceObj.chinese.pinyin[i],
      id: i,
    }));
    currentFullChinese = targetSentenceData.map((t) => t.hanzi).join('');

    if (sentenceObj.isFinal) screenGame.classList.add('is-final');
    else screenGame.classList.remove('is-final');

    levelIndicator.innerText = `Level ${sentenceObj.level}`;
    koreanSentence.innerText = sentenceObj.korean;

    let shuffledWords = [...targetSentenceData].sort(() => Math.random() - 0.5);

    shuffledWords.forEach((item) => {
      const card = createWordCardUI(item);
      card.addEventListener('click', () => handleWordClick(item, card));
      wordBank.appendChild(card);
    });

    startTimer();
  }

  function createWordCardUI(item) {
    const card = document.createElement('div');
    card.className = 'word-card';
    card.dataset.id = item.id;
    card.innerHTML = `<div class="pinyin">${item.pinyin}</div><div class="hanzi">${item.hanzi}</div>`;
    return card;
  }

  function handleWordClick(item, originalCard) {
    if (originalCard.classList.contains('hidden')) return;

    playClickSound(); // 터치 시 툭 소리 재생
    originalCard.classList.add('hidden');

    const slotCard = createWordCardUI(item);
    slotCard.addEventListener('click', () => {
      playClickSound(); // 취소 터치 시에도 소리 재생
      answerSlots.removeChild(slotCard);
      originalCard.classList.remove('hidden');
      currentAnswer = currentAnswer.filter((ans) => ans.id !== item.id);
    });

    answerSlots.appendChild(slotCard);
    currentAnswer.push(item);

    if (currentAnswer.length === targetSentenceData.length) checkAnswer();
  }

  // 3. 정답/오답 확인
  function checkAnswer() {
    stopTimer();
    const isCorrect = currentAnswer.every(
      (val, idx) => val.hanzi === targetSentenceData[idx].hanzi,
    );

    if (isCorrect) {
      document.getElementById('success-korean').innerText =
        currentDayData[currentSentenceIndex].korean;
      document.getElementById('success-chinese').innerText = currentFullChinese;

      showPopup(popupSuccess);
      playTTS(currentFullChinese); // 최초 정답 맞출 시 자동 재생
    } else {
      handleErrorOrTimeout();
    }
  }

  function handleErrorOrTimeout() {
    stopTimer();
    // 오답 기록 (복습 시 하이라이트용)
    mistakeTracker[currentSentenceIndex] = true;

    // 화면 흔들림 및 0.4초 후 초기화
    screenGame.classList.remove('shake-screen');
    void screenGame.offsetWidth;
    screenGame.classList.add('shake-screen');

    setTimeout(() => {
      answerSlots.innerHTML = '';
      currentAnswer = [];
      Array.from(wordBank.children).forEach((c) =>
        c.classList.remove('hidden'),
      );
      startTimer(30);
    }, 400);
  }

  // 4. 녹음 및 재생 제어 (성공 팝업)
  btnRecordVoice.addEventListener('click', async () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
      btnRecordVoice.innerText = '🎙️ 다시녹음';
      btnRecordVoice.classList.remove('recording');
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];
        mediaRecorder.ondataavailable = (e) => audioChunks.push(e.data);
        mediaRecorder.onstop = () => {
          // 브라우저가 녹음한 원본 포맷(mediaRecorder.mimeType)을 그대로 사용하도록 변경
          const audioBlob = new Blob(audioChunks, {
            type: mediaRecorder.mimeType || 'audio/webm',
          });
          myRecordedAudioUrl = URL.createObjectURL(audioBlob);
          myRecordedAudioObj = new Audio(myRecordedAudioUrl);
          btnPlayMyVoice.disabled = false;
        };
        mediaRecorder.start();
        btnRecordVoice.innerText = '🛑 멈추기';
        btnRecordVoice.classList.add('recording');
      } catch (err) {
        alert('마이크 접근이 거부되었습니다.');
      }
    }
  });

  btnPlayMyVoice.addEventListener('click', () => {
    if (myRecordedAudioObj) {
      myRecordedAudioObj.play();
    }
  });

  btnPlayTts.addEventListener('click', () => {
    playTTS(currentFullChinese);
  });

  // 다음 문장
  btnNextSentence.addEventListener('click', () => {
    hidePopup(popupSuccess);
    window.speechSynthesis.cancel(); // 팝업 닫을 때 TTS 중지
    currentSentenceIndex++;

    if (currentSentenceIndex < currentDayData.length) {
      loadSentence();
    } else {
      buildReviewList();
      showPopup(popupReview);
    }
  });

  // 5. 복습 리스트 생성 (틀린 것 강조)
  function buildReviewList() {
    const reviewContainer = document.getElementById('review-list');
    reviewContainer.innerHTML = '';

    currentDayData.forEach((sentenceObj, index) => {
      const fullChinese = sentenceObj.chinese.hanzi.join('');
      const itemDiv = document.createElement('div');
      itemDiv.className = 'review-item';

      // 틀린 적이 있는 문장이면 강조 클래스 추가
      if (mistakeTracker[index]) {
        itemDiv.classList.add('mistake-highlight');
      }

      const textDiv = document.createElement('div');
      textDiv.className = 'review-text';
      textDiv.innerHTML = `<div class="r-korean">${sentenceObj.korean}</div>
                                 <div class="r-chinese">${fullChinese}</div>`;

      const playBtn = document.createElement('button');
      playBtn.className = 'icon-btn';
      playBtn.innerText = '🔊';
      playBtn.addEventListener('click', () => playTTS(fullChinese));

      itemDiv.appendChild(textDiv);
      itemDiv.appendChild(playBtn);
      reviewContainer.appendChild(itemDiv);
    });
  }

  // 6. TTS 로직
  function playTTS(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.7;

      const zhVoices = synthVoices.filter((v) => v.lang.includes('zh'));
      const femaleVoice =
        zhVoices.find((v) => /Xiaoxiao|Ting-Ting|Google/i.test(v.name)) ||
        zhVoices[0];
      if (femaleVoice) utterance.voice = femaleVoice;

      window.speechSynthesis.speak(utterance);
    }
  }

  // 7. 타이머 제어
  function startTimer(resumeTime = 30) {
    stopTimer();
    timeLeft = resumeTime;
    timerDisplay.innerText = timeLeft;

    timerInterval = setInterval(() => {
      timeLeft--;
      timerDisplay.innerText = timeLeft;
      if (timeLeft <= 0) handleErrorOrTimeout();
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  // 팝업/화면 제어
  function showPopup(el) {
    popupOverlay.classList.remove('hidden');
    el.classList.remove('hidden');
  }
  function hidePopup(el) {
    popupOverlay.classList.add('hidden');
    el.classList.add('hidden');
  }
  function switchScreen(activeScreen) {
    document
      .querySelectorAll('.screen')
      .forEach((s) => s.classList.remove('active'));
    activeScreen.classList.add('active');
  }
});
