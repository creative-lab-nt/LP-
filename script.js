document.addEventListener('DOMContentLoaded', () => {
    const stickyCta = document.querySelector('.sticky-cta');
    const hero = document.querySelector('.hero');

    if (!stickyCta || !hero) return;

    const heroHeight = hero.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768) { // Only on mobile
            if (window.scrollY > heroHeight) {
                stickyCta.classList.add('visible');
            } else {
                stickyCta.classList.remove('visible');
            }
        }
    });
});
