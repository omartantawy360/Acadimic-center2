const teachersData = [
  { id:1, name:'أ. محمد السيد', subject:'الرياضيات', experience:'15 سنة', rating:4.9, students:1200, courses:8, img:'https://i.pravatar.cc/300?img=11', color:'from-purple-500 to-indigo-600', bio:'دكتوراه في الرياضيات التطبيقية، خبرة 15 عاماً في تدريس الثانوية العامة. حقق طلابه أعلى الدرجات في الثانوية.', tags:['تفاضل وتكامل','جبر','هندسة','إحصاء'] },
  { id:2, name:'أ. سارة أحمد', subject:'الفيزياء', experience:'12 سنة', rating:4.8, students:980, courses:6, img:'https://i.pravatar.cc/300?img=12', color:'from-blue-500 to-cyan-600', bio:'ماجستير في الفيزياء النظرية، متخصصة في تبسيط المفاهيم الصعبة وتحقيق نتائج متميزة.', tags:['كهرباء','ميكانيكا','موجات','حرارة'] },
  { id:3, name:'أ. خالد عمر', subject:'الكيمياء', experience:'10 سنوات', rating:4.7, students:750, courses:5, img:'https://i.pravatar.cc/300?img=13', color:'from-green-500 to-teal-600', bio:'بكالوريوس كيمياء مع مرتبة الشرف، خبير في الكيمياء العضوية وغير العضوية للثانوية.', tags:['عضوية','غير عضوية','تحليلية','كيمياء حيوية'] },
  { id:4, name:'أ. منى حسن', subject:'الأحياء', experience:'8 سنوات', rating:4.9, students:860, courses:5, img:'https://i.pravatar.cc/300?img=14', color:'from-yellow-500 to-orange-600', bio:'ماجستير في علم الأحياء الجزيئي، تتميز بأسلوب شرح مبتكر يجعل الأحياء سهلة وممتعة.', tags:['وراثة','تطور','خلية','أنسجة'] },
  { id:5, name:'أ. هدى إبراهيم', subject:'اللغة العربية', experience:'14 سنة', rating:4.6, students:1100, courses:7, img:'https://i.pravatar.cc/300?img=15', color:'from-red-500 to-rose-600', bio:'دكتوراه في اللغة العربية وآدابها، متخصصة في النحو والصرف والأدب العربي للثانوية.', tags:['نحو','صرف','أدب','بلاغة'] },
  { id:6, name:'أ. كريم فاروق', subject:'اللغة الإنجليزية', experience:'11 سنة', rating:4.8, students:920, courses:6, img:'https://i.pravatar.cc/300?img=16', color:'from-pink-500 to-fuchsia-600', bio:'حاصل على شهادة CELTA في تدريس اللغة الإنجليزية، خبير في تحضير الطلاب لامتحانات الثانوية.', tags:['Grammar','Writing','Reading','Vocabulary'] },
  { id:7, name:'أ. أحمد رضا', subject:'الرياضيات', experience:'9 سنوات', rating:4.7, students:680, courses:4, img:'https://i.pravatar.cc/300?img=17', color:'from-purple-500 to-indigo-600', bio:'ماجستير في الرياضيات البحتة، متخصص في الصف الأول والثاني الثانوي مع أسلوب شرح مبسط.', tags:['جبر','هندسة','مثلثات','إحصاء'] },
  { id:8, name:'أ. نادية سالم', subject:'الأحياء', experience:'7 سنوات', rating:4.8, students:590, courses:4, img:'https://i.pravatar.cc/300?img=18', color:'from-yellow-500 to-orange-600', bio:'بكالوريوس علوم بيولوجية، متخصصة في الصف الأول والثاني الثانوي مع تركيز على الفهم العميق.', tags:['نبات','حيوان','بيئة','صحة'] },
];

function renderTeachers() {
  const grid = document.getElementById('teachers-grid');
  if (!grid) return;
  grid.innerHTML = teachersData.map((t, i) => `
    <div class="teacher-card group" data-aos="fade-up" data-aos-delay="${(i % 4) * 80}">
      <div class="relative h-56 bg-gradient-to-br ${t.color} overflow-hidden">
        <img src="${t.img}" alt="${t.name}" class="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-105 transition-transform duration-500"/>
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div class="absolute bottom-4 right-4 left-4">
          <h3 class="text-white font-black text-lg">${t.name}</h3>
          <span class="text-white/80 text-sm">${t.subject}</span>
        </div>
        <div class="absolute top-3 left-3 flex items-center gap-1 bg-white/20 backdrop-blur px-2 py-1 rounded-full">
          <i class="fas fa-star text-yellow-400 text-xs"></i>
          <span class="text-white text-xs font-bold">${t.rating}</span>
        </div>
      </div>
      <div class="p-5">
        <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">${t.bio}</p>
        <div class="grid grid-cols-3 gap-2 mb-4">
          <div class="text-center p-2 rounded-xl bg-gray-50 dark:bg-gray-800">
            <div class="text-sm font-black text-gray-900 dark:text-white">${t.experience}</div>
            <div class="text-xs text-gray-500 dark:text-gray-400">خبرة</div>
          </div>
          <div class="text-center p-2 rounded-xl bg-gray-50 dark:bg-gray-800">
            <div class="text-sm font-black text-gray-900 dark:text-white">${t.students.toLocaleString('ar-EG')}</div>
            <div class="text-xs text-gray-500 dark:text-gray-400">طالب</div>
          </div>
          <div class="text-center p-2 rounded-xl bg-gray-50 dark:bg-gray-800">
            <div class="text-sm font-black text-gray-900 dark:text-white">${t.courses}</div>
            <div class="text-xs text-gray-500 dark:text-gray-400">كورس</div>
          </div>
        </div>
        <div class="flex flex-wrap gap-1 mb-4">
          ${t.tags.map(tag => `<span class="text-xs px-2 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-medium">${tag}</span>`).join('')}
        </div>
        <div class="flex items-center justify-between">
          <div class="flex gap-2">
            <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-whatsapp"></i></a>
          </div>
          <button onclick="showToast('تم إرسال طلب الحجز!','success')" class="btn-primary text-xs px-4 py-2">احجز حصة</button>
        </div>
      </div>
    </div>
  `).join('');
  setTimeout(() => document.querySelectorAll('[data-aos]').forEach(el => el.classList.add('aos-animate')), 100);
}

document.addEventListener('DOMContentLoaded', renderTeachers);
