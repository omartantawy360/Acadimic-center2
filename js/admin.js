function adminSection(name) {
  document.querySelectorAll('[id^="asection-"]').forEach(s => s.classList.add('hidden'));
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  document.getElementById('asection-' + name)?.classList.remove('hidden');
  document.getElementById('anav-' + name)?.classList.add('active');
  const titles = { overview:'نظرة عامة', students:'إدارة الطلاب', teachers:'إدارة المدرسين', courses:'إدارة الكورسات', revenue:'تحليل الإيرادات', attendance:'تتبع الحضور', notifications:'الإشعارات' };
  document.getElementById('admin-page-title').textContent = titles[name] || name;
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebar-overlay')?.classList.add('hidden');
  if (name === 'overview') initAdminCharts();
  if (name === 'students') renderStudentsTable();
  if (name === 'teachers') renderTeachersTable();
  if (name === 'courses') renderCoursesTable();
  if (name === 'revenue') initRevenueChart();
  if (name === 'attendance') initAttendanceChart();
  if (name === 'notifications') renderAdminNotifications();
}
window.adminSection = adminSection;

window.toggleSidebar = function() {
  document.getElementById('sidebar')?.classList.toggle('open');
  document.getElementById('sidebar-overlay')?.classList.toggle('hidden');
};

const studentsData = [
  { name:'أحمد محمد علي', phone:'01000000001', subjects:'رياضيات، فيزياء', grade:'الثالث الثانوي', attendance:'87%', status:'نشط' },
  { name:'نور أحمد سالم', phone:'01000000002', subjects:'كيمياء، أحياء', grade:'الثاني الثانوي', attendance:'92%', status:'نشط' },
  { name:'يوسف حسام', phone:'01000000003', subjects:'رياضيات', grade:'الأول الثانوي', attendance:'75%', status:'نشط' },
  { name:'مريم خالد', phone:'01000000004', subjects:'عربي، إنجليزي', grade:'الثالث الثانوي', attendance:'95%', status:'نشط' },
  { name:'عمر سعيد', phone:'01000000005', subjects:'فيزياء، كيمياء', grade:'الثاني الثانوي', attendance:'60%', status:'تحذير' },
  { name:'سلمى إبراهيم', phone:'01000000006', subjects:'رياضيات، أحياء', grade:'الأول الثانوي', attendance:'88%', status:'نشط' },
];

const teachersAdminData = [
  { name:'أ. محمد السيد', subject:'الرياضيات', students:1200, rating:'4.9', revenue:'45,000', status:'نشط' },
  { name:'أ. سارة أحمد', subject:'الفيزياء', students:980, rating:'4.8', revenue:'38,000', status:'نشط' },
  { name:'أ. خالد عمر', subject:'الكيمياء', students:750, rating:'4.7', revenue:'32,000', status:'نشط' },
  { name:'أ. منى حسن', subject:'الأحياء', students:860, rating:'4.9', revenue:'35,000', status:'نشط' },
  { name:'أ. هدى إبراهيم', subject:'اللغة العربية', students:1100, rating:'4.6', revenue:'40,000', status:'نشط' },
];

const coursesAdminData = [
  { name:'الرياضيات - التفاضل', teacher:'أ. محمد السيد', students:320, price:'350', grade:'الثالث الثانوي', status:'نشط' },
  { name:'الفيزياء - الكهرباء', teacher:'أ. سارة أحمد', students:280, price:'320', grade:'الثالث الثانوي', status:'نشط' },
  { name:'الكيمياء العضوية', teacher:'أ. خالد عمر', students:195, price:'300', grade:'الثالث الثانوي', status:'نشط' },
  { name:'الأحياء - الوراثة', teacher:'أ. منى حسن', students:240, price:'280', grade:'الثالث الثانوي', status:'نشط' },
  { name:'اللغة العربية', teacher:'أ. هدى إبراهيم', students:310, price:'250', grade:'الثاني الثانوي', status:'نشط' },
];

function renderStudentsTable() {
  const tbody = document.getElementById('students-table');
  if (!tbody || tbody.innerHTML) return;
  tbody.innerHTML = studentsData.map(s => `
    <tr>
      <td><div class="flex items-center gap-2"><div class="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">${s.name[0]}</div><span class="font-medium">${s.name}</span></div></td>
      <td class="text-gray-500 dark:text-gray-400">${s.phone}</td>
      <td class="text-sm">${s.subjects}</td>
      <td><span class="badge badge-blue">${s.grade}</span></td>
      <td class="font-bold ${parseInt(s.attendance) >= 80 ? 'text-green-600' : 'text-red-600'}">${s.attendance}</td>
      <td><span class="badge ${s.status === 'نشط' ? 'badge-green' : 'badge-yellow'}">${s.status}</span></td>
      <td><div class="flex gap-1"><button onclick="showToast('تم تعديل بيانات الطالب','info')" class="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center text-xs"><i class="fas fa-edit"></i></button><button onclick="showToast('تم حذف الطالب','error')" class="w-7 h-7 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center text-xs"><i class="fas fa-trash"></i></button></div></td>
    </tr>
  `).join('');
}

