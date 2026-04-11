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
    installTitle: "Kodin asennuspalvelut",
    installText: "Apua arjen pienissä askareissa.",
    install1: "Taulujen, hyllyjen ja peilien kiinnitys.",
    install2: "Huonekalujen kokoaminen, siirto, purku ja pakkaus.",
    install3: "Kodinkoneiden asennus ja käyttöönotto.",
    install4: "Verhotankojen, kiskojen ja valaisimien asennus.",
    installBtn: "Lue lisää",

    // SERVICE 2
    gardenTitle: "Pihapalvelut",
    gardenText: "Hoidamme pihan siistiksi ja toimivaksi ympäri vuoden.",
    garden1: "Pihan siivous ja lehtien haravointi.",
    garden2: "Nurmikon ja pensaiden leikkaus.",
    garden3: "Puunkaato ja raivaus.",
    garden4: "Lumityöt ja hiekoitus.",
    gardenBtn: "Lue lisää",

    // SERVICE 3
    remonttiTitle: "Remonttipalvelut",
    remonttiText: "Teemme kodin remontit siististi ja ammattitaidolla.",
    remontti1: "Lattia-asennukset ja pintojen uusiminen.",
    remontti2: "Ovien, listojen ja kalusteiden asennus.",
    remontti3: "Kylpyhuoneen ja keittiön pienremontit.",
    remontti4: "Maalaus- ja pintaremontit.",
    remontti5: "Purku- ja korjaustyöt.",
    remonttiBtn: "Lue lisää",

    // SERVICE 4
    graveTitle: "Hautakivipalvelut",
    graveText: "Hoidamme hautakivien puhdistuksen ja ylläpidon.",
    grave1: "Hautakivien suoristus ja huolto.",
    grave2: "Hautakivien puhdistus ja hoito.",
    grave3: "Hautapaikan siistiminen ja ylläpito.",
    graveBtn: "Lue lisää"
  },

  sv: {
    heroTitle: "Snabb och pålitlig mångservice i Helsingfors.",
    heroText: "Installationer, trädgårdsarbete och renoveringar.",
    heroCta: "Be om offert",

    servicesTitle: "Tjänster",
    servicesText:
      "Stadin Handymannit Oy erbjuder omfattande tjänster för hem och företag.",

    aboutTitle: "Om oss",
    aboutText:
      "Vi är ett serviceföretag i Helsingfors med fokus på kvalitet och kundnöjdhet.",

    contactTitle: "Kontakt",

    name: "Namn",
    email: "E-post",
    phone: "Telefon",
    message: "Meddelande",
    submit: "Skicka",

    installTitle: "Heminstallationer",
    installText: "Hjälp med vardagliga sysslor.",
    install1: "Montering av tavlor, hyllor och speglar.",
    install2: "Montering och flytt av möbler.",
    install3: "Installation av hushållsapparater.",
    install4: "Gardinstänger och lampor.",
    installBtn: "Läs mer",

    gardenTitle: "Trädgårdstjänster",
    gardenText: "Vi håller din gård i gott skick året runt.",
    garden1: "Gårdsstädning och lövräfsning.",
    garden2: "Gräsklippning och buskklippning.",
    garden3: "Trädfällning och röjning.",
    garden4: "Snöarbete och halkbekämpning.",
    gardenBtn: "Läs mer",

    remonttiTitle: "Renoveringstjänster",
    remonttiText: "Professionella renoveringar.",
    remontti1: "Golvläggning.",
    remontti2: "Dörrar och möbler.",
    remontti3: "Kök och badrum.",
    remontti4: "Målning.",
    remontti5: "Rivning och reparation.",
    remonttiBtn: "Läs mer",

    graveTitle: "Gravvård",
    graveText: "Skötsel av gravstenar.",
    grave1: "Riktning och service.",
    grave2: "Rengöring.",
    grave3: "Underhåll av gravplats.",
    graveBtn: "Läs mer"
  },

  en: {
    heroTitle: "Fast and reliable multi-service in Helsinki.",
    heroText: "Installations, yard work and renovations.",
    heroCta: "Request a quote",

    servicesTitle: "Services",
    servicesText:
      "We provide comprehensive services for homes and businesses.",

    aboutTitle: "About us",
    aboutText:
      "We are a service company in Helsinki focused on quality and customer satisfaction.",

    contactTitle: "Contact",

    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    submit: "Send",

    installTitle: "Home installations",
    installText: "Help with everyday tasks.",
    install1: "Mounting pictures, shelves and mirrors.",
    install2: "Furniture assembly and moving.",
    install3: "Appliance installation.",
    install4: "Curtains and lights.",
    installBtn: "Read more",

    gardenTitle: "Yard services",
    gardenText: "We keep your yard clean all year.",
    garden1: "Cleaning and leaves.",
    garden2: "Lawn and hedge trimming.",
    garden3: "Tree removal.",
    garden4: "Snow and sanding.",
    gardenBtn: "Read more",

    remonttiTitle: "Renovation services",
    remonttiText: "Professional renovation work.",
    remontti1: "Floor installation.",
    remontti2: "Doors and furniture.",
    remontti3: "Kitchen and bathroom.",
    remontti4: "Painting.",
    remontti5: "Demolition and repair.",
    remonttiBtn: "Read more",

    graveTitle: "Grave services",
    graveText: "Maintenance of gravestones.",
    grave1: "Straightening and service.",
    grave2: "Cleaning gravestones.",
    grave3: "Grave maintenance.",
    graveBtn: "Read more"
  }
};

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyLang();
}

