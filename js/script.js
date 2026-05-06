// Translations Dictionary
const translations = {
  en: {
    nav_home: "Home",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_greeting: "Hello, I'm",
    hero_title: "Alamir Talal",
    hero_desc: "Crafting beautiful, modern, and highly responsive web and mobile applications with a focus on user experience.",
    btn_contact: "Get In Touch",
    section_skills: "My Skills",
    section_projects: "Featured Projects",
    project_taqseema: "Taqseema",
    project_taqseema_desc: "A social hub to easily book pitches, find teammates, and connect with like-minded players.",
    project_mafia: "Mafia",
    project_mafia_desc: "A game of pure deception. Put on a mask, manipulate others, and survive the night.",
    project_mafiosu: "Mafiosu",
    project_mafiosu_desc: "An immersive game where you play as the suspect, detective, and judge all at once.",
    section_contact: "Contact Me",
    contact_name: "Name",
    contact_email: "Email",
    contact_msg: "Message",
    btn_send: "Send Message",
    footer_text: `© ${new Date().getFullYear()} Alamir Talal. All rights reserved.`,
    view_project: "View Project",
    msg_success: "Message sent successfully! I will get back to you soon.",
    msg_error: "Oops! There was a problem submitting your form.",
    // Project Pages Shared
    back_to_projects: "Back to Projects",
    key_features: "Key Features",
    tech_used: "Technologies Used",
    // Taqseema Page
    taqseema_long_desc: "Taqseema isn't just an app; it's a vibrant community for football enthusiasts. It simplifies your life by making pitch booking seamless, while also serving as a social space to meet players who share your passion. Whether you're looking to form a team or find a missing player, Taqseema brings the football community together.",
    taqseema_features: "<li>Effortless pitch booking and match organization.</li><li>Sub-finder to quickly find teammates.</li><li>A social hub to connect with like-minded football players.</li><li>Interactive 'Taqsima' drag-and-drop team formation UI.</li>",
    // Athr Page
    project_athr: "Athr",
    project_athr_desc: "A comprehensive Islamic application aimed at enhancing the user's daily spirituality.",
    athr_long_desc: "Athr is designed to be your daily spiritual companion. It provides all the essential tools a Muslim needs in one place, with a beautiful and intuitive interface. From prayer times to Quran tracking and Prophet stories, Athr helps you stay connected to your faith throughout the day.",
    athr_features: "<li>Accurate prayer times based on location.</li><li>The Holy Quran with reading and memorization features.</li><li>Authentic Hadiths from reliable sources.</li><li>Qibla compass for determining prayer direction.</li><li>Daily prayer and Quran progress tracking.</li><li>Engaging and inspiring stories of the Prophets.</li>",
    // Journaly Page
    project_journaly: "Journaly",
    project_journaly_desc: "Your daily companion for tracking your mood, productivity, and habits.",
    journaly_long_desc: "Journaly is more than just a diary; it's a powerful tool for self-improvement. By tracking your sleep, happiness, tasks, and habits, it provides you with clear insights into your life through detailed periodic reports. It helps you stay organized and mindful of your daily progress.",
    journaly_features: "<li>Logging sleep hours and daily activity.</li><li>Tracking happiness percentage and general mood.</li><li>Integrated Todo List showing completed vs. total tasks.</li><li>Daily prayer and worship tracking.</li><li>Periodic reports (daily, weekly, monthly) for progress analysis.</li><li>Personal space for writing daily notes and journals.</li>",
    // Common
    visit_project: "Visit Project Website",
    // Mafia Page
    mafia_long_desc: "Mafia is the ultimate test of your cunning and manipulative skills. In this game, deception is your best weapon. You have to be sly, lie to your friends, wear different masks, and orchestrate betrayals without getting caught. Can you survive the psychological warfare?",
    mafia_features: "<li>Intense psychological gameplay based on deception.</li><li>Real-time multiplayer lobbies to manipulate your friends.</li><li>Blind role distribution for maximum unpredictability.</li><li>Atmospheric UI designed for a dark, secretive experience.</li>",
    // Mafiosu Page
    mafiosu_long_desc: "Dive into a dark world of mystery where you are everything: the prime suspect, the lead investigator, and the ultimate judge. In Mafiosu, every word counts. You must fiercely defend yourself, logically attack your opponents, and incite the crowd to survive. It's a psychological battle of survival and wits.",
    mafiosu_features: "<li>Dynamic roles shifting between suspect, detective, and judge.</li><li>Offline-First case sync for uninterrupted psychological warfare.</li><li>Advanced argument and clue management mechanics.</li><li>Premium dark-themed UI tailored for immersive role-playing.</li>"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_skills: "المهارات",
    nav_projects: "المشاريع",
    nav_contact: "اتصل بي",
    hero_greeting: "مرحباً، أنا",
    hero_title: "الأمير طلال",
    hero_desc: "أقوم بصناعة تطبيقات ويب و جوال جميلة وحديثة ومتجاوبة مع التركيز على تجربة المستخدم.",
    btn_contact: "تواصل معي",
    section_skills: "مهاراتي",
    section_projects: "أبرز المشاريع",
    project_taqseema: "تقسيمة",
    project_taqseema_desc: "مجتمع اجتماعي للاعبي كرة القدم يسهل حجز الملاعب والبحث عن لاعبين وبناء فِرق.",
    project_mafia: "مافيا",
    project_mafia_desc: "لعبة خداع استراتيجي. البس وشوش مختلفة، اكدب على أصحابك، وعيش دور الخبيث.",
    project_mafiosu: "مافيوسو",
    project_mafiosu_desc: "لعبة تحقيق وغموض بتعيش فيها دور المشتبه به، المحقق، والقاضي في نفس الوقت.",
    section_contact: "اتصل بي",
    contact_name: "الاسم",
    contact_email: "البريد الإلكتروني",
    contact_msg: "الرسالة",
    btn_send: "إرسال الرسالة",
    footer_text: `© ${new Date().getFullYear()} الأمير طلال جميع الحقوق محفوظة.`,
    view_project: "عرض المشروع",
    msg_success: "تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.",
    msg_error: "عفواً! حدثت مشكلة أثناء إرسال الرسالة.",
    // Project Pages Shared
    back_to_projects: "الرجوع للمشاريع",
    key_features: "أهم المميزات",
    tech_used: "التقنيات المستخدمة",
    // Taqseema Page
    taqseema_long_desc: "تقسيمة مش مجرد تطبيق عادي، هو مجتمع متكامل للاعبي الكورة. التطبيق بيسهل حياتك في حجز الملاعب وتنظيم المباريات، وفي نفس الوقت هو مكان اجتماعي بيجمعك بناس شبهك عندهم نفس الشغف. سواء كنت بتدور على لاعب يكمل فريقك أو عايز تبني فريق من الصفر، تقسيمة هيظبطك.",
    taqseema_features: "<li>حجز الملاعب وتنظيم المباريات بسهولة تامة.</li><li>ميزة 'ناقصنا لاعب' للبحث السريع عن زملاء للفريق.</li><li>مجتمع اجتماعي للتواصل مع لاعبي كرة القدم.</li><li>واجهة 'التقسيمة' التفاعلية بخاصية السحب والإفلات.</li>",
    // Athr Page
    project_athr: "أثر",
    project_athr_desc: "برنامج إسلامي شامل يهدف لتعزيز الروحانية اليومية للمستخدم.",
    athr_long_desc: "أثر هو رفيقك الروحاني اليومي، بيجمع لك كل اللي محتاجه كمسلم في مكان واحد بواجهة سهلة ومريحة. من مواقيت الصلاة للمصحف وتتبع الورد وقصص الأنبياء، أثر بيساعدك تفضل متصل بعباداتك طول اليوم بشكل منظم وجميل.",
    athr_features: "<li>مواقيت الصلاة بدقة بناءً على الموقع.</li><li>المصحف الشريف مع إمكانيات القراءة والحفظ.</li><li>الأحاديث الصحيحة من مصادر موثوقة.</li><li>بوصلة القبلة لتحديد اتجاه الصلاة.</li><li>تتبع الصلاة والورد القرآني يومياً.</li><li>قصص الأنبياء بأسلوب ممتع وشيق.</li>",
    // Journaly Page
    project_journaly: "جورنالي",
    project_journaly_desc: "رفيقك اليومي لتتبع حالتك النفسية، إنتاجيتك، وعاداتك الصحية والدينية.",
    journaly_long_desc: "جورنالي مش مجرد مذكرة، هو أداة قوية لتطوير الذات. من خلال تتبع نومك وسعادتك ومهامك اليومية، التطبيق بيقدملك تقارير واضحة بتفهمك أكتر عن يومك وبتساعدك تحسن من عاداتك وتكون أكتر إنتاجية وتركيز.",
    journaly_features: "<li>تسجيل ساعات النوم والنشاط اليومي.</li><li>تتبع نسبة السعادة والمزاج العام.</li><li>قائمة مهام (Todo List) متكاملة تظهر الإنجاز.</li><li>تتبع الصلوات والعبادات اليومية.</li><li>تقارير دورية (يومية، أسبوعية، شهرية) لتحليل التقدم.</li><li>مساحة لكتابة الملاحظات واليوميات الخاصة.</li>",
    // Common
    visit_project: "اذهب لصفحة المشروع",
    // Mafia Page
    mafia_long_desc: "مافيا هي الاختبار الحقيقي لمدى دهائك وقدرتك على الخداع. هنا الخبث هو سلاحك الوحيد؛ لازم تكدب على اللي حواليك، تركب وشوش مش وشك، وتتلاعب بالكل عشان توصل لهدفك من غير ما حد يكشفك. هل هتقدر تلعب بيهم كلهم وتطلع منها سليم؟",
    mafia_features: "<li>لعب نفسي مكثف يعتمد على الخداع والمكر.</li><li>غرف لعب جماعية للتلاعب بأصدقائك في الوقت الفعلي.</li><li>توزيع أدوار خفي لضمان أقصى درجات الغموض وعدم التوقع.</li><li>تصميم واجهة مظلم وغامض لتعزيز تجربة اللعب السرية.</li>",
    // Mafiosu Page
    mafiosu_long_desc: "ادخل عالم غامض مليان بالأسرار، هنا أنت مش بس لاعب، أنت المشتبه به، المحقق، والقاضي في نفس اللحظة. في مافيوسو، لازم تتكلم عشان تدافع عن نفسك بشراسة، أو تهاجم وتحرض ضد غيرك عشان تنجو. اللعبة بتعتمد على قدرتك في الإقناع والنجاة وسط أجواء التحقيق المشحونة.",
    mafiosu_features: "<li>أدوار ديناميكية تتنقل بين المشتبه به، المحقق، والقاضي.</li><li>مزامنة القضايا بدون إنترنت (Offline-First) لاستمرار اللعب النفسي.</li><li>ميكانيكيات متقدمة لإدارة الحجج والأدلة.</li><li>واجهة مظلمة مصممة خصيصاً لتعيش جو تقمص الأدوار.</li>"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // --- Theme Management ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const darkIcon = document.getElementById('theme-toggle-dark-icon');
  const lightIcon = document.getElementById('theme-toggle-light-icon');

  // Check initial theme from localStorage or system preference
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
    lightIcon.classList.remove('hidden');
  } else {
    htmlElement.classList.remove('dark');
    darkIcon.classList.remove('hidden');
  }

  // Toggle theme on button click
  themeToggleBtn.addEventListener('click', () => {
    darkIcon.classList.toggle('hidden');
    lightIcon.classList.toggle('hidden');

    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  });

  // --- Language Management ---
  const langToggleBtn = document.getElementById('lang-toggle');

  // Apply Language Function
  const applyLanguage = (lang) => {
    // Update HTML attributes
    htmlElement.setAttribute('lang', lang);
    htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update Fonts
    if (lang === 'ar') {
      htmlElement.classList.remove('font-poppins');
      htmlElement.classList.add('font-cairo');
      langToggleBtn.textContent = 'EN';
    } else {
      htmlElement.classList.remove('font-cairo');
      htmlElement.classList.add('font-poppins');
      langToggleBtn.textContent = 'AR';
    }

    // Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translations[lang][key];
        } else {
          element.innerHTML = translations[lang][key];
        }
      }
    });
  };

  // Check initial language from localStorage
  let currentLang = localStorage.getItem('app-lang') || 'en';
  applyLanguage(currentLang);

  // Toggle Language on button click
  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('app-lang', currentLang);
    applyLanguage(currentLang);
  });

  // --- Form Submission Handling (AJAX) ---
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitButton = document.getElementById('submit-button');

  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      // Update UI to show loading state
      submitButton.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
      submitButton.disabled = true;
      formStatus.classList.add('hidden');
      formStatus.classList.remove('text-green-500', 'text-red-500');

      try {
        const response = await fetch(contactForm.action, {
          method: contactForm.method,
          body: new FormData(contactForm),
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          formStatus.textContent = translations[currentLang].msg_success;
          formStatus.classList.add('text-green-500');
          formStatus.classList.remove('hidden');
          contactForm.reset();
        } else {
          formStatus.textContent = translations[currentLang].msg_error;
          formStatus.classList.add('text-red-500');
          formStatus.classList.remove('hidden');
        }
      } catch (error) {
        formStatus.textContent = translations[currentLang].msg_error;
        formStatus.classList.add('text-red-500');
        formStatus.classList.remove('hidden');
      } finally {
        // Reset button state
        submitButton.textContent = translations[currentLang].btn_send;
        submitButton.disabled = false;
      }
    });
  }

  // --- Navbar Scroll Effect ---
  const navbar = document.querySelector('nav');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('shadow-md', 'bg-white', 'dark:bg-gray-900');
        navbar.classList.remove('glass', 'dark:glass-dark', 'border-b');
      } else {
        navbar.classList.add('glass', 'dark:glass-dark', 'border-b');
        navbar.classList.remove('shadow-md', 'bg-white', 'dark:bg-gray-900');
      }
    });
  }
});
