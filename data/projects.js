export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with shopping cart, payment integration, and order management. Built with modern technologies for optimal performance.",
    longDescription: "This comprehensive e-commerce solution includes user authentication, product catalog, shopping cart functionality, secure payment processing with Stripe, order tracking, and an admin dashboard for inventory management.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A beautiful and intuitive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
    longDescription: "Streamline your workflow with this powerful task manager featuring Kanban boards, calendar views, task assignments, priority levels, and real-time collaboration with team members.",
    image: "/images/projects/task-manager.jpg",
    technologies: ["React", "Firebase", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://task-manager.example.com",
    githubUrl: "https://github.com/yourusername/task-manager",
    featured: true,
    category: "Frontend"
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "Real-time weather forecasting application with beautiful UI, location-based weather data, and 7-day forecasts.",
    longDescription: "Get accurate weather information with this sleek application that provides current conditions, hourly forecasts, 7-day predictions, and interactive weather maps using OpenWeather API.",
    image: "/images/projects/weather.jpg",
    technologies: ["Next.js", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://weather-app.example.com",
    githubUrl: "https://github.com/yourusername/weather-app",
    featured: false,
    category: "Frontend"
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics with beautiful data visualizations and real-time insights.",
    longDescription: "Track and analyze your social media performance across multiple platforms with interactive charts, engagement metrics, follower growth tracking, and customizable reports.",
    image: "/images/projects/dashboard.jpg",
    technologies: ["React", "D3.js", "Express", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://dashboard.example.com",
    githubUrl: "https://github.com/yourusername/social-dashboard",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "Modern blogging platform with markdown support, syntax highlighting, and SEO optimization.",
    longDescription: "A feature-rich blogging platform with markdown editor, code syntax highlighting, tag-based organization, search functionality, and built-in SEO optimization for better discoverability.",
    image: "/images/projects/blog.jpg",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://blog-platform.example.com",
    githubUrl: "https://github.com/yourusername/blog-platform",
    featured: false,
    category: "Full Stack"
  },
  {
    id: 6,
    title: "Portfolio Generator",
    description: "Generate beautiful portfolio websites with customizable templates and themes in minutes.",
    longDescription: "An innovative tool that helps developers create stunning portfolio websites quickly. Choose from multiple templates, customize colors and layouts, and deploy instantly with one click.",
    image: "/images/projects/portfolio-gen.jpg",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://portfolio-generator.example.com",
    githubUrl: "https://github.com/yourusername/portfolio-generator",
    featured: false,
    category: "Frontend"
  }
];

export const featuredProjects = projects.filter(project => project.featured);

export const projectCategories = [...new Set(projects.map(p => p.category))];
