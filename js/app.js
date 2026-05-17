
// ========================================================
//  APP STATE
// ========================================================
let state = {
  currentSeries: null,
  currentQuestions: [],
  currentIndex: 0,
  selectedAnswers: [],
  answered: false,
  score: 0,
  wrongQuestions: [],
  timer: null,
  timeLeft: 40,
  isExamMode: false,
  history: JSON.parse(localStorage.getItem('crh') || '{}'),
  errors: JSON.parse(localStorage.getItem('cre') || '[]'),
  globalStats: JSON.parse(localStorage.getItem('crg') || '{"total":0,"correct":0}'),
};

function saveState() {
  localStorage.setItem('crh', JSON.stringify(state.history));
  localStorage.setItem('cre', JSON.stringify(state.errors));
  localStorage.setItem('crg', JSON.stringify(state.globalStats));
}

// ========================================================
//  UI HELPERS
// ========================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
}

function starsHTML(n) {
  return '⭐'.repeat(n) + '☆'.repeat(3-n);
}

function levelLabel(pct) {
  if (pct < 25) return 'Débutant';
  if (pct < 50) return 'Intermédiaire';
  if (pct < 75) return 'Avancé';
  return 'Expert 🏆';
}

// ========================================================
//  HOME SCREEN
// ========================================================
function renderHome() {
  // Stats globales
  const t = state.globalStats.total;
  const c = state.globalStats.correct;
  const pct = t > 0 ? Math.round(c/t*100) : 0;
  document.getElementById('statTotal').textContent = t;
  document.getElementById('statCorrect').textContent = c;
  document.getElementById('statPercent').textContent = t > 0 ? pct+'%' : '—';

  // Séries complétées
  const doneCount = Object.values(state.history).filter(h => h.done).length;
  document.getElementById('statSeries').textContent = doneCount + '/8';

  // Progress bar
  document.getElementById('globalProgressFill').style.width = pct + '%';
  document.getElementById('globalLevelLabel').textContent = levelLabel(pct);
  document.getElementById('globalProgressPct').textContent = pct + '%';
  document.getElementById('headerLevel').textContent = levelLabel(pct);
  document.getElementById('globalProgressPct').textContent = pct + '%';

  // Series grid
  const grid = document.getElementById('seriesGrid');
  grid.innerHTML = '';
  SERIES.forEach(s => {
    const h = state.history[s.id] || {};
    const qCount = QUESTIONS.filter(q => q.series === s.id).length;
    let scoreHTML = `<span class="series-score none">Non commencée</span>`;
    if (h.done) {
      const pct2 = Math.round(h.score / h.total * 100);
      const cls = pct2 >= 80 ? 'good' : pct2 >= 50 ? 'avg' : 'bad';
      scoreHTML = `<span class="series-score ${cls}">Dernier score : ${h.score}/${h.total} (${pct2}%)</span>`;
    }
    const doneClass = h.done && (h.score/h.total >= 0.8) ? 'done' : '';
    grid.innerHTML += `
      <div class="series-card ${doneClass}" onclick="startSeries('${s.id}')">
        <div class="series-difficulty">${starsHTML(s.difficulty)}</div>
        <div class="series-icon">${s.icon}</div>
        <div class="series-name">${s.name}</div>
        <div class="series-meta">${qCount} questions · ${s.description}</div>
        ${scoreHTML}
      </div>`;
  });
}

// ========================================================
//  START SERIES
// ========================================================
function startSeries(seriesId) {
  const series = SERIES.find(s => s.id === seriesId);
  state.currentSeries = seriesId;
  state.currentQuestions = QUESTIONS.filter(q => q.series === seriesId)
    .sort(() => Math.random() - 0.5);
  state.currentIndex = 0;
  state.score = 0;
  state.wrongQuestions = [];
  state.isExamMode = false;
  document.getElementById('quizSeriesName').textContent = series.icon + ' ' + series.name;
  showScreen('quizScreen');
  renderQuestion();
}

function startExam() {
  state.currentSeries = '__exam__';
  state.currentQuestions = [...QUESTIONS].sort(() => Math.random()-0.5).slice(0, Math.min(40, QUESTIONS.length));
  state.currentIndex = 0;
  state.score = 0;
  state.wrongQuestions = [];
  state.isExamMode = true;
  document.getElementById('quizSeriesName').textContent = '📋 Examen blanc';
  showScreen('quizScreen');
  renderQuestion();
}

function startErrorReview() {
  if (state.errors.length === 0) {
    alert("Bravo ! Aucune erreur enregistrée pour le moment. Continue à réviser les séries !");
    return;
  }
  state.currentSeries = '__errors__';
  state.currentQuestions = state.errors.map(id => QUESTIONS.find(q => q.text === id)).filter(Boolean)
    .sort(() => Math.random()-0.5);
  if (state.currentQuestions.length === 0) {
    alert("Aucune question d'erreur retrouvée.");
    return;
  }
  state.currentIndex = 0;
  state.score = 0;
  state.wrongQuestions = [];
  state.isExamMode = false;
  document.getElementById('quizSeriesName').textContent = '🔁 Révision des erreurs';
  showScreen('quizScreen');
  renderQuestion();
}

