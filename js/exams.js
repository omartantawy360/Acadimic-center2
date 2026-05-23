const examData = {
  math: {
    title: 'امتحان الرياضيات', subtitle: 'الثالث الثانوي - التفاضل والتكامل',
    questions: [
      { q:'ما هو مشتق الدالة f(x) = x³ + 2x² - 5x + 3؟', options:['3x² + 4x - 5','3x² + 4x + 5','x³ + 4x - 5','3x + 4x - 5'], correct:0 },
      { q:'إذا كانت f(x) = sin(x)، فما هو f\'(x)؟', options:['cos(x)','-cos(x)','sin(x)','-sin(x)'], correct:0 },
      { q:'ما قيمة ∫(2x + 3)dx؟', options:['x² + 3x + C','2x² + 3x + C','x² + 3 + C','2x + 3 + C'], correct:0 },
      { q:'ما هو مشتق الدالة f(x) = e^x؟', options:['e^x','xe^(x-1)','e^(x-1)','x·e^x'], correct:0 },
      { q:'إذا كانت f(x) = ln(x)، فما هو f\'(x)؟', options:['1/x','ln(x)','x','1/ln(x)'], correct:0 },
      { q:'ما قيمة ∫₀¹ x² dx؟', options:['1/3','1/2','1','2/3'], correct:0 },
      { q:'ما هو مشتق الدالة f(x) = cos(2x)؟', options:['-2sin(2x)','2sin(2x)','-sin(2x)','sin(2x)'], correct:0 },
      { q:'إذا كانت f(x) = x⁴، فما هو f\'\'(x)؟', options:['12x²','4x³','x³','4x²'], correct:0 },
      { q:'ما هو مشتق الدالة f(x) = √x؟', options:['1/(2√x)','2√x','√x/2','1/√x'], correct:0 },
      { q:'ما قيمة النهاية: lim(x→0) sin(x)/x؟', options:['1','0','∞','غير موجودة'], correct:0 },
    ]
  },
  physics: {
    title: 'امتحان الفيزياء', subtitle: 'الثالث الثانوي - الكهرباء والمغناطيسية',
    questions: [
      { q:'ما هي وحدة قياس الشحنة الكهربائية؟', options:['كولوم','أمبير','فولت','أوم'], correct:0 },
      { q:'ما هو قانون أوم؟', options:['V = IR','V = I/R','V = I²R','V = R/I'], correct:0 },
      { q:'ما هي وحدة قياس المقاومة الكهربائية؟', options:['أوم','فولت','أمبير','واط'], correct:0 },
      { q:'ما هو تعريف الشدة الكهربائية؟', options:['كمية الشحنة المارة في الثانية','الجهد الكهربائي','المقاومة الكهربائية','القدرة الكهربائية'], correct:0 },
      { q:'ما هي وحدة قياس القدرة الكهربائية؟', options:['واط','جول','نيوتن','أمبير'], correct:0 },
      { q:'في الدائرة التسلسلية، المقاومة الكلية تساوي؟', options:['مجموع المقاومات','حاصل ضرب المقاومات','أصغر مقاومة','أكبر مقاومة'], correct:0 },
      { q:'ما هو قانون كولوم؟', options:['F = kq₁q₂/r²','F = kq₁q₂/r','F = kq/r²','F = q₁q₂/r²'], correct:0 },
      { q:'ما هي وحدة قياس الجهد الكهربائي؟', options:['فولت','أمبير','أوم','واط'], correct:0 },
      { q:'ما هو تعريف الجهد الكهربائي؟', options:['الشغل المبذول لنقل وحدة الشحنة','كمية الشحنة','المقاومة','التيار'], correct:0 },
      { q:'في الدائرة المتوازية، الجهد على كل مقاومة؟', options:['متساوٍ','مختلف','صفر','لا نهائي'], correct:0 },
    ]
  },
  chemistry: {
    title: 'امتحان الكيمياء', subtitle: 'الثالث الثانوي - الكيمياء العضوية',
    questions: [
      { q:'ما هو الصيغة الجزيئية للميثان؟', options:['CH₄','C₂H₆','C₃H₈','CH₂'], correct:0 },
      { q:'ما هو اسم المركب CH₃OH؟', options:['ميثانول','إيثانول','بروبانول','بيوتانول'], correct:0 },
      { q:'ما هو نوع الرابطة في جزيء الإيثيلين؟', options:['رابطة مزدوجة','رابطة أحادية','رابطة ثلاثية','رابطة أيونية'], correct:0 },
      { q:'ما هو الصيغة العامة للألكانات؟', options:['CₙH₂ₙ₊₂','CₙH₂ₙ','CₙH₂ₙ₋₂','CₙHₙ'], correct:0 },
      { q:'ما هو اسم المجموعة الوظيفية -COOH؟', options:['مجموعة كربوكسيل','مجموعة هيدروكسيل','مجموعة أمينو','مجموعة كيتون'], correct:0 },
      { q:'ما هو ناتج تفاعل الإيثانول مع حمض الأسيتيك؟', options:['إيثيل أسيتات','إيثيل كلوريد','إيثيلين','أسيتالديهيد'], correct:0 },
      { q:'ما هو عدد ذرات الكربون في البنزين؟', options:['6','4','8','12'], correct:0 },
      { q:'ما هو نوع تفاعل الألكانات مع الهالوجينات؟', options:['إحلال','إضافة','حذف','تكثيف'], correct:0 },
      { q:'ما هو الصيغة الجزيئية للإيثانول؟', options:['C₂H₅OH','CH₃OH','C₃H₇OH','C₄H₉OH'], correct:0 },
      { q:'ما هو اسم المركب CH₃CHO؟', options:['أسيتالديهيد','أسيتون','حمض الأسيتيك','ميثانال'], correct:0 },
    ]
  }
};

