let currentLang = "fi";


const translations = {
  fi: {
    heroTitle: "Nopea ja luotettava monipalvelu Helsingissä ja pääkaupunkiseudulla.",
    heroText: "Kodin asennukset, pihatyöt ja remontit – helposti ja sujuvasti.",
    heroCta: "Pyydä tarjous",

    navServices: "Palvelut",
    navAbout: "Meistä",
    navContact: "Yhteystiedot",
    
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

    graveText: "Hoidamme hautakivien puhdistuksen, kunnostuksen ja ylläpidon arvokkaasti ja huolellisesti.",
    graveList1: "Hautakivien suoristus ja huolto.",
    graveList2: "Hautakivien puhdistus ja hoito.",
    graveList3: "Hautapaikan siistiminen ja ylläpito.",
    
    servicesTitle: "Palvelut",
    servicesText: "Stadin Handymannit Oy tarjoaa kattavat palvelut yksityisten ja yritysten tarpeisiin: asennuspalvelut, pihapalvelut ja remontit.",

    aboutTitle: "Meistä",
    aboutText: "Olemme Helsingissä ja pääkaupunkiseudulla toimiva monipalveluyritys, joka tarjoaa monipuolisia palveluita kotitalouksille ja yrityksille. Palveluihimme kuuluvat muun muassa kotipalvelut, pihatyöt sekä erilaiset remonttityöt. Meillä on pitkä kokemus alalta, ja panostamme aina laadukkaaseen työnjälkeen sekä asiakastyytyväisyyteen. Toimintamme perustuu luotettavuuteen, joustavuuteen ja nopeaan palveluun – hoidamme työt sovitusti ja aikataulussa. Tavoitteenamme on tehdä arjesta helpompaa asiakkaillemme tarjoamalla sujuvaa ja vaivatonta palvelua kaikissa tilanteissa. Olipa kyseessä pieni korjaus tai laajempi projekti, voit luottaa meihin. Puhumme sujuvasti suomea ja ruotsia, ja kaikki työntekijämme ovat läpikäyneet turvallisuustarkastuksen asiakkaidemme mielenrauhan varmistamiseksi.",
    
    contactTitle: "Yhteystiedot",
    submit: "Lähetä",

    emailLabel: "Sähköposti:",
    phoneLabel: "Puhelin:",
    addressLabel: "Osoite:",

    footerLocation: "Helsinki, Suomi",
    footerBusinessId: "Y-tunnus: 1234567-8",
    facebook: "Facebook",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    
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

    navServices: "Tjänster",
    navAbout: "Om oss",
    navContact: "Kontakt",
    
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

    graveText: "Vi sköter rengöring, renovering och underhåll av gravstenar med värdighet och omsorg.",
    graveList1: "Justering och underhåll av gravstenar.",
    graveList2: "Rengöring och skötsel av gravstenar.",
    graveList3: "Skötsel och underhåll av gravplatsen.",

    servicesTitle: "Tjänster",
    servicesText: "Vi erbjuder omfattande tjänster.",

    aboutTitle: "Om oss",
    aboutText: "Vi är ett mångsidigt serviceföretag i Helsingfors och huvudstadsregionen som erbjuder tjänster till både privatpersoner och företag. Våra tjänster inkluderar bland annat hemtjänster, gårdsarbete och olika renoveringsarbeten. Vi har lång erfarenhet inom branschen och satsar alltid på hög kvalitet och kundnöjdhet. Vår verksamhet bygger på pålitlighet, flexibilitet och snabb service – vi utför arbetet enligt överenskommelse och i tid. Vårt mål är att göra vardagen enklare för våra kunder genom att erbjuda smidig och bekymmersfri service i alla situationer. Oavsett om det gäller en liten reparation eller ett större projekt kan du lita på oss. Vi talar flytande finska och svenska, och alla våra anställda har genomgått säkerhetskontroller för kundernas trygghet.",

    contactTitle: "Kontakt",
    submit: "Skicka",

    emailLabel: "E-post:",
    phoneLabel: "Telefon:",
    addressLabel: "Adress:",

    footerLocation: "Helsingfors, Finland",
    footerBusinessId: "FO-nummer: 1234567-8",
    facebook: "Facebook",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    
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

    navServices: "Services",
    navAbout: "About",
    navContact: "Contact",
    
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

    graveText: "We handle cleaning, restoration and maintenance of gravestones with care and respect.",
    graveList1: "Alignment and maintenance of gravestones.",
    graveList2: "Cleaning and care of gravestones.",
    graveList3: "Upkeep and maintenance of the grave site.",
    
    servicesTitle: "Services",
    servicesText: "We provide home and business services.",

    aboutTitle: "About us",
    aboutText: "We are a versatile service company operating in Helsinki and the metropolitan area, providing a wide range of services for both private customers and businesses. Our services include home services, yard work and various renovation projects. We have extensive experience in the field and always focus on high-quality work and customer satisfaction. Our operations are based on reliability, flexibility and fast service – we complete our work as agreed and on schedule. Our goal is to make everyday life easier for our customers by offering smooth and hassle-free service in all situations. Whether it is a small repair or a larger project, you can rely on us. We speak fluent Finnish and Swedish, and all our employees have passed security checks to ensure peace of mind for our customers.",

    contactTitle: "Contact",
    submit: "Send",

    emailLabel: "Email:",
    phoneLabel: "Phone:",
    addressLabel: "Address:",

    footerLocation: "Helsinki, Finland",
    footerBusinessId: "Business ID: 1234567-8",
    facebook: "Facebook",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    
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
