/**
 * RIOPAK ENGINEERS – Fabrecor-Style Preloader & Entrance Reveal
 */
(function () {
  'use strict';

  function initPreloader() {
    var preloader = document.getElementById('rioPreloader');
    var fillEl = document.getElementById('rioPreloaderFill');
    var numEl = document.getElementById('rioPreloaderNum');
    var body = document.body;

    if (!preloader) return;

    if (body) {
      body.classList.add('rio-loading');
    }

    var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var isFinished = false;

    function revealHeroElements() {
      var heroAnims = document.querySelectorAll('.hero-anim');
      heroAnims.forEach(function (el) {
        el.classList.add('hero-visible');
      });
    }

    function completePreloader() {
      if (isFinished) return;
      isFinished = true;

      if (body) body.classList.remove('rio-loading');

      // Trigger Fabrecor curtain slide-up exit
      preloader.classList.add('rio-preloader--exiting');

      // Reveal hero section content as preloader curtain slides up
      setTimeout(function () {
        revealHeroElements();
      }, 300);

      // DOM cleanup after full slide exit
      setTimeout(function () {
        preloader.classList.add('rio-preloader--hidden');
        if (preloader.parentNode) {
          preloader.parentNode.removeChild(preloader);
        }
      }, 1000);
    }

    // Failsafe timer (5s) to guarantee unlock
    var failsafeTimer = setTimeout(function () {
      completePreloader();
    }, 5000);

    if (prefersReducedMotion) {
      clearTimeout(failsafeTimer);
      if (numEl) numEl.textContent = '100';
      if (fillEl) fillEl.style.width = '100%';
      completePreloader();
      return;
    }

    var duration = 2200; // ~2.2 seconds smooth load duration
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);

      // Smooth cubic-bezier exponential curve for silky counting
      var easeProgress = 1 - Math.pow(1 - progress, 3.5);
      var currentCount = Math.floor(easeProgress * 100);

      var formatted = currentCount < 10 ? '0' + currentCount : '' + currentCount;

      if (numEl) numEl.textContent = formatted;
      if (fillEl) fillEl.style.width = (easeProgress * 100).toFixed(1) + '%';

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        if (numEl) numEl.textContent = '100';
        if (fillEl) fillEl.style.width = '100%';

        setTimeout(function () {
          clearTimeout(failsafeTimer);
          completePreloader();
        }, 180);
      }
    }

    requestAnimationFrame(step);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPreloader);
  } else {
    initPreloader();
  }
})();
