let currentLang = "fi";

const translations = {
  fi: {
    heroTitle: "Nopea ja luotettava monipalvelu Helsingissä ja pääkaupunkiseudulla.",
    heroText: "Kodin asennukset, pihatyöt ja remontit – helposti ja sujuvasti.",
    heroCta: "Pyydä tarjous",

    servicesTitle: "Palvelut",
    servicesText:
      "Stadin Handymannit Oy tarjoaa kattavat palvelut yksityisten ja yritysten tarpeisiin: asennuspalvelut, pihapalvelut ja remontit.",

    aboutTitle: "Meistä",
    aboutText:
      "Olemme Helsingissä ja pääkaupunkiseudulla toimiva monipalveluyritys.",

    contactTitle: "Yhteystiedot",
    submit: "Lähetä",

    name: "Nimi",
    email: "Sähköposti",
    phone: "Puhelin",
    message: "Viesti",

    service1Title: "Kodin asennuspalvelut",
    service1Text: "Apua arjen pienissä askareissa.",
    service1Btn: "Lue lisää",

    gardenTitle: "Pihapalvelut",
    gardenText: "Hoidamme pihan siistiksi ja toimivaksi ympäri vuoden.",
    gardenBtn: "Lue lisää",

    remonttiTitle: "Remonttipalvelut",
    remonttiText: "Teemme remontit siististi ja ammattitaidolla.",
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
    section1Text2: "Pyydä ilmainen tarjous – tulemme nopeasti paikalle.",

    section2Title: "Asennusapu ja pienet työt",
    section2Text: "Hoidamme asennukset nopeasti ja helposti.",

    section3Title: "Raskaat ja vaativat asennukset",
    section3Text: "Teemme myös vaativammat asennustyöt.",

    section4Title: "Kodin asennuspalvelut",
    section4Text: "Nopea ja luotettava palvelu.",
    section4Subtitle: "Hinnasto",

    section4_1: "Asennustyöt: alkaen 80€/h",
    section4_2: "Pienet asennukset: alkaen 150€",
    section4_3: "Kodinkoneasennukset sopimuksen mukaan",
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
    aboutText: "Vi är ett serviceföretag i Helsingfors.",

    contactTitle: "Kontakt",
    submit: "Skicka",

    name: "Namn",
    email: "E-post",
    phone: "Telefon",
    message: "Meddelande",

    service1Title: "Heminstallationer",
    service1Text: "Hjälp i vardagen.",
    service1Btn: "Läs mer",

    gardenTitle: "Trädgårdstjänster",
    gardenText: "Vi sköter gården året runt.",
    gardenBtn: "Läs mer",

    remonttiTitle: "Renovering",
    remonttiText: "Professionella renoveringar.",
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
    section2Text: "Snabba installationer.",

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
    aboutText: "We are a service company in Helsinki.",

    contactTitle: "Contact",
    submit: "Send",

    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",

    service1Title: "Home installations",
    service1Text: "Help with daily tasks.",
    service1Btn: "Read more",

    gardenTitle: "Yard services",
    gardenText: "We take care of your yard year-round.",
    gardenBtn: "Read more",

    remonttiTitle: "Renovations",
    remonttiText: "Professional renovation work.",
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
    section2Text: "Fast installations.",

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

function applyLang() {
  try {
    const t = translations[currentLang];
    if (!t) return;

    const setText = (id, key) => {
      const el = document.getElementById(id);
      if (el && t[key] !== undefined) el.innerText = t[key];
    };

    const setPlaceholder = (id, key) => {
      const el = document.getElementById(id);
      if (el && t[key] !== undefined) el.placeholder = t[key];
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

    setPlaceholder("name", "name");
    setPlaceholder("email", "email");
    setPlaceholder("phone", "phone");
    setPlaceholder("message", "message");

    // SERVICE CARDS (INDEX - SAFE VERSION)
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

    setText("section4-1", "section4_1");
    setText("section4-2", "section4_2");
    setText("section4-3", "section4_3");
    setText("section4-4", "section4_4");

    setText("section4-cta", "section4Cta");
    setText("back-button", "backButton");

  } catch (err) {
    console.error("Language error:", err);
  }
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyLang();
}

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang");
  if (saved) currentLang = saved;
  applyLang();
});
