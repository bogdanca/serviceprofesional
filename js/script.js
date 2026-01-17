document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Animate hamburger
            const bars = mobileBtn.querySelectorAll('.bar');
            // Simple toggle visual (optional, or rely on CSS classes if we added them)
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth Scroll (Polyfill support if needed, though CSS scroll-behavior usually handles it)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to SEO footer when sector items are clicked
    const sectorItems = document.querySelectorAll('.sector-item');
    const seoFooter = document.querySelector('.seo-footer');

    if (sectorItems.length > 0 && seoFooter) {
        sectorItems.forEach(item => {
            item.addEventListener('click', () => {
                seoFooter.scrollIntoView({
                    behavior: 'smooth'
                });
            });
            // Make it look clickable
            item.style.cursor = 'pointer';
        });
    }
});
