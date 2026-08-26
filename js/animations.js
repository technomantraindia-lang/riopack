// RIOPAK ENGINEERS – Scroll reveal & counters
(function () {
  // Hero entrance animations — trigger on page load
  var heroAnims = document.querySelectorAll(".hero-anim");
  if (heroAnims.length) {
    setTimeout(function () {
      heroAnims.forEach(function (el) {
        el.classList.add("hero-visible");
      });
    }, 200);
  }

  // Section 05 — Statement parallax image
  var stmtBg = document.querySelector(".statement-img-bg");
  var stmtSection = document.querySelector(".statement-banner");
  if (stmtBg && stmtSection) {
    window.addEventListener("scroll", function () {
      var rect = stmtSection.getBoundingClientRect();
      var vh = window.innerHeight;
      var progress = Math.max(0, Math.min(1, 1 - (rect.bottom / (vh + rect.height))));
      var scale = 1.08 - (progress * 0.08);
      var translateY = progress * 30;
      stmtBg.style.transform = "scale(" + scale + ") translateY(" + translateY + "px)";
    }, { passive: true });
  }

  // General scroll reveal for non-hero elements
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  // Animated stat counters
  var counters = document.querySelectorAll(".stat-number[data-count]");
  var animateCounter = function (el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var duration = 1600;
    var start = performance.now();
    function tick(now) {
      var progress = Math.min((now - start) / duration, 1);
      var current = Math.floor(progress * target);
      el.innerHTML = current + '<span class="stat-plus">+</span>';
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };

  if ("IntersectionObserver" in window && counters.length) {
    var cio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(function (el) {
      el.innerHTML = el.getAttribute("data-count") + '<span class="stat-plus">+</span>';
    });
  }

  // Section 08 — Industry Row Hover Image Swap
  var indRows = document.querySelectorAll(".industry-row[data-img]");
  var indPreviewImg = document.getElementById("indPreviewImg");

  if (indRows.length && indPreviewImg) {
    indRows.forEach(function (row) {
      row.addEventListener("mouseenter", function () {
        var newImgSrc = row.getAttribute("data-img");
        if (newImgSrc && indPreviewImg.src !== newImgSrc) {
          indPreviewImg.style.opacity = "0.3";
          indPreviewImg.style.transform = "scale(0.97)";
          setTimeout(function () {
            indPreviewImg.src = newImgSrc;
            indPreviewImg.style.opacity = "1";
            indPreviewImg.style.transform = "scale(1)";
          }, 150);
        }
      });
    });
  }
})();