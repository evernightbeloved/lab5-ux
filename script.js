(() => {
  const body = document.body;
  const themeBtn = document.querySelector('#themeToggle');
  const clickBtn = document.querySelector('#activityButton');
  const counterEl = document.querySelector('#clickCount');
  const alertEl = document.querySelector('#activityAlert');

  let count = Number(localStorage.getItem('lab5_clicks') || 0);
  const savedTheme = localStorage.getItem('lab5_theme');

  if (savedTheme === 'light') body.classList.add('light');

  function updateThemeLabel() {
    if (!themeBtn) return;
    themeBtn.textContent = body.classList.contains('light') ? '🌙 Ночь' : '☀️ День';
    themeBtn.setAttribute('aria-label', body.classList.contains('light') ? 'Включить тёмную тему' : 'Включить светлую тему');
  }

  function updateCounter() {
    if (counterEl) counterEl.textContent = String(count);
    if (alertEl) {
      if (count >= 5) {
        alertEl.classList.add('show');
        alertEl.textContent = 'Высокая активность: вы нажали кнопку 5 или более раз.';
      } else {
        alertEl.classList.remove('show');
      }
    }
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      body.classList.toggle('light');
      localStorage.setItem('lab5_theme', body.classList.contains('light') ? 'light' : 'dark');
      updateThemeLabel();
    });
  }

  if (clickBtn) {
    clickBtn.addEventListener('click', () => {
      count += 1;
      localStorage.setItem('lab5_clicks', String(count));
      updateCounter();
    });
  }

  updateThemeLabel();
  updateCounter();
})();
