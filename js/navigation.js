// RIOPAK ENGINEERS – Navigation
(function () {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");
      document.body.classList.toggle("nav-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Transparent → solid header on scroll past hero
  const header = document.getElementById("siteHeader");
  const hero = document.getElementById("home");

  if (header) {
    function updateHeader() {
      var threshold = hero ? hero.offsetHeight - 80 : 100;
      if (window.scrollY > threshold) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();
  }
})();