let currentExam = null;
let currentQ = 0;
let answers = [];
let timerInterval = null;
let timeLeft = 1200; // 20 min

function startExam(subject) {
  currentExam = examData[subject];
  currentQ = 0;
  answers = new Array(currentExam.questions.length).fill(null);
  timeLeft = 1200;
  document.getElementById('exam-selection').classList.add('hidden');
  document.getElementById('exam-ui').classList.remove('hidden');
  document.getElementById('exam-title').textContent = currentExam.title;
  document.getElementById('exam-subtitle').textContent = currentExam.subtitle;
  renderQuestion();
  renderQNav();
  startTimer();
}
window.startExam = startExam;

function renderQuestion() {
  const q = currentExam.questions[currentQ];
  const total = currentExam.questions.length;
  document.getElementById('q-num').textContent = currentQ + 1;
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('q-progress').textContent = `السؤال ${currentQ + 1} من ${total}`;
  const pct = Math.round(((currentQ + 1) / total) * 100);
  document.getElementById('exam-progress-fill').style.width = pct + '%';
  document.getElementById('q-pct').textContent = pct + '%';
  document.getElementById('btn-prev').disabled = currentQ === 0;
  document.getElementById('btn-next').textContent = currentQ === total - 1 ? 'إنهاء الامتحان' : 'التالي ';
  document.getElementById('btn-next').innerHTML = currentQ === total - 1 ? 'إنهاء الامتحان <i class="fas fa-flag mr-2"></i>' : 'التالي <i class="fas fa-chevron-left mr-2"></i>';

  const optionsEl = document.getElementById('q-options');
  const letters = ['أ','ب','ج','د'];
  optionsEl.innerHTML = q.options.map((opt, i) => `
    <div class="exam-option ${answers[currentQ] === i ? 'selected' : ''}" onclick="selectAnswer(${i})">
      <div class="w-7 h-7 rounded-lg border-2 ${answers[currentQ] === i ? 'border-purple-500 bg-purple-500 text-white' : 'border-gray-300 dark:border-gray-600 text-gray-500'} flex items-center justify-center text-xs font-black flex-shrink-0">${letters[i]}</div>
      <span>${opt}</span>
    </div>
  `).join('');
}

function renderQNav() {
  const nav = document.getElementById('q-nav');
  nav.innerHTML = currentExam.questions.map((_, i) => `
    <button onclick="goToQuestion(${i})" class="w-9 h-9 rounded-xl text-xs font-bold transition-all ${i === currentQ ? 'bg-purple-600 text-white' : answers[i] !== null ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'}">${i + 1}</button>
  `).join('');
}

function selectAnswer(idx) {
  answers[currentQ] = idx;
  renderQuestion();
  renderQNav();
}
window.selectAnswer = selectAnswer;

function goToQuestion(idx) {
  currentQ = idx;
  renderQuestion();
  renderQNav();
}
window.goToQuestion = goToQuestion;

function nextQuestion() {
  if (currentQ === currentExam.questions.length - 1) {
    submitExam();
  } else {
    currentQ++;
    renderQuestion();
    renderQNav();
  }
}
window.nextQuestion = nextQuestion;

function prevQuestion() {
  if (currentQ > 0) { currentQ--; renderQuestion(); renderQNav(); }
}
window.prevQuestion = prevQuestion;

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    document.getElementById('timer').textContent = `${m}:${s}`;
    if (timeLeft <= 60) document.getElementById('timer').classList.add('text-red-600');
    if (timeLeft <= 0) { clearInterval(timerInterval); submitExam(); }
  }, 1000);
}

function submitExam() {
  clearInterval(timerInterval);
  const total = currentExam.questions.length;
  const correct = answers.filter((a, i) => a === currentExam.questions[i].correct).length;
  const score = Math.round((correct / total) * 100);
  const modal = document.getElementById('result-modal');
  const icon = document.getElementById('result-icon');
  const title = document.getElementById('result-title');
  const desc = document.getElementById('result-desc');
  const scoreEl = document.getElementById('result-score');
  const detail = document.getElementById('result-detail');

  if (score >= 85) {
    icon.className = 'w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl bg-green-100 dark:bg-green-900/30 text-green-600';
    icon.innerHTML = '<i class="fas fa-trophy"></i>';
    title.textContent = 'ممتاز! أحسنت';
    desc.textContent = 'نتيجة رائعة! استمر في هذا المستوى';
  } else if (score >= 60) {
    icon.className = 'w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600';
    icon.innerHTML = '<i class="fas fa-star"></i>';
    title.textContent = 'جيد! يمكنك التحسين';
    desc.textContent = 'راجع الأسئلة التي أخطأت فيها';
  } else {
    icon.className = 'w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl bg-red-100 dark:bg-red-900/30 text-red-600';
    icon.innerHTML = '<i class="fas fa-book-open"></i>';
    title.textContent = 'تحتاج مزيداً من المراجعة';
    desc.textContent = 'لا تيأس! راجع المادة وحاول مرة أخرى';
  }
  scoreEl.textContent = score + '%';
  scoreEl.className = `text-5xl font-black mb-2 ${score >= 85 ? 'text-green-600' : score >= 60 ? 'text-yellow-600' : 'text-red-600'}`;
  detail.textContent = `أجبت على ${correct} من ${total} أسئلة بشكل صحيح`;
  openModal('result-modal');
}

function restartExam() {
  closeModal('result-modal');
  const subject = Object.keys(examData).find(k => examData[k] === currentExam);
  startExam(subject);
}
window.restartExam = restartExam;
