let currentLang = "fi";


const translations = {
  fi: {
    heroTitle: "Nopea ja luotettava monipalvelu Helsingissä ja pääkaupunkiseudulla.",
    heroText: "Kodin asennukset, pihatyöt ja remontit – helposti ja sujuvasti.",
    heroCta: "Pyydä tarjous",

    service1Intro: "Apua arjen pienissä askareissa. Autamme kaikenlaisissa kodin käytännön töissä:",
    service1List1: "Taulujen, hyllyjen ja peilien kiinnitys.",
    service1List2: "Huonekalujen kokoaminen, siirto, purku ja pakkaus.",
    service1List3: "Kodinkoneiden asennus ja käyttöönotto.",
    service1List4: "Verhotankojen, kiskojen ja valaisimen asennus.",

    gardenText: "Hoidamme pihan siistiksi ja toimivaksi ympäri vuoden.",
    gardenList1: "Pihan siivous ja lehtien haravointi.",
    gardenList2: "Nurmikon ja pensaiden leikkaus.",
    gardenList3: "Puunkaato ja raivaus.",
    gardenList4: "Lumityöt ja hiekoitus.",

    remonttiText: "Teemme kodin remontit siististi, tehokkaasti ja ammattitaidolla.",
    remonttiList1: "Lattia-asennukset ja pintojen uusiminen.",
    remonttiList2: "Ovien, listojen ja kalusteiden asennus.",
    remonttiList3: "Kylpyhuoneen ja keittiön pienremontit.",
    remonttiList4: "Maalaus- ja pintaremontit.",
    remonttiList5: "Purku- ja korjaustyöt.",
    
    servicesTitle: "Palvelut",
    servicesText: "Stadin Handymannit Oy tarjoaa kattavat palvelut yksityisten ja yritysten tarpeisiin: asennuspalvelut, pihapalvelut ja remontit.",

    aboutTitle: "Meistä",
    aboutText: "Olemme Helsingissä ja pääkaupunkiseudulla toimiva monipalveluyritys.",

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

    service1Intro: "Hjälp med vardagliga uppgifter. Vi hjälper med alla typer av praktiska arbeten i hemmet:",
    service1List1: "Montering av tavlor, hyllor och speglar.",
    service1List2: "Montering, flytt, demontering och packning av möbler.",
    service1List3: "Installation och driftsättning av hushållsapparater.",
    service1List4: "Montering av gardinstänger, skenor och lampor.",

    gardenText: "Vi håller din gård ren och fungerande året runt.",     gardenList1: "Rensning av gården och lövkrattning.",
    gardenList2: "Gräsklippning och beskärning av buskar.",
    gardenList3: "Trädfällning och röjningsarbete.",
    gardenList4: "Snöröjning och halkbekämpning.",

    remonttiText: "Vi gör renoveringar snyggt, effektivt och professionellt.",
    remonttiList1: "Golvläggning och ytrenovering.",
    remonttiList2: "Montering av dörrar, lister och möbler.",
    remonttiList3: "Små badrums- och köksrenoveringar.",
    remonttiList4: "Målning och ytrenovering.",
    remonttiList5: "Rivnings- och reparationsarbeten.",
    
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

    service1Intro: "Help with everyday tasks. We assist with all kinds of practical work at home:",
    service1List1: "Installation of paintings, shelves and mirrors.",
    service1List2: "Furniture assembly, moving, disassembly and packing.",
    service1List3: "Installation and setup of home appliances.",
    service1List4: "Installation of curtain rods, rails and lighting.",

    gardenText: "We keep your yard clean and functional year-round.",
    gardenList1: "Yard cleaning and leaf raking.",
    gardenList2: "Lawn mowing and bush trimming.",
    gardenList3: "Tree removal and clearing work.",
    gardenList4: "Snow removal and sanding.",

    remonttiText: "We carry out renovations cleanly, efficiently and professionally.",
    remonttiList1: "Floor installation and surface renewal.",
    remonttiList2: "Installation of doors, trims and furniture.",
    remonttiList3: "Small bathroom and kitchen renovations.",
    remonttiList4: "Painting and surface renovation.",
    remonttiList5: "Demolition and repair work.",
    
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
