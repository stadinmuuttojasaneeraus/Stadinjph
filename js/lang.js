let currentLang = "fi";

const translations = {
  fi: {
    heroTitle: "Nopea ja luotettava monipalvelu Helsingissä ja pääkaupunkiseudulla.",
    heroText: "Kodin asennukset, pihatyöt ja remontit – helposti ja sujuvasti.",
    heroCta: "Pyydä tarjous",

    servicesTitle: "Palvelut",
    servicesText:
      "Stadin Handymannit Oy tarjoaa kattavat palvelut yksityisten ja yritysten tarpeisiin: asennuspalvelut, pihapalvelut ja remontit. Meidän ammattitaitoinen tiimi takaa, että työ tehdään nopeasti, huolellisesti ja asiakkaan toiveiden mukaan.",

    aboutTitle: "Meistä",
    aboutText:
      "Olemme Helsingissä ja pääkaupunkiseudulla toimiva monipalveluyritys, joka tarjoaa monipuolisia palveluita kotitalouksille ja yrityksille.",

    contactTitle: "Yhteystiedot",

    service1Title: "Kodin asennuspalvelut.",
    service1Text:
      "Apua arjen pienissä askareissa. Autamme kaikenlaisissa kodin käytännön töissä:",
    service1Btn: "Lue lisää",

    gardenTitle: "Pihapalvelut",
    gardenText: "Hoidamme pihan siistiksi ja toimivaksi ympäri vuoden.",

    remonttiTitle: "Remonttipalvelut",
    remonttiText:
      "Teemme kodin remontit siististi, tehokkaasti ja ammattitaidolla.",

    graveTitle: "Hautakivipalvelut",
    graveText:
      "Hoidamme hautakivien puhdistuksen, kunnostuksen ja ylläpidon arvokkaasti ja huolellisesti."
  },

  sv: {
    heroTitle: "Snabb och pålitlig service i Helsingfors och huvudstadsregionen.",
    heroText: "Installationer, gårdsarbete och renoveringar – enkelt och smidigt.",
    heroCta: "Be om offert",

    servicesTitle: "Tjänster",
    servicesText:
      "Stadin Handymannit Oy erbjuder omfattande tjänster för hem och företag.",

    aboutTitle: "Om oss",
    aboutText:
      "Vi är ett serviceföretag i Helsingfors och huvudstadsregionen.",

    contactTitle: "Kontakt",

    service1Title: "Heminstallationer",
    service1Text: "Hjälp i vardagen.",
    service1Btn: "Läs mer",

    gardenTitle: "Trädgårdstjänster",
    gardenText: "Vi håller din gård i gott skick året runt.",

    remonttiTitle: "Renoveringstjänster",
    remonttiText: "Vi gör renoveringar professionellt och noggrant.",

    graveTitle: "Gravvård",
    graveText: "Vi sköter gravstenar med respekt och omsorg."
  },

  en: {
    heroTitle: "Fast and reliable service in Helsinki and the metropolitan area.",
    heroText: "Installations, yard work and renovations – easy and smooth.",
    heroCta: "Request a quote",

    servicesTitle: "Services",
    servicesText:
      "Stadin Handymannit Oy provides complete services for homes and businesses.",

    aboutTitle: "About us",
    aboutText:
      "We are a service company operating in Helsinki and the metropolitan area.",

    contactTitle: "Contact",

    service1Title: "Home installations",
    service1Text: "Help with everyday tasks.",
    service1Btn: "Read more",

    gardenTitle: "Yard services",
    gardenText: "We keep your yard clean and functional year-round.",

    remonttiTitle: "Renovation services",
    remonttiText: "We do renovations professionally and efficiently.",

    graveTitle: "Grave services",
    graveText: "We handle grave maintenance with care and respect."
  }
};

function applyLang() {
  const t = translations[currentLang];
  if (!t) return;

  // 1. HERO + ALL data-translate (din bästa struktur)
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (t[key]) el.innerText = t[key];
  });

  const set = (id, key) => {
    const el = document.getElementById(id);
    if (el && t[key]) el.innerText = t[key];
  };

  // 2. SERVICES TEXT + ABOUT + CONTACT TITLES
  set("services-text", "servicesText");
  set("about-title", "aboutTitle");
  set("about-text", "aboutText");
  set("contact-title", "contactTitle");

  // 3. SERVICE CARDS
  set("service1-title", "service1Title");
  set("service1-text", "service1Text");
  set("service1-btn", "service1Btn");

  set("garden-title", "gardenTitle");
  set("garden-text", "gardenText");

  set("remontti-title", "remonttiTitle");
  set("remontti-text", "remonttiText");

  set("grave-title", "graveTitle");
  set("grave-text", "graveText");

  // 4. FORM PLACEHOLDERS (DET DU SAKNAR NU)
  const placeholders = {
    name: "name",
    email: "email",
    phone: "phone",
    message: "message"
  };

  Object.keys(placeholders).forEach(id => {
    const el = document.querySelector(`[name="${id}"]`);
    if (el && t[placeholders[id]]) {
      el.placeholder = t[placeholders[id]];
    }
  });

  // 5. BUTTONS
  const submitBtn = document.querySelector("button[type='submit']");
  if (submitBtn && t.submit) {
    submitBtn.innerText = t.submit;
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
