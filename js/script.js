// Toggle menu icon and navbar
let menuIcon = document.querySelector('#menu-icon'); // Get the menu icon element
let navbar = document.querySelector('.navbar'); // Get the navbar element

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggle 'bx-x' class to change icon
    navbar.classList.toggle('active'); // Toggle 'active' class to show/hide navbar
}

// Highlight active section link when scrolling
let sections = document.querySelectorAll('section'); // Get all sections
let navLinks = document.querySelectorAll('header nav a'); // Get all navbar links

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; // Current scroll position
        let offset = sec.offsetTop - 150; // Section position - 150 for earlier activation
        let height = sec.offsetHeight; // Section height
        let id = sec.getAttribute('id'); // Get section ID

        if (top >= offset && top < offset + height) {
            // Remove 'active' from all links
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            // Add 'active' to the current section's link
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // Sticky header when scrolling
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100); // Add 'sticky' class if scrolled > 100px

    // Hide navbar when scrolling (for mobile view)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Scroll reveal animations
ScrollReveal({
    // Set animation settings
    reset: true, // Repeat animation on scroll
    distance: '80px', // How far elements move
    duration: 2000, // Animation time
    delay: 200 // Delay before animation starts
});

// Targets and animations
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); // Animate from top
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' }); // Animate from bottom
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' }); // Animate from left
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' }); // Animate from right

// Typed.js typing effect
const typed = new Typed('.multiple-text', {
    strings: ['Computer teacher', 'English Teacher'], // Texts to type
    typeSpeed: 100, // Typing speed
    backSpeed: 100, // Backspace speed
    backDelay: 1000, // Delay before backspacing
    loop: true // Repeat the typing effect
});
