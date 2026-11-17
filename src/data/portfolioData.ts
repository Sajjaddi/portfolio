export type Language = "en" | "fa";

export interface ProjectItem {
  id: string;
  title: { en: string; fa: string };
  category: "fullstack" | "web3" | "client" | "frontend";
  role: { en: string; fa: string };
  period: string;
  description: { en: string; fa: string };
  highlights: { en: string[]; fa: string[] };
  tags: string[];
  liveUrl: string;
  featured?: boolean;
  accentColor: "cyan" | "purple" | "emerald" | "amber";
}

export interface ExperienceItem {
  company: { en: string; fa: string };
  role: { en: string; fa: string };
  location: { en: string; fa: string };
  period: { en: string; fa: string };
  type: { en: string; fa: string };
  description: { en: string; fa: string };
  bulletPoints: { en: string[]; fa: string[] };
  technologies: string[];
  liveUrl?: string;
}

export interface EducationItem {
  degree: { en: string; fa: string };
  institution: { en: string; fa: string };
  period: string;
  description: { en: string; fa: string };
}

export interface PortfolioData {
  personal: {
    name: { en: string; fa: string };
    title: { en: string; fa: string };
    tagline: { en: string; fa: string };
    bio: { en: string; fa: string };
    location: { en: string; fa: string };
    email: string;
    resumeUrl: string;
    telegram: string;
    telegramUsername: string;
    github: string;
    githubUsername: string;
    linkedin: string;
    status: { en: string; fa: string };
    experienceYears: string;
    dappsCount: string;
    projectsCount: string;
  };
  preferences: {
    freelance: {
      title: { en: string; fa: string };
      badge: { en: string; fa: string };
      description: { en: string; fa: string };
      perks: { en: string[]; fa: string[] };
    };
    remote: {
      title: { en: string; fa: string };
      badge: { en: string; fa: string };
      description: { en: string; fa: string };
      perks: { en: string[]; fa: string[] };
    };
    hybrid: {
      title: { en: string; fa: string };
      badge: { en: string; fa: string };
      description: { en: string; fa: string };
      perks: { en: string[]; fa: string[] };
    };
  };
  skills: {
    category: { en: string; fa: string };
    icon: string;
    items: { name: string; level: number; featured?: boolean }[];
  }[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: {
      en: "Sajjad Jahani",
      fa: "سجاد جهانی",
    },
    title: {
      en: "Software Engineer",
      fa: "مهندس نرم‌افزار",
    },
    tagline: {
      en: "4+ years engineering scalable web applications, modern full-stack systems, and high-performance Web3 solutions.",
      fa: "بیش از ۴ سال تجربه در مهندسی نرم‌افزار، سامانه‌های وب مقیاس‌پذیر و راهکارهای پرسرعت وب۳.",
    },
    bio: {
      en: "Software Engineer with 4+ years of hands-on experience building production-grade web applications. Proven track record delivering 20+ Web3 DApps, high-concurrency Telegram Mini Apps, and enterprise admin panels. Highly skilled in clean architecture, full-stack systems (Next.js & NestJS), Core Web Vitals optimization, and microservice/API engineering.",
      fa: "مهندس نرم‌افزار با بیش از ۴ سال تجربه عملی در طراحی و پیاده‌سازی وب‌اپلیکیشن‌های در مقیاس بالا. با سابقه انتشار بیش از ۲۰ دپ وب۳، مینی‌اپ‌های تلگرام با ترافیک بالا و پنل‌های مدیریتی پیشرفته. مسلط به معماری تمیز، توسعه فول‌استک با Next.js و NestJS، بهینه‌سازی سرعت و طراحی وب‌سرویس‌های مقیاس‌پذیر.",
    },
    location: {
      en: "Tehran, Iran",
      fa: "تهران، ایران",
    },
    email: "SajjadiDeveloper@gmail.com",
    resumeUrl: "/Sajjad_Jahani_CV.pdf",
    telegram: "https://t.me/sajjadidev",
    telegramUsername: "@sajjadidev",
    github: "https://github.com/Sajjaddi",
    githubUsername: "Sajjaddi",
    linkedin: "https://www.linkedin.com/in/sajjad-jahani",
    status: {
      en: "Available for Freelance, Remote & Hybrid Roles",
      fa: "آماده همکاری پروژه‌ای، دورکاری و هیبریدی",
    },
    experienceYears: "4+",
    dappsCount: "20+",
    projectsCount: "10+",
  },
  preferences: {
    freelance: {
      title: {
        en: "Freelance / Contract",
        fa: "فریلنس و پروژه‌ای",
      },
      badge: {
        en: "Available Immediately",
        fa: "آماده شروع فوری",
      },
      description: {
        en: "End-to-end ownership for startup MVPs, landing pages, interactive dashboards, or full-stack solo applications.",
        fa: "مالکیت کامل از ایده تا استقرار؛ ساخت MVP استارتاپی، لندینگ پیج‌های پیشرفته، داشبوردهای تعاملی و وب‌اپ‌های فول‌استک.",
      },
      perks: {
        en: [
          "Rapid delivery with high code quality",
          "Direct communication & transparent milestones",
          "Full-stack capability (Next.js + NestJS)",
          "SEO & Core Web Vitals optimization",
        ],
        fa: [
          "تحویل سریع همراه با رعایت بالاترین استانداردهای کدنویسی",
          "ارتباط شفاف و گام‌به‌گام در تمام مراحل پروژه",
          "توانمندی فول‌استک (Next.js + NestJS)",
          "بهینه‌سازی کامل سئو و Core Web Vitals",
        ],
      },
    },
    remote: {
      title: {
        en: "Remote Work",
        fa: "دورکاری تمام‌وقت / پاره‌وقت",
      },
      badge: {
        en: "Worldwide & Local",
        fa: "تیم‌های داخلی و بین‌المللی",
      },
      description: {
        en: "Seamless asynchronous collaboration with international or distributed engineering teams using modern Agile workflows.",
        fa: "همکاری موثر و چابک با تیم‌های توزیع‌شده با ابزارهای مدرن گیت، ارتباطات شفاف و مسئولیت‌پذیری بالا.",
      },
      perks: {
        en: [
          "Proficient in Git / PR review workflows",
          "Autonomous problem solver with strong async discipline",
          "Flexible working hours across timezones",
          "Extensive experience with remote team sprints",
        ],
        fa: [
          "مسلط به فرآیندهای بازبینی کد و Git Flow",
          "حل مسئله مستقل و تمرکز بالا در محیط دورکاری",
          "انعطاف زمانی متناسب با تایم‌زون‌های بین‌المللی",
          "سابقه طولانی در تیم‌های توزیع‌شده و اسکرام",
        ],
      },
    },
    hybrid: {
      title: {
        en: "Hybrid / On-Site",
        fa: "هیبرید و حضوری",
      },
      badge: {
        en: "Tehran, Iran",
        fa: "تهران",
      },
      description: {
        en: "Open to hybrid positions in Tehran, combining focused remote work with collaborative on-site architecture and team sessions.",
        fa: "آمادگی برای همکاری ترکیبی (حضوری + دورکاری) در تهران جهت حضور در جلسات معماری، هم‌افزایی تیمی و هدایت فرانت‌اند.",
      },
      perks: {
        en: [
          "Mentorship & code quality advocacy",
          "Collaborative architectural planning",
          "Fast cross-functional sync with product & design",
          "Reliable presence in sprint milestones",
        ],
        fa: [
          "منتورشیپ و ترویج فرهنگ کدنویسی تمیز",
          "مشارکت در جلسات طراحی معماری نرم‌افزار",
          "هماهنگی سریع با تیم‌های محصول و طراحی UI/UX",
          "حضور موثر و متعهدانه در روزهای مشخص‌شده",
        ],
      },
    },
  },
  skills: [
    {
      category: { en: "Core Frontend", fa: "هسته فرانت‌اند" },
      icon: "Code2",
      items: [
        { name: "Next.js (App Router / SSR / ISR)", level: 90, featured: true },
        { name: "React 18 / 19", level: 95, featured: true },
        { name: "TypeScript", level: 85, featured: true },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "PWA & Offline Storage (Dexie)", level: 85 },
      ],
    },
    {
      category: { en: "Styling & UI Systems", fa: "طراحی رابط و استایل" },
      icon: "Palette",
      items: [
        { name: "Tailwind CSS", level: 95, featured: true },
        { name: "shadcn/ui & Radix UI", level: 90, featured: true },
        { name: "Atomic Design Principles", level: 90 },
        { name: "Responsive & Mobile-First", level: 95 },
        { name: "Framer Motion & CSS Animation", level: 85 },
      ],
    },
    {
      category: { en: "State Management & Forms", fa: "مدیریت وضعیت و فرم‌ها" },
      icon: "Cpu",
      items: [
        { name: "Zustand", level: 90, featured: true },
        { name: "TanStack Query (React Query)", level: 92, featured: true },
        { name: "Redux / Redux Toolkit", level: 85 },
        { name: "React Hook Form & Zod", level: 90, featured: true },
        { name: "Context API", level: 90 },
      ],
    },
    {
      category: { en: "Full-Stack & Backend", fa: "فول‌استک و بک‌اند" },
      icon: "Server",
      items: [
        { name: "NestJS (REST APIs, JWT, Auth)", level: 75, featured: true },
        { name: "Node.js & Express", level: 75 },
        { name: "PostgreSQL & TypeORM", level: 75 },
        { name: "Docker & Containerization", level: 65 },
        { name: "Nginx & Production Servers", level: 60 },
      ],
    },
    {
      category: { en: "Web3 & Real-Time", fa: "وب۳ و داده‌های آنی" },
      icon: "Zap",
      items: [
        { name: "Solana & Wagmi Integration", level: 85, featured: true },
        { name: "Reown / AppKit / Wallets", level: 90 },
        { name: "Telegram Mini Apps (TMA)", level: 88, featured: true },
        { name: "WebSocket & Socket.io", level: 85 },
        { name: "Real-Time Trading Charts", level: 85 },
      ],
    },
  ],
  projects: [
    {
      id: "calfit",
      title: {
        en: "CalFit — Full-Stack Fitness Tracker",
        fa: "کال‌فیت — پلتفرم جامع تناسب اندام و کالری‌شمار",
      },
      category: "fullstack",
      role: {
        en: "Creator & Solo Full-Stack Builder",
        fa: "سازنده و توسعه‌دهنده فول‌استک انفرادی",
      },
      period: "2026",
      featured: true,
      accentColor: "cyan",
      description: {
        en: "A complete end-to-end nutrition and workout tracker designed, engineered, and deployed solo. Powers daily calorie budgeting, macro calculation, interactive charts, and offline-ready PWA functionality.",
        fa: "پلتفرم کامل تناسب اندام و ردیابی تغذیه که به صورت انفرادی از طراحی تا استقرار پیاده‌سازی شده است. شامل محاسبه ماکروها، نمودارهای تحلیلی و قابلیت آفلاین در بستر PWA.",
      },
      highlights: {
        en: [
          "Built NestJS backend with JWT auth, password-reset emails, and role-guarded endpoints",
          "Engineered Postgres + TypeORM schemas for macro aggregations and custom foods",
          "Next.js App Router frontend with shadcn/ui, TanStack Query, and Zustand",
          "Integrated Dexie.js for lightning-fast client-side offline storage",
        ],
        fa: [
          "توسعه بک‌اند جامع با NestJS، احراز هویت JWT و سیستم بازیابی رمز با ایمیل",
          "طراحی دیتابیس Postgres با TypeORM جهت تجمیع ماکروها و تاریخچه وزن",
          "پیاده‌سازی فرانت‌اند با Next.js App Router، کدهای تایپ‌سیف و shadcn/ui",
          "استفاده از Dexie.js برای ذخیره‌سازی آفلاین و سرعت فوق‌العاده در مرورگر",
        ],
      },
      tags: ["Next.js", "NestJS", "PostgreSQL", "TypeORM", "Zustand", "TanStack Query", "shadcn/ui", "PWA"],
      liveUrl: "https://calfit.ir/",
    },
    {
      id: "clinic-kamyar",
      title: {
        en: "Clinic Kamyar — Medical Center",
        fa: "کلینیک کامیار — پلتفرم نوبت‌دهی و پزشکی",
      },
      category: "client",
      role: {
        en: "Lead Frontend & DevOps Engineer",
        fa: "راهبر فرانت‌اند و دواپس",
      },
      period: "May 2026",
      featured: true,
      accentColor: "emerald",
      description: {
        en: "High-traffic healthcare website engineered from planning to deployment. Leveraged Incremental Static Regeneration (ISR) for blisteringly fast page loads, Strapi headless CMS, and top Core Web Vitals scores.",
        fa: "وب‌سایت اختصاصی مرکز پزشکی از برنامه‌ریزی تا استقرار روی سرور. پیاده‌سازی با Next.js و تکنیک ISR برای لود آنی، اتصال به Strapi CMS و سئوی تکنیکال فوق‌العاده.",
      },
      highlights: {
        en: [
          "Architected responsive Next.js ISR architecture with Tailwind CSS & TypeScript",
          "Integrated Strapi headless CMS for seamless dynamic content management",
          "Dockerized the application with Nginx reverse proxy and automated CI/CD",
          "Maximized Core Web Vitals and executed rigorous technical SEO strategies",
        ],
        fa: [
          "معماری صفحات با Next.js ISR و تایپ‌اسکریپت برای رندرینگ سریع و بهینه",
          "اتصال کامل به هدلس سی‌ام‌اس Strapi جهت مدیریت آسان محتوا توسط کلینیک",
          "داکرایز کردن کل سرویس و پیکربندی سرور پروداکشن با وب‌سرور Nginx و CI/CD",
          "کسب بالاترین امتیاز در شاخص‌های Core Web Vitals و بهینه‌سازی سئو تکنیکال",
        ],
      },
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi CMS", "Docker", "Nginx", "CI/CD"],
      liveUrl: "https://clinickamyar.ir/",
    },
    {
      id: "tara-chain",
      title: {
        en: "Tara Chain — Web3 Ecosystem",
        fa: "تارا چین — اکوسیستم وب۳ و دی‌اپ‌ها",
      },
      category: "web3",
      role: {
        en: "Senior Front-End & DApp Engineer",
        fa: "توسعه‌دهنده ارشد فرانت‌اند و وب۳",
      },
      period: "2023 – 2026",
      featured: true,
      accentColor: "purple",
      description: {
        en: "Delivered 20+ decentralized applications, smart contract dashboards, and real-time trading interfaces. Included building the entire frontend for a high-concurrency crowd investment platform serving 10,000+ users.",
        fa: "تحویل بیش از ۲۰ اپلیکیشن غیرمتمرکز، داشبوردهای قراردادهای هوشمند و چارت‌های تحلیلی آنی. ساخت فرانت‌اند پلتفرم سرمایه‌گذاری جمعی با بیش از ۱۰,۰۰۰ کاربر فعال.",
      },
      highlights: {
        en: [
          "Delivered 20+ DApps using Next.js, Atomic Design principles, and reusable design tokens",
          "Constructed high-speed Solana token launch platforms and Telegram Mini Apps",
          "Integrated EVM/Solana wallets (Wagmi, Reown) and WebSocket streaming data",
          "Architected mission-critical frontend for a 10,000+ user investment platform (NDA)",
        ],
        fa: [
          "توسعه و تحویل بیش از ۲۰ دی‌اپ با متدولوژی Atomic Design و کامپوننت‌های ماژولار",
          "ساخت پلتفرم‌های لانچ توکن سولانا، وب‌سوکت چارت‌های معاملاتی و مینی‌اپ تلگرام",
          "اتصال کیف‌پول‌های وب۳ (Wagmi، Reown، فانتوم) و تراکنش‌های هوشمند",
          "طراحی کامل فرانت‌اند سامانه تامین مالی جمعی با بیش از ۱۰ هزار کاربر (تحت NDA)",
        ],
      },
      tags: ["Next.js", "Web3", "Solana", "Wagmi", "WebSockets", "Atomic Design", "Telegram Mini Apps"],
      liveUrl: "https://tarachain.com/",
    },
    {
      id: "epic-of-castles",
      title: {
        en: "Epic Of Castles — Telegram Web3 Game",
        fa: "اپیک آو کسلز — بازی وب۳ در تلگرام",
      },
      category: "web3",
      role: {
        en: "Front-End & Telegram Mini App Developer",
        fa: "توسعه‌دهنده فرانت‌اند و مینی‌اپ تلگرام",
      },
      period: "2024 – 2025",
      accentColor: "amber",
      description: {
        en: "Interactive Telegram Mini App (TMA) featuring real-time gaming mechanics, crypto wallet connectivity, and smooth touch-optimized responsive canvas/UI.",
        fa: "مینی‌اپ تلگرامی با گرافیک و انیمیشن‌های تعاملی، اتصال به کیف‌پول رمزارز و بهینه‌سازی دقیق برای اجرای روان در موبایل.",
      },
      highlights: {
        en: [
          "Crafted smooth mobile-first interface optimized for Telegram in-app browser",
          "Handled WebSocket events for real-time multiplayer states and leaderboard updates",
          "Integrated seamless wallet authorizations and in-game token flows",
        ],
        fa: [
          "طراحی رابط کاربری بهینه برای مرورگر داخلی تلگرام با نرخ فریم بالا",
          "مدیریت ارتباطات دوطرفه وب‌سوکت برای رویدادهای زنده و لیدربورد",
          "اتصال مستقیم کیف‌پول و تبادلات توکنی درون بازی",
        ],
      },
      tags: ["Telegram Mini App", "Next.js", "WebSockets", "Web3", "Tailwind CSS"],
      liveUrl: "https://t.me/epicofcastles_bot",
    },
    {
      id: "shexon",
      title: {
        en: "Shexon — Web3 Token & Launchpad",
        fa: "شکشون — لانچ‌پد و پلتفرم توکن وب۳",
      },
      category: "web3",
      role: {
        en: "Front-End Developer",
        fa: "توسعه‌دهنده فرانت‌اند",
      },
      period: "2024",
      accentColor: "purple",
      description: {
        en: "Decentralized crypto platform featuring live pricing feeds, tokenomics data visualizations, and intuitive wallet transaction flows.",
        fa: "پلتفرم تخصصی کریپتو شامل نمودارهای لحظه‌ای قیمت، نمایش داده‌های توکنومیکس و فرآیند ساده اتصال کیف‌پول و تراکنش‌ها.",
      },
      highlights: {
        en: [
          "Interactive token statistics and animated financial charts",
          "Cross-device mobile responsiveness with Tailwind CSS",
          "Zero-friction Web3 wallet connection workflows",
        ],
        fa: [
          "نمودارهای تعاملی قیمت و اطلاعات مالی پروژه با سرعت بارگذاری بالا",
          "واکنش‌گرایی کامل در تمامی گوشی‌ها و تبلت‌ها با Tailwind CSS",
          "فرآیند بدون قطعی اتصال به ولت‌های مطرح بازار",
        ],
      },
      tags: ["Web3", "React", "Next.js", "Tailwind CSS", "Charts"],
      liveUrl: "https://shexon.com/",
    },
    {
      id: "paydar-samane",
      title: {
        en: "Paydar Samane — Enterprise Solutions",
        fa: "پایدار سامانه — راهکارهای سازمانی",
      },
      category: "client",
      role: {
        en: "Front-End Developer",
        fa: "توسعه‌دهنده فرانت‌اند",
      },
      period: "Sep 2022 – 2023",
      accentColor: "cyan",
      description: {
        en: "Delivered scalable enterprise web systems adhering to Clean Architecture principles, customized internal packages, and fine-tuned rendering pipelines.",
        fa: "پیاده‌سازی پورتال‌ها و سامانه‌های یکپارچه سازمانی با پیروی از اصول Clean Architecture، استفاده از پکیج‌های توسعه‌یافته داخلی و رندرینگ بهینه.",
      },
      highlights: {
        en: [
          "Engineered enterprise dashboards using React, Next.js, and Tailwind CSS",
          "Followed Clean Architecture principles to ensure modular maintainability",
          "Integrated REST APIs with rigorous form validation pipelines",
        ],
        fa: [
          "توسعه داشبوردهای بزرگ سازمانی با ری‌اکت، نکست و استایل‌های بهینه Tailwind",
          "پایبندی به معماری تمیز جهت پایداری و توسعه‌پذیری کدهای تیمی",
          "اتصال به APIهای سازمانی و مدیریت جامع فرم‌های اعتبارسنجی پیچیده",
        ],
      },
      tags: ["React", "Next.js", "Tailwind CSS", "Clean Architecture", "REST APIs"],
      liveUrl: "https://paydarsamane.com/",
    },
    {
      id: "ghazachi",
      title: {
        en: "Ghazachi — Food Ordering Platform",
        fa: "غذاچی — سامانه سفارش آنلاین غذا",
      },
      category: "frontend",
      role: {
        en: "Front-End Developer",
        fa: "توسعه‌دهنده فرانت‌اند",
      },
      period: "2023",
      accentColor: "amber",
      description: {
        en: "High-speed consumer platform for food ordering featuring dynamic menus, basket calculations, and seamless ordering journeys.",
        fa: "وب‌اپلیکیشن سفارش آنلاین غذا با منوی داینامیک، محاسبه سریع سبد خرید و رابط کاربری کاربرپسند و واکنش‌گرا.",
      },
      highlights: {
        en: [
          "Mobile-first responsive UI built for rapid loading speeds",
          "Optimized state management for instant cart recalculations",
          "Strict form validations and smooth checkout experience",
        ],
        fa: [
          "رابط کاربری موبایل‌محور با لود سریع برای سفارش آسان مشتریان",
          "مدیریت سریع وضعیت برای اعمال تخفیف‌ها و به‌روزرسانی آنی قیمت‌ها",
          "اعتبارسنجی دقیق مراحل ثبت سفارش و ورود شماره تماس",
        ],
      },
      tags: ["React", "Tailwind CSS", "Mobile-First", "State Management"],
      liveUrl: "https://ghazachi.com/",
    },
    {
      id: "paydar",
      title: {
        en: "Paydar Portal — Corporate Ecosystem",
        fa: "سامانه پایدار — پورتال خدمات شرکتی",
      },
      category: "client",
      role: {
        en: "Front-End Developer",
        fa: "توسعه‌دهنده فرانت‌اند",
      },
      period: "2022 – 2023",
      accentColor: "emerald",
      description: {
        en: "Corporate portal featuring clean UI, modular component library, and efficient state management using Context API and Formik.",
        fa: "پورتال جامع اطلاع‌رسانی و خدمات اداری با استفاده از کتابخانه اختصاصی کامپوننت‌ها و مدیریت ساختاریافته داده‌ها.",
      },
      highlights: {
        en: [
          "Integrated REST APIs with standardized error handling and retry logic",
          "Maintained pixel-perfect styling across diverse screen sizes",
          "Streamlined onboarding forms and complex data input tables",
        ],
        fa: [
          "اتصال امن به وب‌سرویس‌ها همراه با مدیریت خطاها و بازیابی ارتباط",
          "انطباق دقیق پیکسل‌به‌پیکسل با طرح‌های گرافیکی در رزولوشن‌های مختلف",
          "بهبود تجربه کاربری فرم‌های طولانی و جداول اطلاعاتی",
        ],
      },
      tags: ["React", "Next.js", "Formik", "Tailwind CSS"],
      liveUrl: "https://paydar.net/",
    },
  ],
  experience: [
    {
      company: { en: "Clinic Kamyar", fa: "کلینیک تخصصی کامیار" },
      role: { en: "Lead Frontend & DevOps Engineer (Freelance)", fa: "راهبر فرانت‌اند و دواپس (پروژه‌ای)" },
      location: { en: "Tehran, Iran", fa: "تهران" },
      period: { en: "May 2026", fa: "اردیبهشت ۱۴۰۵" },
      type: { en: "Freelance", fa: "پروژه‌ای" },
      description: {
        en: "Spearheaded the technical roadmap from planning to deployment. Owned frontend architecture, headless CMS integration, server deployment, and technical SEO.",
        fa: "هدایت فنی کامل پروژه از فاز تحلیل نیازمندی تا پیاده‌سازی و استقرار. مالکیت معماری فرانت‌اند، اتصال به CMS، کانفیگ سرور و سئو تکنیکال.",
      },
      bulletPoints: {
        en: [
          "Used modern tooling and AI-accelerated workflows while strictly owning code quality and maintainability.",
          "Constructed responsive, SEO-optimized pages using Next.js (ISR), TypeScript, and Tailwind CSS.",
          "Integrated Strapi headless CMS and collaborated closely with SEO specialists to boost organic ranking.",
          "Dockerized the environment, configured Nginx production server, and set up robust CI/CD deployment pipelines.",
        ],
        fa: [
          "به‌کارگیری ابزارهای مدرن و هوش مصنوعی جهت افزایش چشمگیر سرعت توسعه با حفظ بالاترین استانداردهای کد.",
          "طراحی صفحات واکنش‌گرا و سئو فرندلی با بهره‌گیری از Next.js ISR، تایپ‌اسکریپت و Tailwind CSS.",
          "یکپارچه‌سازی با Strapi CMS و اجرای دقیق الزامات سئو تکنیکال با همکاری متخصصین سئو.",
          "داکرایز کردن کامل پروژه، پیکربندی سرور Nginx پروداکشن و پیاده‌سازی پایپ‌لاین CI/CD.",
        ],
      },
      technologies: ["Next.js (ISR)", "TypeScript", "Tailwind CSS", "Strapi CMS", "Docker", "Nginx", "CI/CD"],
      liveUrl: "https://clinickamyar.ir/",
    },
    {
      company: { en: "Tara Chain", fa: "تارا چین (Tara Chain)" },
      role: { en: "Front-End & DApp Developer", fa: "توسعه‌دهنده فرانت‌اند و وب۳" },
      location: { en: "Tehran, Iran", fa: "تهران" },
      period: { en: "Mar 2023 – 2026", fa: "اسفند ۱۴۰۱ – ۱۴۰۴" },
      type: { en: "Full-Time", fa: "تمام‌وقت" },
      description: {
        en: "Core front-end developer driving Web3 platforms, token launchpads, and Telegram Mini Apps. Built the entire frontend for a crowd-investment platform serving 10,000+ users.",
        fa: "توسعه‌دهنده کلیدی پروژه‌های وب۳، لانچ‌پدهای رمزارزی و مینی‌اپ‌های تلگرام. ساخت کامل فرانت‌اند سامانه تامین مالی جمعی با بیش از ۱۰ هزار کاربر.",
      },
      bulletPoints: {
        en: [
          "Delivered 20+ DApps using Next.js, TypeScript, and modern atomic component principles.",
          "Built high-speed Solana token launch platforms, Telegram Mini Apps, and complex trading dashboards.",
          "Constructed pixel-perfect UIs with reusable shared utility modules across multiple client deliverables.",
          "Engineered the frontend for a 10,000+ user crowd investment platform under NDA with real-time WebSockets.",
        ],
        fa: [
          "تولید و انتشار بیش از ۲۰ دی‌اپ با Next.js، تایپ‌اسکریپت و اصول استاندارد Atomic Design.",
          "توسعه پلتفرم‌های توکن بر بستر شبکه سولانا، مینی‌اپ‌های تعاملی تلگرام و پنل‌های مدیریتی پیشرفته.",
          "طراحی کامپوننت‌های ماژولار با قابلیت استفاده مجدد در ده‌ها پروژه مختلف شرکت.",
          "توسعه کامل فرانت‌اند سامانه سرمایه‌گذاری جمعی با ترافیک بیش از ۱۰ هزار کاربر به صورت آنی با وب‌سوکت.",
        ],
      },
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Solana", "Wagmi", "WebSockets", "Telegram Mini Apps"],
      liveUrl: "https://tarachain.com/",
    },
    {
      company: { en: "Paydar Samane", fa: "پایدار سامانه" },
      role: { en: "Front-End Developer", fa: "توسعه‌دهنده فرانت‌اند" },
      location: { en: "Tehran, Iran", fa: "تهران" },
      period: { en: "Sep 2022 – 2023", fa: "شهریور ۱۴۰۱ – ۱۴۰۲" },
      type: { en: "Full-Time", fa: "تمام‌وقت" },
      description: {
        en: "Developed production applications using React and Next.js, emphasizing performance, clean architecture, and responsive user interfaces.",
        fa: "توسعه نرم‌افزارهای سازمانی با ری‌اکت و نکست با تمرکز ویژه بر معماری تمیز، پرفورمنس بالا و طراحی ریسپانسیو.",
      },
      bulletPoints: {
        en: [
          "Developed and delivered frontend applications with clean REST API integration and internal shared packages.",
          "Engineered mobile-first interfaces using Tailwind CSS with a relentless focus on Core Web Vitals.",
          "Enforced Clean Architecture principles for maintainable, testable, and future-proof codebases.",
          "Managed complex application states using Context API and robust form validations with Formik.",
        ],
        fa: [
          "توسعه وب‌اپلیکیشن‌های فرانت‌اند با یکپارچه‌سازی وب‌سرویس‌های REST و استفاده از کتابخانه‌های داخلی.",
          "پیاده‌سازی رابط‌های کاربری Mobile-First با Tailwind CSS و بهینه‌سازی سرعت رندرینگ.",
          "پایبندی به اصول Clean Architecture برای حفظ خوانایی و مقیاس‌پذیری کدهای تیم.",
          "مدیریت داده‌ها و وضعیت با Context API و فرم‌های تعاملی با اعتبارسنجی دقیق Formik.",
        ],
      },
      technologies: ["React", "Next.js", "Tailwind CSS", "Context API", "Formik", "REST APIs"],
      liveUrl: "https://paydarsamane.com/",
    },
  ],
  education: [
    {
      degree: {
        en: "Bachelor's Degree in Software / IT",
        fa: "کارشناسی مهندسی نرم‌افزار / فناوری اطلاعات",
      },
      institution: {
        en: "University of Applied Science and Technology (Farhang & Honar Unit 49)",
        fa: "دانشگاه جامع علمی کاربردی (واحد ۴۹ فرهنگ و هنر)",
      },
      period: "2022 – 2025",
      description: {
        en: "Comprehensive studies in modern software engineering, web architectures, algorithms, and interface engineering.",
        fa: "تحصیل در زمینه مهندسی نرم‌افزار، معماری وب، الگوریتم‌ها و استانداردهای طراحی سیستم‌های اطلاعاتی.",
      },
    },
    {
      degree: {
        en: "Associate Degree in Computer Software",
        fa: "کاردانی نرم‌افزار کامپیوتر",
      },
      institution: {
        en: "Azad University (Sama, Yadegar-e Emam Unit)",
        fa: "دانشگاه آزاد اسلامی (سما واحد یادگار امام)",
      },
      period: "2019 – 2022",
      description: {
        en: "Foundational training in data structures, web technologies, database design, and software fundamentals.",
        fa: "یادگیری مبانی ساختار داده‌ها، طراحی پایگاه‌داده و پایه‌های برنامه‌نویسی تحت وب.",
      },
    },
  ],
};
