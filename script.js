// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission handler (for demonstration only)
document.querySelector('.contact-form')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Message submitted!');
});
