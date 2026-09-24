// Main Application Bootstrap for Warbler’s Cafe (Kandy)

import { initTheme } from './theme.js';
import { initNavbar } from './navbar.js';
import { initMenu } from './menu.js';
import { initGallery } from './gallery.js';
import { initReservation } from './reservation.js';
import { initAmbiance } from './ambiance.js';
import { initScrollAnimations } from './scroll-animations.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Systems
  initTheme();
  initNavbar();
  initMenu();
  initGallery();
  initReservation();
  initAmbiance();
  initScrollAnimations();

  // Story Highlights interaction (Sips, Ambience, Plates, Moments)
  const highlightItems = document.querySelectorAll('.story-highlight-pill');
  highlightItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      if (targetId) {
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Newsletter Form handler
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterMsg = document.getElementById('newsletter-note');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]')?.value;
      if (email && newsletterMsg) {
        newsletterMsg.innerHTML = `<span style="color: var(--brand-orange); font-weight: 600;">✓ Thank you. You are subscribed to RoobinzZ Journal.</span>`;
        newsletterForm.reset();
      }
    });
  }

  // Back to top button
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
