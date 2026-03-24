export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/#experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const SKILLS = [
  {
    name: "Symfony",
    level: "Advanced",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original-wordmark.svg",
    color: "#000000",
  },
  {
    name: "PHP",
    level: "Advanced",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    color: "#777BB4",
  },
  {
    name: "Laravel",
    level: "Advanced",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg",
    color: "#FF2D20",
  },
  {
    name: "CodeIgniter",
    level: "Advanced",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain-wordmark.svg",
    color: "#EF4223",
  },
  {
    name: "MySQL",
    level: "Advanced",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    color: "#4479A1",
  },
  {
    name: "JavaScript",
    level: "Advanced",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
  {
    name: "Docker",
    level: "Intermediate",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    color: "#2496ED",
  },
  {
    name: "AWS",
    level: "Intermediate",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    color: "#FF9900",
  },
  {
    name: "RabbitMQ",
    level: "Intermediate",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
    color: "#FF6600",
  },
  {
    name: "React",
    level: "Intermediate",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    level: "Intermediate",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    color: "#000000",
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    color: "#007ACC",
  },
];

export const TOOLS = [
  {
    name: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    color: "#F05033",
  },
  {
    name: "GitHub",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    color: "#181717",
  },
  {
    name: "GitLab",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
    color: "#FC6D26",
  },
  {
    name: "VS Code",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    color: "#007ACC",
  },
  {
    name: "Postman",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    color: "#FF6C37",
  },
  {
    name: "AWS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    color: "#FF9900",
  },
  {
    name: "Jenkins",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    color: "#D24939",
  },
  {
    name: "Vercel",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    color: "#000000",
  },
  {
    name: "Docker",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    color: "#2496ED",
  },
];

export const EXPERIENCE = [
  {
    title: "Senior Software Engineer",
    company: "Prop CRM",
    period: "Aug 2025 - Present",
    description:
      "Building and maintaining a CRM platform for the UAE property market, covering lead tracking, listings, and sales pipeline automation. Designing scalable backend APIs in PHP to support agent workflows, client follow-ups, and deal lifecycle management. Implemented role-based access control (RBAC) and connected third-party property portals to keep listings synchronized.",
    technologies: ["PHP", "MySQL", "REST API", "JWT", "RBAC"],
  },
  {
    title: "Team Lead",
    company: "Lean Transition Solutions",
    period: "Apr 2021 - Aug 2025",
    description:
      "Led a team of 5+ developers on enterprise PHP (Symfony) applications across 3 major products: a Balanced Scorecard platform reducing manual reporting by 40%, a Digital T-Card system improving shop floor efficiency by 30%, and a Recruitment Portal reducing time-to-hire by 25%. Mentored junior developers and enforced coding standards, reducing bug rate by 20% over 2 years.",
    technologies: ["PHP", "Symfony", "MySQL", "Docker", "AWS", "RabbitMQ", "REST API"],
  },
  {
    title: "Junior Software Developer",
    company: "Voyo Technologies India Pvt Ltd",
    period: "Aug 2020 - Apr 2021",
    description:
      "Developed a multi-business ERP system using PHP (Laravel) to manage operations across 5+ business units, consolidating workflows for 50+ end users across finance, inventory, and HR departments.",
    technologies: ["PHP", "Laravel", "MySQL", "HTML", "CSS"],
  },
  {
    title: "Web Developer",
    company: "Cyberia Software India Pvt Ltd",
    period: "Aug 2019 - Aug 2020",
    description:
      "Developed a defense exam preparation portal with video streaming, mock tests, and structured learning workflows, serving hundreds of registered students. Integrated a secure payment gateway supporting multiple payment methods for self-service course enrollment.",
    technologies: ["PHP", "CodeIgniter", "MySQL", "HTML", "CSS", "jQuery"],
  },
];

