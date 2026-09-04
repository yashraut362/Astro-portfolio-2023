const experienceYears = new Date().getFullYear() - 2021;

export const info = {
  baseUrl: "https://www.yashraut.me",
  name: "Yash Raut",
  jobDescription: "Software Engineer",
  about: `I’m a software engineer and problem solver who takes products from a rough idea to something people rely on across web, desktop and mobile. With ${experienceYears}+ years of shipping end to end, I work closely with founders and teams to build scalable applications from the ground up, with a strong focus on clean architecture, intuitive user experiences, and reliable execution.

  I enjoy owning product problems across the stack — data model, APIs and UI — and staying curious about the tools that make the next build better. Over the years, I’ve managed multiple projects simultaneously while consistently delivering high-quality results under tight deadlines.

  Driven by curiosity, continuous learning, and collaboration, I’m passionate about turning ideas into polished, impactful digital products. Let’s build something remarkable together.
  `,

  experience: [
    {
      name: "Truco.ai",
      position: "Founding Engineer",
      location: "Remote (San Francisco, USA)",
      startDate: "May 2025",
      endDate: "Present",
      isInternship: false,
      techStack: ["React", "Python", "MongoDB"],
      description: [
        "Truco is an AI product company solving real-world problems across industries, delivered through web, desktop and browser experiences.",
        "- Drove SOC 2, HIPAA and security readiness — access control, audit logging, encryption and data-retention workflows across the product.",
        "- Shipped the Chrome extension and Electron desktop app for meeting capture, from first prototype to production release.",
        "- Built custom integrations and features end to end, owning the data model, APIs and UI as the founding engineer.",
        "- Set up CI/CD and automated test pipelines on GitHub Actions and Google Cloud, making releases routine for a small team.",
      ],
    },
    {
      name: "Testlify",
      position: "Frontend Lead Developer",
      location: "Remote (Mumbai, India)",
      startDate: "Sep 2022",
      endDate: "April 2025",
      isInternship: false,
      techStack: ["Vue", "React", "Javascript", "MongoDB", "Firebase"],
      description: [
        "Testlify is a talent assessment platform serving 3,000+ employers and running 30,000+ assessments a month.",
        "- Led frontend engineering for the core assessment platform across employer and candidate experiences.",
        "- Built AI-powered assessment evaluation, enabling automated scoring of candidate responses across multiple formats.",
        "- Introduced video-response questions and AI chat simulations, letting employers evaluate communication and situational judgment.",
        "- Built and integrated proctoring and anti-cheating capabilities to maintain assessment integrity in remote evaluations.",
        "- Led a major revamp of the candidate portal, improving architecture, maintainability and candidate experience.",
      ],
    },
    {
      name: "Koyal Technologies LLP",
      position: "Full Stack Developer",
      location: "Mumbai, India",
      startDate: "Apr 2021",
      endDate: "Aug 2022",
      isInternship: false,
      techStack: ["Vue", "Nuxt", "MongoDB", "Firebase"],
      description: [
        "Koyal builds an in-house learning and student-management platform used by schools in the US.",
        "- Designed and developed Nova LMS end to end — group learning, doubt solving, Q&A workflows and a centralized video library.",
        "- Built the CRM platform for student and operational workflows, including a Kanban-based board for tracking activities.",
        "- Developed a React Native app bringing core LMS functionality to mobile alongside the web platform.",
        "- Owned the frontend and contributed across architecture, backend integration and deployment, supporting 150+ daily active users.",
      ],
    },
    {
      name: "Blinsoft Technologies Pvt. Ltd",
      position: "Flutter Mobile App Developer Intern",
      location: "Remote",
      startDate: "Aug 2020",
      endDate: "Dec 2020",
      isInternship: true,
      techStack: ["flutter", "Firebase"],
      description: [
        "- Developed a hybrid Android and iOS mobile application.",
        "- Built polished mobile UI components for Beezhive, a Canadian super app.",
        "- Integrated backend services to support the app experience.",
      ],
    },
    {
      name: " Bit Brothers Tech Pvt. Ltd",
      position: "Flutter Mobile App Developer Intern",
      location: "Mumbai, India",
      startDate: "Nov 2019",
      endDate: "Jan 2020",
      isInternship: true,
      techStack: ["flutter", "Firebase"],
      description: [
        "- Developed a hybrid Android and iOS mobile application.",
        "- Built the mobile experience for Gullymart, a grocery app.",
        "- Integrated backend services to support the product flow.",
      ],
    },
  ],

  education: [
    {
      name: "Bachelor of Engineering in Information Technology",
      position: "Vidyavardhini's College of Engineering and Technology, Mumbai",
      location: "University of Mumbai",
      startDate: "2018",
      endDate: "2021",
      description: ["CGPA : 8.5"],
    },
    {
      name: "Diploma in Information Technology",
      position: "Kala Vidyamandir Institute of Technology, Mumbai",
      location: "Maharashtra State Board of Technical Education",
      startDate: "2015",
      endDate: "2018",
      description: ["Percentage : 82.53%"],
    },
    {
      name: "High School",
      position: "Aryan Education Society's High School",
      location: "Secondary School Certificate ",
      startDate: "2005",
      endDate: "2015",
      description: ["Percentage : 83%"],
    },
  ],

  socialMedia: {
    github: "https://github.com/yashraut362",
    email: "hello@yashraut.me",
    linkedin: "https://www.linkedin.com/in/yashraut362",
  },
  connect: {
    title: "LET'S CONNECT",
    description:
      "Have a project in mind or just want to chat about product, engineering, or the web? Schedule a call or drop an email—I’d love to hear from you.",
    calendly: "https://calendly.com/yashraut362/30min",
    email: "hello@yashraut.me",
  },

  liveProjects: [
    {
      title: "Weshare File Sharing App",
      isFeatured: true,
      thumbnail: "/assets/images/web/weshare.webp",
      githubUrl: "https://github.com/yashraut362/we-share",
      liveUrl: "https://wesharefiles.vercel.app/",
    },
  ],

  projects: [
    {
      title: "Weshare File Sharing App",
      isFeatured: true,
      thumbnail: "/assets/images/web/weshare.webp",
      githubUrl: "https://github.com/yashraut362/we-share",
      liveUrl: "https://wesharefiles.vercel.app/",
      category: "web",
    },
    {
      title: "CryptoNation CryptoCurrency Tracker App",
      isFeatured: false,
      thumbnail: "/assets/images/web/cryptonation.webp",
      githubUrl: "https://github.com/yashraut362/CryptoNation",
      liveUrl: "http://cryptonation.vercel.app/",
      category: "web",
    },
    {
      title: "LinkLoom Link Shortner App",
      isFeatured: true,
      thumbnail: "/assets/images/web/linkloom.png",
      githubUrl: "https://github.com/yashraut362/LinkLoom",
      liveUrl: "https://linklooms.vercel.app/",
      category: "web",
    },
    {
      title: "Youtube Thumbnail Grabber (NPM Package)",
      isFeatured: true,
      thumbnail: "/assets/images/os/os1.webp",
      githubUrl: "https://github.com/yashraut362/youtube-thumbnail-grabber",
      liveUrl: "https://www.npmjs.com/package/youtube-thumbnail-grabber",
      category: "web",
    },

    {
      title: "Glasswidgets (Flutter Package)",
      isFeatured: false,
      thumbnail: "/assets/images/os/os2.webp",
      githubUrl: "https://github.com/yashraut362/Glasswidgets",
      liveUrl: "https://pub.dev/packages/glasswidgets",
      category: "mobile",
    },
    {
      title: "CoronaGo Covid-19 Tracker App",
      isFeatured: false,
      thumbnail: "/assets/images/web/coronago.webp",
      githubUrl: "https://github.com/yashraut362/CoronaGo",
      liveUrl: "https://coronagoo.netlify.app/",
      category: "web",
    },
    {
      title: "Pothole Detection System",
      isFeatured: true,
      thumbnail: "/assets/images/mobile/pothole.webp",
      githubUrl: "https://github.com/yashraut362/Pothole_Challenge",
      liveUrl: null,
      category: "mobile",
    },
    {
      title: "Know Your device",
      isFeatured: true,
      thumbnail: "/assets/images/mobile/mockup.webp",
      githubUrl: "https://github.com/yashraut362/KnowYourDevice",
      liveUrl: null,
      category: "mobile",
    },
    {
      title: "Fitnese App",
      isFeatured: false,
      thumbnail: "/assets/images/mobile/fitnessapp.webp",
      githubUrl: "https://github.com/yashraut362/FitnessApp_Flutter",
      liveUrl: null,
      category: "mobile",
    },
    {
      title: "Evently - host events in your area",
      isFeatured: false,
      thumbnail: "/assets/images/mobile/evently.webp",
      githubUrl: "https://github.com/yashraut362/Evently_Flutter",
      liveUrl: null,
      category: "mobile",
    },
    {
      title: "Project Keeper",
      isFeatured: false,
      thumbnail: "/assets/images/mobile/projectkeeper.webp",
      githubUrl: "https://github.com/yashraut362/ProjectKeeper",
      liveUrl: null,
      category: "mobile",
    },
  ],

  works: [
    {
      title: "Truco.ai",
      desc: "Truco is an AI product company solving real-world problems across industries, delivered through web, desktop and browser experiences — including a Chrome extension and Electron desktop app for meeting capture, custom end-to-end integrations, and SOC 2 / HIPAA-ready security workflows.",
      role: "Founding Engineer",
      thumbnail: "/assets/images/work/truco.webp",
      link: "https://truco.ai",
    },
    {
      title: "Testlify - AI-Powered Talent Assessments",
      desc: "Testlify is an AI-driven platform that automates talent assessments, including video, audio, and open-ended questions. It streamlines recruitment by providing unbiased, efficient evaluations and integrates with over 1,000 ATS tools to enhance hiring workflows.",
      role: "Frontend Lead Developer",
      thumbnail: "/assets/images/work/testlify1.png",
      link: "https://www.testlify.com/",
    },
    {
      title: "MLPB Armory - Pro Paintball Collectibles & NFTs",
      desc: "​MLPB Armory is the ultimate hub for paintball enthusiasts to collect, buy, and sell officially licensed NFTs, including player cards, team moments, and tournament highlights. The platform features a marketplace for trading collectibles and an exciting fantasy game where users can draft teams and compete for prizes​.",
      role: "Web3 Frontend Developer",
      thumbnail: "/assets/images/work/armory1.png",
      link: "https://mlpbarmory.com/",
    },
    {
      title: "Momental - NFT Analytics & Admin Dashboard",
      desc: "Momental is an internal admin dashboard that provides comprehensive analytics for NFT transactions, including buy/sell data, top holders, and most viewed NFTs. It features customizable branding and admin settings, offering a powerful tool for monitoring and managing NFT activity​.",
      role: "Frontend Developer",
      thumbnail: "/assets/images/work/momental1.png",
      link: "",
    },
    {
      title: "Ready for Marriage Christians",
      desc: "Ready for Marriage Christian is an internal tool for managing a database of single Christian individuals seeking marriage. It helps assess readiness for a faith-based relationship, tracks profiles, and facilitates matching based on relationship criteria, while supporting profile management and analytics.",
      role: "Full Stack Developer",
      thumbnail: "/assets/images/work/rfm.png",
      link: "",
    },
    {
      title: "Zeza Tech - Data Engineering & Machine Learning Solutions",
      desc: "I built the website for Zeza Tech, featuring a clean and user-friendly landing page, services overview, and contact information. The website showcases their expertise in data engineering and machine learning solutions while providing easy navigation for potential clients to learn more about their offerings and get in touch.",
      role: "Frontend Developer",
      thumbnail: "/assets/images/work/zeza1.png",
      link: "https://zeza.tech/",
    },
  ],

  personalWorks: [
    {
      title: "MovieX - Movie Discovery Web App",
      desc: "MovieX is a responsive platform for exploring movies, viewing trailers and discovering new releases, with TMDB API metadata powering search and up-to-date content. Built with React, Next.js and Tailwind CSS, and deployed on Vercel.",
      role: "Frontend Developer",
      thumbnail: "/assets/images/web/dcverse.webp",
      link: "https://moviex.yashraut.me/",
    },
    {
      title: "Tripora - AI Travel Companion Mobile App",
      desc: "Tripora is a mobile travel companion that generates personalized day-by-day itineraries from destination, trip duration, budget and interests. It integrates AI with real-time weather data to adapt recommendations to current and forecast conditions, and lets users modify and regenerate itineraries conversationally, making the plan dynamic rather than static. Built with React Native, Node.js, an AI/LLM API, Weather API, Maps API and Firebase.",
      role: "Full Stack Developer",
      video:
        "https://github.com/user-attachments/assets/8b213cb5-f90a-4faa-8230-a57d419285b0",
      link: "https://github.com/yashraut362/Tripora",
    },
    {
      title: "Codename - Multiplayer Picture Game",
      desc: "Codename is a real-time multiplayer game where players interact and receive synchronized game updates over WebSocket communication. It is designed as separate frontend and backend services that handle live game state and player interaction through Socket.IO, with Redis-based game history storage so game data persists beyond an individual session. Built with Next.js, React, Socket.IO, Express.js, Redis and Tailwind CSS.",
      role: "Full Stack Developer",
      video:
        "https://github.com/user-attachments/assets/77bcde5e-2446-4e7a-a9a3-59cb47ec26b1",
      link: "https://github.com/yashraut362/codename-pictures-game",
    },
  ],

  skills: [
    { name: "Javascript", icon: "/svg/javascript.svg" },
    { name: "Typescript", icon: "/svg/typescript.svg" },
    { name: "Python", icon: "/svg/python.svg" },
    { name: "Express", icon: "/svg/express.svg" },
    { name: "React", icon: "/svg/react.svg" },
    { name: "Vue", icon: "/svg/vue.svg" },
    { name: "Nuxt", icon: "/svg/nuxt.svg" },
    { name: "flutter", icon: "/svg/flutter.svg" },
    { name: "Firebase", icon: "/svg/firebase.svg" },
    { name: "MongoDB", icon: "/svg/mongo.svg" },
    { name: "docker", icon: "/svg/docker.svg" },
    { name: "git", icon: "/svg/git.svg" },
  ],
};
