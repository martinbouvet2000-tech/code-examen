
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
  timeLeft: 20,
  isExamMode: false,
  history: JSON.parse(localStorage.getItem('crh') || '{}'),
  errors: JSON.parse(localStorage.getItem('cre') || '[]'),
  globalStats: JSON.parse(localStorage.getItem('crg') || '{"total":0,"correct":0}'),
  dailyStats: JSON.parse(localStorage.getItem('crd') || '{}'),
  srData: JSON.parse(localStorage.getItem('crsr') || '{}'),
};

function saveState() {
  localStorage.setItem('crh', JSON.stringify(state.history));
  localStorage.setItem('cre', JSON.stringify(state.errors));
  localStorage.setItem('crg', JSON.stringify(state.globalStats));
  localStorage.setItem('crd', JSON.stringify(state.dailyStats));
  localStorage.setItem('crsr', JSON.stringify(state.srData));
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

// ========================================================
//  DARK MODE
// ========================================================
function initTheme() {
  const saved = localStorage.getItem('cr-theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('themeToggle').textContent = '☀️';
  }
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    document.getElementById('themeToggle').textContent = '🌙';
    localStorage.setItem('cr-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('themeToggle').textContent = '☀️';
    localStorage.setItem('cr-theme', 'dark');
  }
}

// ========================================================
//  SPACED REPETITION
// ========================================================
function getQuestionWeight(q) {
  const sr = state.srData[q.text];
  if (!sr) return 1;
  if (sr.streak >= 3) return 0.3;
  if (sr.streak >= 1) return 0.6;
  if (sr.wrong > sr.right) return 3;
  if (sr.wrong > 0) return 2;
  return 1;
}

function updateSR(q, isCorrect) {
  if (!state.srData[q.text]) {
    state.srData[q.text] = { right: 0, wrong: 0, streak: 0, lastSeen: todayKey() };
  }
  const sr = state.srData[q.text];
  sr.lastSeen = todayKey();
  if (isCorrect) {
    sr.right++;
    sr.streak++;
  } else {
    sr.wrong++;
    sr.streak = 0;
  }
}

function weightedShuffle(questions) {
  return questions
    .map(q => ({ q, w: getQuestionWeight(q) * (0.5 + Math.random()) }))
    .sort((a, b) => b.w - a.w)
    .map(x => x.q);
}

// ========================================================
//  DAILY STATS
// ========================================================
function recordDaily(isCorrect) {
  const key = todayKey();
  if (!state.dailyStats[key]) {
    state.dailyStats[key] = { total: 0, correct: 0 };
  }
  state.dailyStats[key].total++;
  if (isCorrect) state.dailyStats[key].correct++;
}

function renderStats() {
  const card = document.getElementById('statsCard');
  const chart = document.getElementById('statsChart');
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().slice(0, 10));
  }

  const hasData = days.some(d => state.dailyStats[d]);
  if (!hasData) { card.style.display = 'none'; return; }
  card.style.display = 'block';

  const maxTotal = Math.max(...days.map(d => (state.dailyStats[d]?.total || 0)), 1);
  const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  let html = '';
  let weekTotal = 0, weekCorrect = 0, streak = 0;
  let streakActive = true;

  for (let i = days.length - 1; i >= 0; i--) {
    const d = days[i];
    const s = state.dailyStats[d];
    if (s && streakActive) { streak++; } else { streakActive = false; }
    if (s) { weekTotal += s.total; weekCorrect += s.correct; }
  }

  days.forEach(d => {
    const s = state.dailyStats[d];
    const total = s?.total || 0;
    const pct = s ? Math.round(s.correct / s.total * 100) : 0;
    const h = total > 0 ? Math.max(4, Math.round((total / maxTotal) * 80)) : 2;
    const date = new Date(d);
    const label = dayNames[date.getDay()];
    const color = total === 0 ? 'var(--grey2)' : (pct >= 80 ? 'var(--green)' : pct >= 50 ? 'var(--orange)' : 'var(--red)');
    html += `<div class="stats-bar-group" title="${d}: ${total}q, ${pct}%">
      <div class="stats-bar" style="height:${h}px;background:${color}"></div>
      <div class="stats-bar-label">${label}</div>
    </div>`;
  });

  chart.innerHTML = html;
  document.getElementById('statsWeekTotal').textContent = weekTotal;
  document.getElementById('statsWeekPct').textContent = weekTotal > 0 ? Math.round(weekCorrect / weekTotal * 100) + '%' : '—';
  document.getElementById('statsStreak').textContent = streak;
}

