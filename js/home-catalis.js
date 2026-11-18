document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Application category filter tabs
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.pack-card, .industry-card');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      cards.forEach((card) => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Pre-fill product in quote form when clicking a pack card CTA
  const productSelect = document.getElementById('productToPack');
  document.querySelectorAll('[data-select-product]').forEach((link) => {
    link.addEventListener('click', () => {
      const value = link.getAttribute('data-select-product');
      if (productSelect && value) {
        productSelect.value = value;
      }
    });
  });

  // Inline enquiry form submission feedback
  const quoteForm = document.getElementById('riopakQuoteForm');
  const formStatus = document.getElementById('formStatus');
  if (quoteForm && formStatus) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = quoteForm.querySelector('#leadName')?.value?.trim() || 'there';
      const product = productSelect?.value || 'your product';
      formStatus.textContent = `Thank you, ${name}. Your enquiry for ${product} is ready—our Vadodara engineering team will contact you shortly.`;
      formStatus.style.display = 'block';
    });
  }

  // Scroll reveal observer for elements with [data-reveal]
  const revealElements = document.querySelectorAll('[data-reveal]');
  if (revealElements.length && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -30px 0px',
      threshold: 0.1
    });
    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('revealed'));
  }
});