// ========================================================
//  RENDER QUESTION
// ========================================================
function renderQuestion() {
  const q = state.currentQuestions[state.currentIndex];
  const total = state.currentQuestions.length;
  const idx = state.currentIndex;

  // Progress
  document.getElementById('quizQuestionCount').textContent = `Question ${idx+1} / ${total}`;
  document.getElementById('quizProgressFill').style.width = ((idx/total)*100) + '%';

  // Difficulty
  document.getElementById('questionDifficulty').innerHTML = starsHTML(q.difficulty) +
    (q.tags && q.tags.length ? q.tags.map(t => `<span class="tag tag-${t}">${t === '2026' ? '🆕 2026' : t}</span>`).join('') : '');

  // Schema
  const schemaEl = document.getElementById('questionSchema');
  if (q.schema) {
    schemaEl.style.display = 'flex';
    schemaEl.innerHTML = q.schema;
  } else {
    schemaEl.style.display = 'none';
    schemaEl.innerHTML = '';
  }

  // Multi hint
  const multiHint = document.getElementById('questionMultiHint');
  if (q.multi) {
    multiHint.innerHTML = '<span class="question-multi-hint">⚠️ Plusieurs bonnes réponses possibles</span>';
  } else {
    multiHint.innerHTML = '';
  }

  // Question text
  document.getElementById('questionText').textContent = q.text;

  // Answers
  const container = document.getElementById('answersContainer');
  container.innerHTML = '';
  state.selectedAnswers = [];
  state.answered = false;
  const letters = ['A', 'B', 'C', 'D', 'E'];
  q.answers.forEach((a, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.innerHTML = `<span class="answer-letter">${letters[i]}</span>${a}`;
    btn.onclick = () => toggleAnswer(i, q.multi || false);
    container.appendChild(btn);
  });

  // Reset feedback
  const fb = document.getElementById('feedbackCard');
  fb.style.display = 'none';
  fb.className = 'feedback-card';

  // Validate btn
  const btnV = document.getElementById('btnValidate');
  btnV.style.display = 'block';
  btnV.disabled = true;
  btnV.textContent = 'Valider';

  const btnN = document.getElementById('btnNext');
  btnN.style.display = 'none';

  // Timer
  clearTimer();
  if (state.isExamMode) {
    startTimer();
  } else {
    document.getElementById('timerBadge').textContent = '—';
    document.getElementById('timerBadge').className = 'timer-badge';
  }
}

// ========================================================
//  TOGGLE ANSWER
// ========================================================
function toggleAnswer(idx, multi) {
  if (state.answered) return;
  const btns = document.querySelectorAll('.answer-btn');

  if (!multi) {
    state.selectedAnswers = [idx];
    btns.forEach((b, i) => {
      b.classList.toggle('selected', i === idx);
    });
  } else {
    const pos = state.selectedAnswers.indexOf(idx);
    if (pos >= 0) {
      state.selectedAnswers.splice(pos, 1);
      btns[idx].classList.remove('selected');
    } else {
      state.selectedAnswers.push(idx);
      btns[idx].classList.add('selected');
    }
  }

  document.getElementById('btnValidate').disabled = state.selectedAnswers.length === 0;
}

// ========================================================
//  VALIDATE
// ========================================================
function validateAnswer() {
  if (state.answered) return;
  state.answered = true;
  clearTimer();

  const q = state.currentQuestions[state.currentIndex];
  const btns = document.querySelectorAll('.answer-btn');

  // Check correct
  const correctSet = new Set(q.correct);
  const selectedSet = new Set(state.selectedAnswers);
  const isCorrect = state.selectedAnswers.length === q.correct.length &&
    state.selectedAnswers.every(a => correctSet.has(a));

  // Disable all
  btns.forEach(b => b.disabled = true);

  // Show results on buttons
  btns.forEach((b, i) => {
    b.querySelector('.answer-letter'); // just ref
    if (correctSet.has(i)) {
      b.classList.add('correct');
      b.innerHTML += '<span class="answer-icon">✅</span>';
    } else if (selectedSet.has(i) && !correctSet.has(i)) {
      b.classList.add('wrong');
      b.classList.remove('selected');
      b.innerHTML += '<span class="answer-icon">❌</span>';
    }
  });

  // Feedback
  const fb = document.getElementById('feedbackCard');
  const fbH = document.getElementById('feedbackHeader');
  const fbT = document.getElementById('feedbackText');
  fb.style.display = 'block';

  if (isCorrect) {
    state.score++;
    state.globalStats.correct++;
    fb.className = 'feedback-card correct';
    fbH.className = 'feedback-header correct';
    fbH.innerHTML = '✅ Bonne réponse !';
    // Remove from errors if present
    state.errors = state.errors.filter(e => e !== q.text);
  } else {
    state.wrongQuestions.push(q);
    // Add to errors
    if (!state.errors.includes(q.text)) state.errors.push(q.text);
    fb.className = 'feedback-card wrong';
    fbH.className = 'feedback-header wrong';
    fbH.innerHTML = '❌ Mauvaise réponse';
  }

  state.globalStats.total++;
  fbT.textContent = q.explanation;

  // Show next
  const btnN = document.getElementById('btnNext');
  const btnV = document.getElementById('btnValidate');
  btnV.style.display = 'none';

  const isLast = state.currentIndex === state.currentQuestions.length - 1;
  btnN.style.display = 'block';
  btnN.textContent = isLast ? 'Voir les résultats 🎉' : 'Question suivante →';

  saveState();
}

