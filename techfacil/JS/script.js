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

  // 🔹 Verifica no localStorage se já existe um tema salvo
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  }

  updateIcon();

  themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // 🔹 Salva a preferência no localStorage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }

    updateIcon();
  });
});
