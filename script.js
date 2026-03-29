/* 
    Interactivity & Animations 
    Prasan kumar Nariboina Portfolio 
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#00f5ff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#00f5ff", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
            },
            "retina_detect": true
        });
    }

    // 2. Scroll Reveal Observer
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 3. Navbar logic
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(7, 7, 10, 0.9)';
            nav.style.padding = '1rem 0';
        } else {
            nav.style.background = 'rgba(7, 7, 10, 0.7)';
            nav.style.padding = '1.5rem 0';
        }
    });

    // 4. Parallax Effect for Hero
    const heroVisual = document.querySelector('.hero-visual');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('mousemove', (e) => {
        if (!heroContent) return;
        const x = (window.innerWidth / 2 - e.pageX) / 30;
        const y = (window.innerHeight / 2 - e.pageY) / 30;
        
        heroContent.style.transform = `translate(${x}px, ${y}px)`;
    });

    // 5. Typing Text Simulation (Optional enhancement)
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const phrases = ["AI, DevOps & Testing", "Accessibility & Cloud", "Inclusive Engineering"];
        let count = 0;
        let phraseIndex = 0;
        let letterIndex = 0;
        let currentPhrase = "";
        let isDeleting = false;

        const type = () => {
            const current = phrases[phraseIndex];
            
            if (isDeleting) {
                currentPhrase = current.substring(0, letterIndex - 1);
                letterIndex--;
            } else {
                currentPhrase = current.substring(0, letterIndex + 1);
                letterIndex++;
            }

            typingText.textContent = currentPhrase;

            let typeSpeed = 100;
            if (isDeleting) typeSpeed /= 2;

            if (!isDeleting && letterIndex === current.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && letterIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        };

        type();
    }
});
