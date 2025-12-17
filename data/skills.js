export const skills = {
  frontend: [
    { name: "React", level: 90, icon: "⚛️" },
    { name: "Next.js", level: 85, icon: "▲" },
    { name: "JavaScript", level: 90, icon: "📜" },
    { name: "HTML/CSS", level: 95, icon: "🎨" },
    { name: "Tailwind CSS", level: 90, icon: "💨" },
    { name: "TypeScript", level: 75, icon: "📘" },
  ],
  backend: [
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Express", level: 80, icon: "🚂" },
    { name: "REST APIs", level: 85, icon: "🔌" },
    { name: "GraphQL", level: 70, icon: "◈" },
  ],
  tools: [
    { name: "Git", level: 90, icon: "🔧" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Figma", level: 75, icon: "🎨" },
    { name: "Postman", level: 85, icon: "📮" },
    { name: "Docker", level: 65, icon: "🐳" },
  ],
  databases: [
    { name: "MongoDB", level: 80, icon: "🍃" },
    { name: "PostgreSQL", level: 75, icon: "🐘" },
    { name: "Firebase", level: 70, icon: "🔥" },
  ]
};

export const skillCategories = [
  {
    title: "Frontend Development",
    skills: skills.frontend,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend Development",
    skills: skills.backend,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Tools & Technologies",
    skills: skills.tools,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Databases",
    skills: skills.databases,
    color: "from-orange-500 to-red-500"
  }
];
