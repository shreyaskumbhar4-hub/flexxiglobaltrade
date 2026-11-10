/**
 * Flexxi Global Trade - Reliable Corporate Interactions
 * Features:
 * - Starting Entrance Transitions & Page Load Reveals
 * - High-Trust Shipment Verification & Waybill Demo
 * - Mobile Navigation Drawer Toggle
 * - Operation Highlights Numeric Counters (IntersectionObserver)
 * - Safe Form Submissions (Anti-XSS Sanitization)
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Scroll Progress Bar
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = scrolled + '%';
    }, { passive: true });
  }

  // 2. Responsive Collapsible Mobile Menu Drawer
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 3. Tab Switching: Tracking vs Quick RFQ
  const tabTrack = document.getElementById('tab-track');
  const tabRfq = document.getElementById('tab-rfq');
  const panelTrack = document.getElementById('panel-track');
  const panelRfq = document.getElementById('panel-rfq');

  if (tabTrack && tabRfq && panelTrack && panelRfq) {
    tabTrack.addEventListener('click', () => {
      tabTrack.classList.add('bg-blue-600', 'text-white');
      tabTrack.classList.remove('bg-slate-800', 'text-slate-400');
      tabRfq.classList.add('bg-slate-800', 'text-slate-400');
      tabRfq.classList.remove('bg-blue-600', 'text-white');
      panelTrack.classList.remove('hidden');
      panelRfq.classList.add('hidden');
    });

    tabRfq.addEventListener('click', () => {
      tabRfq.classList.add('bg-blue-600', 'text-white');
      tabRfq.classList.remove('bg-slate-800', 'text-slate-400');
      tabTrack.classList.add('bg-slate-800', 'text-slate-400');
      tabTrack.classList.remove('bg-blue-600', 'text-white');
      panelRfq.classList.remove('hidden');
      panelTrack.classList.add('hidden');
    });
  }

  // 4. Quick Tracking Action Tool Simulation (Safe Sanitized Demo)
  const trackForm = document.getElementById('quick-track-form');
  const trackInput = document.getElementById('quick-track-input');
  const trackResult = document.getElementById('quick-track-result');

  if (trackForm && trackInput && trackResult) {
    trackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = trackInput.value.trim();
      if (!val) {
        alert('Please enter your B/L or Container Number.');
        return;
      }

      // Safe DOM Sanitization
      const safeVal = val.replace(/</g, "&lt;").replace(/>/g, "&gt;");

      trackResult.classList.remove('hidden');
      trackResult.innerHTML = `
        <div class="p-4 rounded-xl bg-[#09152b] border border-blue-500/30 text-xs space-y-2 mt-3 animate-hero-fade-down">
          <div class="flex flex-wrap justify-between items-center text-white font-mono gap-2">
            <span class="font-bold text-sky-400">WAYBILL / B/L REF: ${safeVal}</span>
            <span class="px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-semibold">ON SCHEDULE · CUSTOMS CLEARED</span>
          </div>
          <div class="text-slate-300">
            <strong>Origin Port:</strong> Nhava Sheva (JNPT) / Mundra, India &rarr; <strong>Destination:</strong> Selected Seaport
          </div>
          <div class="text-slate-400 text-[11px] flex flex-wrap gap-4 pt-1.5 border-t border-slate-800">
            <span><strong>Vessel:</strong> Ocean Cargo Carrier</span>
            <span><strong>CHA Port Gate-In:</strong> Verified</span>
            <span><strong>COA Batch Quality:</strong> Certified & Released</span>
          </div>
        </div>
      `;
    });
  }

  // 5. Number Counter Highlight Increment Animation
  const counters = document.querySelectorAll('.counter-val');
  if ('IntersectionObserver' in window && counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = +entry.target.getAttribute('data-target');
          let count = 0;
          const speed = target > 100 ? 25 : 35;
          const inc = Math.ceil(target / speed);
          const updateCount = () => {
            count += inc;
            if (count < target) {
              entry.target.innerText = count;
              setTimeout(updateCount, 30);
            } else {
              entry.target.innerText = target;
            }
          };
          updateCount();
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));
  }

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
        `Dear Flexxi Global Trade Sales Desk,\n\n` +
        `We request a formal commercial quotation (Proforma Invoice):\n\n` +
        `• Buyer Name: ${buyerName}\n` +
        `• Enterprise: ${companyName}\n` +
        `• Official Email: ${email}\n` +
        `• Destination Port/Country: ${country}\n` +
        `• Commodity Required: ${product}\n` +
        `• Target Quantity: ${quantity}\n` +
        `• Specifications & Packaging:\n${message}\n\n` +
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
