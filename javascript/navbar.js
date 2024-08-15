// navbar.js
export function navbarToggle() {
    const menuIcon = document.querySelector('.menu-btn');
    const navBar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navBar.classList.toggle('active');
    });
}
