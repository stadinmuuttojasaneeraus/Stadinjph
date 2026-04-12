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
      "Olemme Helsingissä toimiva monipalveluyritys.",

    contactTitle: "Yhteystiedot",

    name: "Nimi",
    email: "Sähköposti",
    phone: "Puhelin",
    message: "Viesti",
    submit: "Lähetä",

    service1Title: "Kodin asennuspalvelut",
    service1Text: "Apua arjen pienissä askareissa.",
    service1Btn: "Lue lisää",
    service1_1: "Taulujen, hyllyjen ja peilien kiinnitys.",
    service1_2: "Huonekalujen kokoaminen ja siirto.",
    service1_3: "Kodinkoneiden asennus.",
    service1_4: "Valaisimet ja verhotangot.",

    service2Title: "Pihapalvelut",
    service2Text: "Hoidamme pihan ympäri vuoden.",
    service2Btn: "Lue lisää",

    service3Title: "Remonttipalvelut",
    service3Text: "Ammattitaitoista remontointia.",
    service3Btn: "Lue lisää",

    service4Title: "Hautakivipalvelut",
    service4Text: "Huolto ja puhdistus.",
    service4Btn: "Lue lisää",

    navRemontti: "Remontit",
    navGarden: "Pihapalvelut",
    navGrave: "Hautakivipalvelut",
    navInstall: "Kodin asennuspalvelut",

    // KODIN PAGE
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
    section4_1: "Alkaen 80€/h",
    section4_2: "Pienet työt alkaen 150€",
    section4_3: "Sopimuksen mukaan",
    section4_4: "Yrityksille sopimuksen mukaan",
    section4Cta: "Pyydä tarjous",

    backButton: "Takaisin"
  },

  sv: {
    heroTitle: "Snabb och pålitlig service i Helsingfors.",
    heroText: "Installationer och renoveringar.",
    heroCta: "Be om offert",

    servicesTitle: "Tjänster",
    servicesText: "Vi erbjuder tjänster för hem och företag.",

    aboutTitle: "Om oss",
    aboutText: "Serviceföretag i Helsingfors.",

    contactTitle: "Kontakt",

    name: "Namn",
    email: "E-post",
    phone: "Telefon",
    message: "Meddelande",
    submit: "Skicka",

    service1Title: "Heminstallationer",
    service1Text: "Hjälp i vardagen.",
    service1Btn: "Läs mer",

    service2Title: "Trädgårdstjänster",
    service2Text: "Vi sköter gården.",
    service2Btn: "Läs mer",

    service3Title: "Renovering",
    service3Text: "Professionellt arbete.",
    service3Btn: "Läs mer",

    service4Title: "Gravvård",
    service4Text: "Skötsel och rengöring.",
    service4Btn: "Läs mer",

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
    section4_1: "Från 80€/h",
    section4_2: "Från 150€",
    section4_3: "Enligt avtal",
    section4_4: "Företag enligt avtal",
    section4Cta: "Be om offert",

    backButton: "Tillbaka"
  },

  en: {
    heroTitle: "Fast and reliable service in Helsinki.",
    heroText: "Installations and renovations.",
    heroCta: "Request a quote",

    servicesTitle: "Services",
    servicesText: "We provide home and business services.",

    aboutTitle: "About",
    aboutText: "Service company in Helsinki.",

    contactTitle: "Contact",

    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    submit: "Send",

    service1Title: "Home installations",
    service1Text: "Help with daily tasks.",
    service1Btn: "Read more",

    service2Title: "Yard services",
    service2Text: "We take care of your yard.",
    service2Btn: "Read more",

    service3Title: "Renovations",
    service3Text: "Professional work.",
    service3Btn: "Read more",

    service4Title: "Grave services",
    service4Text: "Cleaning and maintenance.",
    service4Btn: "Read more",

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
    section4_1: "From €80/h",
    section4_2: "From €150",
    section4_3: "By agreement",
    section4_4: "Business by agreement",
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

  let el;

  const setText = (id, key) => {
    el = document.getElementById(id);
    if (el && t[key]) el.innerText = t[key];
  };

  // BASIC
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
    el = document.getElementById(id);
    if (el && t[id]) el.placeholder = t[id];
  });

  // SERVICE CARDS (MATCHAR DIN HTML)
  setText("service1-title", "service1Title");
  setText("service1-text", "service1Text");
  setText("service1-btn", "service1Btn");

  setText("garden-title", "service2Title");
  setText("garden-text", "service2Text");
  setText("garden-btn", "service2Btn");

  setText("remontti-title", "service3Title");
  setText("remontti-text", "service3Text");
  setText("remontti-btn", "service3Btn");

  setText("grave-title", "service4Title");
  setText("grave-text", "service4Text");
  setText("grave-btn", "service4Btn");

  // NAV
  setText("nav-remontti", "navRemontti");
  setText("nav-garden", "navGarden");
  setText("nav-grave", "navGrave");
  setText("nav-install", "navInstall");

  // KODIN PAGE
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

  setText("section4-1", "section4_1");
  setText("section4-2", "section4_2");
  setText("section4-3", "section4_3");
  setText("section4-4", "section4_4");

  setText("section4-cta", "section4Cta");
  setText("back-button", "backButton");
}

window.addEventListener("load", () => {
  const saved = localStorage.getItem("lang");
  if (saved) currentLang = saved;
  applyLang();
});
