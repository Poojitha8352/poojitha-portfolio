// ===============================
// Portfolio JavaScript
// ===============================


// Welcome message in browser console

console.log("Welcome to Subbammagari Poojitha's Portfolio!");


// ===============================
// Scroll Reveal Animation
// ===============================

const elements = document.querySelectorAll(
    ".about-container, " +
    ".objective-box, " +
    ".education-card, " +
    ".skill-card, " +
    ".internship-card, " +
    ".project-card, " +
    ".achievement-card, " +
    ".activities-box, " +
    ".contact-card"
);


// Add reveal class

elements.forEach(function(element) {
    element.classList.add("reveal");
});


// Check elements while scrolling

function revealElements() {

    elements.forEach(function(element) {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const visiblePoint = 100;

        if (elementTop < windowHeight - visiblePoint) {

            element.classList.add("active");

        }

    });

}


// Run when scrolling

window.addEventListener("scroll", revealElements);


// Run when page loads

revealElements();


// ===============================
// Navigation Active Link
// ===============================

const navLinks =
    document.querySelectorAll(".nav-links a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


// ===============================
// Contact Button
// ===============================

const contactButtons =
    document.querySelectorAll(".btn");


contactButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log("Portfolio button clicked");

    });

});