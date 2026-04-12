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

    name: "Nimi",
    email: "Sähköposti",
    phone: "Puhelin",
    message: "Viesti",
    submit: "Lähetä",

    // SERVICE 1
    service1Title: "Kodin asennuspalvelut",
    service1Text: "Apua arjen pienissä askareissa.",
    service1Btn: "Lue lisää",

    service1_1: "Taulujen, hyllyjen ja peilien kiinnitys.",
    service1_2: "Huonekalujen kokoaminen, siirto, purku ja pakkaus.",
    service1_3: "Kodinkoneiden asennus ja käyttöönotto.",
    service1_4: "Verhotankojen, kiskojen ja valaisimen asennus.",

    // SERVICE 2
    gardenTitle: "Pihapalvelut",
    gardenText: "Hoidamme pihan siistiksi ja toimivaksi ympäri vuoden.",
    gardenBtn: "Lue lisää",

    garden1: "Pihan siivous ja lehtien haravointi.",
    garden2: "Nurmikon ja pensaiden leikkaus.",
    garden3: "Puunkaato ja raivaus.",
    garden4: "Lumityöt ja hiekoitus.",

    // SERVICE 3
    remonttiTitle: "Remonttipalvelut",
    remonttiText: "Teemme kodin remontit siististi, tehokkaasti ja ammattitaidolla.",
    remonttiBtn: "Lue lisää",

    remontti1: "Lattia-asennukset ja pintojen uusiminen.",
    remontti2: "Ovien, listojen ja kalusteiden asennus.",
    remontti3: "Kylpyhuoneen ja keittiön pienremontit.",
    remontti4: "Maalaus- ja pintaremontit.",
    remontti5: "Purku- ja korjaustyöt.",

    // SERVICE 4
    graveTitle: "Hautakivipalvelut",
    graveText: "Hoidamme hautakivien puhdistuksen ja ylläpidon.",
    graveBtn: "Lue lisää",

    grave1: "Hautakivien suoristus ja huolto.",
    grave2: "Hautakivien puhdistus ja hoito.",
    grave3: "Hautapaikan siistiminen ja ylläpito.",

    // KODIN ASENNUS SIVU
    section1Title: "Kokonaisratkaisu kodin asennuksiin",
    section1Text: "Hoidamme kaiken huonekalujen kokoamisesta asennuksiin.",
    section1Text2: "Pyydä ilmainen tarjous – tulemme nopeasti paikalle.",

    section2Title: "Asennusapu ja pienet työt",
    section2Text: "Teemme pienet asennukset nopeasti Helsingissä.",

    section3Title: "Raskaat ja vaativat asennukset",
    section3Text: "Hoidamme myös vaativat asennustyöt turvallisesti.",

    section4Title: "Kodin asennuspalvelut",
    section4Text: "Tarjoamme asennuspalvelut Helsingissä ja pääkaupunkiseudulla.",
    section4Subtitle: "Hinnasto",

    section4_1: "Asennustyöt: alkaen 80€/h",
    section4_2: "Pienet asennukset: alkaen 150€",
    section4_3: "Kodinkoneasennukset: sopimuksen mukaan",
    section4_4: "Yrityksille: sopimuksen mukaan",

    section4Cta: "Pyydä tarjous",

    backButton: "Takaisin",

    // NAV
    navRemontti: "Remontit",
    navGarden: "Pihapalvelut",
    navGrave: "Hautakivipalvelut",
    navInstall: "Kodin asennuspalvelut"
  },

  sv: {
    heroTitle: "Snabb och pålitlig mångservice i Helsingfors och huvudstadsregionen.",
    heroText: "Installationer, trädgårdsarbete och renoveringar – enkelt och smidigt.",
    heroCta: "Be om offert",

    servicesTitle: "Tjänster",
    servicesText:
      "Stadin Handymannit Oy erbjuder omfattande tjänster för hem och företag.",

    aboutTitle: "Om oss",
    aboutText:
      "Vi är ett mångserviceföretag i Helsingfors med lång erfarenhet.",

    contactTitle: "Kontakt",

    name: "Namn",
    email: "E-post",
    phone: "Telefon",
    message: "Meddelande",
    submit: "Skicka",

    service1Title: "Heminstallationer",
    service1Text: "Hjälp med vardagliga sysslor.",
    service1Btn: "Läs mer",

    service1_1: "Montering av tavlor, hyllor och speglar.",
    service1_2: "Montering och flytt av möbler.",
    service1_3: "Installation av hushållsapparater.",
    service1_4: "Gardinstänger och lampor.",

    gardenTitle: "Trädgårdstjänster",
    gardenText: "Vi håller din gård i gott skick året runt.",
    gardenBtn: "Läs mer",

    garden1: "Gårdsstädning och lövräfsning.",
    garden2: "Gräsklippning och buskklippning.",
    garden3: "Trädfällning och röjning.",
    garden4: "Snöarbete och halkbekämpning.",

    remonttiTitle: "Renoveringstjänster",
    remonttiText: "Professionellt renoveringsarbete.",
    remonttiBtn: "Läs mer",

    remontti1: "Golvläggning och ytrenovering.",
    remontti2: "Dörrar och möbelmontering.",
    remontti3: "Kök och badrum.",
    remontti4: "Målning och ytarbete.",
    remontti5: "Rivning och reparation.",

    graveTitle: "Gravvård",
    graveText: "Skötsel av gravstenar.",
    graveBtn: "Läs mer",

    grave1: "Rätning och service.",
    grave2: "Rengöring av gravstenar.",
    grave3: "Skötsel av gravplatser.",

    section1Title: "Helhetslösning för installationer",
    section1Text: "Vi hanterar allt från möbler till installationer.",
    section1Text2: "Be om offert – vi kommer snabbt.",

    section2Title: "Små installationer",
    section2Text: "Snabba installationer i Helsingfors.",

    section3Title: "Tunga installationer",
    section3Text: "Säkra och professionella arbeten.",

    section4Title: "Installationstjänster",
    section4Text: "Vi erbjuder tjänster i Helsingfors.",
    section4Subtitle: "Priser",

    section4_1: "Arbete från 80€/h",
    section4_2: "Små jobb från 150€",
    section4_3: "Vitvaruinstallation enligt avtal",
    section4_4: "Företagspriser enligt avtal",

    section4Cta: "Be om offert",

    backButton: "Tillbaka",

    navRemontti: "Renovering",
    navGarden: "Trädgård",
    navGrave: "Gravvård",
    navInstall: "Heminstallationer"
  },

  en: {
    heroTitle: "Fast and reliable multi-service in Helsinki.",
    heroText: "Installations, yard work and renovations – easy and smooth.",
    heroCta: "Request a quote",

    servicesTitle: "Services",
    servicesText:
      "We provide comprehensive home and business services.",

    aboutTitle: "About us",
    aboutText:
      "We are a service company in Helsinki focused on quality.",

    contactTitle: "Contact",

    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    submit: "Send",

    service1Title: "Home installations",
    service1Text: "Help with everyday tasks.",
    service1Btn: "Read more",

    service1_1: "Mounting pictures, shelves and mirrors.",
    service1_2: "Furniture assembly and moving.",
    service1_3: "Appliance installation.",
    service1_4: "Curtain rods and lighting.",

    gardenTitle: "Yard services",
    gardenText: "We keep your yard clean all year.",
    gardenBtn: "Read more",

    garden1: "Yard cleaning and leaf raking.",
    garden2: "Lawn and hedge trimming.",
    garden3: "Tree cutting and clearing.",
    garden4: "Snow removal and sanding.",

    remonttiTitle: "Renovation services",
    remonttiText: "Professional renovation work.",
    remonttiBtn: "Read more",

    remontti1: "Floor installation.",
    remontti2: "Doors and furniture installation.",
    remontti3: "Kitchen and bathroom work.",
    remontti4: "Painting and finishing.",
    remontti5: "Demolition and repair.",

    graveTitle: "Grave services",
    graveText: "Maintenance of gravestones.",
    graveBtn: "Read more",

    grave1: "Straightening and service.",
    grave2: "Cleaning gravestones.",
    grave3: "Grave maintenance.",

    section1Title: "Full installation service",
    section1Text: "We handle everything from furniture to installations.",
    section1Text2: "Request a free quote – we arrive quickly.",

    section2Title: "Small installation jobs",
    section2Text: "Fast installations in Helsinki.",

    section3Title: "Heavy installation work",
    section3Text: "Safe and professional installations.",

    section4Title: "Installation services",
    section4Text: "We offer services in Helsinki and nearby areas.",
    section4Subtitle: "Pricing",

    section4_1: "Work from 80€/h",
    section4_2: "Small jobs from 150€",
    section4_3: "Appliance installation by agreement",
    section4_4: "Corporate pricing by agreement",

    section4Cta: "Request a quote",

    backButton: "Back",

    navRemontti: "Renovations",
    navGarden: "Yard services",
    navGrave: "Grave services",
    navInstall: "Home installations"
  }
};

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyLang();
}

