import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        person: "Ulyana Levchuk",
        title_speciality: "Frontend Developer",
        contact: "Contact",
        location: "Tbilisi, Georgia",
        personal_data: "Personal data",
        age: "Age",
        years: "26 years",
        nationality: "Nationality",
        belarus: "Belarus",
        family_status: "Family status",
        single: "Single",
        languages: "Languages",
        russian: "Russian (Native)",
        english: "English (A2)",
        skills: "Skills",
        summary: "Summary",
        summary_text:
          "Frontend developer focused on React, TypeScript and accessible interfaces. Background in content operations, visual QA and cross-team communication. Building clean, maintainable UI and growing toward production product development.",
        experience: "Experience",
        alivio_role: "Frontend Developer",
        alivio_company: "Alivio, Startup",
        alivio_date: "May 2025 - May 2026",
        alivio_ui:
          "Developed and maintained the Alivio UI using React and TypeScript, participating in a gradual codebases migration from JavaScript to TypeScript.",
        alivio_pages:
          "Built responsive pages and UI components (HTML5, CSS3), implementing internationalization (i18n) and multi-language support.",
        alivio_performance:
          "Optimized page load performance, ensured cross-browser compatibility, and maintained high code quality through Code Reviews.",
        alivio_team:
          "Collaborated with UI/UX designers (Figma), backend developers, and QA engineers, tracking tasks and workflow in Trello.",
        content_manager: "Content Manager (Website Management)",
        sewing_enterprise: "Sewing Enterprise",
        sewing_date: "May 2023 - Aug 2024",
        uploaded_photos:
          "Managed product pages, photos and descriptions in MODX.",
        ensured: "Maintained accurate, consistent and user-friendly content.",
        populated: "Updated online stores with product content and launches.",
        processed: "Edited and optimized product imagery in Photoshop.",
        communicated:
          "Coordinated updates with store managers across messaging platforms.",
        education: "Education",
        engineer: "Environmental engineer, ecologist",
        university: "Brest State Technical University Sep 2016 - Jun 2020",
        faculty: "Faculty of Engineering Systems and Ecology",
        specialities: "Specialities 'Environmental Protection Activities'",
        courses: "Courses",
        developer: "Front-End Developer",
        teachmeskills: "TeachMeSkills Fev 2024 - Nov 2024",
        completed:
          "Completed a practical frontend program covering HTML, CSS, JavaScript and React.",
        diplom:
          "Diploma project: project_bookstore. Other work: project_activebox and project_wildberries.",
        copy: "Copy",
        downloadCV: "Download CV",
      },
    },
    ru: {
      translation: {
        person: "Ульяна Левчук",
        title_speciality: "Frontend-разработчик",
        contact: "Контакты",
        location: "Тбилиси, Грузия",
        personal_data: "Личные данные",
        age: "Возраст",
        years: "26 лет",
        nationality: "Национальность",
        belarus: "Белорус",
        family_status: "Семейное положение",
        single: "Не замужем",
        languages: "Языки",
        russian: "Русский (Родной)",
        english: "Английский (A2)",
        skills: "Навыки",
        summary: "Краткое содержание",
        summary_text:
          "Frontend-разработчик, ориентированный на React, TypeScript и доступные интерфейсы. Опыт в контент-операциях, визуальном контроле и коммуникации с командами. Создаю чистый поддерживаемый UI и развиваюсь в продуктовой разработке.",
        experience: "Опыт",
        alivio_role: "Frontend-разработчик",
        alivio_company: "Alivio, стартап",
        alivio_date: "Май 2025 - Май 2026",
        alivio_ui:
          "Разработка и поддержка UI продукта Alivio на React и TypeScript, участие в постепенном переводе проекта с JavaScript на TypeScript.",
        alivio_pages:
          "Создание и адаптивная вёрстка новых страниц и компонентов (HTML5, CSS3), реализация мультиязычности (i18n) и локализации интерфейса.",
        alivio_performance:
          "Оптимизация производительности загрузки страниц, обеспечение кроссбраузерности и высокого качества кода через Code Review.",
        alivio_team:
          "Работа в команде: совместное проектирование с UI/UX дизайнерами в Figma, взаимодействие с бэкенд-разработчиками и QA-инженерами, ведение задач в Trello.",
        content_manager: "Контент-менеджер (управление веб-сайтом)",
        sewing_enterprise: "Швейное предприятие",
        sewing_date: "Май 2023 - Август 2024",
        uploaded_photos:
          "Ведение карточек товаров, фотографий и описаний в MODX.",
        ensured: "Поддержка точного и удобного для пользователей контента.",
        populated: "Обновление интернет-магазинов и публикация новых товаров.",
        processed: "Обработка и оптимизация изображений в Photoshop.",
        communicated: "Координация обновлений с менеджерами через мессенджеры.",
        education: "Образование",
        engineer: "Инженер-эколог, эколог",
        university:
          "Брестский государственный технический университет, Сентябрь 2016 - Июнь 2020",
        faculty: "Факультет инженерных систем и экологии",
        specialities: "Специальность «Природоохранная деятельность»",
        courses: "Курсы",
        developer: "Фронтенд-разработчик",
        teachmeskills: "TeachMeSkills, февраль 2024 - ноябрь 2024",
        completed: "Практический курс по HTML, CSS, JavaScript и React.",
        diplom:
          "Дипломный проект: project_bookstore. Другие проекты: project_activebox и project_wildberries.",
        copy: "Копировать",
        downloadCV: "Скачать CV",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
