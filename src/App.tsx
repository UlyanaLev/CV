import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faEnvelope,
  faLocationDot,
  faDownload,
  faArrowUpRightFromSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTelegram,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGitAlt,
  faSass,
  faNpm,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import "./i18n";
import photo from "./assets/images/photo.jpg";
import certificate from "./assets/images/UlyanaLevchuk.jpg";

const email = "ulyana.liauchuk@gmail.com";
const telegram = "@ulevchuk";

function Section({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`resume-section ${className}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };
  return (
    <button
      className="copy-button"
      onClick={copy}
      aria-label={`${label}: ${value}`}
      title={copied ? "Copied" : label}
    >
      <FontAwesomeIcon icon={faCopy} />
      <span>{copied ? "Copied" : label}</span>
    </button>
  );
}

function Header() {
  const { t, i18n } = useTranslation();
  return (
    <header className="hero">
      <div className="hero-banner"></div>
      <div className="container hero-profile">
        <img className="hero-photo" src={photo} alt="Ulyana Liauchuk" />
        <div className="hero-copy">
          <h1>{t("person")}</h1>
          <p className="hero-role">{t("title_speciality")}</p>
        </div>
        <div className="language-switcher" aria-label="Language">
          {(["en", "ru"] as const).map((language) => (
            <button
              key={language}
              className={i18n.language === language ? "active" : ""}
              onClick={() => i18n.changeLanguage(language)}
            >
              {language.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

function ContactDetails() {
  const { t } = useTranslation();
  return (
    <Section title={t("contact")} className="contact-section">
      <div className="contact-list">
        <div className="contact-row">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>{t("location")}</span>
        </div>
        <div className="contact-row">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href={`mailto:${email}`}>{email}</a>
          <CopyButton value={email} label={t("copy")} />
        </div>
        <div className="contact-row">
          <FontAwesomeIcon icon={faTelegram} />
          <a href="https://t.me/ulevchuk" target="_blank" rel="noreferrer">
            {telegram}
          </a>
          <CopyButton value={telegram} label={t("copy")} />
        </div>
        <div className="contact-row">
          <FontAwesomeIcon icon={faGithub} />
          <a
            href="https://github.com/UlyanaLev"
            target="_blank"
            rel="noreferrer"
          >
            github.com/UlyanaLev
          </a>
        </div>
        <div className="contact-row">
          <FontAwesomeIcon icon={faLinkedinIn} />
          <a
            href="https://www.linkedin.com/in/ulyana-liauchuk-271287304/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}

function Download() {
  const { t, i18n } = useTranslation();
  const download = (fileName: string) => {
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = fileName;
    link.click();
  };
  return (
    <button
      className="download-button"
      onClick={() =>
        download(i18n.language === "ru" ? "resume_ru.pdf" : "resume_en.pdf")
      }
    >
      <FontAwesomeIcon icon={faDownload} />
      {t("downloadCV")}
    </button>
  );
}

function Sidebar() {
  const { t } = useTranslation();
  const skills = [
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3Alt },
    { name: "JavaScript", icon: faJs },
    { name: "TypeScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "Redux", icon: faReact },
    { name: "REST API" },
    { name: "Sass", icon: faSass },
    { name: "Git", icon: faGitAlt },
    { name: "NPM", icon: faNpm },
    { name: "Webpack" },
    { name: "Jest / Cypress" },
    { name: "Figma", icon: faFigma },
    { name: "Photoshop" },
  ];
  return (
    <aside className="sidebar">
      <ContactDetails />
      <Section title={t("skills")} className="skills-section">
        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill.name}>
              {skill.icon && <FontAwesomeIcon icon={skill.icon} />}
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </Section>
      <Section title={t("languages")} className="languages-section">
        <ul className="tag-list">
          <li>{t("russian")}</li>
          <li>{t("english")}</li>
        </ul>
      </Section>
      <Download />
    </aside>
  );
}

function MainContent() {
  const { t } = useTranslation();
  const [certificateOpen, setCertificateOpen] = useState(false);
  return (
    <main className="content">
      <Section title={t("summary")} className="summary-section">
        <p className="lead">{t("summary_text")}</p>
      </Section>
      <Section title={t("experience")} className="experience-section">
        <article className="timeline-item">
          <div className="timeline-meta">
            <strong>{t("alivio_date")}</strong>
          </div>
          <div>
            <h3>
              {t("alivio_role")} <span aria-hidden="true">•</span>{" "}
              <a href="https://www.alivio.ai/" target="_blank" rel="noreferrer">
                {t("alivio_company")}
              </a>
            </h3>
            <ul className="bullet-list">
              <li>{t("alivio_ui")}</li>
              <li>{t("alivio_pages")}</li>
              <li>{t("alivio_performance")}</li>
              <li>{t("alivio_team")}</li>
            </ul>
          </div>
        </article>
        <article className="timeline-item">
          <div className="timeline-meta">
            <strong>{t("sewing_date")}</strong>
          </div>
          <div>
            <h3>
              {t("content_manager")} <span aria-hidden="true">•</span>{" "}
              <span className="company-name">{t("sewing_enterprise")}</span>
            </h3>
            <ul className="bullet-list">
              <li>{t("uploaded_photos")}</li>
              <li>{t("ensured")}</li>
              <li>{t("populated")}</li>
              <li>{t("processed")}</li>
              <li>{t("communicated")}</li>
            </ul>
          </div>
        </article>
      </Section>
      <Section title={t("education")} className="education-section">
        <article className="timeline-item">
          <div className="timeline-meta">
            <strong>2016 - 2020</strong>
            <span>Brest, Belarus</span>
          </div>
          <div>
            <h3>{t("engineer")}</h3>
            <p>{t("university")}</p>
            <p>{t("faculty")}</p>
            <p>{t("specialities")}</p>
          </div>
        </article>
      </Section>
      <Section title={t("courses")} className="courses-section">
        <article className="course-card">
          <div>
            <h3>{t("developer")}</h3>
            <p className="course-date">{t("teachmeskills")}</p>
            <p>{t("completed")}</p>
            <div className="project-links" aria-label="Projects">
              <a
                href="https://github.com/UlyanaLev/project_bookstore"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> project_bookstore
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
              <a
                href="https://github.com/UlyanaLev/project_activebox"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> project_activebox
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
              <a
                href="https://github.com/UlyanaLev/project_wildberries"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> project_wildberries
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </div>
          <button
            className="certificate-button"
            onClick={() => setCertificateOpen(true)}
          >
            <img src={certificate} alt="Certificate" />
            <span>
              View certificate{" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
          </button>
        </article>
      </Section>
      {certificateOpen && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setCertificateOpen(false)}
        >
          <button className="modal-close" aria-label="Close">
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <img src={certificate} alt="Frontend developer certificate" />
        </div>
      )}
    </main>
  );
}

function App() {
  const { i18n } = useTranslation();

  return (
    <div className={`resume-app language-${i18n.language}`}>
      <Header />
      <div className="container resume-grid">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