function applyLang() {
  const t = translations[currentLang];

  // HERO
  document.getElementById("hero-title").innerText = t.heroTitle;
  document.getElementById("hero-text").innerText = t.heroText;
  document.getElementById("hero-cta").innerText = t.heroCta;

  // SERVICES TOP
  document.getElementById("services-title").innerText = t.servicesTitle;
  document.getElementById("services-text").innerText = t.servicesText;

  // ABOUT
  document.getElementById("about-title").innerText = t.aboutTitle;
  document.getElementById("about-text").innerText = t.aboutText;

  // CONTACT
  document.getElementById("contact-title").innerText = t.contactTitle;
  document.getElementById("name").placeholder = t.name;
  document.getElementById("email").placeholder = t.email;
  document.getElementById("phone").placeholder = t.phone;
  document.getElementById("message").placeholder = t.message;
  document.getElementById("submit").innerText = t.submit;

  // SERVICE 1
  document.getElementById("install-title").innerText = t.installTitle;
  document.getElementById("install-text").innerText = t.installText;
  document.getElementById("install-1").innerText = t.install1;
  document.getElementById("install-2").innerText = t.install2;
  document.getElementById("install-3").innerText = t.install3;
  document.getElementById("install-4").innerText = t.install4;
  document.getElementById("install-btn").innerText = t.installBtn;

  // SERVICE 2
  document.getElementById("garden-title").innerText = t.gardenTitle;
  document.getElementById("garden-text").innerText = t.gardenText;
  document.getElementById("garden-1").innerText = t.garden1;
  document.getElementById("garden-2").innerText = t.garden2;
  document.getElementById("garden-3").innerText = t.garden3;
  document.getElementById("garden-4").innerText = t.garden4;
  document.getElementById("garden-btn").innerText = t.gardenBtn;

  // SERVICE 3
  document.getElementById("remontti-title").innerText = t.remonttiTitle;
  document.getElementById("remontti-text").innerText = t.remonttiText;
  document.getElementById("remontti-1").innerText = t.remontti1;
  document.getElementById("remontti-2").innerText = t.remontti2;
  document.getElementById("remontti-3").innerText = t.remontti3;
  document.getElementById("remontti-4").innerText = t.remontti4;
  document.getElementById("remontti-5").innerText = t.remontti5;
  document.getElementById("remontti-btn").innerText = t.remonttiBtn;

  // SERVICE 4
  document.getElementById("grave-title").innerText = t.graveTitle;
  document.getElementById("grave-text").innerText = t.graveText;
  document.getElementById("grave-1").innerText = t.grave1;
  document.getElementById("grave-2").innerText = t.grave2;
  document.getElementById("grave-3").innerText = t.grave3;
  document.getElementById("grave-btn").innerText = t.graveBtn;
}

window.addEventListener("load", () => {
  const saved = localStorage.getItem("lang");
  if (saved) currentLang = saved;
  applyLang();
});