function applyLang() {
  const t = translations[currentLang];

  let el;

  // HERO
  if (el = document.getElementById("hero-title")) el.innerText = t.heroTitle;
  if (el = document.getElementById("hero-text")) el.innerText = t.heroText;
  if (el = document.getElementById("hero-cta")) el.innerText = t.heroCta;

  // SERVICES HEADER
  if (el = document.getElementById("services-title")) el.innerText = t.servicesTitle;
  if (el = document.getElementById("services-text")) el.innerText = t.servicesText;

  // ABOUT
  if (el = document.getElementById("about-title")) el.innerText = t.aboutTitle;
  if (el = document.getElementById("about-text")) el.innerText = t.aboutText;

  // CONTACT
  if (el = document.getElementById("contact-title")) el.innerText = t.contactTitle;

  if (el = document.getElementById("name")) el.placeholder = t.name;
  if (el = document.getElementById("email")) el.placeholder = t.email;
  if (el = document.getElementById("phone")) el.placeholder = t.phone;
  if (el = document.getElementById("message")) el.placeholder = t.message;
  if (el = document.getElementById("submit")) el.innerText = t.submit;

  // SERVICE NAV
  if (el = document.getElementById("nav-remontti")) el.innerText = t.navRemontti;
  if (el = document.getElementById("nav-garden")) el.innerText = t.navGarden;
  if (el = document.getElementById("nav-grave")) el.innerText = t.navGrave;
  if (el = document.getElementById("nav-install")) el.innerText = t.navInstall;

  // SERVICE 1
  if (el = document.getElementById("service1-title")) el.innerText = t.service1Title;
  if (el = document.getElementById("service1-text")) el.innerText = t.service1Text;
  if (el = document.getElementById("service1-btn")) el.innerText = t.service1Btn;

  if (document.getElementById("service1-list")) {
    const list = document.getElementById("service1-list").children;
    if (list[0]) list[0].innerText = t.service1_1;
    if (list[1]) list[1].innerText = t.service1_2;
    if (list[2]) list[2].innerText = t.service1_3;
    if (list[3]) list[3].innerText = t.service1_4;
  }

  // SERVICE 2
  if (el = document.getElementById("garden-title")) el.innerText = t.gardenTitle;
  if (el = document.getElementById("garden-text")) el.innerText = t.gardenText;
  if (el = document.getElementById("garden-btn")) el.innerText = t.gardenBtn;

  if (el = document.getElementById("garden-1")) el.innerText = t.garden1;
  if (el = document.getElementById("garden-2")) el.innerText = t.garden2;
  if (el = document.getElementById("garden-3")) el.innerText = t.garden3;
  if (el = document.getElementById("garden-4")) el.innerText = t.garden4;

  // SERVICE 3
  if (el = document.getElementById("remontti-title")) el.innerText = t.remonttiTitle;
  if (el = document.getElementById("remontti-text")) el.innerText = t.remonttiText;
  if (el = document.getElementById("remontti-btn")) el.innerText = t.remonttiBtn;

  if (el = document.getElementById("remontti-1")) el.innerText = t.remontti1;
  if (el = document.getElementById("remontti-2")) el.innerText = t.remontti2;
  if (el = document.getElementById("remontti-3")) el.innerText = t.remontti3;
  if (el = document.getElementById("remontti-4")) el.innerText = t.remontti4;
  if (el = document.getElementById("remontti-5")) el.innerText = t.remontti5;

  // SERVICE 4
  if (el = document.getElementById("grave-title")) el.innerText = t.graveTitle;
  if (el = document.getElementById("grave-text")) el.innerText = t.graveText;
  if (el = document.getElementById("grave-btn")) el.innerText = t.graveBtn;

  if (el = document.getElementById("grave-1")) el.innerText = t.grave1;
  if (el = document.getElementById("grave-2")) el.innerText = t.grave2;
  if (el = document.getElementById("grave-3")) el.innerText = t.grave3;

  // KODIN ASENNUSSIVU
  if (el = document.getElementById("section1-title")) el.innerText = t.section1Title;
  if (el = document.getElementById("section1-text")) el.innerText = t.section1Text;
  if (el = document.getElementById("section1-text2")) el.innerText = t.section1Text2;

  if (el = document.getElementById("section2-title")) el.innerText = t.section2Title;
  if (el = document.getElementById("section2-text")) el.innerText = t.section2Text;

  if (el = document.getElementById("section3-title")) el.innerText = t.section3Title;
  if (el = document.getElementById("section3-text")) el.innerText = t.section3Text;

  if (el = document.getElementById("section4-title")) el.innerText = t.section4Title;
  if (el = document.getElementById("section4-text")) el.innerText = t.section4Text;
  if (el = document.getElementById("section4-subtitle")) el.innerText = t.section4Subtitle;

  if (el = document.getElementById("section4-1")) el.innerText = t.section4_1;
  if (el = document.getElementById("section4-2")) el.innerText = t.section4_2;
  if (el = document.getElementById("section4-3")) el.innerText = t.section4_3;
  if (el = document.getElementById("section4-4")) el.innerText = t.section4_4;

  if (el = document.getElementById("section4-cta")) el.innerText = t.section4Cta;

  if (el = document.getElementById("back-button")) el.innerText = t.backButton;
}

window.addEventListener("load", () => {
  const saved = localStorage.getItem("lang");
  if (saved) currentLang = saved;
  applyLang();
});
