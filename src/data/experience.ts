export type Role = {
  id: string;
  company: string;
  companyNote?: string;
  title: string;
  team: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const roles: Role[] = [
  {
    id: "sap-r3",
    company: "SAP Labs India",
    title: "Software Engineer · Scholar@SAP",
    team: "i-ScOper 3.0 — S/4HANA Test Engineering",
    location: "Bangalore, India",
    start: "Jan 2026",
    end: "Present",
    current: true,
    summary:
      "Sole owner of a scheduling microservice inside a nine-service S/4HANA test-orchestration platform, plus the CI/CD estate that ships it.",
    highlights: [
      "Sole end-to-end owner of a Java/Spring Boot scheduling microservice on SAP BTP Cloud Foundry — execution scheduling, retry, reporting and a 21-endpoint REST API within a 9-service S/4HANA test-orchestration platform.",
      "Refactored the entire backend onto a modern Java 21 / Spring Boot architecture: decomposed god-classes into layered packages behind Open/Closed Strategy SPIs and eliminated an N+1 query (O(n) → O(1)), behaviour-preserving with full test coverage.",
      "Built a crash-safe, idempotent cron execution engine with two-layer concurrency control — an in-JVM guard plus an atomic DB-level claim with a stale-claim reaper — and custom scheduling configuration exposed through the REST API.",
      "Built and rolled out 24 CI/CD pipelines from scratch across 23 repositories: a standardised CI + Cloud Foundry CD model with CodeQL SAST and secret scanning, templated estate-wide from the golden pipeline on the service I own.",
      "Drove backend quality to 95%+ coverage (JaCoCo), resolved 269 static-analysis issues with zero logic change, and remediated 23 security findings plus CodeQL rounds — reviewing designs and code across the team.",
    ],
    stack: [
      "Java 21",
      "Spring Boot",
      "SAP HANA",
      "Cloud Foundry",
      "XSUAA",
      "GitHub Actions",
      "SonarQube",
    ],
  },
  {
    id: "sap-r2",
    company: "SAP Labs India",
    title: "Software Engineer · Scholar@SAP",
    team: "NG-DCI — Cloud ALM",
    location: "Bangalore, India",
    start: "Jun 2025",
    end: "Dec 2025",
    summary:
      "Backend and data-pipeline work across the next-generation data-collection platform, plus an enterprise RAG assistant.",
    highlights: [
      "Shipped a full-stack Mass Excel Upload feature bulk-onboarding master data into SAP HANA through a JWT/XSUAA-gated REST endpoint, with a batch-insert path and graceful per-row degradation, driven to full statement and branch coverage.",
      "Refactored a Kafka consumer stack into a shared base-consumer class with a decompression resilience fix that still survives in production; authored health endpoints and drove consumer coverage past 95% behind mutation-testing gates.",
      "Primary contributor to the platform's core routing and distribution services, raising Stryker mutation scores across modules and clearing services to a green quality gate.",
      "Co-developed and productionised an enterprise RAG assistant for internal documentation — Kubernetes manifests, in-cluster service wiring and CI/CD integration for a live internal deployment.",
    ],
    stack: [
      "Node.js",
      "Kafka",
      "SAP HANA",
      "SAP UI5",
      "Stryker",
      "Kubernetes",
      "Python",
    ],
  },
  {
    id: "sap-r1",
    company: "SAP Labs India",
    title: "Software Engineer · Scholar@SAP",
    team: "i-ScOper 3.0 — S/4HANA Test Engineering",
    location: "Bangalore, India",
    start: "Aug 2024",
    end: "May 2025",
    summary:
      "Frontend architecture across the Fiori estate — a flagship guided wizard and an analytics dashboard.",
    highlights: [
      "Sole architect and author of a flagship 6-step guided wizard, collapsing a manual multi-screen workflow into a single flow — consuming on-premise OData V2 and REST services through a Cloud Connector and BTP destination layer.",
      "Built a deployment-aware OAuth2 client-credentials auth layer against XSUAA with expiry-checked token caching, so identical code runs locally and on Cloud Foundry.",
      "Led a DRY refactor into parameterised generics, collapsing five near-identical value-help handlers and removing 375 lines from the analytics dashboard.",
      "Delivered a real-time KPI dashboard translating test-scope optimisation into sustainability metrics for S/4HANA programme owners.",
    ],
    stack: ["SAPUI5", "SAP Fiori", "OData V2", "ABAP", "SAP BTP", "XSUAA"],
  },
  {
    id: "enord",
    company: "Enord",
    companyNote: "Autonomous-drone startup",
    title: "Software Engineer Intern",
    team: "Engineering",
    location: "Remote",
    start: "Aug 2023",
    end: "Nov 2023",
    summary:
      "Backend services and frontend delivery for an AI-driven autonomous-drone platform.",
    highlights: [
      "Built and integrated backend REST services and data-handling features, applying OOP and clean-code practice in a remote cross-functional team.",
      "Shipped responsive React interfaces for the core platform and the public marketing site, improving load times through component-level refactoring.",
    ],
    stack: ["React", "JavaScript", "REST", "Node.js"],
  },
];

export type Education = {
  degree: string;
  field: string;
  institution: string;
  note?: string;
  period: string;
  score: string;
};

export const education: Education[] = [
  {
    degree: "M.Tech",
    field: "Software Engineering",
    institution: "BITS Pilani",
    note: "Work Integrated Learning Programme",
    period: "2024 — Present",
    score: "CGPA 7.85",
  },
  {
    degree: "BCA",
    field: "Computer Applications",
    institution: "IITM, GGSIPU",
    note: "Delhi",
    period: "2021 — 2024",
    score: "CGPA 9.16",
  },
];

export type Award = {
  title: string;
  issuer: string;
  year: string;
  note?: string;
};

export const awards: Award[] = [
  {
    title: "Peer-to-Peer Recognition Award",
    issuer: "SAP Labs India",
    year: "Dec 2024",
    note: "Monetary award for contribution to product delivery",
  },
  {
    title: "NPTEL STAR Learner",
    issuer: "NPTEL · IIT",
    year: "2022 — 2023",
    note: "Top-performer recognition across three courses",
  },
  {
    title: "1st Place — Film Making",
    issuer: "Inter-college competition",
    year: "3 years running",
    note: "Scripting, direction and edit",
  },
  {
    title: "National Photography Competition — Runner-up",
    issuer: "NYKS",
    year: "National level",
  },
];
