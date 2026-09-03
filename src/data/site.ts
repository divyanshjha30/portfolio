export const profile = {
  name: "Divyansh Jha",
  firstName: "Divyansh",
  role: "Software Engineer",
  company: "SAP Labs India",
  team: "i-ScOper 3.0 · S/4HANA Test Engineering",
  location: "Bangalore, India",
  timezone: "Asia/Kolkata",
  email: "jhadivyansh2003@gmail.com",
  site: "divyanshjha.in",
  available: true,
  tagline: "I build backends that hold up at 3 a.m.",
  short:
    "Software engineer with 2+ years designing enterprise-grade distributed systems in Java, Spring Boot and microservices on SAP BTP Cloud Foundry.",
  summary:
    "I design and ship scalable, enterprise-grade backend systems — Java, Spring Boot and microservices on SAP BTP Cloud Foundry, backed by SAP HANA and PostgreSQL. My work sits where architecture meets operations: REST APIs, concurrency-safe scheduled execution, OAuth2/XSUAA, and the CI/CD that keeps it all shippable. I care about code that is testable, observable and boring in production.",
  bio: [
    "I'm a software engineer at SAP Labs India, currently the end-to-end owner of a Java/Spring Boot scheduling microservice inside a nine-service S/4HANA test-orchestration platform. Before that I spent two rotations across Cloud ALM's NG-DCI data platform and SAP's Fiori estate — which means I've shipped everything from Kafka consumers and OAuth2 token layers to six-step guided wizards.",
    "The thread running through all of it is operational seriousness. I like crash-safe execution engines, idempotent migrations, mutation-tested consumers, and pipelines that fail loudly before production does. I rolled out 24 CI/CD pipelines across 23 repositories because shipping should be the least interesting part of the day.",
    "Outside the enterprise, I build products end-to-end — a health-tracking PWA running at zero infrastructure cost, a deterministic reinforcement-learning environment for a Meta/Hugging Face hackathon, and a handful of RAG systems. I'm also doing an M.Tech in Software Engineering at BITS Pilani alongside the day job.",
    "Before engineering took over, I made films — three consecutive first-place finishes — and I still shoot. It turns out storytelling and system design are the same skill: decide what matters, cut everything else.",
  ],
} as const;

export const socials = [
  {
    label: "GitHub",
    handle: "@divyanshjha30",
    href: "https://github.com/divyanshjha30",
  },
  {
    label: "LinkedIn",
    handle: "in/divyanshjha30",
    href: "https://www.linkedin.com/in/divyanshjha30",
  },
  {
    label: "Email",
    handle: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "Résumé",
    handle: "PDF",
    href: "/resume.pdf",
  },
] as const;

export const nav = [
  { label: "Index", to: "/" },
  { label: "Work", to: "/work" },
  { label: "Experience", to: "/experience" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  note: string;
};

export const stats: Stat[] = [
  {
    value: 2,
    suffix: "+",
    label: "Years shipping",
    note: "Enterprise cloud, production workloads",
  },
  {
    value: 24,
    label: "CI/CD pipelines",
    note: "Authored across 23 repositories",
  },
  {
    value: 95,
    suffix: "%",
    label: "Code coverage",
    note: "JaCoCo, backend services",
  },
  {
    value: 269,
    label: "Static-analysis fixes",
    note: "Resolved with zero logic change",
  },
];

export const marqueeWords = [
  "Java 21",
  "Spring Boot",
  "Microservices",
  "SAP BTP",
  "Cloud Foundry",
  "SAP HANA",
  "PostgreSQL",
  "Kafka",
  "Kubernetes",
  "React",
  "TypeScript",
  "Python",
  "OAuth2 / XSUAA",
  "GitHub Actions",
  "SonarQube",
  "RAG",
];