function renderTeachersTable() {
  const tbody = document.getElementById('teachers-table');
  if (!tbody || tbody.innerHTML) return;
  tbody.innerHTML = teachersAdminData.map(t => `
    <tr>
      <td><div class="flex items-center gap-2"><div class="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">${t.name[3]}</div><span class="font-medium">${t.name}</span></div></td>
      <td><span class="badge badge-purple">${t.subject}</span></td>
      <td class="font-bold">${t.students.toLocaleString('ar-EG')}</td>
      <td><div class="flex items-center gap-1 text-yellow-500 text-xs font-bold"><i class="fas fa-star"></i>${t.rating}</div></td>
      <td class="font-bold text-green-600">${t.revenue} ج</td>
      <td><span class="badge badge-green">${t.status}</span></td>
      <td><div class="flex gap-1"><button onclick="showToast('تم تعديل بيانات المدرس','info')" class="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center text-xs"><i class="fas fa-edit"></i></button></div></td>
    </tr>
  `).join('');
}

function renderCoursesTable() {
  const tbody = document.getElementById('courses-table');
  if (!tbody || tbody.innerHTML) return;
  tbody.innerHTML = coursesAdminData.map(c => `
    <tr>
      <td class="font-medium">${c.name}</td>
      <td>${c.teacher}</td>
      <td class="font-bold">${c.students}</td>
      <td class="font-bold text-green-600">${c.price} ج</td>
      <td><span class="badge badge-blue">${c.grade}</span></td>
      <td><span class="badge badge-green">${c.status}</span></td>
      <td><div class="flex gap-1"><button onclick="showToast('تم تعديل الكورس','info')" class="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center text-xs"><i class="fas fa-edit"></i></button><button onclick="showToast('تم حذف الكورس','error')" class="w-7 h-7 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center text-xs"><i class="fas fa-trash"></i></button></div></td>
    </tr>
  `).join('');
}

function initAdminCharts() {
  const isDark = document.documentElement.classList.contains('dark');
  const rc = document.getElementById('revenueChart');
  if (rc && !rc.dataset.init) {
    rc.dataset.init = '1';
    new Chart(rc, { type:'bar', data:{ labels:['يناير','فبراير','مارس','أبريل','مايو','يونيو'], datasets:[{ label:'الإيرادات', data:[180000,195000,210000,225000,248000,260000], backgroundColor:'rgba(124,58,237,0.8)', borderRadius:8 }] }, options:{ responsive:true, plugins:{ legend:{ display:false } }, scales:{ x:{ grid:{ display:false }, ticks:{ font:{ family:'Cairo', size:11 }, color: isDark?'#9ca3af':'#6b7280' } }, y:{ grid:{ color: isDark?'rgba(255,255,255,0.05)':'rgba(0,0,0,0.05)' }, ticks:{ font:{ family:'Cairo', size:11 }, color: isDark?'#9ca3af':'#6b7280' } } } } });
  }
  const sc = document.getElementById('subjectChart');
  if (sc && !sc.dataset.init) {
    sc.dataset.init = '1';
    new Chart(sc, { type:'doughnut', data:{ labels:['رياضيات','فيزياء','كيمياء','أحياء','عربي','إنجليزي'], datasets:[{ data:[30,20,18,15,10,7], backgroundColor:['#7c3aed','#3b82f6','#10b981','#f59e0b','#ef4444','#ec4899'], borderWidth:0 }] }, options:{ responsive:true, plugins:{ legend:{ position:'bottom', labels:{ font:{ family:'Cairo', size:10 }, color: isDark?'#9ca3af':'#6b7280', boxWidth:10 } } } } });
  }
  renderRecentStudents();
}

function renderRecentStudents() {
  const tbody = document.getElementById('recent-students');
  if (!tbody || tbody.innerHTML) return;
  tbody.innerHTML = studentsData.slice(0,4).map(s => `
    <tr>
      <td><div class="flex items-center gap-2"><div class="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">${s.name[0]}</div><span class="font-medium">${s.name}</span></div></td>
      <td class="text-sm">${s.subjects}</td>
      <td><span class="badge badge-blue">${s.grade}</span></td>
      <td class="text-gray-500 dark:text-gray-400 text-sm">22 مايو 2025</td>
      <td><span class="badge badge-green">نشط</span></td>
      <td><button onclick="showToast('تم عرض الملف','info')" class="text-xs text-purple-600 dark:text-purple-400 font-bold">عرض</button></td>
    </tr>
  `).join('');
}

