const coursesData = [
  { id:1, title:'الرياضيات - التفاضل والتكامل', subject:'math', teacher:'أ. محمد السيد', teacherImg:'https://i.pravatar.cc/60?img=11', grade:'الثالث الثانوي', price:350, sessions:'8 حصص/شهر', schedule:'السبت والثلاثاء 5م', rating:4.9, students:320, color:'from-purple-500 to-indigo-600', icon:'fa-square-root-alt', tag:'الأكثر طلباً' },
  { id:2, title:'الفيزياء - الكهرباء والمغناطيسية', subject:'physics', teacher:'أ. سارة أحمد', teacherImg:'https://i.pravatar.cc/60?img=12', grade:'الثالث الثانوي', price:320, sessions:'8 حصص/شهر', schedule:'الأحد والأربعاء 4م', rating:4.8, students:280, color:'from-blue-500 to-cyan-600', icon:'fa-atom', tag:'' },
  { id:3, title:'الكيمياء العضوية', subject:'chemistry', teacher:'أ. خالد عمر', teacherImg:'https://i.pravatar.cc/60?img=13', grade:'الثالث الثانوي', price:300, sessions:'6 حصص/شهر', schedule:'الاثنين والخميس 6م', rating:4.7, students:195, color:'from-green-500 to-teal-600', icon:'fa-flask', tag:'' },
  { id:4, title:'الأحياء - الوراثة والتطور', subject:'biology', teacher:'أ. منى حسن', teacherImg:'https://i.pravatar.cc/60?img=14', grade:'الثالث الثانوي', price:280, sessions:'6 حصص/شهر', schedule:'الثلاثاء والجمعة 5م', rating:4.9, students:240, color:'from-yellow-500 to-orange-600', icon:'fa-dna', tag:'جديد' },
  { id:5, title:'اللغة العربية - النحو والأدب', subject:'arabic', teacher:'أ. هدى إبراهيم', teacherImg:'https://i.pravatar.cc/60?img=15', grade:'الثاني الثانوي', price:250, sessions:'8 حصص/شهر', schedule:'الأحد والأربعاء 3م', rating:4.6, students:310, color:'from-red-500 to-rose-600', icon:'fa-language', tag:'' },
  { id:6, title:'اللغة الإنجليزية - Grammar & Writing', subject:'english', teacher:'أ. كريم فاروق', teacherImg:'https://i.pravatar.cc/60?img=16', grade:'الثاني الثانوي', price:300, sessions:'8 حصص/شهر', schedule:'السبت والثلاثاء 7م', rating:4.8, students:275, color:'from-pink-500 to-fuchsia-600', icon:'fa-globe', tag:'' },
  { id:7, title:'الرياضيات - الجبر والهندسة', subject:'math', teacher:'أ. محمد السيد', teacherImg:'https://i.pravatar.cc/60?img=11', grade:'الثاني الثانوي', price:320, sessions:'8 حصص/شهر', schedule:'الاثنين والخميس 5م', rating:4.9, students:290, color:'from-purple-500 to-indigo-600', icon:'fa-square-root-alt', tag:'' },
  { id:8, title:'الفيزياء - الميكانيكا والحرارة', subject:'physics', teacher:'أ. سارة أحمد', teacherImg:'https://i.pravatar.cc/60?img=12', grade:'الثاني الثانوي', price:300, sessions:'6 حصص/شهر', schedule:'الأحد والأربعاء 6م', rating:4.7, students:210, color:'from-blue-500 to-cyan-600', icon:'fa-atom', tag:'' },
  { id:9, title:'الكيمياء غير العضوية', subject:'chemistry', teacher:'أ. خالد عمر', teacherImg:'https://i.pravatar.cc/60?img=13', grade:'الأول الثانوي', price:260, sessions:'6 حصص/شهر', schedule:'الثلاثاء والجمعة 4م', rating:4.6, students:180, color:'from-green-500 to-teal-600', icon:'fa-flask', tag:'' },
  { id:10, title:'الأحياء - الخلية والأنسجة', subject:'biology', teacher:'أ. منى حسن', teacherImg:'https://i.pravatar.cc/60?img=14', grade:'الأول الثانوي', price:250, sessions:'6 حصص/شهر', schedule:'السبت والثلاثاء 4م', rating:4.8, students:220, color:'from-yellow-500 to-orange-600', icon:'fa-dna', tag:'جديد' },
  { id:11, title:'الرياضيات - الأول الثانوي', subject:'math', teacher:'أ. محمد السيد', teacherImg:'https://i.pravatar.cc/60?img=11', grade:'الأول الثانوي', price:280, sessions:'8 حصص/شهر', schedule:'الاثنين والخميس 4م', rating:4.9, students:350, color:'from-purple-500 to-indigo-600', icon:'fa-square-root-alt', tag:'الأكثر طلباً' },
  { id:12, title:'اللغة الإنجليزية - المحادثة', subject:'english', teacher:'أ. كريم فاروق', teacherImg:'https://i.pravatar.cc/60?img=16', grade:'الأول الثانوي', price:270, sessions:'8 حصص/شهر', schedule:'الأحد والأربعاء 5م', rating:4.7, students:195, color:'from-pink-500 to-fuchsia-600', icon:'fa-globe', tag:'' },
];

