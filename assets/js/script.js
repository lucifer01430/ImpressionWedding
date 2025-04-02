document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
});



    // Mobile menu toggle
    document.getElementById('mobile-menu').addEventListener('click', function () {
        document.querySelector('.nav-links').classList.toggle('active');
      });
  
      // Accordion toggle for FAQs
      const accordions = document.querySelectorAll('.accordion-header');
      accordions.forEach(header => {
        header.addEventListener('click', () => {
          const body = header.nextElementSibling;
          header.classList.toggle('active');
          body.style.display = body.style.display === 'block' ? 'none' : 'block';
        });
      });