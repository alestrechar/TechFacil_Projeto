document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
  
    function updateIcon() {
      if (body.classList.contains('dark-mode')) {
        themeIcon.className = 'fa-solid fa-sun';
        themeIcon.style.color = '#a3d5ff'; // azul claro
      } else {
        themeIcon.className = 'fa-solid fa-moon';
        themeIcon.style.color = '#a3d5ff'; // azul claro
      }
    }
  
    themeToggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      updateIcon();
    });
  
    updateIcon();
  });