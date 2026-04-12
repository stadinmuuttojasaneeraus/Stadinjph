let currentLang = "fi";

const translations = {
  fi: {
    heroTitle: "Nopea ja luotettava monipalvelu Helsingissä ja pääkaupunkiseudulla.",
    heroText: "Kodin asennukset, pihatyöt ja remontit – helposti ja sujuvasti.",
    heroCta: "Pyydä tarjous",

    servicesTitle: "Palvelut",
    servicesText:
      "Stadin Handymannit Oy tarjoaa kattavat palvelut yksityisten ja yritysten tarpeisiin.",

    aboutTitle: "Meistä",
    aboutText:
      "Olemme Helsingissä ja pääkaupunkiseudulla toimiva monipalveluyritys, joka tarjoaa monipuolisia palveluita kotitalouksille ja yrityksille.",

    contactTitle: "Yhteystiedot",

    name: "Nimi",
    email: "Sähköposti",
    phone: "Puhelin",
    message: "Viesti",
    submit: "Lähetä",

    service1Title: "Kodin asennuspalvelut",
    service1Text: "Apua arjen pienissä askareissa.",
    service1Btn: "Lue lisää",

    gardenTitle: "Pihapalvelut",
    gardenText: "Hoidamme pihan siistiksi ympäri vuoden.",
    gardenBtn: "Lue lisää",

    remonttiTitle: "Remonttipalvelut",
    remonttiText: "Teemme remontit ammattitaidolla.",
    remonttiBtn: "Lue lisää",

    graveTitle: "Hautakivipalvelut",
    graveText: "Hautakivien huolto ja puhdistus.",
    graveBtn: "Lue lisää",

    navRemontti: "Remontit",
    navGarden: "Pihapalvelut",
    navGrave: "Hautakivipalvelut",
    navInstall: "Kodin asennuspalvelut",

    section1Title: "Kokonaisratkaisu kodin asennuksiin",
    section1Text: "Haluatteko kodin kuntoon ilman stressiä?",
    section1Text2: "Pyydä tarjous – tulemme nopeasti.",

    section2Title: "Asennusapu ja pienet työt",
    section2Text: "Hoidamme pienet asennukset nopeasti.",

    section3Title: "Raskaat ja vaativat asennukset",
    section3Text: "Teemme myös vaativammat työt.",

    section4Title: "Kodin asennuspalvelut",
    section4Text: "Tarjoamme nopeaa ja luotettavaa palvelua.",
    section4Subtitle: "Hinnasto",
    section4Cta: "Pyydä tarjous",

    backButton: "Takaisin"
  },

  sv: {
    heroTitle: "Snabb och pålitlig service i Helsingfors.",
    heroText: "Installationer, trädgård och renoveringar.",
    heroCta: "Be om offert",

    servicesTitle: "Tjänster",
    servicesText: "Vi erbjuder tjänster för hem och företag.",

    aboutTitle: "Om oss",
    aboutText: "Serviceföretag i Helsingfors och huvudstadsregionen.",

    contactTitle: "Kontakt",

    name: "Namn",
    email: "E-post",
    phone: "Telefon",
    message: "Meddelande",
    submit: "Skicka",

    service1Title: "Heminstallationer",
    service1Text: "Hjälp i vardagen.",
    service1Btn: "Läs mer",

    gardenTitle: "Trädgårdstjänster",
    gardenText: "Vi sköter gården året runt.",
    gardenBtn: "Läs mer",

    remonttiTitle: "Renovering",
    remonttiText: "Professionellt arbete.",
    remonttiBtn: "Läs mer",

    graveTitle: "Gravvård",
    graveText: "Skötsel och rengöring.",
    graveBtn: "Läs mer",

    navRemontti: "Renovering",
    navGarden: "Trädgård",
    navGrave: "Gravvård",
    navInstall: "Installationer",

    section1Title: "Helhetslösning",
    section1Text: "Vill du ha ett färdigt hem?",
    section1Text2: "Kontakta oss.",

    section2Title: "Småjobb",
    section2Text: "Vi fixar små installationer.",

    section3Title: "Tunga arbeten",
    section3Text: "Vi hanterar svåra jobb.",

    section4Title: "Installationer",
    section4Text: "Snabb och säker service.",
    section4Subtitle: "Pris",
    section4Cta: "Be om offert",

    backButton: "Tillbaka"
  },

  en: {
    heroTitle: "Fast and reliable service in Helsinki.",
    heroText: "Installations, yard work and renovations.",
    heroCta: "Request a quote",

    servicesTitle: "Services",
    servicesText: "We provide home and business services.",

    aboutTitle: "About",
    aboutText: "Service company in Helsinki and region.",

    contactTitle: "Contact",

    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    submit: "Send",

    service1Title: "Home installations",
    service1Text: "Help with daily tasks.",
    service1Btn: "Read more",

    gardenTitle: "Yard services",
    gardenText: "We take care of your yard.",
    gardenBtn: "Read more",

    remonttiTitle: "Renovations",
    remonttiText: "Professional work.",
    remonttiBtn: "Read more",

    graveTitle: "Grave services",
    graveText: "Cleaning and maintenance.",
    graveBtn: "Read more",

    navRemontti: "Renovations",
    navGarden: "Yard",
    navGrave: "Grave",
    navInstall: "Installations",

    section1Title: "Complete solution",
    section1Text: "Want your home ready?",
    section1Text2: "Contact us.",

    section2Title: "Small jobs",
    section2Text: "We handle small installations.",

    section3Title: "Heavy work",
    section3Text: "We handle demanding jobs.",

    section4Title: "Installations",
    section4Text: "Fast and reliable service.",
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

  const setText = (id, key) => {
    const el = document.getElementById(id);
    if (el && t[key]) el.innerText = t[key];
  };

  setText("hero-title", "heroTitle");
  setText("hero-text", "heroText");
  setText("hero-cta", "heroCta");

  setText("services-title", "servicesTitle");
  setText("services-text", "servicesText");

  setText("about-title", "aboutTitle");
  setText("about-text", "aboutText");

  setText("contact-title", "contactTitle");
  setText("submit", "submit");

  ["name", "email", "phone", "message"].forEach(id => {
    const el = document.getElementById(id);
    if (el && t[id]) el.placeholder = t[id];
  });

  setText("service1-title", "service1Title");
  setText("service1-text", "service1Text");
  setText("service1-btn", "service1Btn");

  setText("garden-title", "gardenTitle");
  setText("garden-text", "gardenText");
  setText("garden-btn", "gardenBtn");

  setText("remontti-title", "remonttiTitle");
  setText("remontti-text", "remonttiText");
  setText("remontti-btn", "remonttiBtn");

  setText("grave-title", "graveTitle");
  setText("grave-text", "graveText");
  setText("grave-btn", "graveBtn");

  setText("nav-remontti", "navRemontti");
  setText("nav-garden", "navGarden");
  setText("nav-grave", "navGrave");
  setText("nav-install", "navInstall");

  setText("section1-title", "section1Title");
  setText("section1-text", "section1Text");
  setText("section1-text2", "section1Text2");

  setText("section2-title", "section2Title");
  setText("section2-text", "section2Text");

  setText("section3-title", "section3Title");
  setText("section3-text", "section3Text");

  setText("section4-title", "section4Title");
  setText("section4-text", "section4Text");
  setText("section4-subtitle", "section4Subtitle");

  setText("section4-cta", "section4Cta");
  setText("back-button", "backButton");
}

window.addEventListener("load", () => {
  const saved = localStorage.getItem("lang");
  if (saved) currentLang = saved;
  applyLang();
});
