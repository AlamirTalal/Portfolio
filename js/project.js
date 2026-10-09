/* =========================================================
   Project detail page — data + renderer (EN / AR)
   Reads ?p=<slug> and updates on language toggle.
   ========================================================= */
(function () {
  "use strict";

  const PROJECTS = {
    taqseema: {
      cover: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      link: "https://alamirtalal.github.io/Taqsima-Validation/",
      tech: ["Flutter", "Dart", "Firebase", "Maps", "UI/UX"],
      en: {
        kind: "Mobile App",
        title: "Taqseema",
        lead: "A social hub to book football pitches, find teammates and build teams.",
        long: "Taqseema isn't just an app; it's a vibrant community for football enthusiasts. It simplifies your life by making pitch booking seamless, while also serving as a social space to meet players who share your passion. Whether you're looking to form a team or find a missing player, Taqseema brings the football community together.",
        features: [
          "Effortless pitch booking and match organization.",
          "Sub-finder to quickly find teammates.",
          "A social hub to connect with like-minded football players.",
          "Interactive 'Taqsima' drag-and-drop team formation UI.",
        ],
      },
      ar: {
        kind: "تطبيق موبايل",
        title: "تقسيمة",
        lead: "مجتمع اجتماعي لحجز ملاعب الكرة والبحث عن لاعبين وبناء الفرق.",
        long: "تقسيمة مش مجرد تطبيق عادي، هو مجتمع متكامل للاعبي الكورة. التطبيق بيسهل حياتك في حجز الملاعب وتنظيم المباريات، وفي نفس الوقت هو مكان اجتماعي بيجمعك بناس شبهك عندهم نفس الشغف. سواء كنت بتدور على لاعب يكمل فريقك أو عايز تبني فريق من الصفر، تقسيمة هيظبطك.",
        features: [
          "حجز الملاعب وتنظيم المباريات بسهولة تامة.",
          "ميزة 'ناقصنا لاعب' للبحث السريع عن زملاء للفريق.",
          "مجتمع اجتماعي للتواصل مع لاعبي كرة القدم.",
          "واجهة 'التقسيمة' التفاعلية بخاصية السحب والإفلات.",
        ],
      },
    },

    mafia: {
      cover: "https://images.unsplash.com/photo-1578419998076-480e5c2e3841?q=80&w=1600&auto=format&fit=crop",
      link: "",
      tech: ["Flutter", "Dart", "Firebase", "Realtime", "UI/UX"],
      en: {
        kind: "Game",
        title: "Mafia",
        lead: "A social strategy game of deception, roles and survival with friends.",
        long: "Mafia is the ultimate test of your cunning and manipulation skills. Here deception is your best weapon; you have to be sly, lie to your friends, wear different masks, and orchestrate betrayals without getting caught. Can you survive the psychological warfare?",
        features: [
          "Intense psychological gameplay based on deception.",
          "Real-time multiplayer lobbies to play with friends.",
          "Blind role distribution for maximum unpredictability.",
          "Atmospheric UI designed for a dark, secretive experience.",
        ],
      },
      ar: {
        kind: "لعبة",
        title: "مافيا",
        lead: "لعبة استراتيجية اجتماعية قائمة على الخداع والأدوار والنجاة مع الأصدقاء.",
        long: "مافيا هي الاختبار الحقيقي لمدى دهائك وقدرتك على الخداع. هنا الخبث هو سلاحك الوحيد؛ لازم تكدب على اللي حواليك، تركب وشوش مش وشك، وتتلاعب بالكل عشان توصل لهدفك من غير ما حد يكشفك. هل هتقدر تلعب بيهم كلهم وتطلع منها سليم؟",
        features: [
          "لعب نفسي مكثف يعتمد على الخداع والمكر.",
          "غرف لعب جماعية في الوقت الفعلي مع أصدقائك.",
          "توزيع أدوار خفي لضمان أقصى درجات الغموض.",
          "تصميم واجهة مظلم وغامض لتعزيز تجربة اللعب.",
        ],
      },
    },

    mafiosu: {
      cover: "https://i.pinimg.com/736x/61/f9/93/61f99306cc6e9cae430edda22a858daa.jpg",
      link: "",
      tech: ["Flutter", "Dart", "Offline-first", "UI/UX"],
      en: {
        kind: "Game",
        title: "Mafiosu",
        lead: "An immersive investigation game with dynamic roles and dark UI.",
        long: "Dive into a dark world of mystery where you are everything: the prime suspect, the lead investigator, and the ultimate judge. In Mafiosu, every word counts. You must fiercely defend yourself, logically attack your opponents, and incite the crowd to survive. It's a psychological battle of survival and wits.",
        features: [
          "Dynamic roles shifting between suspect, detective, and judge.",
          "Offline-first case sync for uninterrupted investigation.",
          "Advanced argument and clue management mechanics.",
          "Premium dark-themed UI tailored for immersive role-playing.",
        ],
      },
      ar: {
        kind: "لعبة",
        title: "مافيوسو",
        lead: "لعبة تحقيق غامرة بأدوار ديناميكية وواجهة داكنة.",
        long: "ادخل عالم غامض مليان بالأسرار، هنا أنت مش بس لاعب، أنت المشتبه به، المحقق، والقاضي في نفس اللحظة. في مافيوسو، لازم تتكلم عشان تدافع عن نفسك بشراسة، أو تهاجم وتحرض ضد غيرك عشان تنجو. اللعبة بتعتمد على قدرتك في الإقناع والنجاة وسط أجواء التحقيق المشحونة.",
        features: [
          "أدوار ديناميكية تتنقل بين المشتبه به، المحقق، والقاضي.",
          "مزامنة القضايا بدون إنترنت (Offline-First) لاستمرار اللعب.",
          "ميكانيكيات متقدمة لإدارة الحجج والأدلة.",
          "واجهة مظلمة مصممة خصيصاً لتقمص الأدوار.",
        ],
      },
    },

    athr: {
      cover: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1600&auto=format&fit=crop",
      link: "",
      tech: ["Flutter", "Dart", "Firebase", "REST API", "UI/UX"],
      en: {
        kind: "Mobile App",
        title: "Athr",
        lead: "A comprehensive Islamic app to enrich daily spirituality.",
        long: "Athr is designed to be your daily spiritual companion. It provides all the essential tools a Muslim needs in one place, with a beautiful and intuitive interface. From prayer times to Quran tracking and Prophet stories, Athr helps you stay connected to your faith throughout the day.",
        features: [
          "Accurate prayer times based on location.",
          "The Holy Quran with reading and memorization features.",
          "Authentic Hadiths from reliable sources.",
          "Qibla compass for determining prayer direction.",
          "Daily prayer and Quran progress tracking.",
          "Engaging and inspiring stories of the Prophets.",
        ],
      },
      ar: {
        kind: "تطبيق موبايل",
        title: "أثر",
        lead: "تطبيق إسلامي شامل يعزز الروحانية اليومية.",
        long: "أثر هو رفيقك الروحاني اليومي، بيجمع لك كل اللي محتاجه كمسلم في مكان واحد بواجهة سهلة ومريحة. من مواقيت الصلاة للمصحف وتتبع الورد وقصص الأنبياء، أثر بيساعدك تفضل متصل بعباداتك طول اليوم بشكل منظم وجميل.",
        features: [
          "مواقيت الصلاة بدقة بناءً على الموقع.",
          "المصحف الشريف مع إمكانيات القراءة والحفظ.",
          "الأحاديث الصحيحة من مصادر موثوقة.",
          "بوصلة القبلة لتحديد اتجاه الصلاة.",
          "تتبع الصلاة والورد القرآني يومياً.",
          "قصص الأنبياء بأسلوب ممتع وشيق.",
        ],
      },
    },

    journaly: {
      cover: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      link: "",
      tech: ["Flutter", "Dart", "Local DB", "Charts", "UI/UX"],
      en: {
        kind: "Productivity",
        title: "Journaly",
        lead: "Your daily companion to track mood, productivity and habits.",
        long: "Journaly is more than just a diary; it's a powerful tool for self-improvement. By tracking your sleep, happiness, tasks, and habits, it provides you with clear insights into your life through detailed periodic reports. It helps you stay organized and mindful of your daily progress.",
        features: [
          "Logging sleep hours and daily activity.",
          "Tracking happiness percentage and general mood.",
          "Integrated Todo List showing completed vs. total tasks.",
          "Daily prayer and worship tracking.",
          "Periodic reports (daily, weekly, monthly) for progress analysis.",
          "Personal space for writing daily notes and journals.",
        ],
      },
      ar: {
        kind: "إنتاجية",
        title: "جورنالي",
        lead: "رفيقك اليومي لتتبع المزاج والإنتاجية والعادات.",
        long: "جورنالي مش مجرد مذكرة، هو أداة قوية لتطوير الذات. من خلال تتبع نومك وسعادتك ومهامك اليومية، التطبيق بيقدملك تقارير واضحة بتفهمك أكتر عن يومك وبتساعدك تحسن من عاداتك وتكون أكتر إنتاجية وتركيز.",
        features: [
          "تسجيل ساعات النوم والنشاط اليومي.",
          "تتبع نسبة السعادة والمزاج العام.",
          "قائمة مهام (Todo List) متكاملة تظهر الإنجاز.",
          "تتبع الصلوات والعبادات اليومية.",
          "تقارير دورية (يومية، أسبوعية، شهرية) لتحليل التقدم.",
          "مساحة لكتابة الملاحظات واليوميات الخاصة.",
        ],
      },
    },
  };

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("p");
  const project = PROJECTS[slug] ? slug : "taqseema";
  const data = PROJECTS[project];

  const els = {
    kind: document.getElementById("proj-kind"),
    title: document.getElementById("proj-title"),
    lead: document.getElementById("proj-lead"),
    cover: document.getElementById("proj-cover"),
    long: document.getElementById("proj-long"),
    features: document.getElementById("proj-features"),
    tech: document.getElementById("proj-tech"),
    link: document.getElementById("proj-link"),
  };

  function getLang() {
    return localStorage.getItem("app-lang") || "en";
  }

  function render(lang) {
    const t = data[lang] || data.en;

    if (els.kind) els.kind.textContent = t.kind;
    if (els.title) els.title.textContent = t.title;
    if (els.lead) els.lead.textContent = t.lead;
    if (els.long) els.long.textContent = t.long;
    if (els.cover) {
      els.cover.src = data.cover;
      els.cover.alt = t.title;
    }

    if (els.features) {
      els.features.innerHTML = "";
      t.features.forEach((f) => {
        const li = document.createElement("li");
        li.innerHTML = '<i class="fa-solid fa-circle-check"></i><span></span>';
        li.querySelector("span").textContent = f;
        els.features.appendChild(li);
      });
    }

    if (els.tech) {
      els.tech.innerHTML = "";
      data.tech.forEach((tag) => {
        const span = document.createElement("span");
        span.textContent = tag;
        els.tech.appendChild(span);
      });
    }

    if (els.link) {
      if (data.link) {
        els.link.href = data.link;
        els.link.style.display = "";
      } else {
        els.link.style.display = "none";
      }
    }

    document.title = t.title + " — Alamir Talal";
  }

  render(getLang());
  document.addEventListener("languagechange", (e) => render(e.detail.lang));
})();
