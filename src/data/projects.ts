export const CATEGORIES = [
  "All",
  "Enterprise",
  "AI & Systems",
  "Platform",
  "Product",
] as const;

export type Category = (typeof CATEGORIES)[number];
export type ProjectCategory = Exclude<Category, "All">;

export type ProjectLink = { label: string; href: string };
export type Metric = { value: string; label: string };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  category: ProjectCategory;
  role: string;
  context: string;
  /** SAP-internal work — no public URLs may be published. */
  confidential?: boolean;
  featured?: boolean;
  summary: string;
  problem: string;
  approach: string[];
  metrics: Metric[];
  stack: string[];
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "scheduling-solutions",
    title: "Scheduling Solutions",
    tagline:
      "A crash-safe execution engine that runs the nightly regression estate",
    year: "2026",
    category: "Enterprise",
    role: "Sole end-to-end owner",
    context: "SAP Labs India · i-ScOper 3.0",
    confidential: true,
    featured: true,
    summary:
      "The scheduling microservice inside a nine-service S/4HANA test-orchestration platform. It stores schedules, runs them on a cron engine that survives crashes and duplicate triggers, retries transient failures, and emails a daily execution report.",
    problem:
      "Regression scheduling was single-tool, manually triggered, and fragile: a restart mid-run could double-execute tasks or strand them in an in-flight state forever. There was no safe way to add a second execution engine without rewriting the core.",
    approach: [
      "Refactored the backend onto a modern Java 21 / Spring Boot architecture — god-classes decomposed into layered packages behind Open/Closed Strategy SPIs, so a new execution tool plugs in without touching the core.",
      "Built two-layer concurrency control for the cron engine: an in-JVM synchronised guard plus an atomic database-level claim, with a stale-claim reaper that recovers tasks stranded by a crashed instance.",
      "Root-caused a production bug where the reaper measured staleness against a date column truncated to midnight, wrongly resetting live tasks after 00:30 — fixed with a dedicated claim timestamp stamped at claim time.",
      "Eliminated an N+1 query on task-list load (O(n) → O(1)) with batch repository methods, and added a custom recurrence mode with per-task execution times on a queue that tolerates missed cron ticks.",
      "Authored the service's full REST surface — 21 endpoints — plus idempotent HANA schema migrations and a daily HTML execution report with retry breakdowns.",
    ],
    metrics: [
      { value: "21", label: "REST endpoints" },
      { value: "95%+", label: "JaCoCo coverage" },
      { value: "269", label: "Sonar issues resolved" },
      { value: "23", label: "Security findings fixed" },
    ],
    stack: [
      "Java 21",
      "Spring Boot 3.4",
      "SAP HANA Cloud",
      "Cloud Foundry",
      "XSUAA",
      "Maven",
      "JaCoCo",
    ],
  },
  {
    slug: "scope-comparator",
    title: "Scope Comparator",
    tagline: "One request, five concurrent engines, streamed as they land",
    year: "2026",
    category: "Enterprise",
    role: "Architect · sole author",
    context: "SAP Labs India · i-ScOper 3.0",
    confidential: true,
    featured: true,
    summary:
      "A full-stack investigation tool for test engineers comparing scope strategies. A single browser connection fans out to five upstream analysis services and streams each result back the moment it arrives.",
    problem:
      "Comparing scope proposals meant running analyses one at a time and waiting on the slowest. Engineers needed them side by side, and a sequential request would have blocked for the sum of every call.",
    approach: [
      "Built a Server-Sent Events endpoint that fans one request out to five concurrent upstream calls on Java 21 virtual threads, streaming each result independently instead of blocking on the slowest.",
      "Isolated failure per sub-call — one upstream service erroring degrades a single card rather than aborting the whole stream.",
      "Backed it with a cached XSUAA client-credentials token service using a expiry buffer, and a raw-JDBC HANA data layer with parameterised queries throughout.",
      "Wrote the React/TypeScript client as a typed EventSource driver with per-event timing instrumentation and strict unmount cleanup, covering single-task and multi-task grouped investigation.",
      "Added a batch reschedule path with date shifting and post-write verification across environments.",
    ],
    metrics: [
      { value: "5", label: "Concurrent upstreams" },
      { value: "3", label: "Deployed apps" },
      { value: "~8.7k", label: "Lines of TypeScript" },
      { value: "100%", label: "Solo authored" },
    ],
    stack: [
      "Java 21",
      "Spring Boot",
      "Virtual Threads",
      "SSE",
      "React 18",
      "TypeScript",
      "SAP HANA",
    ],
  },
  {
    slug: "cicd-platform-estate",
    title: "Platform CI/CD Estate",
    tagline: "24 pipelines, 23 repositories, one golden template",
    year: "2026",
    category: "Platform",
    role: "Platform engineering lead",
    context: "SAP Labs India · i-ScOper 3.0",
    confidential: true,
    featured: true,
    summary:
      "A standardised CI and Cloud Foundry CD model rolled out across an entire platform estate — thirteen frontend applications, ten backend services, and the shared infrastructure that hosts them.",
    problem:
      "Twenty-three repositories had drifted into twenty-three different build and deploy stories. Security scanning was inconsistent, deployments were manual and environment-specific, and nobody could say with confidence what was running where.",
    approach: [
      "Authored a two-pipeline model — a declarative CI pipeline for build, test, coverage and quality gates, plus a GitHub Actions CD pipeline deploying to dev, test and production with manual approval gating on prod.",
      "Proved the model on the backend service I own, then templated it estate-wide so every repository got the same pipeline shape rather than a bespoke one.",
      "Added supply-chain hardening across the estate: CodeQL SAST and secret scanning on pull requests, SHA-pinned workflows, and secrets moved out of deployment manifests into environment configuration.",
      "Supported the decomposition of a monolithic frontend into thirteen independently deployable applications, each with its own build descriptor, routing config and deployment script.",
      "Converged nine drifted backend services onto the golden template and fixed builds to use the Maven wrapper for reproducibility on self-hosted runners.",
    ],
    metrics: [
      { value: "24", label: "Pipelines authored" },
      { value: "23", label: "Repositories" },
      { value: "13", label: "Apps decomposed" },
      { value: "3", label: "Gated environments" },
    ],
    stack: [
      "GitHub Actions",
      "SAP Piper",
      "SonarQube",
      "CodeQL",
      "Cloud Foundry CLI",
      "Maven",
      "Bash",
    ],
  },
  {
    slug: "shakersplit",
    title: "ShakerSplit",
    tagline: "A health-tracking PWA that costs nothing to run",
    year: "2025",
    category: "Product",
    role: "Solo — design, build, ship",
    featured: true,
    context: "Personal product",
    summary:
      "An installable React PWA that tracks food, workouts, weight, mood and alcohol in one place, with AI natural-language entry, offline support and web push — running entirely on free infrastructure tiers.",
    problem:
      "Fitness apps track training or nutrition, and nothing sensibly tracks the social drinking that sits alongside both. I wanted one honest picture — and I wanted it to cost nothing at small scale.",
    approach: [
      "Designed the backend to fit exactly twelve serverless functions — the free-tier ceiling — using query-parameter dispatch through a shared handler factory with composable auth, CORS and validation middleware.",
      "Used Postgres row-level security for privacy-first sharing: everything private by default, with a security-definer helper gating friend visibility and a derived activity feed.",
      "Added natural-language food logging via a direct REST call to a fast LLM with a strict response schema, a validation hook, and a single sterner retry on schema mismatch before graceful degradation.",
      "Built the service worker by hand on Workbox — network-first navigation with a timeout, cache-first photos, web push with deep-linked notification handling, and a controlled update flow.",
      "Shipped nine idempotent database migrations, proactive auth-token refresh ahead of expiry, and client-side photo resizing before upload.",
    ],
    metrics: [
      { value: "12", label: "Serverless functions" },
      { value: "$0", label: "Monthly infra cost" },
      { value: "9", label: "RLS migrations" },
      { value: "PWA", label: "Offline + push" },
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind",
      "Supabase",
      "PostgreSQL RLS",
      "Vercel Functions",
    ],
    links: [{ label: "Live site", href: "https://shakersplit.divyanshjha.in" }],
  },
  {
    slug: "openpm",
    title: "OpenPM",
    tagline: "A reinforcement-learning environment for shipping software",
    year: "2025",
    category: "AI & Systems",
    role: "Co-author · environment design",
    featured: true,
    context: "Meta × Hugging Face OpenEnv Hackathon",
    summary:
      "A deterministic RL environment that models sprint management: dependency-aware task graphs, zero-sum resource economics, and seeded stochastic blockers designed so pattern-matching agents fail and genuine planning wins.",
    problem:
      "Most agent benchmarks reward memorisation. We wanted an environment where an agent has to actually respect a critical path, budget finite people against a deadline, and react to failures it could not have seen coming.",
    approach: [
      "Modelled sprint decisions as a fixed action space — assignment with skill matching, reprioritisation, splitting, blocker resolution and completion — under a hard day budget and an invalid-action ceiling.",
      "Made every run reproducible from a seed: deterministic RNG per reset and a fixed blocker schedule keyed by day, so scores are comparable across agents.",
      "Tuned three difficulty tiers so that static strategies score near-perfectly on easy, degrade on overlapping critical paths, and collapse to the floor on the dynamic-blocker scenario.",
      "Hardened scoring with a zero-trust coercion layer that accepts any numeric type from an agent and clamps it into a strict range, so a malformed return can never corrupt a benchmark.",
      "Exposed it over HTTP and WebSocket with schema validation, containerised on the standard environment base image, with guaranteed protocol emission even on failure paths.",
    ],
    metrics: [
      { value: "3", label: "Difficulty tiers" },
      { value: "5", label: "Benchmark seeds" },
      { value: "0.68", label: "Medium-tier baseline" },
      { value: "Docker", label: "Reproducible runs" },
    ],
    stack: [
      "Python",
      "FastAPI",
      "Pydantic v2",
      "WebSocket",
      "Docker",
      "OpenEnv",
    ],
    links: [
      {
        label: "Live demo",
        href: "https://huggingface.co/spaces/piyushgoel2808/openpm-finale",
      },
      { label: "Source", href: "https://github.com/openepm/openpm" },
    ],
  },
  {
    slug: "enterprise-rag",
    title: "Enterprise RAG Assistant",
    tagline:
      "Grounded answers over internal wikis, without leaving the network",
    year: "2025",
    category: "AI & Systems",
    role: "Co-developer · productionisation",
    context: "SAP Labs India · Cloud ALM",
    confidential: true,
    featured: true,
    summary:
      "A retrieval-augmented assistant that answers questions over large internal documentation estates using locally served models, so no proprietary content ever leaves the corporate boundary.",
    problem:
      "Internal knowledge was spread across wikis nobody could search well. A hosted LLM was not an option — the source material is confidential, so both retrieval and generation had to run inside the network.",
    approach: [
      "Took an upstream research prototype and made it deployable: containerised the stack, wrote Kubernetes manifests for a dedicated namespace, and rewired every service reference to in-cluster DNS.",
      "Integrated it into the enterprise CI/CD toolchain — build pipeline, static analysis, secrets management and a documentation site.",
      "Ran embeddings and generation on locally hosted open models against a graph-backed vector store, keeping the whole retrieval path on-premises.",
      "Grounded responses in retrieved sources with citations, and added a domain-term allowlist so masking rules stopped destroying legitimate product vocabulary.",
      "Built a standalone precursor prototype end-to-end beforehand — crawler, cleaner, chunker, embedder, retriever and chat UI — including confidence-driven dynamic retrieval depth and a strict refusal path when grounding is weak.",
    ],
    metrics: [
      { value: "Live", label: "Internal deployment" },
      { value: "4", label: "Services orchestrated" },
      { value: "100%", label: "On-premise inference" },
      { value: "0", label: "Data leaving network" },
    ],
    stack: [
      "Python",
      "LangChain",
      "Neo4j",
      "Ollama",
      "Kubernetes",
      "Streamlit",
      "Docker",
    ],
  },
  {
    slug: "project-management-suite",
    title: "Project Management Suite",
    tagline: "118 endpoints across seventeen modules",
    year: "2025",
    category: "Product",
    role: "Solo — full stack",
    context: "Personal product",
    summary:
      "A full project-management platform: authentication with email verification, role-based access, projects, tasks, teams, boards, file storage, queued notifications and generated reports — documented end to end.",
    problem:
      "I wanted to find out what actually breaks when a CRUD app grows past a hundred endpoints, and to re-platform a live database without downtime rather than reading about it.",
    approach: [
      "Built 118 REST endpoints across seventeen functional modules behind JWT authentication with email one-time-password verification and three distinct permission roles.",
      "Re-platformed the datastore from document storage to Postgres across fifteen SQL migrations, adding row-level security as part of the move.",
      "Offloaded notification and report work to a Redis-backed job queue so request latency stayed flat under load.",
      "Documented the entire surface with OpenAPI, and hardened it with security headers, password hashing and per-route validation.",
    ],
    metrics: [
      { value: "118", label: "REST endpoints" },
      { value: "17", label: "Modules" },
      { value: "15", label: "SQL migrations" },
      { value: "3", label: "Access roles" },
    ],
    stack: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "React",
      "OpenAPI",
    ],
    links: [
      {
        label: "Live site",
        href: "https://project-management-system-frontend-umber.vercel.app",
      },
    ],
  },
  {
    slug: "royal-casino",
    title: "Royal Casino",
    tagline: "Real-time multiplayer card games on Postgres",
    year: "2025",
    category: "Product",
    role: "Solo — full stack",
    context: "Personal product",
    summary:
      "Multiplayer Blackjack and Texas Hold'em with rooms, readiness sync, hand evaluation, player progression and a virtual chip economy — state synchronised live through Postgres subscriptions.",
    problem:
      "Multiplayer state is where naive designs fall apart. I wanted to build authoritative shared state with real-time propagation and no trust in the client.",
    approach: [
      "Modelled rooms, seats and readiness as database state with realtime subscriptions, so every client renders from one authoritative source rather than local guesses.",
      "Enforced access with row-level security policies so a player can only read and mutate the parts of a room they are actually seated at.",
      "Implemented hand evaluation and turn progression server-side, with the client reduced to rendering and intent.",
      "Layered on profiles, levelling, achievements and match history over the same synchronised model.",
    ],
    metrics: [
      { value: "2", label: "Game modes" },
      { value: "Realtime", label: "State sync" },
      { value: "RLS", label: "Row-level security" },
    ],
    stack: [
      "React 18",
      "TypeScript",
      "Supabase Realtime",
      "PostgreSQL RLS",
      "Framer Motion",
    ],
    links: [{ label: "Play it", href: "https://royalcasinofun.vercel.app" }],
  },
  {
    slug: "aitalk",
    title: "AITalk",
    tagline: "A terminal assistant that scaffolds, explains and summarises",
    year: "2025",
    category: "AI & Systems",
    role: "Solo",
    context: "Open source",
    summary:
      "A cross-platform command-line assistant that turns a sentence into a scaffolded React project, explains what your last shell commands actually did, summarises documents, and reads git history back to you in English.",
    problem:
      "Context switching to a browser to ask a model about the terminal you are already in is absurd. The assistant should live where the work happens.",
    approach: [
      "Built project scaffolding as a staged pipeline: a meta-prompt produces a file manifest, files generate sequentially with prior context, dependencies are patched into the manifest, then the repo initialises and installs with automatic repair on failure.",
      "Handled the interactive dev-server port-conflict prompt by driving a pseudo-terminal, so scaffolding completes unattended.",
      "Added document summarisation across PDF and Word extraction, and shell-session explanation from recent history.",
      "Packaged it for both macOS and Windows with a native installer, PATH registration and shortcuts.",
    ],
    metrics: [
      { value: "5", label: "Command modes" },
      { value: "2", label: "Platforms packaged" },
      { value: "MIT", label: "Licensed" },
    ],
    stack: ["Python", "Groq API", "Llama 4", "PyMuPDF", "NSIS"],
    links: [
      { label: "Source", href: "https://github.com/divyanshjha30/aitalk" },
    ],
  },
  {
    slug: "guided-wizard",
    title: "Guided Scoping Wizard",
    tagline: "Six steps replacing a manual multi-screen workflow",
    year: "2024",
    category: "Enterprise",
    role: "Sole architect · 96% of commits",
    context: "SAP Labs India · i-ScOper 3.0",
    confidential: true,
    summary:
      "A flagship six-step Fiori wizard that collapsed a scattered manual test-scoping process into one guided flow, wired through to on-premise backend services.",
    problem:
      "Configuring a test scope meant moving between unrelated screens in a specific undocumented order. Getting the order wrong meant starting again.",
    approach: [
      "Designed a six-step flow with per-step validation gating, so users cannot advance into an invalid state and never see a step that does not apply to them.",
      "Consumed on-premise OData V2 and REST services through a cloud-connector and destination layer, bridging cloud frontend to on-premise backend.",
      "Built a deployment-aware authentication layer with expiry-checked token caching, so identical code runs locally and in the cloud without branching.",
      "Lazily instantiated step views once each, keeping a sixteen-controller application responsive.",
    ],
    metrics: [
      { value: "6", label: "Guided steps" },
      { value: "16", label: "Controllers" },
      { value: "96%", label: "Commits authored" },
    ],
    stack: [
      "SAPUI5",
      "SAP Fiori",
      "OData V2",
      "ABAP",
      "Cloud Foundry",
      "XSUAA",
    ],
  },
  {
    slug: "sustainability-dashboard",
    title: "Sustainability Dashboard",
    tagline: "Turning test-scope savings into sustainability metrics",
    year: "2024",
    category: "Enterprise",
    role: "Primary author",
    context: "SAP Labs India · i-ScOper 3.0",
    confidential: true,
    summary:
      "A KPI dashboard translating test-optimisation efficiency into figures programme owners actually care about — scope saved, effort saved and energy saved.",
    problem:
      "The platform was demonstrably reducing wasted test execution, but that value was invisible to the people funding it.",
    approach: [
      "Built a multi-field filter bar with date-range validation and label-to-code mapping over an OData backend.",
      "Rendered scope reduction, effort saved and energy saved as live charts with dynamic titling that reflects the active filter.",
      "Fixed a value-help deselection defect with a sentinel no-selection entry, making filters clearable rather than sticky.",
      "Collapsed five near-identical value-help handlers into parameterised generics, removing 375 lines.",
    ],
    metrics: [
      { value: "−375", label: "Lines removed" },
      { value: "4", label: "KPI dimensions" },
      { value: "Live", label: "Programme-wide" },
    ],
    stack: ["SAPUI5", "OData V2", "SAP HANA", "SAP BTP"],
  },
  {
    slug: "ngdci-platform",
    title: "Data Collection Platform",
    tagline: "Routing, distribution and bulk ingestion at platform scale",
    year: "2025",
    category: "Enterprise",
    role: "Primary service contributor",
    context: "SAP Labs India · Cloud ALM",
    confidential: true,
    summary:
      "Core services of a next-generation telemetry and data-collection platform — the routing tier, the event distribution tier, and a full-stack bulk ingestion path into SAP HANA.",
    problem:
      "The platform's consumer stack duplicated logic across services, a compression edge case was crashing consumers in production, and onboarding master data was a manual row-by-row exercise.",
    approach: [
      "Extracted a shared base-consumer class from duplicated Kafka consumer implementations, then drove coverage past 95% behind mutation-testing gates rather than line-coverage theatre.",
      "Shipped a decompression resilience fix that logs and continues on frame-format variance instead of crashing the consumer — still running in production.",
      "Built a bulk Excel ingestion feature end to end: an authenticated upload endpoint, in-memory parsing, batch inserts fanning each row into two HANA tables, and per-row error isolation so one bad row cannot fail the upload.",
      "Hardened the routing tier with health, liveness and readiness endpoints, token caching with expiry checks, and a dependency modernisation pass onto platform-native APIs.",
    ],
    metrics: [
      { value: "95%+", label: "Consumer coverage" },
      { value: "90%", label: "Mutation score" },
      { value: "2", label: "HANA tables per row" },
      { value: "5k", label: "Rows per upload" },
    ],
    stack: [
      "Node.js",
      "Kafka",
      "SAP HANA",
      "SAP UI5",
      "Stryker",
      "Mocha",
      "XSUAA",
    ],
  },
];

export const archive = [
  {
    title: "Box Office",
    note: "TV show and actor discovery over a public API",
    year: "2022",
    href: "https://github.com/divyanshjha30/box-office-app",
  },
  {
    title: "Tic Tac Toe",
    note: "State management and move-history replay in React",
    year: "2022",
    href: "https://tictactoe-game-alpha-three.vercel.app",
  },
  {
    title: "Enord Website",
    note: "Marketing site for an autonomous-drone startup",
    year: "2023",
    href: "https://github.com/divyanshjha30/enord-website",
  },
  {
    title: "Geo-Map Navigation",
    note: "Graph-based campus routing with a full SRS and traceability matrix",
    year: "2026",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const featuredProjects = projects.filter((p) => p.featured);
