// RIOPAK ENGINEERS – Main entry
// navigation.js, animations.js and smooth-scroll.js are loaded separately.
(function () {
  // Current year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();