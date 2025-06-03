import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translations
const resources = {
  en: {
    translation: {
      // Navigation
      projects: "Projects",
      bio: "Bio",
      contact: "Contact",

      // Hero section
      developer: "NODE.JS DEVELOPER",
      specialization:
        "Specialized in building scalable backend solutions, microservices, and cloud architecture. Experienced in AWS and Azure cloud platforms.",

      // Projects section
      featuredProjects: "Featured Projects",
      viewAllProjects: "View All Projects",
      liveDemo: "Live Demo",
      source: "Source",
      viewDemo: "View Demo",
      portfolioHighlights:
        "These are just a few highlights from my portfolio. Check out my GitHub for more projects.",

      // Project descriptions
      morikawaDesc:
        "Digital platform showcasing environmental technologies for habitat restoration and water treatment",
      portfolioDesc:
        "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS (Yes! This is this website!)",
      productsLauncherDesc:
        "Microservices-based e-commerce application with client gateway, auth and payment services",
      eventApiDesc:
        "A RESTful API for event management built with Go, Gin, and GORM",

      // Technologies
      javascript: "JavaScript",
      html: "HTML",
      css: "CSS",
      environmentalTech: "Environmental Tech",
      react: "React",
      typescript: "TypeScript",
      tailwindCss: "Tailwind CSS",
      nestjs: "NestJS",
      mongodb: "MongoDB",
      prisma: "Prisma",
      stripe: "Stripe",
      go: "Go",
      gin: "Gin",
      gorm: "GORM",
      restfulApi: "RESTful API",

      // Contact section
      getInTouch: "Get in Touch",
      contactMe: "Contact Me",
      emailMe: "Email Me",

      // Bio section
      aboutMe: "About Me",
      skills: "Skills",
      experience: "Experience",
      backendDev: "Backend Development",
      devopsCloud: "DevOps & Cloud",
      frontend: "Frontend Development",
      tools: "Tools & Utilities",
      verify: "Verify",
    },
  },
  es: {
    translation: {
      // Navigation
      projects: "Proyectos",
      bio: "Bio",
      contact: "Contacto",

      // Hero section
      developer: "DESARROLLADOR NODE.JS",
      specialization:
        "Especializado en la construcción de soluciones backend escalables, microservicios y arquitectura en la nube. Experiencia en plataformas cloud AWS y Azure.",

      // Projects section
      featuredProjects: "Proyectos Destacados",
      viewAllProjects: "Ver Todos los Proyectos",
      liveDemo: "Demo en Vivo",
      source: "Código Fuente",
      viewDemo: "Ver Demo",
      portfolioHighlights:
        "Estos son solo algunos proyectos destacados de mi portafolio. Visita mi GitHub para más proyectos.",

      // Project descriptions
      morikawaDesc:
        "Plataforma digital que muestra tecnologías ambientales para la restauración de hábitats y el tratamiento de agua",
      portfolioDesc:
        "Un sitio web de portafolio moderno y responsivo construido con React, TypeScript y Tailwind CSS (Si es esta web!)",
      productsLauncherDesc:
        "Aplicación de comercio electrónico basada en microservicios con gateway para clientes, servicios de autenticación y pagos",
      eventApiDesc:
        "Una API RESTful para gestión de eventos construida con Go, Gin y GORM",

      // Technologies
      javascript: "JavaScript",
      html: "HTML",
      css: "CSS",
      environmentalTech: "Tecnología Ambiental",
      react: "React",
      typescript: "TypeScript",
      tailwindCss: "Tailwind CSS",
      nestjs: "NestJS",
      mongodb: "MongoDB",
      prisma: "Prisma",
      stripe: "Stripe",
      go: "Go",
      gin: "Gin",
      gorm: "GORM",
      restfulApi: "API RESTful",

      // Contact section
      getInTouch: "Ponerse en Contacto",
      contactMe: "Contáctame",
      emailMe: "Envíame un Email",

      // Bio section
      aboutMe: "Sobre Mí",
      skills: "Habilidades",
      experience: "Experiencia",
      backendDev: "Desarrollo Backend",
      devopsCloud: "DevOps y Cloud",
      frontend: "Desarrollo Frontend",
      tools: "Herramientas y Utilidades",
      verify: "Verificar",
    },
  },
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
