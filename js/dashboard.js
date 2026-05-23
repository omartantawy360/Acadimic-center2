// ===== SECTION NAVIGATION =====
function showSection(name) {
  document.querySelectorAll('[id^="section-"]').forEach(s => s.classList.add('hidden'));
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  const section = document.getElementById('section-' + name);
  if (section) section.classList.remove('hidden');
  const navBtn = document.getElementById('nav-' + name);
  if (navBtn) navBtn.classList.add('active');
  const titles = { overview:'نظرة عامة', lessons:'حصصي القادمة', homework:'الواجبات', exams:'نتائج الامتحانات', attendance:'الحضور والغياب', materials:'المواد التعليمية', notifications:'الإشعارات', calendar:'التقويم', profile:'إعدادات الحساب' };
  const titleEl = document.getElementById('page-title');
  if (titleEl) titleEl.textContent = titles[name] || name;
  // Close sidebar on mobile
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebar-overlay')?.classList.add('hidden');
  // Init section-specific content
  if (name === 'exams') initExamChart();
  if (name === 'attendance') renderAttendance();
  if (name === 'materials') renderMaterials();
  if (name === 'notifications') renderNotifications();
  if (name === 'calendar') renderCalendar();
  if (name === 'lessons') renderLessons();
  if (name === 'homework') renderHomework();
}
window.showSection = showSection;

// Override toggleSidebar for dashboard
window.toggleSidebar = function() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  sidebar?.classList.toggle('open');
  overlay?.classList.toggle('hidden');
};

// ===== PROGRESS CHART =====
document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('progressChart');
  if (!ctx) return;
  const isDark = document.documentElement.classList.contains('dark');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['يناير','فبراير','مارس','أبريل','مايو','يونيو'],
      datasets: [
        { label:'الرياضيات', data:[70,75,72,80,85,88], borderColor:'#7c3aed', backgroundColor:'rgba(124,58,237,0.05)', borderWidth:2, tension:0.4, fill:true, pointRadius:3 },
        { label:'الفيزياء', data:[65,68,70,72,75,80], borderColor:'#3b82f6', backgroundColor:'rgba(59,130,246,0.05)', borderWidth:2, tension:0.4, fill:true, pointRadius:3 },
        { label:'الكيمياء', data:[75,80,82,85,88,92], borderColor:'#10b981', backgroundColor:'rgba(16,185,129,0.05)', borderWidth:2, tension:0.4, fill:true, pointRadius:3 },
      ]
    },
    options: {
      responsive:true,
      plugins:{ legend:{ position:'bottom', labels:{ font:{ family:'Cairo', size:11 }, color: isDark?'#9ca3af':'#6b7280', boxWidth:12 } } },
      scales:{
        x:{ grid:{ display:false }, ticks:{ font:{ family:'Cairo', size:11 }, color: isDark?'#9ca3af':'#6b7280' } },
        y:{ grid:{ color: isDark?'rgba(255,255,255,0.05)':'rgba(0,0,0,0.05)' }, ticks:{ font:{ family:'Cairo', size:11 }, color: isDark?'#9ca3af':'#6b7280' } }
      }
    }
  });
});

// ===== EXAM CHART =====
function initExamChart() {
  const ctx = document.getElementById('examChart');
  if (!ctx || ctx.dataset.initialized) return;
  ctx.dataset.initialized = 'true';
  const isDark = document.documentElement.classList.contains('dark');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['الرياضيات','الفيزياء','الكيمياء','الأحياء','العربي'],
      datasets: [{ label:'الدرجة', data:[95,88,92,78,85], backgroundColor:['rgba(124,58,237,0.8)','rgba(59,130,246,0.8)','rgba(16,185,129,0.8)','rgba(245,158,11,0.8)','rgba(239,68,68,0.8)'], borderRadius:8 }]
    },
    options: {
      responsive:true,
      plugins:{ legend:{ display:false } },
      scales:{
        x:{ grid:{ display:false }, ticks:{ font:{ family:'Cairo', size:11 }, color: isDark?'#9ca3af':'#6b7280' } },
        y:{ max:100, grid:{ color: isDark?'rgba(255,255,255,0.05)':'rgba(0,0,0,0.05)' }, ticks:{ font:{ family:'Cairo', size:11 }, color: isDark?'#9ca3af':'#6b7280' } }
      }
    }
  });
}

