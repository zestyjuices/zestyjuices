document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling when clicking navbar links
    document.querySelectorAll('.nav a, btn').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();  // Prevent default jump
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjusts for header height
            behavior: "smooth"
          });
        }
      });
    });
  
    // Add animations using CSS classes
    const elements = document.querySelectorAll("section, .card");
    elements.forEach((el, index) => {
      el.style.opacity = 0;
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.transform = "translateY(20px)";
  
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, index * 200);
    });
      
    // Button hover effect
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
  
