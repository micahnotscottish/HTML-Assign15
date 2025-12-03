// Simple JS toggle for mobile
const toggleBtn = document.querySelector('.toggle');
const nav = document.getElementById('navbar');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});