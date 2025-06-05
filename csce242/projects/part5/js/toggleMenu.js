const updateToggleVisibility = () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');
  if (innerWidth > 600) {
    toggleBtn.style.display = 'none';
    nav.classList.remove('nav-open');
  } else {
    toggleBtn.style.display = 'block';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');
  toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
  });
  updateToggleVisibility();
  addEventListener('resize', updateToggleVisibility);
});
