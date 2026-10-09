/* =========================================================
   Alamir Talal — Portfolio · main.js
   i18n (EN/AR) · typewriter · reveal · counters · cursor · form
   ========================================================= */
(function () {
  "use strict";

  /* =======================================================
     Translations
     ======================================================= */
  const translations = {
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_services: "Services",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_contact: "Contact",
      nav_cta: "Let's Talk",

      hero_badge: "Available for freelance projects",
      hero_hello: "Hello, I'm",
      hero_roles: ["Frontend Developer", "Flutter Developer", "UI/UX Designer", "Problem Solver"],
      hero_desc:
        "Crafting modern, interactive and high-performance web & mobile applications with a sharp focus on clean UI and delightful user experience.",
      hero_cta1: "View My Work",
      hero_cta2: "Let's Talk",
      hero_scroll: "Scroll",

      marquee_text:
        "Frontend Developer ✦ Flutter Developer ✦ UI/UX Designer ✦ Mobile Apps ✦ Web Apps",

      about_tag: "About Me",
      about_title: 'Building digital products that <span class="grad">feel alive</span>',
      about_p1:
        "I'm a developer who loves turning complex ideas into smooth, intuitive products. From mobile apps with Flutter to responsive web interfaces, I care about every pixel and every interaction.",
      about_p2:
        "My work blends solid engineering with a strong design sense — fast, accessible and delightful on every screen size.",
      about_point1: "Clean, maintainable code",
      about_point2: "Pixel-perfect interfaces",
      about_point3: "Smooth animations",
      about_point4: "Mobile-first mindset",

      stat_years: "Years of Experience",
      stat_projects: "Projects Completed",
      stat_tech: "Technologies Mastered",
      stat_satisfaction: "Client Satisfaction",

      services_tag: "What I Do",
      services_title: 'Services &amp; <span class="grad">Expertise</span>',
      services_sub:
        "From concept to launch — I design and build digital experiences end to end.",
      srv1_title: "Mobile App Development",
      srv1_desc:
        "Cross-platform apps with Flutter & Dart that feel native, fast and beautiful on iOS and Android.",
      srv2_title: "Frontend & Web Apps",
      srv2_desc:
        "Responsive, interactive websites and web apps built with modern JavaScript and clean CSS.",
      srv3_title: "UI / UX Design",
      srv3_desc:
        "Intuitive interfaces and design systems focused on clarity, accessibility and delightful motion.",

      skills_tag: "Skills",
      skills_title: 'My Tech <span class="grad">Stack</span>',
      skills_sub:
        "The tools and technologies I use every day to bring products to life.",
      skills_core: "Core Skills",
      skills_tools: "Tools & Platforms",

      projects_tag: "Portfolio",
      projects_title: 'Featured <span class="grad">Projects</span>',
      projects_sub: "A selection of apps and products I've designed and built.",
      project_taqseema: "Taqseema",
      project_taqseema_desc:
        "A social hub to book football pitches, find teammates and build teams.",
      project_mafia: "Mafia",
      project_mafia_desc:
        "A social strategy game of deception, roles and survival with friends.",
      project_mafiosu: "Mafiosu",
      project_mafiosu_desc:
        "An immersive investigation game with dynamic roles and dark UI.",
      project_athr: "Athr",
      project_athr_desc:
        "A comprehensive Islamic app to enrich daily spirituality.",
      project_journaly: "Journaly",
      project_journaly_desc:
        "Your daily companion to track mood, productivity and habits.",
      project_view: "View Project",
      projects_more_title: "More on GitHub",
      projects_more_desc: "Explore my open-source work and experiments.",
      projects_more_btn: "Visit GitHub",

      contact_tag: "Contact",
      contact_title:
        'Have a project in mind? <span class="grad">Let\'s build it</span>',
      contact_sub:
        "Available for freelance work, collaboration and full-time opportunities.",
      contact_email_label: "Email",
      contact_social_label: "LinkedIn",
      contact_location_label: "Location",
      contact_location_value: "Egypt",
      contact_github_label: "GitHub",
      form_name: "Your Name",
      form_email: "Your Email",
      form_subject: "Subject",
      form_message: "Message",
      form_send: "Send Message",
      form_sending: "Sending...",
      msg_success: "Message sent successfully! I'll get back to you soon.",
      msg_error: "Oops! Something went wrong. Please try again.",

      footer_tagline:
        "Frontend & mobile developer crafting modern, interactive digital experiences.",
      footer_nav_title: "Navigation",
      footer_services_title: "Services",
      footer_social_title: "Connect",
      footer_rights: "© {year} Alamir Talal. All rights reserved.",

      back_to_projects: "Back to Projects",
      proj_overview: "Overview",
      proj_key_features: "Key Features",
      proj_tech_used: "Technologies Used",
      proj_visit: "Visit Project",
    },

    ar: {
      nav_home: "الرئيسية",
      nav_about: "نبذة",
      nav_services: "الخدمات",
      nav_skills: "المهارات",
      nav_projects: "المشاريع",
      nav_contact: "تواصل",
      nav_cta: "لنبدأ",

      hero_badge: "متاح لمشاريع العمل الحر",
      hero_hello: "مرحباً، أنا",
      hero_roles: ["مطور واجهات أمامية", "مطور فلاتر", "مصمم واجهات", "صانع حلول"],
      hero_desc:
        "أصنع تطبيقات ويب وموبايل حديثة وتفاعلية وعالية الأداء، مع تركيز شديد على نظافة الواجهة وتجربة مستخدم ممتعة.",
      hero_cta1: "شاهد أعمالي",
      hero_cta2: "لنتحدث",
      hero_scroll: "انزل",

      marquee_text:
        "مطور واجهات ✦ مطور فلاتر ✦ مصمم واجهات ✦ تطبيقات موبايل ✦ تطبيقات ويب",

      about_tag: "نبذة عني",
      about_title: 'أصنع منتجات رقمية <span class="grad">تنبض بالحياة</span>',
      about_p1:
        "أنا مطور أحب تحويل الأفكار المعقدة إلى منتجات سلسة وبديهية. من تطبيقات الموبايل بفلاتر إلى واجهات الويب المتجاوبة، أهتم بكل بكسل وكل تفاعل.",
      about_p2:
        "عملي يمزج بين الهندسة القوية والحس التصميمي — سريع ومتاح وممتع على كل المقاسات.",
      about_point1: "كود نظيف وقابل للصيانة",
      about_point2: "واجهات مثالية بالبكسل",
      about_point3: "حركات سلسة",
      about_point4: "تفكير يبدأ من الموبايل",

      stat_years: "سنوات خبرة",
      stat_projects: "مشروع مكتمل",
      stat_tech: "تقنية متقنة",
      stat_satisfaction: "رضا العملاء",

      services_tag: "ما أقدمه",
      services_title: 'الخدمات &amp; <span class="grad">الخبرات</span>',
      services_sub: "من الفكرة إلى الإطلاق — أصمّم وأبني التجارب الرقمية من البداية للنهاية.",
      srv1_title: "تطوير تطبيقات الموبايل",
      srv1_desc:
        "تطبيقات متعددة المنصات بفلاتر ودارت تبدو أصلية وسريعة وجميلة على iOS وأندرويد.",
      srv2_title: "الواجهات الأمامية والويب",
      srv2_desc:
        "مواقع وتطبيقات ويب متجاوبة وتفاعلية مبنية بجافاسكريبت الحديثة وCSS نظيفة.",
      srv3_title: "تصميم واجهات المستخدم",
      srv3_desc:
        "واجهات بديهية وأنظمة تصميم تركز على الوضوح وسهولة الوصول والحركة الممتعة.",

      skills_tag: "المهارات",
      skills_title: 'ترسانتي <span class="grad">التقنية</span>',
      skills_sub: "الأدوات والتقنيات التي أستخدمها يومياً لإحياء المنتجات.",
      skills_core: "المهارات الأساسية",
      skills_tools: "الأدوات والمنصات",

      projects_tag: "أعمالي",
      projects_title: 'مشاريع <span class="grad">مميزة</span>',
      projects_sub: "مجموعة مختارة من التطبيقات والمنتجات التي صممتها وبنيتها.",
      project_taqseema: "تقسيمة",
      project_taqseema_desc:
        "مجتمع اجتماعي لحجز ملاعب الكرة والبحث عن لاعبين وبناء الفرق.",
      project_mafia: "مافيا",
      project_mafia_desc:
        "لعبة استراتيجية اجتماعية قائمة على الخداع والأدوار والنجاة مع الأصدقاء.",
      project_mafiosu: "مافيوسو",
      project_mafiosu_desc:
        "لعبة تحقيق غامرة بأدوار ديناميكية وواجهة داكنة.",
      project_athr: "أثر",
      project_athr_desc: "تطبيق إسلامي شامل يعزز الروحانية اليومية.",
      project_journaly: "جورنالي",
      project_journaly_desc:
        "رفيقك اليومي لتتبع المزاج والإنتاجية والعادات.",
      project_view: "عرض المشروع",
      projects_more_title: "المزيد على جِتهاب",
      projects_more_desc: "استكشف أعمالي مفتوحة المصدر وتجاربي.",
      projects_more_btn: "زيارة جِتهاب",

      contact_tag: "تواصل",
      contact_title:
        'عندك مشروع في بالك؟ <span class="grad">لنبنيه معاً</span>',
      contact_sub:
        "متاح للعمل الحر والتعاون والفرص بدوام كامل.",
      contact_email_label: "البريد الإلكتروني",
      contact_social_label: "لينكدإن",
      contact_location_label: "الموقع",
      contact_location_value: "مصر",
      contact_github_label: "جِتهاب",
      form_name: "اسمك",
      form_email: "بريدك الإلكتروني",
      form_subject: "الموضوع",
      form_message: "الرسالة",
      form_send: "إرسال الرسالة",
      form_sending: "جارٍ الإرسال...",
      msg_success: "تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.",
      msg_error: "عفواً! حدثت مشكلة. حاول مرة أخرى.",

      footer_tagline:
        "مطور واجهات وموبايل أصنع تجارب رقمية حديثة وتفاعلية.",
      footer_nav_title: "التنقل",
      footer_services_title: "الخدمات",
      footer_social_title: "تواصل",
      footer_rights: "© {year} الأمير طلال. جميع الحقوق محفوظة.",

      back_to_projects: "الرجوع للمشاريع",
      proj_overview: "نظرة عامة",
      proj_key_features: "أهم المميزات",
      proj_tech_used: "التقنيات المستخدمة",
      proj_visit: "زيارة المشروع",
    },
  };

  /* =======================================================
     State
     ======================================================= */
  const html = document.documentElement;
  const langToggle = document.getElementById("lang-toggle");
  const langLabel = document.getElementById("lang-label");
  let currentLang = localStorage.getItem("app-lang") || "en";
  let typingTimeouts = [];

  /* =======================================================
     i18n
     ======================================================= */
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("app-lang", lang);

    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    if (langLabel) langLabel.textContent = lang === "ar" ? "EN" : "AR";

    const dict = translations[lang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = dict[key];
        } else {
          el.innerHTML = dict[key];
        }
      }
    });

    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    // Footer year
    const copy = document.getElementById("footer-copy");
    if (copy) {
      copy.textContent = dict.footer_rights.replace("{year}", new Date().getFullYear());
    }

    // Restart hero typewriter in the new language
    startRoleTyping();

    // Notify other scripts (e.g. project detail page)
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: lang } }));
  }

  /* =======================================================
     Hero role typewriter
     ======================================================= */
  const roleEl = document.getElementById("typed-role");

  function startRoleTyping() {
    if (!roleEl) return;
    typingTimeouts.forEach(clearTimeout);
    typingTimeouts = [];

    const roles = translations[currentLang].hero_roles;
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      const word = roles[roleIndex];

      if (!deleting) {
        charIndex++;
        roleEl.textContent = word.slice(0, charIndex);
        if (charIndex === word.length) {
          deleting = true;
          typingTimeouts.push(setTimeout(tick, 1600));
          return;
        }
      } else {
        charIndex--;
        roleEl.textContent = word.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      typingTimeouts.push(setTimeout(tick, deleting ? 45 : 85));
    }

    tick();
  }

  /* =======================================================
     Hero code window typing
     ======================================================= */
  const codeEl = document.getElementById("code-typed");

  const CODE_TOKENS = [
    { c: "c-key", t: "const " },
    { c: "c-var", t: "developer" },
    { c: "", t: " = {\n" },
    { c: "", t: "  " },
    { c: "c-key", t: "name" },
    { c: "", t: ": " },
    { c: "c-str", t: '"Alamir Talal"' },
    { c: "", t: ",\n  " },
    { c: "c-key", t: "role" },
    { c: "", t: ": " },
    { c: "c-str", t: '"Frontend Developer"' },
    { c: "", t: ",\n  " },
    { c: "c-key", t: "skills" },
    { c: "", t: ": [" },
    { c: "c-str", t: '"Flutter"' },
    { c: "", t: ", " },
    { c: "c-str", t: '"Dart"' },
    { c: "", t: ", " },
    { c: "c-str", t: '"Firebase"' },
    { c: "", t: "],\n" },
    { c: "", t: "};\n\n" },
    { c: "c-key", t: "function " },
    { c: "c-fn", t: "build" },
    { c: "", t: "(" },
    { c: "c-var", t: "idea" },
    { c: "", t: ") {\n  " },
    { c: "c-key", t: "return " },
    { c: "c-var", t: "idea" },
    { c: "", t: "." },
    { c: "c-fn", t: "design" },
    { c: "", t: "()." },
    { c: "c-fn", t: "code" },
    { c: "", t: "()." },
    { c: "c-fn", t: "ship" },
    { c: "", t: "();\n}\n\n" },
    { c: "c-fn", t: "build" },
    { c: "", t: "(" },
    { c: "c-var", t: "developer" },
    { c: "", t: ")." },
    { c: "c-fn", t: "launch" },
    { c: "", t: "();" },
  ];

  function typeCode() {
    if (!codeEl) return;
    codeEl.textContent = "";
    let ti = 0;
    let ci = 0;
    let span = null;

    function step() {
      if (ti >= CODE_TOKENS.length) return;
      const token = CODE_TOKENS[ti];
      if (!span) {
        span = document.createElement("span");
        span.className = token.c;
        codeEl.appendChild(span);
      }
      span.textContent += token.t[ci];
      ci++;
      if (ci >= token.t.length) {
        ti++;
        ci = 0;
        span = null;
      }
      setTimeout(step, token.t[ci - 1] === "\n" ? 90 : 22);
    }
    step();
  }

  /* =======================================================
     Navigation / scroll UI
     ======================================================= */
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("nav-toggle");
  const drawer = document.getElementById("drawer");
  const toTop = document.getElementById("to-top");
  const progress = document.getElementById("scroll-progress");

  function onScroll() {
    const y = window.scrollY;
    if (nav) nav.classList.toggle("scrolled", y > 40);
    if (toTop) toTop.classList.toggle("show", y > 600);
    if (progress) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function closeDrawer() {
    if (navToggle) navToggle.classList.remove("active");
    if (drawer) drawer.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (navToggle && drawer) {
    navToggle.addEventListener("click", () => {
      const open = drawer.classList.toggle("open");
      navToggle.classList.toggle("active", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeDrawer));
  }

  /* Active link on scroll */
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");
  if ("IntersectionObserver" in window && navAnchors.length) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navAnchors.forEach((a) =>
              a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id)
            );
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
  }

  /* =======================================================
     Reveal on scroll
     ======================================================= */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = Math.min(i * 70, 350) + "ms";
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealObs.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* =======================================================
     Skill bars
     ======================================================= */
  const skillCols = document.querySelectorAll(".skill-col");
  if ("IntersectionObserver" in window) {
    const skillObs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".skill-bar").forEach((bar) => {
              const fill = bar.querySelector(".skill-fill");
              if (fill) fill.style.width = bar.getAttribute("data-level") + "%";
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    skillCols.forEach((c) => skillObs.observe(c));
  }

  /* =======================================================
     Stats counters
     ======================================================= */
  const statsEl = document.querySelector(".stats");
  if (statsEl && "IntersectionObserver" in window) {
    const statObs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.querySelectorAll(".num").forEach((num) => {
            const target = parseInt(num.getAttribute("data-count"), 10) || 0;
            const suffix = num.getAttribute("data-suffix") || "";
            const duration = 1500;
            const start = performance.now();
            function run(now) {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              num.textContent = Math.round(eased * target) + suffix;
              if (p < 1) requestAnimationFrame(run);
            }
            requestAnimationFrame(run);
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );
    statObs.observe(statsEl);
  }

  /* =======================================================
     Custom cursor
     ======================================================= */
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  const finePointer = window.matchMedia("(hover: hover) and (min-width: 901px)").matches;

  if (dot && ring && finePointer) {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    window.addEventListener("pointermove", (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    });

    function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    }
    loop();

    document
      .querySelectorAll("a, button, .project, .service, .tech, .contact-card, input, textarea")
      .forEach((el) => {
        el.addEventListener("pointerenter", () => ring.classList.add("grow"));
        el.addEventListener("pointerleave", () => ring.classList.remove("grow"));
      });
  }

  /* =======================================================
     Magnetic-ish float chips parallax
     ======================================================= */
  const chips = document.querySelectorAll(".float-chip");
  if (chips.length && finePointer) {
    const visual = document.querySelector(".hero-visual");
    if (visual) {
      visual.addEventListener("pointermove", (e) => {
        const rect = visual.getBoundingClientRect();
        const cx = (e.clientX - rect.left) / rect.width - 0.5;
        const cy = (e.clientY - rect.top) / rect.height - 0.5;
        chips.forEach((chip, i) => {
          const depth = (i + 1) * 10;
          chip.style.transform = `translate(${cx * depth}px, ${cy * depth}px)`;
        });
      });
      visual.addEventListener("pointerleave", () => {
        chips.forEach((chip) => (chip.style.transform = ""));
      });
    }
  }

  /* =======================================================
     Contact form
     ======================================================= */
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const submitBtn = document.getElementById("submit-button");

  if (form && status) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const dict = translations[currentLang];
      const label = submitBtn.querySelector("span");

      if (label) label.textContent = dict.form_sending;
      submitBtn.disabled = true;
      status.className = "form-status";

      try {
        const res = await fetch(form.action, {
          method: form.method,
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          status.textContent = dict.msg_success;
          status.classList.add("ok");
          form.reset();
        } else {
          status.textContent = dict.msg_error;
          status.classList.add("err");
        }
      } catch (err) {
        status.textContent = dict.msg_error;
        status.classList.add("err");
      } finally {
        if (label) label.textContent = translations[currentLang].form_send;
        submitBtn.disabled = false;
      }
    });
  }

  /* =======================================================
     GSAP hero intro (optional enhancement)
     ======================================================= */
  function heroIntro() {
    if (typeof gsap === "undefined") return;
    if (!document.querySelector(".hero")) return;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".nav-inner", { y: -20, opacity: 0, duration: 0.7 })
      .from(".hero-badge", { y: 20, opacity: 0, duration: 0.6 }, "-=0.3")
      .from(".hero .tag", { y: 20, opacity: 0, duration: 0.5 }, "-=0.35")
      .from(".hero h1", { y: 30, opacity: 0, duration: 0.7 }, "-=0.3")
      .from(".hero-roles", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
      .from(".hero-desc", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
      .from(".hero-cta .btn", { y: 20, opacity: 0, duration: 0.5, stagger: 0.12 }, "-=0.4")
      .from(".hero-socials", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
      .from(".hero-visual", { y: 30, opacity: 0, duration: 0.9 }, "-=0.8")
      .from(".float-chip", { scale: 0, opacity: 0, duration: 0.5, stagger: 0.14 }, "-=0.5");
  }

  /* =======================================================
     Init
     ======================================================= */
  applyLanguage(currentLang);
  typeCode();
  heroIntro();

  // Keep footer year fresh even if run at midnight
  window.addEventListener("beforeunload", () => typingTimeouts.forEach(clearTimeout));

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      applyLanguage(currentLang === "en" ? "ar" : "en");
    });
  }
})();
