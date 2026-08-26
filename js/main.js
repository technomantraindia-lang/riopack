// RIOPAK ENGINEERS – Main entry
// navigation.js, animations.js and smooth-scroll.js are loaded separately.
(function () {
  // Current year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Section 08 — Industry Row Interactive Hover Card Switcher
  const industryRows = document.querySelectorAll(".industry-row");
  const indPreviewImg = document.getElementById("indPreviewImg");
  const indCardTitle = document.getElementById("indCardTitle");
  const indCardDesc = document.getElementById("indCardDesc");

  if (industryRows.length > 0 && indPreviewImg) {
    industryRows.forEach((row) => {
      row.addEventListener("mouseenter", function () {
        const newSrc = this.getAttribute("data-img");
        const newTitle = this.getAttribute("data-title");
        const newDesc = this.getAttribute("data-desc");

        if (newSrc) {
          indPreviewImg.style.opacity = "0.3";
          if (indCardTitle) indCardTitle.style.opacity = "0.3";
          if (indCardDesc) indCardDesc.style.opacity = "0.3";

          setTimeout(() => {
            indPreviewImg.src = newSrc;
            if (newTitle && indCardTitle) indCardTitle.textContent = newTitle;
            if (newDesc && indCardDesc) indCardDesc.textContent = newDesc;

            indPreviewImg.style.opacity = "1";
            if (indCardTitle) indCardTitle.style.opacity = "1";
            if (indCardDesc) indCardDesc.style.opacity = "1";
          }, 120);
        }
      });
    });
  }
})();