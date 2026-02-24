// ========== MOBILE MENU TOGGLE ==========
const menuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('nav');

menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========== SCROLL ANIMATIONS ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.card').forEach(card => {
  card.style.opacity = '0';
  observer.observe(card);
});

// ========== HEADER ANIMATION ON SCROLL ==========
let lastScrollTop = 0;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
  } else {
    // Scrolling up
    header.style.boxShadow = 'none';
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ========== BENEFITS LIST ANIMATION ==========
const benefitsList = document.querySelectorAll('.benefits-list li');
benefitsList.forEach((item, index) => {
  item.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
  item.style.opacity = '0';
});

// ========== CONTACT FORM HANDLING ==========
function setupContactForm() {
  const contactLinks = document.querySelectorAll('.contact-link');

  contactLinks.forEach(link => {
    if (link.href.startsWith('mailto:')) {
      link.addEventListener('click', (e) => {
        // Optional: Add tracking or analytics here
        console.log('Email clicked:', link.href);
      });
    }
  });
}

// ========== PERFORMANCE OPTIMIZATION ==========
// Lazy load images if any
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  setupContactForm();

  // Add fade-in animation to hero content
  const heroText = document.querySelector('.hero-text');
  if (heroText) {
    heroText.style.animation = 'fadeInUp 0.8s ease-out forwards';
  }

  // Animate service cards on load
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1 + 0.2}s forwards`;
  });
});

// ========== UTILITY FUNCTIONS ==========
function trackEvent(eventName, data = {}) {
  // For future analytics integration
  console.log('Event:', eventName, data);
}

// Track CTA clicks
document.querySelectorAll('.cta').forEach(button => {
  button.addEventListener('click', () => {
    trackEvent('cta_click', { text: button.textContent });
  });
});

// ========== ACCESSIBILITY ==========
// Ensure all interactive elements are keyboard accessible
document.querySelectorAll('.cta, nav a').forEach(element => {
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      element.click();
    }
  });
});

// ========== THEME PREFERENCE ==========
// Optional: Detect system dark mode preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) {
  document.documentElement.style.colorScheme = 'dark';
}

// ========== PERFORMANCE MONITORING ==========
if ('PerformanceObserver' in window) {
  const perfObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      console.log('Performance entry:', entry.name, entry.duration);
    });
  });

  try {
    perfObserver.observe({ entryTypes: ['navigation', 'resource'] });
  } catch (e) {
    // Observer not supported
  }
}

console.log('ZEYNAH Website v1.0 loaded successfully! 🚀');