let currentFilter = 'all';
let searchQuery = '';

function renderCourses() {
  const grid = document.getElementById('courses-grid');
  const noResults = document.getElementById('no-results');
  const filtered = coursesData.filter(c => {
    const matchFilter = currentFilter === 'all' || c.subject === currentFilter;
    const matchSearch = !searchQuery || c.title.includes(searchQuery) || c.teacher.includes(searchQuery) || c.grade.includes(searchQuery);
    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    return;
  }
  noResults.classList.add('hidden');

  grid.innerHTML = filtered.map((c, i) => `
    <div class="course-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 80}">
      <div class="relative h-40 bg-gradient-to-br ${c.color} flex items-center justify-center overflow-hidden">
        <i class="fas ${c.icon} text-white/30 text-7xl absolute -bottom-4 -left-4"></i>
        <i class="fas ${c.icon} text-white text-4xl relative z-10"></i>
        ${c.tag ? `<span class="absolute top-3 right-3 px-2 py-1 bg-white/20 backdrop-blur text-white text-xs font-bold rounded-full">${c.tag}</span>` : ''}
      </div>
      <div class="p-4">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded-full">${c.grade}</span>
          <div class="flex items-center gap-1 text-yellow-500 text-xs font-bold">
            <i class="fas fa-star"></i> ${c.rating}
          </div>
        </div>
        <h3 class="font-bold text-gray-900 dark:text-white text-sm mb-3 leading-snug">${c.title}</h3>
        <div class="flex items-center gap-2 mb-3">
          <img src="${c.teacherImg}" class="w-7 h-7 rounded-full object-cover" alt="${c.teacher}"/>
          <span class="text-xs text-gray-500 dark:text-gray-400 font-medium">${c.teacher}</span>
        </div>
        <div class="space-y-1 mb-4">
          <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <i class="fas fa-calendar-alt text-purple-400 w-3"></i> ${c.schedule}
          </div>
          <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <i class="fas fa-users text-blue-400 w-3"></i> ${c.students} طالب مسجل
          </div>
          <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <i class="fas fa-video text-green-400 w-3"></i> ${c.sessions}
          </div>
        </div>
        <div class="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
          <div>
            <span class="text-xl font-black text-gray-900 dark:text-white">${c.price}</span>
            <span class="text-xs text-gray-500 dark:text-gray-400"> جنيه/شهر</span>
          </div>
          <button onclick="showToast('تم إضافة الكورس! سيتم التواصل معك.','success')" class="btn-primary text-xs px-4 py-2">
            سجل الآن
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Re-observe AOS
  document.querySelectorAll('[data-aos]').forEach(el => {
    if (!el.classList.contains('aos-animate')) {
      setTimeout(() => el.classList.add('aos-animate'), parseInt(el.dataset.aosDelay || 0));
    }
  });
}

function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.filter === filter);
  });
  renderCourses();
}

function filterCourses() {
  searchQuery = document.getElementById('search-input')?.value || '';
  renderCourses();
}

window.setFilter = setFilter;
window.filterCourses = filterCourses;

document.addEventListener('DOMContentLoaded', renderCourses);