// ========================================================
//  UI HELPERS
// ========================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function starsHTML(n) {
  return '⭐'.repeat(n) + '☆'.repeat(3 - n);
}

function levelLabel(pct) {
  if (pct < 25) return 'Débutant';
  if (pct < 50) return 'Intermédiaire';
  if (pct < 75) return 'Avancé';
  return 'Expert';
}

// ========================================================
//  HOME SCREEN
// ========================================================
function renderHome() {
  const t = state.globalStats.total;
  const c = state.globalStats.correct;
  const pct = t > 0 ? Math.round(c / t * 100) : 0;
  document.getElementById('statTotal').textContent = t;
  document.getElementById('statCorrect').textContent = c;
  document.getElementById('statPercent').textContent = t > 0 ? pct + '%' : '—';

  const doneCount = Object.values(state.history).filter(h => h.done).length;
  document.getElementById('statSeries').textContent = doneCount + '/' + SERIES.length;

  document.getElementById('globalProgressFill').style.width = pct + '%';
  document.getElementById('globalLevelLabel').textContent = levelLabel(pct);
  document.getElementById('globalProgressPct').textContent = pct + '%';
  document.getElementById('headerLevel').textContent = levelLabel(pct);

  renderStats();
  renderPlanning();

  const grid = document.getElementById('seriesGrid');
  grid.innerHTML = '';
  SERIES.forEach(s => {
    const h = state.history[s.id] || {};
    const qCount = QUESTIONS.filter(q => q.series === s.id).length;
    const errCount = state.errors.filter(e => QUESTIONS.find(q => q.text === e && q.series === s.id)).length;
    let scoreHTML = `<span class="series-score none">Non commencée</span>`;
    if (h.done) {
      const pct2 = Math.round(h.score / h.total * 100);
      const cls = pct2 >= 80 ? 'good' : pct2 >= 50 ? 'avg' : 'bad';
      scoreHTML = `<span class="series-score ${cls}">Dernier : ${h.score}/${h.total} (${pct2}%)</span>`;
    }
    const errBadge = errCount > 0 ? `<span class="sr-badge hot">${errCount} erreur${errCount > 1 ? 's' : ''}</span>` : '';
    const doneClass = h.done && (h.score / h.total >= 0.8) ? 'done' : '';
    grid.innerHTML += `
      <div class="series-card ${doneClass}" onclick="startSeries('${s.id}')">
        <div class="series-difficulty">${starsHTML(s.difficulty)}</div>
        <div class="series-icon">${s.icon}</div>
        <div class="series-name">${s.name}${errBadge}</div>
        <div class="series-meta">${qCount} questions · ${s.description}</div>
        ${scoreHTML}
      </div>`;
  });
}

// ========================================================
//  START SERIES (with spaced repetition)
// ========================================================
function startSeries(seriesId) {
  const series = SERIES.find(s => s.id === seriesId);
  state.currentSeries = seriesId;
  state.currentQuestions = weightedShuffle(QUESTIONS.filter(q => q.series === seriesId));
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
  state.currentQuestions = weightedShuffle([...QUESTIONS]).slice(0, Math.min(40, QUESTIONS.length));
  state.currentIndex = 0;
  state.score = 0;
  state.wrongQuestions = [];
  state.isExamMode = true;
  document.getElementById('quizSeriesName').textContent = 'Examen blanc';
  showScreen('quizScreen');
  renderQuestion();
}

