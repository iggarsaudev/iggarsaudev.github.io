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
        projectPortfolio: "Acceso al código del Portfolio personal realizado con HTML, CSS y JavaScript.",
        projectBeypei: "Una landing page profesional diseñada para Beypei con diseño responsivo.",
        viewProjectBeypei: "Ver proyecto",
        projectDrinkTitle: "Buscador de Bebidas",
        projectDrink: "Buscador de Bebidas usando API, React Router, Tailwind, Zustand, Zod.",
        viewProjectDrink: "Ver proyecto",
        projectCryptoTitle: "Cotizador Criptomonedas",
        projectCrypto: "Cotizador de Criptomonedas usando React - TypeScript - Cripto App con Zod y Zustand.",
        viewProjectCrypto: "Ver proyecto",
        projectTemperatureTitle: "Buscador de Temperatura",
        projectTemperature: "Buscador de Temperatura usando React - TypeScript - CC Modules y API's.",
        viewProjectTemperature: "Ver proyecto",
        projectVeterinarianTitle: "Consultas Veterinario",
        projectVeterinarian: "Consultas Veterinario usando React - TypeScript - React Hook Form - Zustand - Tailwind.",
        viewProjectVeterinarian: "Ver proyecto",
        projectCalorieTitle: "Contador de Calorías",
        projectCalorie: "Aplicación para contabilizar las calorías usando React y TypeScript.",
        viewProjectCalorie: "Ver proyecto",
        projectExpenseTitle: "Control de Gastos",
        projectExpense: "Control de Gastos React, TypeScript, useReducer y Context API.",
        viewProjectExpense: "Ver proyecto",
        footerNote: "©2025 Ignacio García Sausor - Todos los derechos reservados",
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
        projectPortfolio: "Access to the personal Portfolio code made with HTML, CSS and JavaScript.",
        projectBeypei: "A professional landing page designed for Beypei with a responsive design.",
        viewProjectBeypei: "View Project",
        projectDrinkTitle: "Drink Finder",
        projectDrink: "Drink Finder using API, React Router, Tailwind, Zustand,\n Zod.",
        viewProjectDrink: "View Project",
        projectCryptoTitle: "Cryptocurrency Quoter",
        projectCrypto: "Cryptocurrency Quoter using React - TypeScript - Crypto App with Zod and Zustand.",
        viewProjectCrypto: "View Project",
        projectTemperatureTitle: "Temperature Finder",
        projectTemperature: "Temperature Finder using React - TypeScript - CC Modules and API's.",
        viewProjectTemperature: "View Project",
        projectVeterinarianTitle: "Veterinarian Consultations",
        projectVeterinarian: "Veterinarian Consultations using React - TypeScript - React Hook Form - Zustand - Tailwind.",
        viewProjectVeterinarian: "View Project",
        projectCalorieTitle: "Calorie Counter",
        projectCalorie: "Application to count calories using React and TypeScript.",
        viewProjectCalorie: "View Project",
        projectExpenseTitle: "Expense Control",
        projectExpense: "Expense Control React, TypeScript, useReducer and Context API.",
        viewProjectExpense: "View Project",
        footerNote: "©2025 Ignacio García Sausor - All rights reserved",
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
    document.getElementById("projectPortfolio").textContent =
        translations[currentLanguage].projectPortfolio;
    document.getElementById("projectBeypei").textContent =
        translations[currentLanguage].projectBeypei;
    document.getElementById("viewProjectBeypei").textContent =
        translations[currentLanguage].viewProjectBeypei;
    document.getElementById("projectDrinkTitle").textContent =
        translations[currentLanguage].projectDrinkTitle;
    document.getElementById("projectDrink").textContent =
        translations[currentLanguage].projectDrink;
    document.getElementById("viewProjectDrink").textContent =
        translations[currentLanguage].viewProjectDrink;
    document.getElementById("projectCryptoTitle").textContent =
        translations[currentLanguage].projectCryptoTitle;
    document.getElementById("projectCrypto").textContent =
        translations[currentLanguage].projectCrypto;
    document.getElementById("viewProjectCrypto").textContent =
        translations[currentLanguage].viewProjectCrypto;
    document.getElementById("projectTemperatureTitle").textContent =
        translations[currentLanguage].projectTemperatureTitle;
    document.getElementById("projectTemperature").textContent =
        translations[currentLanguage].projectTemperature;
    document.getElementById("viewProjectTemperature").textContent =
        translations[currentLanguage].viewProjectTemperature;
    document.getElementById("projectVeterinarianTitle").textContent =
        translations[currentLanguage].projectVeterinarianTitle;
    document.getElementById("projectVeterinarian").textContent =
        translations[currentLanguage].projectVeterinarian;
    document.getElementById("viewProjectVeterinarian").textContent =
        translations[currentLanguage].viewProjectVeterinarian;
    document.getElementById("projectCalorieTitle").textContent =
        translations[currentLanguage].projectCalorieTitle;
    document.getElementById("projectCalorie").textContent =
        translations[currentLanguage].projectCalorie;
    document.getElementById("viewProjectCalorie").textContent =
        translations[currentLanguage].viewProjectCalorie;
    document.getElementById("projectExpenseTitle").textContent =
        translations[currentLanguage].projectExpenseTitle;
    document.getElementById("projectExpense").textContent =
        translations[currentLanguage].projectExpense;
    document.getElementById("viewProjectExpense").textContent =
        translations[currentLanguage].viewProjectExpense;
    document.getElementById("footerNote").textContent =
        translations[currentLanguage].footerNote;
}

// Evento del botón
document
    .getElementById("language-toggle")
    .addEventListener("click", changeLanguage);
