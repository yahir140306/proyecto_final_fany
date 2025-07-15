  document.addEventListener("DOMContentLoaded", function () {
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