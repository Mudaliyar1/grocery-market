function ham_open() {
    const menu = document.getElementById("hamburger-menu");
    const crossIcon = document.getElementById("cross-icon");
    const hamburger = document.getElementById("hamburger");
    const body = document.body;

    // Set display to block first, then add the class to fade in
    menu.style.display = "block"; 
    crossIcon.style.display = "block"; 
    setTimeout(() => {
        menu.classList.add("show");
        crossIcon.classList.add("show");
    }, 10); // Small timeout to ensure display is applied first

    hamburger.style.display = "none"; // Hide hamburger icon

    // Prevent background scroll
    body.style.overflow = "hidden"; // Disable scrolling
}

function ham_close() {
    const menu = document.getElementById("hamburger-menu");
    const crossIcon = document.getElementById("cross-icon");
    const hamburger = document.getElementById("hamburger");
    const body = document.body;

    // Remove the class to fade out
    menu.classList.remove("show");
    crossIcon.classList.remove("show");

    // Use a timeout to wait for the fade-out effect before hiding
    setTimeout(() => {
        menu.style.display = "none"; 
        crossIcon.style.display = "none"; 
    }, 50); // Match this time with the CSS transition duration

    hamburger.style.display = "block"; // Show hamburger icon

    // Allow background scroll again
    body.style.overflow = ""; // Enable scrolling
}