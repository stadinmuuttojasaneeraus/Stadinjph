const translations = {
  fi: {
    heroTitle: "Nopea ja luotettava monipalvelu Helsingissä ja pääkaupunkiseudulla.",
    heroText: "Kodin asennukset, pihatyöt ja remontit – helposti ja sujuvasti.",
    heroCta: "Pyydä tarjous",

    servicesTitle: "Palvelut",
    servicesText: "Stadin Handymannit Oy tarjoaa kattavat palvelut yksityisten ja yritysten tarpeisiin: asennuspalvelut, pihapalvelut ja remontit.",

    aboutTitle: "Meistä",
    aboutText:
      "Olemme Helsingissä ja pääkaupunkiseudulla toimiva monipalveluyritys, joka tarjoaa monipuolisia palveluita kotitalouksille ja yrityksille. Meillä on pitkä kokemus ja panostamme aina laatuun ja asiakastyytyväisyyteen.",

    contactTitle: "Yhteystiedot",

    name: "Nimi",
    email: "Sähköposti",
    phone: "Puhelin",
    message: "Viesti",
    submit: "Lähetä"
  },

  sv: {
    heroTitle: "Snabb och pålitlig mångservice i Helsingfors och huvudstadsregionen.",
    heroText: "Installationer, trädgårdsarbete och renoveringar – enkelt och smidigt.",
    heroCta: "Be om offert",

    servicesTitle: "Tjänster",
    servicesText: "Stadin Handymannit Oy erbjuder omfattande tjänster för hem och företag.",

    aboutTitle: "Om oss",
    aboutText:
      "Vi är ett mångserviceföretag i Helsingfors med lång erfarenhet. Vi fokuserar på kvalitet och kundnöjdhet.",

    contactTitle: "Kontakt",

    name: "Namn",
    email: "E-post",
    phone: "Telefon",
    message: "Meddelande",
    submit: "Skicka"
  },

  en: {
    heroTitle: "Fast and reliable multi-service in Helsinki and the capital region.",
    heroText: "Home installations, yard work and renovations – easy and smooth.",
    heroCta: "Request a quote",

    servicesTitle: "Services",
    servicesText: "Stadin Handymannit Oy offers comprehensive services for homes and businesses.",

    aboutTitle: "About us",
    aboutText:
      "We are a multi-service company in Helsinki with long experience. We focus on quality and customer satisfaction.",

    contactTitle: "Contact",

    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    submit: "Send"
  }
};

// default language
let currentLang = "fi";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyLang();
}

function applyLang() {
  const t = translations[currentLang];

  document.getElementById("hero-title").innerText = t.heroTitle;
  document.getElementById("hero-text").innerText = t.heroText;
  document.getElementById("hero-cta").innerText = t.heroCta;

  document.getElementById("services-title").innerText = t.servicesTitle;
  document.getElementById("services-text").innerText = t.servicesText;

  document.getElementById("about-title").innerText = t.aboutTitle;
  document.getElementById("about-text").innerText = t.aboutText;

  document.getElementById("contact-title").innerText = t.contactTitle;

  document.getElementById("name").placeholder = t.name;
  document.getElementById("email").placeholder = t.email;
  document.getElementById("phone").placeholder = t.phone;
  document.getElementById("message").placeholder = t.message;
  document.getElementById("submit").innerText = t.submit;
}

// load saved language
window.addEventListener("load", () => {
  const saved = localStorage.getItem("lang");
  if (saved) currentLang = saved;
  applyLang();
});
