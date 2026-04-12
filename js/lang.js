let currentLang = "fi";

const translations = {
  fi: {
    heroTitle: "Nopea ja luotettava monipalvelu Helsingissä ja pääkaupunkiseudulla.",
    heroText: "Kodin asennukset, pihatyöt ja remontit – helposti ja sujuvasti.",
    heroCta: "Pyydä tarjous",

    servicesTitle: "Palvelut",
    servicesText: "Stadin Handymannit Oy tarjoaa kattavat palvelut...",

    aboutTitle: "Meistä",
    aboutText: "Olemme Helsingissä toimiva monipalveluyritys.",

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
    gardenText: "Hoidamme pihan ympäri vuoden.",
    gardenBtn: "Lue lisää",

    remonttiTitle: "Remonttipalvelut",
    remonttiText: "Ammattitaitoista remontointia.",
    remonttiBtn: "Lue lisää",

    graveTitle: "Hautakivipalvelut",
    graveText: "Hautakivien huolto ja puhdistus.",
    graveBtn: "Lue lisää"
  },

  sv: { /* samma struktur */ },
  en: { /* samma struktur */ }
};

function applyLang() {
  const t = translations[currentLang];
  if (!t) return;

  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");

    if (t[key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = t[key];
      } else {
        el.innerText = t[key];
      }
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
