// Single source of truth for every piece of copy on the site.
// TODO: the repo/demo URLs marked null are the only unverified fields.
export const profile = {
  name: "Chitrangana Laxkar",
  initials: "CL",
  role: "Backend & AI/ML Engineer",
  roleRotation: [
    "backend systems",
    "retrieval pipelines",
    "edge deployment",
    "real-time inference",
  ],
  location: "Dharwad, Karnataka",
  summary:
    "I build backends that stay up and retrieval systems that stay honest — hybrid search that cites its sources, edge APIs that survive a cold start, and inference loops fast enough to matter in an emergency.",
  email: "chitranganalaxkar@gmail.com",
  phone: "+91 90243 08010",
  github: "https://github.com/Chitrangana10",
  githubHandle: "Chitrangana10",
  linkedin: "https://www.linkedin.com/in/chitranganalaxkar/",
  linkedinHandle: "Chitrangana Laxkar",
};

export const stats = [
  { value: "8.43", unit: "/10", label: "CGPA, IIIT Dharwad" },
  { value: "3000+", unit: "", label: "AI tools on the platform I debugged" },
  { value: "8", unit: "", label: "Indian statutes indexed for RAG" },
];

export const experience = [
  {
    company: "GalaxyAI Inc",
    role: "Software Engineer Intern",
    mode: "Remote",
    period: "May 2025 — Jul 2025",
    stack: ["Production debugging", "Frontend", "Data consistency"],
    points: [
      "Debugged and resolved high-priority production issues across a large-scale web platform powering 3000+ AI-driven tools, improving platform stability by 30%.",
      "Fixed 20+ UI, frontend and data consistency issues, cutting recurring bugs by 25% and lifting overall system reliability.",
    ],
  },
];

export const projects = [
  {
    id: "legal-rag",
    title: "Legal RAG Chatbot",
    tagline: "Hybrid retrieval over 8 Indian statutes, deployed with zero-touch CI/CD",
    year: "2025",
    kind: "Retrieval / Backend",
    diagram: "rag",
    points: [
      "Retrieval-augmented generation over IPC, CrPC, the Constitution, the IT Act, the Evidence Act and more — FAISS semantic search fused with BM25 keyword search through Reciprocal Rank Fusion for higher-precision statute retrieval.",
      "FastAPI backend with sentence-transformer embeddings, structured logging and Pydantic-validated REST APIs.",
      "Gemini generates section-cited answers grounded strictly in retrieved statutes, and rejects out-of-scope queries instead of hallucinating.",
      "Graceful degradation: on an LLM quota or API failure the service falls back to raw retrieved statute sections rather than erroring out.",
      "Backend and Streamlit frontend containerised independently, with a GitHub Actions pipeline handling image builds, health checks and deployment to AWS EC2.",
    ],
    stack: ["Python", "FastAPI", "FAISS", "BM25", "Gemini API", "Docker", "GitHub Actions", "AWS EC2"],
    repo: "https://github.com/Chitrangana10/Legal-Chatbot",
    demo: null,
  },
  {
    id: "study-copilot",
    title: "AI Study Copilot",
    tagline: "Full-stack study platform running on Cloudflare Workers",
    year: "2025",
    kind: "Full Stack / AI",
    diagram: "edge",
    points: [
      "Hono backend on Cloudflare Workers exposing RESTful APIs for uploads, notes and AI-generated content.",
      "Edge-compatible PDF text extraction with unpdf, working around Workers' lack of native Node.js PDF support.",
      "Relational PostgreSQL schema through Prisma ORM across Users, Notes, Chunks and QuizSets, with per-user scoping so data stays isolated.",
      "JWT authentication with bcrypt hashing and protected middleware guarding every endpoint behind bearer tokens.",
      "Gemini calls pinned to enforced JSON schema output, so summaries, notes and quizzes come back structured every time.",
      "Context-grounded chat that answers only from uploaded note content.",
    ],
    stack: ["React", "Hono", "Cloudflare Workers", "PostgreSQL", "Prisma", "JWT", "Gemini API"],
    repo: null,
    demo: null,
  },
  {
    id: "fire-detect",
    title: "Real-Time Fire Detection",
    tagline: "Low-latency edge inference for 5G networks",
    year: "2025",
    kind: "Computer Vision / Edge",
    diagram: "vision",
    points: [
      "Edge AI pipeline detecting fire in live video streams, built for rapid emergency response in 5G-enabled environments.",
      "YOLOv5 trained and fine-tuned on custom fire datasets, with OpenCV driving live inference and visualisation.",
      "Alerting pipeline over REST and WebSockets that pushes detection events out with minimal latency.",
    ],
    stack: ["Python", "YOLOv5", "PyTorch", "OpenCV", "WebSockets"],
    repo: null,
    demo: null,
  },
  {
    id: "blogforge",
    title: "Blogforge",
    tagline: "Edge-deployed blogging platform with AI summaries",
    year: "2024",
    kind: "Full Stack",
    diagram: "crud",
    points: [
      "Full-stack blogging platform with complete CRUD for drafting, editing, publishing and deleting posts.",
      "JWT authentication, protected routes and RESTful APIs on Hono.js with Prisma ORM.",
      "Responsive React and TailwindCSS frontend with AI-generated blog summaries.",
    ],
    stack: ["React", "TypeScript", "Hono.js", "Prisma", "PostgreSQL", "JWT", "Cloudflare Workers"],
    repo: null,
    demo: null,
  },
];

