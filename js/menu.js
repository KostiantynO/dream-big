(() => {
  const openMenuBtn = document.querySelector('.burger-btn');
  const menu = document.querySelector('.menu');
  const heroImg = document.querySelector('.hero-image');

  const toggleMenu = () => {
    menu.classList.toggle('is-hidden');
  };

  const scale = e => {
    e.target.classList.toggle('scale');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  heroImg.addEventListener('click', scale);
})();
