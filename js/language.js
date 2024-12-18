// Objeto con las traducciones
const translations = {
    es: {
        menuHome: "Sobre mi",
        menuSkills: "Habilidades",
        menuProjects: "Proyectos",
        infoName: "¡Hola, soy Ignacio García Sausor!",
        infoDescription: "Informático Técnico especializado en Java, Base de Datos y React, con 8 años de experiencia en la aplicación de las últimas tecnologías en el Servicio Postal. Actualmente busco nuevos retos laborales que me permitan desarrollar mis conocimientos y habilidades con motivación, sentido del compañerismo y ganas de aprender para seguir desarrollándome profesionalmente.",
        infoCV: "Descargar CV",
        skillsTitle: "Habilidades",
        skillsFrontend: "Frontend",
        skillsBackend: "Backend",
        skillsBDA: "Bases de datos",
        skillsVersions: "Control de versiones",
        projectsTitle: "Proyectos",
        viewProject: "Ver proyecto",
        projectBeypei: "Una landing page profesional diseñada para Beypei con diseño responsivo."
    },
    en: {
        menuHome: "About me",
        menuSkills: "Skills",
        menuProjects: "Projects",
        infoName: "Hi, I'm Ignacio García Sausor!",
        infoDescription: "Computer Technician specialized in Java, Database and React, with 8 years of experience in the application of the latest technologies in the Postal Service. I am currently looking for new work challenges that allow me to develop my knowledge and skills with motivation, a sense of camaraderie and desire to learn to continue developing professionally.",
        infoCV: "Download Resume",
        skillsTitle: "Skills",
        skillsFrontend: "Frontend",
        skillsBackend: "Backend",
        skillsBDA: "Databases",
        skillsVersions: "Version control",
        projectsTitle: "Projects",
        viewProject: "View Project",
        projectBeypei: "A professional landing page designed for Beypei with a responsive design."
    },
};

// Flags
const flags = {
    es: {
        icon: "img/flag/spanish.png",
        alt: "Cambiar a Inglés"
    },
    en: {
        icon: "img/flag/english.png",
        alt: "Switch to Spanish"
    }
};

// Variable para rastrear el idioma actual
let currentLanguage = "es";

// Función para cambiar el idioma
function changeLanguage() {
    currentLanguage = currentLanguage === "es" ? "en" : "es";

    // Actualizar bandera
    const languageIcon = document.getElementById("language-icon");
    languageIcon.src = flags[currentLanguage].icon;
    languageIcon.alt = flags[currentLanguage].alt;

    // Actualiza los textos
    document.getElementById("menuHome").textContent =
        translations[currentLanguage].menuHome;
    document.getElementById("menuSkills").textContent =
        translations[currentLanguage].menuSkills;
    document.getElementById("menuProjects").textContent =
        translations[currentLanguage].menuProjects;
    document.getElementById("infoName").textContent =
        translations[currentLanguage].infoName;
    document.getElementById("infoDescription").textContent =
        translations[currentLanguage].infoDescription;
    document.getElementById("infoCV").textContent =
        translations[currentLanguage].infoCV;
    document.getElementById("skillsTitle").textContent =
        translations[currentLanguage].skillsTitle;
    document.getElementById("skillsFrontend").textContent =
        translations[currentLanguage].skillsFrontend;
    document.getElementById("skillsBackend").textContent =
        translations[currentLanguage].skillsBackend;
    document.getElementById("skillsBDA").textContent =
        translations[currentLanguage].skillsBDA;
    document.getElementById("skillsVersions").textContent =
        translations[currentLanguage].skillsVersions;
    document.getElementById("projectsTitle").textContent =
        translations[currentLanguage].projectsTitle;
    document.getElementById("projectBeypei").textContent =
        translations[currentLanguage].projectBeypei;
    document.getElementById("viewProject").textContent =
        translations[currentLanguage].viewProject;
}

// Evento del botón
document
    .getElementById("language-toggle")
    .addEventListener("click", changeLanguage);
