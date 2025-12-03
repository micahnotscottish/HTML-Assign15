// Simple JS toggle for mobile
const toggleBtn = document.getElementById('menubtn');
const nav = document.getElementById('navbar');

toggleBtn.addEventListener('mouseover', () => {
  nav.classList.toggle('active');
toggleBtn.addEventListener('mouseleave', () => {
  nav.classList.toggle('active');
})
});