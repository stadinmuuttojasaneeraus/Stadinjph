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

    service1Title: "Kodin asennuspalvelut",
    service1Btn: "Lue lisää",

    gardenTitle: "Pihapalvelut",
    gardenBtn: "Lue lisää",

    remonttiTitle: "Remonttipalvelut",
    remonttiBtn: "Lue lisää",

    graveTitle: "Hautakivipalvelut",
    graveBtn: "Lue lisää",

    name: "Nimi",
    email: "Sähköposti",
    phone: "Puhelin",
    message: "Viesti"
  },

  sv: {
    heroTitle: "Snabb och pålitlig service i Helsingfors och huvudstadsregionen.",
    heroText: "Installationer, gårdsarbete och renoveringar.",
    heroCta: "Be om offert",

    servicesTitle: "Tjänster",
    servicesText: "Vi erbjuder omfattande tjänster.",

    aboutTitle: "Om oss",
    aboutText: "Serviceföretag i Helsingfors.",

    contactTitle: "Kontakt",

    submit: "Skicka",

    service1Title: "Heminstallationer",
    service1Btn: "Läs mer",

    gardenTitle: "Trädgårdstjänster",
    gardenBtn: "Läs mer",

    remonttiTitle: "Renovering",
    remonttiBtn: "Läs mer",

    graveTitle: "Gravvård",
    graveBtn: "Läs mer",

    name: "Namn",
    email: "E-post",
    phone: "Telefon",
    message: "Meddelande"
  },

  en: {
    heroTitle: "Fast and reliable service in Helsinki.",
    heroText: "Installations, yard work and renovations.",
    heroCta: "Request a quote",

    servicesTitle: "Services",
    servicesText: "We provide home and business services.",

    aboutTitle: "About us",
    aboutText: "Service company in Helsinki.",

    contactTitle: "Contact",

    submit: "Send",

    service1Title: "Home installations",
    service1Btn: "Read more",

    gardenTitle: "Yard services",
    gardenBtn: "Read more",

    remonttiTitle: "Renovations",
    remonttiBtn: "Read more",

    graveTitle: "Grave services",
    graveBtn: "Read more",

    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message"
  }
};

function applyLang() {
  const t = translations[currentLang];
  if (!t) return;

  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (t[key]) {
      el.innerText = t[key];
    }
  });

  document.querySelectorAll("[data-placeholder]").forEach(el => {
    const key = el.getAttribute("data-placeholder");
    if (t[key]) {
      el.placeholder = t[key];
    }
  });
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
