
        // Stäng meny när man klickar på en länk (mobil UX)
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
            });
        });
    }

    // =========================
    // SPRÅKVAL
    // =========================
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.addEventListener('change', () => {
            alert('Språk: ' + langSelect.value);
            // Här kan du senare lägga in riktig språkbytarkod
        });
    }

    // =========================
    // FORM
    // =========================
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            alert('Kiitos! Viesti on lähetetty.');
            // Formspree skickar vidare automatiskt, inget preventDefault behövs
        });
    }
});
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});
