// Objeto con las traducciones
const translations = {
    es: {
        menuHome: "Inicio",
        menuSkills: "Habilidades",
        menuProjects: "Proyectos",
        infoName: "¡Hola, soy Ignacio García Sausor!",
        infoDescription: "Informático Técnico especializado en Java, Base de Datos y React, con 8 años de experiencia en la aplicación de las últimas tecnologías en el Servicio Postal. Actualmente busco nuevos retos laborales que me permitan desarrollar mis conocimientos y habilidades con motivación, sentido del compañerismo y ganas de aprender para seguir desarrollándome profesionalmente.",
        infoCV: "Descargar CV",
        skillsTitle: "Habilidades",
        skillsLearning: "En continuo aprendizaje",
        projectsTitle: "Proyectos"
    },
    en: {
        menuHome: "Home",
        menuSkills: "Skills",
        menuProjects: "Projects",
        infoName: "Hi, I'm Ignacio García Sausor!",
        infoDescription: "Computer Technician specialized in Java, Database and React, with 8 years of experience in the application of the latest technologies in the Postal Service. I am currently looking for new work challenges that allow me to develop my knowledge and skills with motivation, a sense of camaraderie and desire to learn to continue developing professionally.",
        infoCV: "Download CV",
        skillsTitle: "Skills",
        skillsLearning: "In continuous learning",
        projectsTitle: "Projects"
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
    document.getElementById("skillsLearning").textContent =
        translations[currentLanguage].skillsLearning;
    document.getElementById("projectsTitle").textContent =
        translations[currentLanguage].projectsTitle;
}

// Evento del botón
document
    .getElementById("language-toggle")
    .addEventListener("click", changeLanguage);
