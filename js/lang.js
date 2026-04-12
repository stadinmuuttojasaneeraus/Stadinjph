let currentLang = "fi";

const translations = {
  fi: {
    heroTitle: "Nopea ja luotettava monipalvelu Helsingissä ja pääkaupunkiseudulla.",
    heroText: "Kodin asennukset, pihatyöt ja remontit – helposti ja sujuvasti.",
    heroCta: "Pyydä tarjous",

    servicesTitle: "Palvelut",
    aboutTitle: "Meistä",
    contactTitle: "Yhteystiedot",

    service1Title: "Kodin asennuspalvelut",
    service1Btn: "Lue lisää",

    gardenTitle: "Pihapalvelut",
    gardenBtn: "Lue lisää",

    remonttiTitle: "Remonttipalvelut",
    remonttiBtn: "Lue lisää",

    graveTitle: "Hautakivipalvelut",
    graveBtn: "Lue lisää",

    navRemontti: "Remontit",
    navGarden: "Pihapalvelut",
    navGrave: "Hautakivipalvelut",
    navInstall: "Kodin asennuspalvelut",

    submit: "Lähetä",

    section1Title: "Kokonaisratkaisu kodin asennuksiin",
    section2Title: "Asennusapu ja pienet työt",
    section3Title: "Raskaat ja vaativat asennukset",
    section4Title: "Kodin asennuspalvelut",
    section4Subtitle: "Hinnasto",
    section4Cta: "Pyydä tarjous",

    backButton: "Takaisin"
  },

  sv: {
    heroTitle: "Snabb och pålitlig service i Helsingfors.",
    heroText: "Installationer och renoveringar.",
    heroCta: "Be om offert",

    servicesTitle: "Tjänster",
    aboutTitle: "Om oss",
    contactTitle: "Kontakt",

    service1Title: "Heminstallationer",
    service1Btn: "Läs mer",

    gardenTitle: "Trädgårdstjänster",
    gardenBtn: "Läs mer",

    remonttiTitle: "Renovering",
    remonttiBtn: "Läs mer",

    graveTitle: "Gravvård",
    graveBtn: "Läs mer",

    navRemontti: "Renovering",
    navGarden: "Trädgård",
    navGrave: "Gravvård",
    navInstall: "Installationer",

    submit: "Skicka",

    section1Title: "Helhetslösning",
    section2Title: "Småjobb",
    section3Title: "Tunga arbeten",
    section4Title: "Installationer",
    section4Subtitle: "Pris",
    section4Cta: "Be om offert",

    backButton: "Tillbaka"
  },

  en: {
    heroTitle: "Fast and reliable service in Helsinki.",
    heroText: "Installations and renovations.",
    heroCta: "Request a quote",

    servicesTitle: "Services",
    aboutTitle: "About",
    contactTitle: "Contact",

    service1Title: "Home installations",
    service1Btn: "Read more",

    gardenTitle: "Yard services",
    gardenBtn: "Read more",

    remonttiTitle: "Renovations",
    remonttiBtn: "Read more",

    graveTitle: "Grave services",
    graveBtn: "Read more",

    navRemontti: "Renovations",
    navGarden: "Yard",
    navGrave: "Grave",
    navInstall: "Installations",

    submit: "Send",

    section1Title: "Complete solution",
    section2Title: "Small jobs",
    section3Title: "Heavy work",
    section4Title: "Installations",
    section4Subtitle: "Pricing",
    section4Cta: "Request quote",

    backButton: "Back"
  }
};

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyLang();
}

function applyLang() {
  const t = translations[currentLang];
  if (!t) return;

  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (t[key]) el.innerText = t[key];
  });

  document.querySelectorAll("[data-placeholder]").forEach(el => {
    const key = el.getAttribute("data-placeholder");
    if (t[key]) el.placeholder = t[key];
  });
}

window.addEventListener("load", () => {
  const saved = localStorage.getItem("lang");
  if (saved) currentLang = saved;
  applyLang();
});