function startErrorReview() {
  if (state.errors.length === 0) {
    alert("Aucune erreur enregistrée. Continue a reviser les series !");
    return;
  }
  state.currentSeries = '__errors__';
  state.currentQuestions = state.errors.map(id => QUESTIONS.find(q => q.text === id)).filter(Boolean)
    .sort(() => Math.random() - 0.5);
  if (state.currentQuestions.length === 0) {
    alert("Aucune question d'erreur retrouvee.");
    return;
  }
  state.currentIndex = 0;
  state.score = 0;
  state.wrongQuestions = [];
  state.isExamMode = false;
  document.getElementById('quizSeriesName').textContent = 'Revision des erreurs';
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

  document.getElementById('quizQuestionCount').textContent = `Question ${idx + 1} / ${total}`;
  document.getElementById('quizProgressFill').style.width = ((idx / total) * 100) + '%';

  document.getElementById('questionDifficulty').innerHTML = starsHTML(q.difficulty) +
    (q.tags && q.tags.length ? q.tags.map(t => `<span class="tag tag-${t}">${t === '2026' ? '2026' : t}</span>`).join('') : '');

  const schemaEl = document.getElementById('questionSchema');
  if (q.schema) {
    schemaEl.style.display = 'flex';
    schemaEl.innerHTML = q.schema;
  } else {
    schemaEl.style.display = 'none';
    schemaEl.innerHTML = '';
  }

  const multiHint = document.getElementById('questionMultiHint');
  if (q.multi) {
    multiHint.innerHTML = '<span class="question-multi-hint">Plusieurs bonnes reponses possibles</span>';
  } else {
    multiHint.innerHTML = '';
  }

  document.getElementById('questionText').textContent = q.text;

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

  const fb = document.getElementById('feedbackCard');
  fb.style.display = 'none';
  fb.className = 'feedback-card';

  const btnV = document.getElementById('btnValidate');
  btnV.style.display = 'block';
  btnV.disabled = true;
  btnV.textContent = 'Valider';

  document.getElementById('btnNext').style.display = 'none';

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
    btns.forEach((b, i) => b.classList.toggle('selected', i === idx));
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

  const correctSet = new Set(q.correct);
  const selectedSet = new Set(state.selectedAnswers);
  const isCorrect = state.selectedAnswers.length === q.correct.length &&
    state.selectedAnswers.every(a => correctSet.has(a));

  btns.forEach(b => b.disabled = true);
  btns.forEach((b, i) => {
    if (correctSet.has(i)) {
      b.classList.add('correct');
      b.innerHTML += '<span class="answer-icon">✅</span>';
    } else if (selectedSet.has(i) && !correctSet.has(i)) {
      b.classList.add('wrong');
      b.classList.remove('selected');
      b.innerHTML += '<span class="answer-icon">❌</span>';
    }
  });

  const fb = document.getElementById('feedbackCard');
  const fbH = document.getElementById('feedbackHeader');
  const fbT = document.getElementById('feedbackText');
  fb.style.display = 'block';

  if (isCorrect) {
    state.score++;
    state.globalStats.correct++;
    fb.className = 'feedback-card correct';
    fbH.className = 'feedback-header correct';
    fbH.innerHTML = '✅ Bonne reponse !';
    state.errors = state.errors.filter(e => e !== q.text);
  } else {
    state.wrongQuestions.push(q);
    if (!state.errors.includes(q.text)) state.errors.push(q.text);
    fb.className = 'feedback-card wrong';
    fbH.className = 'feedback-header wrong';
    fbH.innerHTML = '❌ Mauvaise reponse';
  }

  state.globalStats.total++;
  updateSR(q, isCorrect);
  recordDaily(isCorrect);
  fbT.textContent = q.explanation;

  const btnN = document.getElementById('btnNext');
  const btnV = document.getElementById('btnValidate');
  btnV.style.display = 'none';

  const isLast = state.currentIndex === state.currentQuestions.length - 1;
  btnN.style.display = 'block';
  btnN.textContent = isLast ? 'Voir les resultats' : 'Question suivante →';

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
  state.timeLeft = 20;
  updateTimerUI();
  state.timer = setInterval(() => {
    state.timeLeft--;
    updateTimerUI();
    if (state.timeLeft <= 0) {
      clearTimer();
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
  const pct = Math.round(score / total * 100);

  if (state.currentSeries !== '__exam__' && state.currentSeries !== '__errors__') {
    state.history[state.currentSeries] = { done: true, score, total };
    saveState();
  }

  const hero = document.getElementById('resultsHero');
  const emoji = document.getElementById('resultsEmoji');
  const scoreEl = document.getElementById('resultsScore');
  const labelEl = document.getElementById('resultsLabel');

  const isExam = state.isExamMode;
  const examPass = isExam && score >= 35;
  const examFail = isExam && score < 35;

  if (isExam) {
    if (examPass) { hero.className = 'results-hero excellent'; emoji.textContent = '🎉'; labelEl.textContent = `REUSSI ! ${score}/40 — Tu es pret pour l'examen !`; }
    else { hero.className = 'results-hero poor'; emoji.textContent = '💪'; labelEl.textContent = `${score}/40 — Il faut 35/40 pour reussir. Continue !`; }
  } else {
    if (pct >= 90) { hero.className = 'results-hero excellent'; emoji.textContent = '🏆'; labelEl.textContent = 'Excellent ! Tu maitrises ce theme.'; }
    else if (pct >= 70) { hero.className = 'results-hero good'; emoji.textContent = '👍'; labelEl.textContent = 'Tres bien ! Quelques points a revoir.'; }
    else if (pct >= 50) { hero.className = 'results-hero average'; emoji.textContent = '😐'; labelEl.textContent = 'Moyen. Continue a reviser.'; }
    else { hero.className = 'results-hero poor'; emoji.textContent = '😬'; labelEl.textContent = 'A retravailler — ne te decourage pas !'; }
  }

  scoreEl.textContent = score + '/' + total;

  const bd = document.getElementById('resultsBreakdown');
  let examBanner = '';
  if (isExam) {
    examBanner = `<div style="text-align:center;padding:12px;margin-bottom:16px;border-radius:12px;font-weight:700;font-size:.95rem;background:${examPass ? 'var(--green)' : 'var(--red)'};color:white">
      ${examPass ? '✅ ADMIS — 35/40 minimum atteint' : `❌ AJOURNÉ — ${35 - score} faute${35 - score > 1 ? 's' : ''} de trop (seuil : 35/40)`}
    </div>`;
  }
  let html = examBanner + `<div style="font-weight:700;font-size:.9rem;margin-bottom:12px;color:var(--dark)">Detail des reponses</div>`;
  state.currentQuestions.forEach((q, i) => {
    const wrong = state.wrongQuestions.includes(q);
    html += `<div class="breakdown-item">
      <div class="breakdown-dot ${wrong ? 'wrong' : 'correct'}"></div>
      <div class="breakdown-text">${i + 1}. ${q.text.substring(0, 70)}${q.text.length > 70 ? '…' : ''}</div>
      <div class="breakdown-badge ${wrong ? 'wrong' : 'correct'}">${wrong ? '✗ Faux' : '✓ Juste'}</div>
    </div>`;
  });
  bd.innerHTML = html;

  const sName = SERIES.find(s => s.id === state.currentSeries);
  document.getElementById('btnRetry').textContent = state.currentSeries === '__exam__' ? 'Nouvel examen blanc' :
    state.currentSeries === '__errors__' ? 'Recommencer les erreurs' :
    `Recommencer ${sName ? sName.name : 'cette serie'}`;

  showScreen('resultsScreen');
}

function retryQuiz() {
  if (state.currentSeries === '__exam__') startExam();
  else if (state.currentSeries === '__errors__') startErrorReview();
  else startSeries(state.currentSeries);
}

function toggleMemo() {
  const el = document.getElementById('memoSection');
  if (el.style.display === 'none') {
    el.style.display = 'block';
    el.innerHTML = `<div class="memo-card">
      <h3>📝 Fiche mémo — Chiffres clés</h3>
      <div class="memo-grid">
        <div class="memo-section">
          <h4>🚗 Vitesses (km/h)</h4>
          <table class="memo-table"><tbody>
            <tr><th></th><th>Normal</th><th>Pluie</th></tr>
            <tr><td>Ville</td><td>50</td><td>50</td></tr>
            <tr><td>Route</td><td>80</td><td>80</td></tr>
            <tr><td>Voie express</td><td>110</td><td>90</td></tr>
            <tr><td>Autoroute</td><td>130</td><td>110</td></tr>
            <tr><td>Brouillard &lt;50m</td><td colspan="2">50 partout</td></tr>
            <tr><td>Jeune conducteur</td><td colspan="2">110→100, 130→110</td></tr>
          </tbody></table>
        </div>
        <div class="memo-section">
          <h4>🍺 Alcool & Stupéfiants</h4>
          <ul>
            <li><b>Taux max :</b> 0,5 g/L sang (0,25 mg/L air)</li>
            <li><b>Jeune conducteur :</b> 0,2 g/L sang</li>
            <li><b>0,5–0,8 g/L :</b> 135 € + 6 pts</li>
            <li><b>≥ 0,8 g/L :</b> délit — 4 500 € + 6 pts + 2 ans prison</li>
            <li><b>Stupéfiants :</b> délit — 4 500 € + 6 pts</li>
            <li><b>Refus dépistage :</b> mêmes peines que ≥ 0,8</li>
          </ul>
        </div>
        <div class="memo-section">
          <h4>📏 Distances</h4>
          <ul>
            <li><b>Sécurité :</b> 2 secondes minimum</li>
            <li><b>À 130 km/h :</b> ≈ 73 m (2 sec)</li>
            <li><b>À 50 km/h :</b> arrêt ≈ 28 m (sec)</li>
            <li><b>À 90 km/h :</b> arrêt ≈ 70 m (sec)</li>
            <li><b>À 130 km/h :</b> arrêt ≈ 130 m (sec)</li>
            <li><b>Route mouillée :</b> distance freinage × 2</li>
            <li><b>Triangle :</b> 30 m (route) / 100 m (autoroute)</li>
          </ul>
        </div>
        <div class="memo-section">
          <h4>💡 Éclairages</h4>
          <ul>
            <li><b>Croisement :</b> ≈ 30 m portée</li>
            <li><b>Route (pleins phares) :</b> ≈ 100 m</li>
            <li><b>Brouillard avant :</b> optionnel</li>
            <li><b>Brouillard arrière :</b> si visibilité &lt; 50 m SEULEMENT</li>
            <li><b>En agglomération :</b> croisement obligatoire la nuit</li>
            <li><b>Tunnel :</b> croisement obligatoire</li>
          </ul>
        </div>
        <div class="memo-section">
          <h4>🪪 Permis probatoire</h4>
          <ul>
            <li><b>Départ :</b> 6 points</li>
            <li><b>Gain :</b> +2 pts/an (classique) ou +3 pts/an (AAC)</li>
            <li><b>12 points :</b> après 3 ans (2 ans si AAC)</li>
            <li><b>Perte ≥ 3 pts :</b> stage obligatoire</li>
            <li><b>Solde = 0 :</b> permis invalidé</li>
          </ul>
        </div>
        <div class="memo-section">
          <h4>🆘 Premiers secours (PAS)</h4>
          <ul>
            <li><b>P</b>rotéger — sécuriser les lieux</li>
            <li><b>A</b>lerter — appeler le 15 (SAMU) ou 112</li>
            <li><b>S</b>ecourir — gestes adaptés</li>
            <li><b>PLS :</b> personne inconsciente qui respire</li>
            <li><b>Ne jamais :</b> retirer un casque, déplacer un blessé (sauf danger immédiat)</li>
          </ul>
        </div>
        <div class="memo-section">
          <h4>🅿️ Stationnement interdit</h4>
          <ul>
            <li>À &lt; 5 m d'une intersection</li>
            <li>À &lt; 5 m d'un passage piéton</li>
            <li>Sur trottoir, pont, tunnel</li>
            <li>À &lt; 5 m d'une bouche incendie</li>
            <li>Double file</li>
            <li>Sens inverse de circulation</li>
          </ul>
        </div>
        <div class="memo-section">
          <h4>🔧 Nouveautés 2026</h4>
          <ul>
            <li><b>ADAS obligatoires :</b> AEB, LDW, ISA, EDR</li>
            <li><b>Boîte noire (EDR) :</b> obligatoire véhicules neufs</li>
            <li><b>ZFE :</b> vignette Crit'Air obligatoire</li>
            <li><b>Angles morts :</b> autocollants camions &gt; 3,5t</li>
            <li><b>SAS vélo :</b> 135 € + 2 pts si voiture dedans</li>
            <li><b>Trottinettes :</b> 12 ans min, pas de trottoir</li>
          </ul>
        </div>
      </div>
    </div>`;
  } else {
    el.style.display = 'none';
  }
}

function goHome() {
  clearTimer();
  renderHome();
  showScreen('homeScreen');
}

// ========================================================
//  PLANNING INTERACTIF
// ========================================================
const PLANNING = {
  'lundi': [
    { id: 'l1', time: 'Matin', label: 'Tour complet — Signalisation', action: 'series', target: 'signalisation', duration: '~20 min' },
    { id: 'l2', time: 'Matin', label: 'Tour complet — Priorités', action: 'series', target: 'priorites', duration: '~20 min' },
    { id: 'l3', time: 'Matin', label: 'Tour complet — Vitesses', action: 'series', target: 'vitesses', duration: '~18 min' },
    { id: 'l4', time: 'Matin', label: 'Tour complet — Alcool & drogues', action: 'series', target: 'alcool', duration: '~18 min' },
    { id: 'l5', time: 'Matin', label: 'Tour complet — Premiers secours', action: 'series', target: 'secours', duration: '~18 min' },
    { id: 'l6', time: 'Après-midi', label: 'Tour complet — Éclairages', action: 'series', target: 'eclairages', duration: '~18 min' },
    { id: 'l7', time: 'Après-midi', label: 'Tour complet — Autoroute', action: 'series', target: 'autoroute', duration: '~18 min' },
    { id: 'l8', time: 'Après-midi', label: 'Tour complet — Usagers vulnérables', action: 'series', target: 'vulnerables', duration: '~18 min' },
    { id: 'l9', time: 'Après-midi', label: 'Tour complet — Stationnement', action: 'series', target: 'stationnement', duration: '~15 min' },
    { id: 'l10', time: 'Après-midi', label: 'Tour complet — Éco-conduite', action: 'series', target: 'ecoconduite', duration: '~15 min' },
    { id: 'l11', time: 'Après-midi', label: 'Réviser toutes les erreurs', action: 'errors', duration: '~20 min' },
    { id: 'l12', time: 'Soir', label: 'Examen blanc n°1', action: 'exam', duration: '~25 min' },
    { id: 'l13', time: 'Soir', label: 'Réviser les erreurs', action: 'errors', duration: '~15 min' },
    { id: 'l14', time: 'Soir', label: 'Examen blanc n°2', action: 'exam', duration: '~25 min' },
    { id: 'l15', time: 'Soir', label: 'Réviser les erreurs', action: 'errors', duration: '~15 min' },
    { id: 'l16', time: 'Soir', label: 'Examen blanc n°3 (objectif 35+)', action: 'exam', duration: '~25 min' },
  ],
  'mardi': [
    { id: 'm1', time: 'Matin', label: 'Relire la fiche mémo (chiffres clés)', action: 'none', duration: '~10 min' },
    { id: 'm2', time: 'Matin', label: 'Séries faibles — regarde tes scores', action: 'errors', duration: '~20 min' },
    { id: 'm3', time: 'Matin', label: 'Examen blanc final', action: 'exam', duration: '~25 min' },
    { id: 'm4', time: 'Matin', label: 'Relire les dernières erreurs', action: 'errors', duration: '~10 min' },
    { id: 'm5', time: '10h30', label: 'Dernier examen blanc (si le temps)', action: 'exam', duration: '~25 min' },
    { id: 'm6', time: '11h', label: 'STOP révisions — Prépare tes documents (convocation, pièce d\'identité)', action: 'none', duration: '' },
    { id: 'm7', time: '11h30', label: 'Déplace-toi vers le centre d\'examen', action: 'none', duration: '' },
    { id: 'm8', time: '12h15', label: '🎯 EXAMEN — Tu vas gérer, tu es prêt !', action: 'none', duration: '' },
  ]
};

function getPlanningDone() {
  return JSON.parse(localStorage.getItem('cr-planning') || '{}');
}

function setPlanningDone(id, done) {
  const d = getPlanningDone();
  if (done) d[id] = true; else delete d[id];
  localStorage.setItem('cr-planning', JSON.stringify(d));
}

function renderPlanning() {
  const container = document.getElementById('planningSection');
  if (!container) return;

  const now = new Date();
  const dayOfWeek = now.getDay();
  const dayOfMonth = now.getDate();

  let todayKey = null;
  let tomorrowKey = null;

  if (dayOfWeek === 1) {
    todayKey = 'lundi';
    tomorrowKey = 'mardi';
  } else if (dayOfWeek === 2) {
    todayKey = 'mardi';
    tomorrowKey = null;
  }

  if (!todayKey) {
    container.innerHTML = '';
    return;
  }

  const done = getPlanningDone();

  function renderDay(key, label, isToday) {
    const tasks = PLANNING[key];
    if (!tasks) return '';

    const completedCount = tasks.filter(t => done[t.id]).length;
    const pct = Math.round(completedCount / tasks.length * 100);

    let lastTime = '';
    let html = `<div class="planning-day ${isToday ? 'today' : 'tomorrow'}">
      <div class="planning-day-header">
        <div>
          <div class="planning-day-title">${isToday ? '📍 ' : ''}${label}</div>
          <div class="planning-day-progress">${completedCount}/${tasks.length} terminé${completedCount > 1 ? 's' : ''}</div>
        </div>
        <div class="planning-day-pct">${pct}%</div>
      </div>
      <div class="planning-progress-bar"><div class="planning-progress-fill" style="width:${pct}%"></div></div>`;

    tasks.forEach(t => {
      if (t.time !== lastTime) {
        html += `<div class="planning-time-label">${t.time}</div>`;
        lastTime = t.time;
      }

      const isDone = !!done[t.id];
      const isActionable = t.action !== 'none';

      html += `<div class="planning-task ${isDone ? 'done' : ''} ${!isActionable ? 'milestone' : ''}">
        <div class="planning-task-left">
          ${isActionable ? `<button class="planning-check ${isDone ? 'checked' : ''}" onclick="togglePlanningTask('${t.id}', event)">
            ${isDone ? '✓' : ''}
          </button>` : `<div class="planning-milestone-dot"></div>`}
          <div>
            <div class="planning-task-label">${t.label}</div>
            ${t.duration ? `<div class="planning-task-duration">${t.duration}</div>` : ''}
          </div>
        </div>
        ${isActionable && !isDone ? `<button class="planning-go" onclick="launchPlanningTask('${t.action}','${t.target || ''}','${t.id}')">Go →</button>` : ''}
        ${isDone && isActionable ? '<span class="planning-done-badge">Fait</span>' : ''}
      </div>`;
    });

    html += '</div>';
    return html;
  }

  let fullHtml = '<div class="section-title">🎯 Programme de révision</div>';
  fullHtml += renderDay(todayKey, todayKey === 'lundi' ? "Lundi — Journée intensive" : "Mardi — Jour J", true);
  if (tomorrowKey) {
    fullHtml += renderDay(tomorrowKey, "Mardi — Jour J", false);
  }

  const totalTasks = Object.values(PLANNING).flat().filter(t => t.action !== 'none').length;
  const totalDone = Object.values(PLANNING).flat().filter(t => done[t.id]).length;
  if (totalDone >= totalTasks) {
    fullHtml += `<div class="planning-complete">🏆 Programme terminé — Tu es prêt pour l'examen !</div>`;
  }

  container.innerHTML = fullHtml;
}

function togglePlanningTask(id, event) {
  event.stopPropagation();
  const done = getPlanningDone();
  setPlanningDone(id, !done[id]);
  renderPlanning();
}

function launchPlanningTask(action, target, taskId) {
  if (action === 'series') startSeries(target);
  else if (action === 'exam') startExam();
  else if (action === 'errors') startErrorReview();
}

// ========================================================
//  PWA SERVICE WORKER
// ========================================================
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

// ========================================================
//  INIT
// ========================================================
initTheme();
renderHome();