function initRevenueChart() {
  const isDark = document.documentElement.classList.contains('dark');
  const ctx = document.getElementById('annualRevenueChart');
  if (!ctx || ctx.dataset.init) return;
  ctx.dataset.init = '1';
  new Chart(ctx, { type:'line', data:{ labels:['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'], datasets:[{ label:'الإيرادات', data:[150000,165000,180000,195000,210000,225000,240000,248000,260000,275000,290000,310000], borderColor:'#7c3aed', backgroundColor:'rgba(124,58,237,0.1)', borderWidth:2.5, fill:true, tension:0.4, pointRadius:4 }] }, options:{ responsive:true, plugins:{ legend:{ display:false } }, scales:{ x:{ grid:{ display:false }, ticks:{ font:{ family:'Cairo', size:11 }, color: isDark?'#9ca3af':'#6b7280' } }, y:{ grid:{ color: isDark?'rgba(255,255,255,0.05)':'rgba(0,0,0,0.05)' }, ticks:{ font:{ family:'Cairo', size:11 }, color: isDark?'#9ca3af':'#6b7280' } } } } });
}

function initAttendanceChart() {
  const isDark = document.documentElement.classList.contains('dark');
  const ctx = document.getElementById('attendanceChart');
  if (!ctx || ctx.dataset.init) return;
  ctx.dataset.init = '1';
  new Chart(ctx, { type:'bar', data:{ labels:['الرياضيات','الفيزياء','الكيمياء','الأحياء','العربي','الإنجليزي'], datasets:[{ label:'نسبة الحضور %', data:[87,82,90,78,85,88], backgroundColor:['rgba(124,58,237,0.8)','rgba(59,130,246,0.8)','rgba(16,185,129,0.8)','rgba(245,158,11,0.8)','rgba(239,68,68,0.8)','rgba(236,72,153,0.8)'], borderRadius:8 }] }, options:{ responsive:true, plugins:{ legend:{ display:false } }, scales:{ x:{ grid:{ display:false }, ticks:{ font:{ family:'Cairo', size:11 }, color: isDark?'#9ca3af':'#6b7280' } }, y:{ max:100, grid:{ color: isDark?'rgba(255,255,255,0.05)':'rgba(0,0,0,0.05)' }, ticks:{ font:{ family:'Cairo', size:11 }, color: isDark?'#9ca3af':'#6b7280' } } } } });
  const tbody = document.getElementById('admin-attendance-table');
  if (tbody && !tbody.innerHTML) {
    const rows = [
      { date:'22 مايو', subject:'الرياضيات', teacher:'أ. محمد السيد', present:28, absent:4, pct:'87%' },
      { date:'22 مايو', subject:'الفيزياء', teacher:'أ. سارة أحمد', present:24, absent:5, pct:'82%' },
      { date:'21 مايو', subject:'الكيمياء', teacher:'أ. خالد عمر', present:27, absent:3, pct:'90%' },
      { date:'21 مايو', subject:'الأحياء', teacher:'أ. منى حسن', present:23, absent:7, pct:'78%' },
    ];
    tbody.innerHTML = rows.map(r => `<tr><td>${r.date}</td><td class="font-medium">${r.subject}</td><td>${r.teacher}</td><td class="text-green-600 font-bold">${r.present}</td><td class="text-red-600 font-bold">${r.absent}</td><td class="font-bold">${r.pct}</td></tr>`).join('');
  }
}

function renderAdminNotifications() {
  const list = document.getElementById('admin-notifications');
  if (!list || list.innerHTML) return;
  const notifs = [
    { icon:'fa-user-plus', color:'bg-green-100 dark:bg-green-900/30 text-green-600', title:'طالب جديد', desc:'تسجيل طالب جديد: أحمد محمد - الثالث الثانوي', time:'منذ 5 دقائق', unread:true },
    { icon:'fa-pound-sign', color:'bg-blue-100 dark:bg-blue-900/30 text-blue-600', title:'دفعة جديدة', desc:'تم استلام دفعة 350 جنيه من نور أحمد', time:'منذ 20 دقيقة', unread:true },
    { icon:'fa-exclamation-triangle', color:'bg-red-100 dark:bg-red-900/30 text-red-600', title:'غياب متكرر', desc:'الطالب عمر سعيد غاب 5 مرات هذا الشهر', time:'منذ ساعة', unread:true },
    { icon:'fa-star', color:'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600', title:'تقييم جديد', desc:'تقييم 5 نجوم للأستاذ محمد السيد', time:'منذ 2 ساعة', unread:false },
    { icon:'fa-book', color:'bg-purple-100 dark:bg-purple-900/30 text-purple-600', title:'كورس جديد', desc:'تم إضافة كورس الأحياء للصف الأول', time:'أمس', unread:false },
  ];
  list.innerHTML = notifs.map(n => `
    <div class="notif-item ${n.unread ? 'unread' : ''}">
      <div class="w-10 h-10 rounded-xl ${n.color} flex items-center justify-center flex-shrink-0"><i class="fas ${n.icon} text-sm"></i></div>
      <div class="flex-1">
        <div class="font-bold text-sm text-gray-900 dark:text-white">${n.title}</div>
        <div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">${n.desc}</div>
        <div class="text-xs text-gray-400 dark:text-gray-500 mt-1">${n.time}</div>
      </div>
      ${n.unread ? '<div class="notif-dot"></div>' : ''}
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => initAdminCharts());
