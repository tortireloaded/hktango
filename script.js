/* ==========================================================================
   HK Tango — Mobile Navigation Toggle
   ========================================================================== */

(function() {
    'use strict';

    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (!navToggle || !mainNav) {
        return;
    }

    // Toggle navigation
    navToggle.addEventListener('click', function() {
        const isOpen = mainNav.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close navigation when clicking a link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mainNav.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close navigation on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
            mainNav.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus();
        }
    });

    // Close navigation when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !mainNav.contains(e.target)) {
            mainNav.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
})();