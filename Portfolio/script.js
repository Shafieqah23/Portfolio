
document.addEventListener("DOMContentLoaded", function() {
    // Handle skill card animations
    const skillCards = document.querySelectorAll(".skill-card");
    skillCards.forEach(card => {
        card.addEventListener("mouseover", function() {
            card.style.transform = "scale(1.1)";
        });

        card.addEventListener("mouseout", function() {
            card.style.transform = "scale(1)";
        });
    });

    // Handle contact form submission
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Thank you for your message! I'll get back to you soon.");
            contactForm.reset();
        });
    }
});