// ===== ATTENDANCE =====
function renderAttendance() {
  const tbody = document.getElementById('attendance-table');
  if (!tbody || tbody.innerHTML) return;
  const data = [
    { date:'22 مايو 2025', subject:'الرياضيات', teacher:'أ. محمد السيد', status:'حاضر', badge:'badge-green' },
    { date:'21 مايو 2025', subject:'الفيزياء', teacher:'أ. سارة أحمد', status:'حاضر', badge:'badge-green' },
    { date:'20 مايو 2025', subject:'الكيمياء', teacher:'أ. خالد عمر', status:'غائب', badge:'badge-red' },
    { date:'19 مايو 2025', subject:'الأحياء', teacher:'أ. منى حسن', status:'متأخر', badge:'badge-yellow' },
    { date:'18 مايو 2025', subject:'الرياضيات', teacher:'أ. محمد السيد', status:'حاضر', badge:'badge-green' },
    { date:'17 مايو 2025', subject:'اللغة العربية', teacher:'أ. هدى إبراهيم', status:'حاضر', badge:'badge-green' },
  ];
  tbody.innerHTML = data.map(r => `<tr><td>${r.date}</td><td class="font-medium">${r.subject}</td><td>${r.teacher}</td><td><span class="badge ${r.badge}">${r.status}</span></td></tr>`).join('');
}

// ===== MATERIALS =====
function renderMaterials() {
  const grid = document.getElementById('materials-grid');
  if (!grid || grid.innerHTML) return;
  const files = [
    { name:'ملزمة الرياضيات - الفصل الأول', type:'pdf', size:'2.4 MB', subject:'الرياضيات', color:'text-red-500', icon:'fa-file-pdf' },
    { name:'فيديو شرح التفاضل', type:'video', size:'145 MB', subject:'الرياضيات', color:'text-blue-500', icon:'fa-file-video' },
    { name:'ملزمة الفيزياء - الكهرباء', type:'pdf', size:'1.8 MB', subject:'الفيزياء', color:'text-red-500', icon:'fa-file-pdf' },
    { name:'أوراق عمل الكيمياء', type:'pdf', size:'0.9 MB', subject:'الكيمياء', color:'text-red-500', icon:'fa-file-pdf' },
    { name:'فيديو شرح الكيمياء العضوية', type:'video', size:'210 MB', subject:'الكيمياء', color:'text-blue-500', icon:'fa-file-video' },
    { name:'ملزمة الأحياء الشاملة', type:'pdf', size:'3.1 MB', subject:'الأحياء', color:'text-red-500', icon:'fa-file-pdf' },
  ];
  grid.innerHTML = files.map(f => `
    <div class="file-card">
      <div class="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
        <i class="fas ${f.icon} ${f.color} text-xl"></i>
      </div>
      <div class="flex-1 min-w-0">
        <div class="font-bold text-sm text-gray-900 dark:text-white truncate">${f.name}</div>
        <div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">${f.subject} • ${f.size}</div>
      </div>
      <button onclick="showToast('جاري التحميل...','info')" class="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-200 transition-colors flex-shrink-0">
        <i class="fas fa-download text-sm"></i>
      </button>
    </div>
  `).join('');
}

// ===== NOTIFICATIONS =====
function renderNotifications() {
  const list = document.getElementById('notifications-list');
  if (!list || list.innerHTML) return;
  const notifs = [
    { icon:'fa-video', color:'bg-purple-100 dark:bg-purple-900/30 text-purple-600', title:'حصة جديدة مضافة', desc:'تم إضافة حصة رياضيات غداً الساعة 5م', time:'منذ 10 دقائق', unread:true },
    { icon:'fa-clipboard-check', color:'bg-green-100 dark:bg-green-900/30 text-green-600', title:'نتيجة امتحان', desc:'حصلت على 95/100 في امتحان الرياضيات', time:'منذ ساعة', unread:true },
    { icon:'fa-tasks', color:'bg-red-100 dark:bg-red-900/30 text-red-600', title:'تذكير بالواجب', desc:'موعد تسليم واجب التفاضل غداً', time:'منذ 3 ساعات', unread:true },
    { icon:'fa-download', color:'bg-blue-100 dark:bg-blue-900/30 text-blue-600', title:'ملزمة جديدة', desc:'تم رفع ملزمة الفيزياء الجديدة', time:'أمس', unread:false },
    { icon:'fa-bell', color:'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600', title:'تذكير بالحصة', desc:'حصة الكيمياء بعد ساعة', time:'أمس', unread:false },
  ];
  list.innerHTML = notifs.map(n => `
    <div class="notif-item ${n.unread ? 'unread' : ''}">
      <div class="w-10 h-10 rounded-xl ${n.color} flex items-center justify-center flex-shrink-0">
        <i class="fas ${n.icon} text-sm"></i>
      </div>
      <div class="flex-1">
        <div class="font-bold text-sm text-gray-900 dark:text-white">${n.title}</div>
        <div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">${n.desc}</div>
        <div class="text-xs text-gray-400 dark:text-gray-500 mt-1">${n.time}</div>
      </div>
      ${n.unread ? '<div class="notif-dot"></div>' : ''}
    </div>
  `).join('');
}

// ===== CALENDAR =====
let calYear = 2025, calMonth = 4; // May 2025
const eventDays = [5, 10, 15, 18, 22, 25];
const monthNames = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];

