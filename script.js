document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navbar and button
    document.querySelectorAll('.nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for header height
                    behavior: "smooth"
                });
            }
        });
    });

    // Smooth scrolling for "Explore Our Menu" button
    document.getElementById('explore-menu-btn').addEventListener('click', () => {
        const menuSection = document.getElementById('menu');
        if (menuSection) {
            window.scrollTo({
                top: menuSection.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});