export const PROJECTS = [
  {
    title: "Prop CRM System",
    description:
      "Comprehensive CRM platform tailored for the UAE property market. Features include lead tracking, listings synchronization with third-party portals, and automated sales pipelines with strict role-based access control.",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["PHP", "MySQL", "REST API", "JWT", "RBAC"],
    link: "#",
    github: "#",
  },
  {
    title: "Business Goals Tracking System",
    description:
      "Enterprise KPI tracking platform enabling organizations to monitor strategic objectives and initiatives through real-time dashboards. Eliminated manual reporting for 10+ daily reports and reduced reporting overhead by 40%.",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["PHP", "Symfony", "MySQL", "Docker", "REST API", "AWS"],
    link: "#",
    github: "#",
  },
  {
    title: "Production Scheduling System",
    description:
      "Manufacturing task management tool with drag-and-drop scheduling, shift planning, and machine allocation. Delivered a 30% improvement in shop floor efficiency by replacing paper-based tracking with a real-time digital workflow.",
    image: "/task-management-interface.png",
    technologies: ["PHP", "Symfony", "MySQL", "JavaScript", "FullCalendar.js"],
    link: "#",
    github: "#",
  },
  {
    title: "Job Search & Recruitment Platform",
    description:
      "Full-featured job portal with recruiter postings, candidate pipeline management, and smart recommendations. Reduced time-to-hire by 25% through streamlined matching and automated candidate tracking workflows.",
    image: "/portfolio-cms-dashboard.jpg",
    technologies: ["PHP", "Symfony", "MySQL", "JWT", "REST API"],
    link: "#",
    github: "#",
  },
  {
    title: "Enterprise Multi-Unit ERP",
    description:
      "A unified resource planning ecosystem consolidating operations for multiple business units. Engineered dedicated departmental modules to streamline inter-divisional communication and data consistency for over 50 enterprise users.",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["PHP", "Laravel", "MySQL", "HTML", "CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "Defense Exam Preparation Platform",
    description:
      "E-learning portal for defense exam aspirants featuring video streaming, mock tests with instant scoring, and structured learning paths. Integrated multi-method payment gateway enabling fully self-service course enrollment.",
    image: "/analytics-dashboard-charts.png",
    technologies: ["PHP", "CodeIgniter", "MySQL", "HTML", "CSS", "jQuery"],
    link: "#",
    github: "#",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "College of Engineering Karunagappally",
    period: "2015 - 2019",
    description:
      "Graduated from APJ Abdul Kalam Technological University with focus on software engineering and web development. Active participant in IEDC and NSS activities.",
    achievements: [
      "Student Coordinator - Innovation & Entrepreneurship Development Centre (IEDC)",
      "NSS Volunteer",
      "Completed AR/VR/MR Workshop by Future Technologies",
    ],
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "MSM Higher Secondary School",
    period: "2013 - 2015",
    description:
      "Completed higher secondary education under the Board of Higher Secondary Examination Kerala.",
    achievements: [],
  },
  {
    degree: "Secondary School Certificate (CBSE)",
    institution: "Mahakavi Kumaranasan Central School",
    period: "2013",
    description:
      "Completed secondary schooling under the Central Board of Secondary Education (CBSE).",
    achievements: [],
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/prathinsajith",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/prathinsajith",
    icon: "Linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/prathinsajith",
    icon: "Twitter",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/prathinsajith",
    icon: "Instagram",
  },
];

export const FEATURES = [
  {
    icon: "Code",
    title: "Backend Engineering",
    description:
      "Designing and building robust server-side systems, scalable REST APIs, and secure database architectures using PHP, Symfony, and Laravel.",
  },
  {
    icon: "Users",
    title: "Team Leadership",
    description:
      "Leading cross-functional engineering teams through sprint planning, code reviews, and end-to-end product delivery — turning requirements into reliable software.",
  },
  {
    icon: "Zap",
    title: "Fast & Efficient",
    description:
      "Making applications load quickly and work smoothly, so users have the best possible experience",
  },
];

export const mailConfig = {
  user: process.env.EMAIL_USER as string,
  pass: process.env.EMAIL_PASS as string,
  to: process.env.EMAIL_USER as string, // or a different recipient
} as const;

export const SITE_NAME = "Prathin Sajith - Senior Software Engineer & Team Lead";
export const FULL_NAME = "Prathin Sajith";
export const SITE_URL = "https://prathinsajith-portfolio.vercel.app";
export const SITE_AUTHOR = "Prathin Sajith";
export const SITE_EMAIL = "prathinsajith@gmail.com";
export const SITE_PHONE = "+971 564582402";
export const SITE_LOCATION = "Dubai, UAE";
export const SITE_DESCRIPTION =
  "Results-driven Senior Software Engineer & Team Lead with 6+ years of experience in backend and full-stack development. Specialized in PHP (Symfony, Laravel, CodeIgniter), REST APIs, MySQL, and cloud technologies. Track record of leading teams and architecting scalable web applications across PropTech, manufacturing, recruitment, and e-learning industries.";
