document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      });
  });

  // Fix for button smooth scrolling
  document.getElementById("explore-menu-btn").addEventListener("click", () => {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  });

  // Add animations to sections and cards
  document.querySelectorAll("section, .card").forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    el.style.transform = "translateY(20px)";

    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, index * 200);
  });

  // Interactive button hover effect
  document.querySelectorAll(".btn, .card").forEach((el) => {
    el.addEventListener("mouseenter", () => el.style.transform = "scale(1.05)");
    el.addEventListener("mouseleave", () => el.style.transform = "scale(1)");
  });

  // Update size prices dynamically
  function updateSizeOptions() {
    const product = document.getElementById("product").value;
    document.querySelectorAll("#size option").forEach(option => {
        let price = product === "Zesty Orange" ? option.dataset.orange : option.dataset.lemon;
        option.dataset.price = price; 
        option.textContent = `${option.textContent.split(" - ")[0]} - ${price} Pesos`;
    });
    updateTotal();
  }

  // Calculate total price
  function updateTotal() {
    const size = document.getElementById("size").selectedOptions[0];
    const addon = document.getElementById("addon").selectedOptions[0];
    const quantity = parseInt(document.getElementById("quantity").value) || 1;

    const sizePrice = parseInt(size.dataset.price) || 0;
    const addonPrice = parseInt(addon.dataset.price) || 0;

    const totalPrice = (sizePrice + addonPrice) * quantity;
    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
  }

  // Auto-update order details on submit
  function updateOrderDetails() {
    const product = document.getElementById("product").value;
    const size = document.getElementById("size").selectedOptions[0].textContent;
    const addon = document.getElementById("addon").selectedOptions[0].textContent;
    const quantity = document.getElementById("quantity").value;
    const total = document.getElementById("total-price").textContent;

    document.getElementById("order_details").value = 
      `Product: ${product}, Size: ${size}, Add-on: ${addon}, Quantity: ${quantity}, Total Price: ₱${total}`;
  }

  // Initialize values
  updateSizeOptions();
  updateTotal();

  document.getElementById("product").addEventListener("change", updateSizeOptions);
  document.getElementById("size").addEventListener("change", updateTotal);
  document.getElementById("addon").addEventListener("change", updateTotal);
  document.getElementById("quantity").addEventListener("input", updateTotal);
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

