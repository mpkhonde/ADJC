let currentLanguage = "sv"; // Standard är svenska

// Byt språk och uppdatera innehåll
function changeLanguage(language) {
    currentLanguage = language;
    updateMenu();
    updateContent();
    highlightActiveLanguage();
}

// Uppdatera menyn baserat på språket
function updateMenu() {
    const menuItems = document.querySelectorAll(".nav-links li a");
    const menuTranslations = translations[currentLanguage]?.menu;
    
    if (!menuTranslations) return;
    
    menuItems.forEach((item, index) => {
        item.textContent = menuTranslations[index] || item.textContent;
    });
}

// Navigera mellan sektioner utan att ladda om sidan
function navigateToSection(sectionId, event) {
    if (event) event.preventDefault(); // Förhindra sidans standardbeteende

    console.log("Navigerar till:", sectionId); // Debug-logg för att se att funktionen körs

    // Dölj alla sektioner först
    document.querySelectorAll("main section").forEach(section => {
        section.style.display = "none";
    });

    // Visa bara den valda sektionen
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = "block";
    }

    // Uppdatera innehållet baserat på valt språk
    updateContent();

    // Markera aktiv länk i menyn
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.classList.remove("active"); // Ta bort active från alla länkar
    });
    
    if (event.target.tagName === "A") {
        event.target.classList.add("active"); // Lägg till active på klickad länk
    }
}

// Uppdatera sidans innehåll baserat på valt språk
function updateContent() {
    const visibleSection = document.querySelector("main section:not([style*='display: none'])");
    if (!visibleSection) return;
    
    const sectionId = visibleSection.id;
    const translation = translations[currentLanguage]?.[sectionId];
    
    if (!translation) return;

    visibleSection.querySelector("h2").textContent = translation.title;
    
    if (sectionId === "services") {
        // Uppdatera alla <p>-element i services-sektionen
        const serviceTexts = visibleSection.querySelectorAll("p");
        serviceTexts.forEach((p, index) => {
            p.textContent = translation.text[index] || "";
        });
    } else {
        const textContainer = visibleSection.querySelector("p");
        if (textContainer) {
            textContainer.textContent = translation.text[0];
        }
    }

    if (sectionId === "contact") {
        document.getElementById("contact-address").textContent = translation.text[0];
    }
}

// Markera aktivt språk i språkväljaren
function highlightActiveLanguage() {
    document.querySelectorAll(".language-button").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`button[data-lang="${currentLanguage}"]`)?.classList.add("active");
}

// Kör navigering till startsidan när sidan laddas
document.addEventListener("DOMContentLoaded", () => {
    navigateToSection("home");
    updateMenu();
    highlightActiveLanguage();
});
