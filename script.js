document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation and buttons
    document.querySelectorAll('.nav a, .btn').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();  
            const targetId = this.getAttribute('href')?.substring(1); // Get target section ID
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Button hover effect (restore zoom effect)
    document.querySelectorAll(".btn").forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.1)";
            btn.style.transition = "transform 0.2s ease-in-out";
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
        });
    });
});
