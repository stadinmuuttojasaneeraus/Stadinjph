// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Stäng meny när man klickar på en länk (mobil UX)
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
}


// SPRÅKVAL (om den finns i footer)
const langSelect = document.getElementById('langSelect');

if (langSelect) {
    langSelect.addEventListener('change', () => {
        alert('Språk: ' + langSelect.value);
    });
}


// FORM (Formspree - inget JS behövs egentligen)
// Men vi kan visa en liten bekräftelse utan att blockera skickning

const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', () => {
        alert('Kiitos! Viesti on lähetetty.');
    });
}
