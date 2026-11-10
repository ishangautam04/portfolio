export const projects = [
  {
    id: 1,
    title: "AI Task Manager & Notes",
    description:
      "An AI-powered productivity app that turns natural language into structured tasks, with voice input, smart note analysis and multiple task views.",
    longDescription:
      "A MERN-stack task and notes application powered by Google Gemini. It parses sentences like \"Call dentist tomorrow at 2pm urgently\" into categorized, prioritized tasks, summarizes notes, analyzes sentiment, supports voice-to-text via the Web Speech API, and offers Dashboard, List, Calendar and Kanban views with JWT authentication and a demo mode.",
    image: null,
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini API",
      "Tailwind CSS",
      "JWT",
    ],
    liveUrl: null, // add the deployed URL once confirmed
    githubUrl: "https://github.com/ishangautam04/ai-task-manager",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Codebase Onboarding SaaS",
    description:
      "An AI platform that helps engineers understand large codebases quickly through RAG-based Q&A, semantic search and architecture analysis.",
    longDescription:
      "Connect a GitHub repository and ask questions about it in natural language. The platform clones and indexes the repo, chunks and embeds the code into PostgreSQL with pgvector, and answers with cited sources using LangChain and Groq-hosted LLMs. Includes GitHub OAuth, conversations, background analysis with status tracking, and architecture and framework detection. Diagram generation and semantic code search are in progress.",
    image: null,
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "LangChain",
      "Groq",
      "PostgreSQL",
      "pgvector",
      "Tailwind CSS",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/ishangautam04/codebase_review",
    featured: true,
    category: "AI / ML",
  },
  {
    id: 3,
    title: "Personal Finance Analyzer",
    description:
      "A finance analysis app that tracks income and expenses, calculates savings rate and risk, and is designed to add ML-based spending predictions.",
    longDescription:
      "A MERN application with a separate FastAPI machine-learning backend. Users register, enter income and expenses by category, and get real-time savings-rate and risk analysis, rule-based budget recommendations and a charted dashboard. The ML service uses scikit-learn models trained on an Indian personal finance dataset for spending category, savings rate and risk prediction; trained models are not yet included in the repo.",
    image: null,
    technologies: [
      "React",
      "Material-UI",
      "Node.js",
      "Express",
      "MongoDB",
      "FastAPI",
      "scikit-learn",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/ishangautam04/finacne_management",
    featured: true,
    category: "Full Stack",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectCategories = [...new Set(projects.map((p) => p.category))];