// ========================================================
//  NEXT QUESTION
// ========================================================
function nextQuestion() {
  state.currentIndex++;
  if (state.currentIndex >= state.currentQuestions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

// ========================================================
//  TIMER
// ========================================================
function startTimer() {
  state.timeLeft = 40;
  updateTimerUI();
  state.timer = setInterval(() => {
    state.timeLeft--;
    updateTimerUI();
    if (state.timeLeft <= 0) {
      clearTimer();
      // Auto-validate with no answer
      if (!state.answered) {
        state.selectedAnswers = [];
        validateAnswer();
      }
    }
  }, 1000);
}

function clearTimer() {
  if (state.timer) { clearInterval(state.timer); state.timer = null; }
}

function updateTimerUI() {
  const badge = document.getElementById('timerBadge');
  badge.textContent = state.timeLeft + 's';
  badge.className = 'timer-badge' +
    (state.timeLeft <= 10 ? ' danger' : state.timeLeft <= 20 ? ' warning' : '');
}

// ========================================================
//  RESULTS
// ========================================================
function showResults() {
  const total = state.currentQuestions.length;
  const score = state.score;
  const pct = Math.round(score/total*100);

  // Save to history
  if (state.currentSeries !== '__exam__' && state.currentSeries !== '__errors__') {
    state.history[state.currentSeries] = { done: true, score, total };
    saveState();
  }

  const hero = document.getElementById('resultsHero');
  const emoji = document.getElementById('resultsEmoji');
  const scoreEl = document.getElementById('resultsScore');
  const labelEl = document.getElementById('resultsLabel');

  if (pct >= 90) { hero.className='results-hero excellent'; emoji.textContent='🏆'; labelEl.textContent='Excellent ! Tu maîtrises ce thème.'; }
  else if (pct >= 70) { hero.className='results-hero good'; emoji.textContent='👍'; labelEl.textContent='Très bien ! Quelques points à revoir.'; }
  else if (pct >= 50) { hero.className='results-hero average'; emoji.textContent='😐'; labelEl.textContent='Moyen. Continue à réviser.'; }
  else { hero.className='results-hero poor'; emoji.textContent='😬'; labelEl.textContent='À retravailler — ne te décourage pas !'; }

  scoreEl.textContent = score + '/' + total;

  // Breakdown
  const bd = document.getElementById('resultsBreakdown');
  let html = `<div style="font-weight:700;font-size:.9rem;margin-bottom:12px;color:var(--dark)">Détail des réponses</div>`;
  state.currentQuestions.forEach((q, i) => {
    const wrong = state.wrongQuestions.includes(q);
    html += `<div class="breakdown-item">
      <div class="breakdown-dot ${wrong?'wrong':'correct'}"></div>
      <div class="breakdown-text">${i+1}. ${q.text.substring(0,70)}${q.text.length>70?'…':''}</div>
      <div class="breakdown-badge ${wrong?'wrong':'correct'}">${wrong?'✗ Faux':'✓ Juste'}</div>
    </div>`;
  });
  bd.innerHTML = html;

  // Retry button label
  const sName = SERIES.find(s => s.id === state.currentSeries);
  document.getElementById('btnRetry').textContent = state.currentSeries === '__exam__' ? '🔄 Nouvel examen blanc' :
    state.currentSeries === '__errors__' ? '🔁 Recommencer les erreurs' :
    `🔄 Recommencer ${sName ? sName.name : 'cette série'}`;

  showScreen('resultsScreen');
}

function retryQuiz() {
  if (state.currentSeries === '__exam__') startExam();
  else if (state.currentSeries === '__errors__') startErrorReview();
  else startSeries(state.currentSeries);
}

function goHome() {
  clearTimer();
  renderHome();
  showScreen('homeScreen');
}

// ========================================================
//  INIT
// ========================================================
renderHome();