export const capabilities = [
  {
    group: "Languages",
    items: ["C", "C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    group: "Web & Backend",
    items: ["React", "Node.js", "Express.js", "Hono", "FastAPI", "REST APIs", "HTML5", "CSS3"],
  },
  {
    group: "Data & Cloud",
    items: ["PostgreSQL", "Prisma ORM", "AWS EC2", "Docker", "Cloudflare Workers"],
  },
  {
    group: "AI / ML",
    items: ["RAG", "FAISS", "BM25", "Vector Search", "Gemini API", "LLM Integration", "Prompt Engineering"],
  },
  {
    group: "Systems & Networking",
    items: ["Linux", "TCP/IP", "HTTP", "TLS", "DNS", "Bash"],
  },
  {
    group: "Tooling",
    items: ["Git", "GitHub", "GitHub Actions", "Postman", "OOP"],
  },
];

export const education = {
  school: "Indian Institute of Information Technology, Dharwad",
  degree: "B.Tech, Electronics and Communication Engineering",
  period: "2023 — 2027",
  place: "Dharwad, Karnataka",
  cgpa: "8.43 / 10",
  coursework: [
    "Data Structures & Algorithms",
    "Object Oriented Programming",
    "Operating Systems",
    "Database Management Systems",
    "Computer Networks",
    "Embedded Systems",
    "Digital Communication",
    "Microcontrollers",
    "VLSI Design",
    "Machine Learning",
  ],
};

export const beyond = [
  {
    id: "basketball",
    title: "Captain, Basketball Team",
    detail:
      "Led the girls' team to 1st place at the Inter-IIIT Sports Meet 2025, against 23 IIITs.",
    metric: "1st",
    metricLabel: "of 23 IIITs",
    widget: "podium",
  },
  {
    id: "music",
    title: "440Hz Music Club",
    detail: "Member and event organiser — music awareness sessions and live performances.",
    metric: "440",
    metricLabel: "Hz",
    widget: "wave",
  },
  {
    id: "ecell",
    title: "E-Cell Startup Team",
    detail: "Active member of the Entrepreneurship Cell, working on innovation-driven events.",
    metric: "E",
    metricLabel: "Cell",
    widget: "grid",
  },
];

export const sections = [
  { id: "top", label: "Top" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
