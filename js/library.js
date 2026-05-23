const libraryData = [
  { title:'ملزمة الرياضيات الشاملة - الفصل الأول', type:'pdf', subject:'math', size:'2.4 MB', teacher:'أ. محمد السيد', date:'15 مايو 2025', downloads:342 },
  { title:'فيديو شرح التفاضل والتكامل', type:'video', subject:'math', size:'145 MB', teacher:'أ. محمد السيد', date:'12 مايو 2025', downloads:520 },
  { title:'أوراق عمل الرياضيات - الجبر', type:'worksheet', subject:'math', size:'0.8 MB', teacher:'أ. محمد السيد', date:'10 مايو 2025', downloads:215 },
  { title:'ملزمة الفيزياء - الكهرباء والمغناطيسية', type:'pdf', subject:'physics', size:'1.8 MB', teacher:'أ. سارة أحمد', date:'14 مايو 2025', downloads:298 },
  { title:'فيديو شرح الميكانيكا', type:'video', subject:'physics', size:'210 MB', teacher:'أ. سارة أحمد', date:'11 مايو 2025', downloads:445 },
  { title:'أوراق عمل الفيزياء - الحرارة', type:'worksheet', subject:'physics', size:'0.6 MB', teacher:'أ. سارة أحمد', date:'9 مايو 2025', downloads:178 },
  { title:'ملزمة الكيمياء العضوية الشاملة', type:'pdf', subject:'chemistry', size:'3.1 MB', teacher:'أ. خالد عمر', date:'13 مايو 2025', downloads:267 },
  { title:'فيديو شرح الكيمياء غير العضوية', type:'video', subject:'chemistry', size:'185 MB', teacher:'أ. خالد عمر', date:'8 مايو 2025', downloads:389 },
  { title:'أوراق عمل الكيمياء التحليلية', type:'worksheet', subject:'chemistry', size:'1.2 MB', teacher:'أ. خالد عمر', date:'6 مايو 2025', downloads:156 },
  { title:'ملزمة الأحياء - الوراثة والتطور', type:'pdf', subject:'biology', size:'2.7 MB', teacher:'أ. منى حسن', date:'16 مايو 2025', downloads:312 },
  { title:'فيديو شرح الخلية والأنسجة', type:'video', subject:'biology', size:'165 MB', teacher:'أ. منى حسن', date:'7 مايو 2025', downloads:478 },
  { title:'ملزمة اللغة العربية - النحو والصرف', type:'pdf', subject:'arabic', size:'1.5 MB', teacher:'أ. هدى إبراهيم', date:'17 مايو 2025', downloads:425 },
  { title:'أوراق عمل اللغة العربية - الأدب', type:'worksheet', subject:'arabic', size:'0.9 MB', teacher:'أ. هدى إبراهيم', date:'5 مايو 2025', downloads:198 },
  { title:'فيديو شرح البلاغة العربية', type:'video', subject:'arabic', size:'120 MB', teacher:'أ. هدى إبراهيم', date:'3 مايو 2025', downloads:356 },
];

const typeConfig = {
  pdf: { icon:'fa-file-pdf', color:'text-red-500', bg:'bg-red-50 dark:bg-red-900/20', label:'PDF', badge:'badge-red' },
  video: { icon:'fa-file-video', color:'text-blue-500', bg:'bg-blue-50 dark:bg-blue-900/20', label:'فيديو', badge:'badge-blue' },
  worksheet: { icon:'fa-file-alt', color:'text-green-500', bg:'bg-green-50 dark:bg-green-900/20', label:'ورقة عمل', badge:'badge-green' },
};

let libFilter = 'all';
let libSubject = 'all';
let libSearch = '';

function renderLibrary() {
  const grid = document.getElementById('library-grid');
  const noResults = document.getElementById('lib-no-results');
  const filtered = libraryData.filter(f => {
    const matchType = libFilter === 'all' || f.type === libFilter;
    const matchSubject = libSubject === 'all' || f.subject === libSubject;
    const matchSearch = !libSearch || f.title.includes(libSearch) || f.teacher.includes(libSearch);
    return matchType && matchSubject && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    return;
  }
  noResults.classList.add('hidden');

  grid.innerHTML = filtered.map((f, i) => {
    const cfg = typeConfig[f.type];
    return `
      <div class="widget-card group hover:shadow-xl hover:-translate-y-1 transition-all duration-300" data-aos="fade-up" data-aos-delay="${(i % 3) * 80}">
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 rounded-2xl ${cfg.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <i class="fas ${cfg.icon} ${cfg.color} text-2xl"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <span class="badge ${cfg.badge} text-xs">${cfg.label}</span>
            </div>
            <h3 class="font-bold text-sm text-gray-900 dark:text-white leading-snug mb-1">${f.title}</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">${f.teacher}</p>
          </div>
        </div>
        <div class="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
          <div class="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
            <span><i class="fas fa-hdd ml-1"></i>${f.size}</span>
            <span><i class="fas fa-download ml-1"></i>${f.downloads}</span>
          </div>
          <button onclick="showToast('جاري التحميل: ${f.title}','info')" class="flex items-center gap-2 btn-primary text-xs px-3 py-2">
            <i class="fas fa-download"></i> تحميل
          </button>
        </div>
      </div>
    `;
  }).join('');

  setTimeout(() => document.querySelectorAll('[data-aos]').forEach(el => el.classList.add('aos-animate')), 100);
}

function setLibFilter(f) {
  libFilter = f;
  document.querySelectorAll('[data-lib-filter]').forEach(c => c.classList.toggle('active', c.dataset.libFilter === f));
  renderLibrary();
}

function setLibSubject(s) {
  libSubject = s;
  document.querySelectorAll('[data-lib-subject]').forEach(c => c.classList.toggle('active', c.dataset.libSubject === s));
  renderLibrary();
}

function filterLibrary() {
  libSearch = document.getElementById('lib-search')?.value || '';
  renderLibrary();
}

window.setLibFilter = setLibFilter;
window.setLibSubject = setLibSubject;
window.filterLibrary = filterLibrary;

document.addEventListener('DOMContentLoaded', renderLibrary);
