document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const crossIcon = document.getElementById("cross-icon");
    const languageMenu = document.getElementById("language-menu");
    const language = document.getElementById("language");

    // Initial setup for CSS transitions
    hamburgerMenu.style.opacity = 0;
    crossIcon.style.opacity = 0;
    languageMenu.style.opacity = 0;
    hamburgerMenu.style.display = "none";
    crossIcon.style.display = "none";
    languageMenu.style.display = "none";

    // Function to show an element with transition
    function showWithTransition(element, duration) {
        element.style.display = "block"; // Show the element
        element.style.transition = `opacity ${duration}ms ease`; // Set transition
        element.style.opacity = 1; // Fade in
    }

    // Function to hide an element with transition
    function hideWithTransition(element, duration) {
        element.style.transition = `opacity ${duration}ms ease`; // Set transition
        element.style.opacity = 0; // Fade out
        setTimeout(() => {
            element.style.display = "none"; // Hide the element after fade out
        }, duration); // Match the duration of the transition
    }

    hamburger.addEventListener("click", function() {
        showWithTransition(hamburgerMenu, 200);
        showWithTransition(crossIcon, 200);
        hamburger.style.display = "none"; // Hide hamburger
    });

    crossIcon.addEventListener("click", function() {
        hideWithTransition(crossIcon, 200);
        hamburger.style.display = "block"; // Show hamburger
        hideWithTransition(hamburgerMenu, 300);
        hideWithTransition(languageMenu, 300);
    });

    language.addEventListener("click", function() {
        showWithTransition(languageMenu, 200);
        languageMenu.style.zIndex = "30"; // Set z-index
    });
});