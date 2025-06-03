document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav.main-nav');

  toggleBtn.onclick = toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
  });
});