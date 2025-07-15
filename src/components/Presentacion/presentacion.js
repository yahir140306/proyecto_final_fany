  document.addEventListener("DOMContentLoaded", function () {
    // Agregar soporte táctil mejorado para las cards
    const cards = document.querySelectorAll(".card-interactive");

    cards.forEach((card) => {
      const cardElement = card as HTMLElement;

      // Eventos táctiles para mejor feedback
      cardElement.addEventListener(
        "touchstart",
        function () {
          cardElement.classList.add("touching");
        },
        { passive: true }
      );

      cardElement.addEventListener(
        "touchend",
        function () {
          cardElement.classList.remove("touching");
        },
        { passive: true }
      );

      cardElement.addEventListener(
        "touchcancel",
        function () {
          cardElement.classList.remove("touching");
        },
        { passive: true }
      );
    });

    // Agregar soporte táctil para los logos
    const logos = document.querySelectorAll(".nav-logo");
    logos.forEach((logo) => {
      const logoElement = logo as HTMLElement;

      logoElement.addEventListener(
        "touchstart",
        function () {
          logoElement.style.transform = "scale(0.95)";
        },
        { passive: true }
      );

      logoElement.addEventListener(
        "touchend",
        function () {
          logoElement.style.transform = "scale(1.05)";
          setTimeout(() => {
            logoElement.style.transform = "";
          }, 200);
        },
        { passive: true }
      );
    });

    // Agregar soporte táctil para los enlaces de navegación
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      const linkElement = link as HTMLElement;

      linkElement.addEventListener(
        "touchstart",
        function () {
          linkElement.style.backgroundColor = "rgba(79, 70, 229, 0.3)";
          linkElement.style.transform = "translateY(-1px)";
        },
        { passive: true }
      );

      linkElement.addEventListener(
        "touchend",
        function () {
          linkElement.style.backgroundColor = "";
          linkElement.style.transform = "";
        },
        { passive: true }
      );
    });
  });
