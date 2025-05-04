const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.style.display = 'none';

  const closeButton = document.createElement('div');
  closeButton.innerHTML = '&#9932;';
  closeButton.setAttribute('id', 'close-button');
  closeButton.style.cursor = 'pointer';
  closeButton.style.marginTop = '25px';
  closeButton.style.fontSize = '20px';
  closeButton.classList.add('close-button');
  navLinks.insertBefore(closeButton, navLinks.firstChild);

  closeButton.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.style.display = 'block';
    closeButton.remove();
  });

});

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("header-scrolled");
    } else {
      navbar.classList.remove("header-scrolled");
    }
  });