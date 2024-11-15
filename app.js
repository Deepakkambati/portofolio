// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission message
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('form-message').style.display = 'block';
    this.reset();
});