import triviaImg from '../assets/parcelas-seven.webp';
import masterplanImg from '../assets/parcelas-seven.webp';
import corporativoImg from '../assets/parcelas-seven.webp';
import sgidtImg from '../assets/sgidt.webp';
import axonImg from '../assets/axon.webp';
import salonicaImg from '../assets/salonica.webp';
import lirquenImg from '../assets/lirquen.webp';
import seguridadImg from '../assets/vidrios_seguridad.webp';

export const technologyCategories = {
  "Frontend": [
    { name: "React" },
    { name: "Next.js" },
    { name: "Astro" },
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "HTML5" },
    { name: "Tailwind CSS" },
    { name: "Bootstrap" },
    { name: "CSS" },
  ],
  "Backend": [
    { name: "Node.js" },
    { name: "Python" },
    { name: "Django" },
    { name: "DRF" },
    { name: "WordPress" }
  ],
  "Bases de Datos": [
    { name: "MySQL" },
    { name: "PostgreSQL" },
    { name: "Neon" }
  ],
  "Herramientas": [
    { name: "Docker" },
    { name: "Postman" }
  ]
};

export const personalInfo = {
  name: "Nicolás Cerón",
  title: "Desarrollador Web Full-Stack",
  cv: "/NicolasCeron_cv.pdf",
  bio: [
    "Me apasiona la arquitectura detrás de la web: tomar líneas de código y transformarlas en sistemas complejos y vivos en el navegador. En mi paso por el entorno de agencia, aprendí que el código no solo debe ser limpio, sino resolver problemas de negocio reales bajo presión.",
    "Creo en la comunicación sin ambigüedades y en identificar las virtudes del equipo para distribuir tareas eficazmente. Fuera de la terminal, la música marca mi ritmo; siempre hay un buen disco sonando o estoy buscando ese tono de guitarra perfecto al estilo Oasis para desconectar."
  ],
  social: [
    { name: "GitHub", url: "https://github.com/NicolasCeronM", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/nicolas-ceron-mulato/", icon: "linkedin" },
    { name: "Email", url: "mailto:nicolas134b@gmail.com", icon: "email" }
  ]
};

export const experience = [
  {
    date: "NOV 2025 — PRESENTE",
    title: "Desarrollador Web",
    company: "Jirafa DBC",
    companyUrl: "#",
    description: "Desarrollo y despliegue de sitios web de alto rendimiento y landing pages optimizadas. Liderazgo en la implementación de interfaces usando Astro y React, y arquitectura Headless CMS conectando WordPress con frontends modernos.",
    technologies: ["Astro", "React", "Next.js", "Tailwind CSS", "WordPress"]
  }
];

export const projects = [
  {
    title: "Masterplan 360 Inmobiliario",
    description: "Implementación de mapas 2D interactivos (SVG) para proyectos de parcelación, permitiendo a los usuarios visualizar la disponibilidad de los terrenos de manera intuitiva. Proyecto desarrollado como integrante del equipo de Jirafa DBC.",
    technologies: ["Astro", "JavaScript", "Leaflet.js"],
    image: masterplanImg,
    url: "https://parcelas-seven.vercel.app/"
  },
  {
    title: "Desarrollo Corporativo de Alto Rendimiento",
    description: "Desarrollo, optimización y despliegue de sitios web corporativos y landing pages enfocadas en la velocidad y conversión (ej. Vidrios Achival). Proyecto desarrollado como integrante del equipo de Jirafa DBC.",
    technologies: ["Astro", "Tailwind CSS", "WordPress (Headless)"],
    image: lirquenImg,
    url: "https://www.vidrioslirquen.cl/"
  },
  {
    title: "SGIDT - Gestión Tributaria Inteligente",
    description: "Sistema de Gestión Inteligente de Documentos Tributarios diseñado para pymes chilenas. Arquitectura orientada a automatizar y organizar la información contable. Proyecto de título para la carrera de Ingeniería en Informática.",
    technologies: ["Arquitectura Full-Stack", "Gestión de Datos", "UI/UX"],
    image: sgidtImg,
    url: "https://github.com/NicolasCeronM/sgidt.git"
  },
  {
    title: "Salónica Galway - Web Corporativa Multiidioma",
    description: "Desarrollo de plataforma corporativa con presencia internacional e integraciones de mensajería y contacto. Diseñada con un enfoque multiidioma robusto utilizando Next.js para optimizar la escalabilidad, Tailwind CSS para una interfaz fluida, y next-intl para la gestión de traducciones. Proyecto desarrollado como integrante del equipo de Jirafa DBC.",
    image: salonicaImg,
    technologies: ["Next.js", "Tailwind CSS", "next-intl", "Node.js"],
    url: "https://salonicagalway.cl/es"
  },
  {
    title: "Axon Innova - Corporativo Multiidioma",
    description: "Desarrollo, optimización y despliegue de plataforma web corporativa enfocada en la velocidad y conversión. Implementada con arquitectura Headless CMS integrada con Next.js y Tailwind CSS, utilizando soporte multiidioma con i18n para una experiencia global y escalable. Proyecto desarrollado como integrante del equipo de Jirafa DBC.",
    image: axonImg,
    technologies: ["Next.js", "Tailwind CSS", "i18n", "WordPress (Headless)"],
    url: "https://www.axoninnova.com/es"
  },
  {
    title: "Campaña Vidrios de Seguridad",
    description: "Landing page corporativa para campaña de seguridad, optimizada para alta conversión y velocidad de carga con Astro. Cuenta con un sistema automatizado de captura de leads que conecta directamente el formulario de registro con Google Sheets para una gestión de datos eficiente en tiempo real.",
    image: seguridadImg,
    technologies: ["Astro", "JavaScript", "Google Sheets API", "Tailwind CSS"],
    url: "https://vidriosdeseguridad.cl/"
  },
];
