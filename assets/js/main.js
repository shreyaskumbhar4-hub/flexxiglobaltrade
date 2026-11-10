/**
 * Flexxi Global Trade - Interactive Polish & Micro-interactions
 * Features:
 * - Rule 39: Top Progress Indicator
 * - Rule 33 & 40: Intersection Observer Scroll-driven staggered entry
 * - Rule 32: Magnetic Button Effect on primary CTA
 * - Safe XSS RFQ submissions & Mobile Navigation
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Rule 39: Progress Indicator at Top
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = scrolled + '%';
    }, { passive: true });
  }

  // 2. Rule 33 & 40: Scroll-Driven Fade-ins with Staggered Grid Entry
  const animatedElements = document.querySelectorAll('.fade-in-on-scroll');
  if ('IntersectionObserver' in window && animatedElements.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || 0;
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, delay);
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    animatedElements.forEach(el => el.classList.add('is-visible'));
  }

  // 3. Rule 32: Magnetic Button Effect on Primary CTAs (Desktop only)
  const magneticButtons = document.querySelectorAll('.magnetic-btn');
  if (window.matchMedia('(pointer: fine)').matches) {
    magneticButtons.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
        btn.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
      });

      btn.addEventListener('mouseenter', () => {
        btn.style.transition = 'none';
      });
    });
  }

  // 4. Mobile Menu Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 5. Active Navbar Link Highlighter
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (currentPath.endsWith(href) || (href === 'index.html' && (currentPath.endsWith('/') || currentPath === '')))) {
      link.classList.add('text-sky-400', 'font-semibold');
      link.classList.remove('text-slate-300');
    }
  });

  // 6. Safe RFQ Quote Submission & Mailto / WhatsApp Hand-off
  const quoteForm = document.getElementById('rfq-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const buyerName = document.getElementById('buyer-name')?.value.trim() || '';
      const companyName = document.getElementById('company-name')?.value.trim() || '';
      const email = document.getElementById('buyer-email')?.value.trim() || '';
      const country = document.getElementById('buyer-country')?.value.trim() || '';
      const product = document.getElementById('buyer-product')?.value.trim() || '';
      const quantity = document.getElementById('buyer-quantity')?.value.trim() || '';
      const message = document.getElementById('buyer-message')?.value.trim() || '';

      if (!buyerName || !email || !country || !product) {
        alert('Please fill in all mandatory fields.');
        return;
      }

      const subject = encodeURIComponent(`B2B Formal RFQ: ${product} - ${companyName || buyerName}`);
      const body = encodeURIComponent(
        `Dear Flexxi Global Trade Desk,\n\n` +
        `We request a formal quotation (Proforma Invoice) for bulk commodity export:\n\n` +
        `• Buyer Name: ${buyerName}\n` +
        `• Enterprise: ${companyName}\n` +
        `• Official Email: ${email}\n` +
        `• Destination Port/Country: ${country}\n` +
        `• Commodity Required: ${product}\n` +
        `• Target Quantity: ${quantity}\n` +
        `• Notes & Specs:\n${message}\n\n` +
        `Awaiting your FOB/CIF commercial proposal.\n\nRegards,\n${buyerName}`
      );

      const confirmBox = document.getElementById('form-success-modal');
      if (confirmBox) {
        const mailtoLink = `mailto:info@flexxiglobaltrade.com?subject=${subject}&body=${body}`;
        const whatsappMsg = encodeURIComponent(
          `*New RFQ Quotation Request - Flexxi Global Trade*\n\n` +
          `*Buyer:* ${buyerName}\n` +
          `*Company:* ${companyName}\n` +
          `*Destination Port:* ${country}\n` +
          `*Product:* ${product}\n` +
          `*Volume/Quantity:* ${quantity}\n` +
          `*Email:* ${email}\n` +
          `*Specifics:* ${message}`
        );
        const whatsappLink = `https://wa.me/919876543210?text=${whatsappMsg}`;

        const emailActionBtn = document.getElementById('modal-email-btn');
        const waActionBtn = document.getElementById('modal-wa-btn');

        if (emailActionBtn) emailActionBtn.href = mailtoLink;
        if (waActionBtn) waActionBtn.href = whatsappLink;

        confirmBox.classList.remove('hidden');
        confirmBox.classList.add('flex');
      } else {
        window.location.href = `mailto:info@flexxiglobaltrade.com?subject=${subject}&body=${body}`;
      }
    });
  }

  // Close modal button
  const closeModalBtn = document.getElementById('close-modal-btn');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      const confirmBox = document.getElementById('form-success-modal');
      if (confirmBox) {
        confirmBox.classList.add('hidden');
        confirmBox.classList.remove('flex');
      }
    });
  }
});
