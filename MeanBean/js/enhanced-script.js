// ===== Scroll Reveal Animation =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
    }
  });
});

document.querySelectorAll('.reveal').forEach(section => {
  observer.observe(section);
});

// ===== Back to Top Button =====
const backToTop = document.createElement('button');
backToTop.innerText = '↑';
backToTop.id = 'backToTop';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Dark Mode Toggle =====
const darkToggle = document.createElement('button');
darkToggle.innerText = '🌙';
darkToggle.id = 'darkToggle';
document.body.appendChild(darkToggle);

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ===== Form Validation =====
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    const name = this.querySelector('#name').value.trim();
    const email = this.querySelector('#email').value.trim();
    const message = this.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      e.preventDefault();
    }
  });
}
