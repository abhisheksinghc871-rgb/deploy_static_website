// Mobile menu
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
}

// Current page ko highlight karo
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(a => {
  if (a.getAttribute('href') === here) a.classList.add('active');
});

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Contact form (demo) - asli kaam ke liye Formspree/Netlify Forms use karein
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('form-msg').textContent =
      'Thanks! Aapka message mil gaya (demo form).';
    form.reset();
  });
}
