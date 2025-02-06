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

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.1)";
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
      });
    });

    const card = document.querySelectorAll(".card");
    card.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.03)";
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
      });
    });
});
