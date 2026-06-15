const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 150) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const status = document.getElementById('status');
  status.textContent = 'Message sent successfully! 👍';
  this.reset();

  setTimeout(() => {
    status.textContent = '';
  }, 3000);
});