function renderCalendar() {
  const grid = document.getElementById('cal-grid');
  const title = document.getElementById('cal-title');
  if (!grid) return;
  title.textContent = `${monthNames[calMonth]} ${calYear}`;
  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const today = new Date();
  let html = '';
  for (let i = 0; i < firstDay; i++) html += '<div></div>';
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = d === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear();
    const hasEvent = eventDays.includes(d);
    html += `<div class="cal-day ${isToday ? 'today' : ''} ${hasEvent ? 'has-event' : ''}" onclick="showToast('${d} ${monthNames[calMonth]}','info')">${d}</div>`;
  }
  grid.innerHTML = html;
}

function changeMonth(dir) {
  calMonth += dir;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  if (calMonth < 0) { calMonth = 11; calYear--; }
  renderCalendar();
}
window.changeMonth = changeMonth;

// ===== LESSONS =====
function renderLessons() {
  const grid = document.getElementById('lessons-grid');
  if (!grid || grid.innerHTML) return;
  const lessons = [
    { subject:'الرياضيات', topic:'التفاضل والتكامل', teacher:'أ. محمد السيد', time:'اليوم 5:00 م', color:'from-purple-500 to-indigo-600', icon:'fa-square-root-alt', status:'قريباً' },
    { subject:'الفيزياء', topic:'الكهرباء والمغناطيسية', teacher:'أ. سارة أحمد', time:'غداً 4:00 م', color:'from-blue-500 to-cyan-600', icon:'fa-atom', status:'غداً' },
    { subject:'الكيمياء', topic:'الكيمياء العضوية', teacher:'أ. خالد عمر', time:'الخميس 6:00 م', color:'from-green-500 to-teal-600', icon:'fa-flask', status:'الخميس' },
    { subject:'الأحياء', topic:'الوراثة والتطور', teacher:'أ. منى حسن', time:'الجمعة 5:00 م', color:'from-yellow-500 to-orange-600', icon:'fa-dna', status:'الجمعة' },
    { subject:'اللغة العربية', topic:'النحو والصرف', teacher:'أ. هدى إبراهيم', time:'السبت 3:00 م', color:'from-red-500 to-rose-600', icon:'fa-language', status:'السبت' },
  ];
  grid.innerHTML = lessons.map(l => `
    <div class="widget-card">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${l.color} flex items-center justify-center text-white text-lg"><i class="fas ${l.icon}"></i></div>
        <div>
          <div class="font-bold text-sm text-gray-900 dark:text-white">${l.subject}</div>
          <div class="text-xs text-gray-500 dark:text-gray-400">${l.teacher}</div>
        </div>
        <span class="mr-auto badge badge-purple text-xs">${l.status}</span>
      </div>
      <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">${l.topic}</div>
      <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
        <i class="fas fa-clock text-purple-400"></i> ${l.time}
      </div>
      <button onclick="showToast('جاري الانضمام للحصة...','info')" class="btn-primary w-full text-xs py-2">انضم للحصة</button>
    </div>
  `).join('');
}

// ===== HOMEWORK =====
function renderHomework() {
  const list = document.getElementById('homework-list');
  if (!list || list.innerHTML) return;
  const hw = [
    { subject:'الرياضيات', title:'حل مسائل التفاضل - الفصل الثالث', due:'غداً', priority:'عاجل', color:'border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10', badge:'badge-red' },
    { subject:'الكيمياء', title:'ورقة عمل الكيمياء العضوية', due:'بعد 3 أيام', priority:'متوسط', color:'border-yellow-200 dark:border-yellow-900/30 bg-yellow-50 dark:bg-yellow-900/10', badge:'badge-yellow' },
    { subject:'الأحياء', title:'قراءة الفصل الثالث - الوراثة', due:'بعد أسبوع', priority:'عادي', color:'border-gray-200 dark:border-gray-700', badge:'badge-blue' },
    { subject:'الفيزياء', title:'حل تمارين الكهرباء', due:'بعد 5 أيام', priority:'متوسط', color:'border-blue-200 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-900/10', badge:'badge-blue' },
  ];
  list.innerHTML = hw.map(h => `
    <div class="widget-card border-2 ${h.color}">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow flex items-center justify-center flex-shrink-0">
          <i class="fas fa-tasks text-purple-500"></i>
        </div>
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs font-bold text-purple-600 dark:text-purple-400">${h.subject}</span>
            <span class="badge ${h.badge}">${h.priority}</span>
          </div>
          <h4 class="font-bold text-gray-900 dark:text-white mb-1">${h.title}</h4>
          <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <i class="fas fa-clock"></i> موعد التسليم: ${h.due}
          </div>
        </div>
        <button onclick="showToast('تم تسليم الواجب بنجاح!','success');this.closest('.widget-card').style.opacity='0.5'" class="btn-primary text-xs px-4 py-2 flex-shrink-0">سلّم</button>
      </div>
    </div>
  `).join('');
}
