// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Språkval (placeholder)
const langSelect = document.getElementById('langSelect');
langSelect.addEventListener('change', () => {
    alert('Språkval ändrat till: ' + langSelect.value);
});

// Kontaktformulär - enkel tack-funktion
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Kiitos viestistäsi! Otamme sinuun yhteyttä pian.');
    contactForm.reset();
});
