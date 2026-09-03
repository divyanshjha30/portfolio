export type SkillGroup = {
  title: string;
  note: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    note: "What I write day to day",
    items: ["Java", "TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Backend",
    note: "Spring Boot is home turf",
    items: [
      "Spring Boot (MVC, WebFlux)",
      "Spring Data JPA",
      "Spring Security",
      "REST APIs",
      "Server-Sent Events",
      "Node.js / Express",
      "FastAPI",
    ],
  },
  {
    title: "Architecture",
    note: "Distributed systems and the patterns that keep them honest",
    items: [
      "Microservices",
      "Concurrency (virtual threads, semaphores)",
      "Idempotency & crash safety",
      "GoF patterns (Strategy, Repository, Registry)",
      "Kafka & event-driven design",
      "Cron scheduling",
      "Data structures & algorithms",
    ],
  },
  {
    title: "Data",
    note: "Relational first, graph when it earns it",
    items: [
      "SAP HANA (JPA + raw JDBC)",
      "PostgreSQL",
      "Row-level security",
      "Supabase",
      "MongoDB",
      "Neo4j",
      "Redis",
    ],
  },
  {
    title: "Cloud & DevOps",
    note: "Shipping is part of the job",
    items: [
      "SAP BTP Cloud Foundry",
      "Kubernetes",
      "Docker",
      "GitHub Actions",
      "SAP Piper",
      "SonarQube",
      "Vercel",
    ],
  },
  {
    title: "Quality",
    note: "Coverage numbers that mean something",
    items: [
      "JUnit 5 & Mockito",
      "JaCoCo",
      "Mutation testing (PiTest, Stryker)",
      "Integration testing",
      "OPA5 / QUnit",
      "Code review",
    ],
  },
  {
    title: "Security",
    note: "Auth, transport and the scanners that catch me",
    items: [
      "OAuth2 / JWT",
      "XSUAA",
      "mTLS",
      "CodeQL SAST",
      "Secret scanning",
      "CSRF & CSP hardening",
    ],
  },
  {
    title: "Frontend",
    note: "Enough to ship the whole product",
    items: [
      "React 18 / 19",
      "TypeScript",
      "SAPUI5 & Fiori",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "TanStack Query",
    ],
  },
  {
    title: "AI & Retrieval",
    note: "Grounded systems, not demos",
    items: [
      "RAG pipelines",
      "LangChain",
      "Vector stores",
      "Embeddings",
      "Local model serving (Ollama)",
      "Agentic orchestration",
      "Reinforcement-learning environments",
    ],
  },
];

export const principles = [
  {
    title: "Boring in production",
    body: "Clever code is a liability at 3 a.m. I optimise for the version a tired on-call engineer can reason about.",
  },
  {
    title: "Idempotent by default",
    body: "Anything that can run twice will run twice. Crash safety is a design input, not a bug report.",
  },
  {
    title: "Coverage that means something",
    body: "Line coverage is easy to fake. Mutation testing tells you whether the tests would actually notice.",
  },
  {
    title: "Ship the pipeline first",
    body: "If deploying is hard, everything downstream gets slower. I build the release path before the feature.",
  },
];

export const interests = [
  {
    title: "Film making",
    body: "Three consecutive first-place finishes for scripting, direction and edit. Still the best training I have had in deciding what to cut.",
  },
  {
    title: "Photography",
    body: "National competition runner-up. Composition under constraint — the same problem as API design, with better light.",
  },
  {
    title: "Training",
    body: "Lifting is why ShakerSplit exists. Building the tracker was easier than the programme.",
  },
  {
    title: "Studying",
    body: "An M.Tech in Software Engineering at BITS Pilani, running in parallel with full-time work.",
  },
];
