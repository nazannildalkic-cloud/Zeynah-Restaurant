// ========== MOBILE MENU TOGGLE ==========
const menuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('nav');

menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// ========== PARALLAX HERO ==========
const heroVisual = document.querySelector('.hero-visual');
window.addEventListener('scroll', () => {
  if (heroVisual && window.innerWidth > 768) {
    const scrollY = window.scrollY;
    const heroHeight = document.querySelector('.hero')?.offsetHeight || 600;
    if (scrollY < heroHeight) {
      heroVisual.style.transform = `translateY(${scrollY * 0.12}px)`;
    }
  }
}, { passive: true });

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
  threshold: 0.08,
  rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = Math.min(i * 0.05, 0.4);
      entry.target.style.animation = `fadeInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s forwards`;
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
  card.style.opacity = '0';
  observer.observe(card);
});

// Section titles
document.querySelectorAll('.section-title').forEach(el => {
  el.style.opacity = '0';
  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        titleObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  titleObserver.observe(el);
});

// ========== HEADER ANIMATION ON SCROLL ==========
let lastScrollTop = 0;
const header = document.querySelector('header');

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
  
  // Hero text staggered reveal
  const heroText = document.querySelector('.hero-text');
  if (heroText) {
    heroText.style.animation = 'fadeInUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
    const h1 = heroText.querySelector('h1');
    if (h1) h1.style.animation = 'fadeInUp 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s backwards';
  }

  // Service cards - bounce-in on load
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animation = `fadeInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1 + 0.3}s forwards`;
  });

  // Demo links - add hover ripple effect
  document.querySelectorAll('.demo-link').forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.05)');
    btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
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
