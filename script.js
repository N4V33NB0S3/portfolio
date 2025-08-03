document.addEventListener("DOMContentLoaded", function() {
    // --- Initialize Lucide Icons ---
    lucide.createIcons();

    // --- Header Scroll Effect ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('bg-black', window.scrollY > 50);
        header.classList.toggle('bg-opacity-80', window.scrollY > 50);
        header.classList.toggle('backdrop-blur-sm', window.scrollY > 50);
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    // --- Blinking Cursor for Logo ---
    const logo = document.getElementById('logo');
    if (logo) {
        const cursorSpan = document.createElement('span');
        cursorSpan.id = 'logo-cursor';
        logo.appendChild(cursorSpan);
    }

    // --- Typewriter Effect ---
    const typeWriter = (element) => {
        const text = element.dataset.text;
        element.innerHTML = ''; // Clear original text
        let i = 0;
        const speed = 50; // Typing speed in ms

        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        cursor.innerHTML = '&nbsp;';
        element.appendChild(cursor);

        function type() {
            if (i < text.length) {
                cursor.insertAdjacentText('beforebegin', text.charAt(i));
                i++;
                setTimeout(type, speed);
            } else {
                cursor.remove(); // Remove cursor when done
            }
        }
        type();
    };

    // --- Intersection Observer for Animations ---
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.classList.add('visible'); // Make element visible
                typeWriter(el);
                observer.unobserve(el); // Animate only once
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

    document.querySelectorAll('.typewriter').forEach(el => {
        observer.observe(el);
    });
});
