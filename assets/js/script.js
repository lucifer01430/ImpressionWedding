// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Hamburger menu functionality
const hamburger = document.getElementById('hamburger'); // Targeting the hamburger div
const nav = document.querySelector('nav'); // Targeting the navigation menu

// Add event listener to hamburger icon
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active'); // Toggle 'active' class on nav to show/hide the menu
    hamburger.classList.toggle('open'); // Toggle 'open' class to animate hamburger to cross
});


// Hero slideshow
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds
showSlide(currentSlide);

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.about-content, .service-card, .gallery-item, .testimonial-card, .team-card, .faq-item, form').forEach(el => {
    observer.observe(el);
});

// FAQ dropdown
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.style.maxHeight;

        // Close all other answers
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.style.maxHeight = null;
            ans.previousElementSibling.classList.remove('active');
        });

        // Toggle the clicked answer
        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            question.classList.add('active');
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
