
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('#hamburger'); // Идентификатор картинки
    const navMenu = document.querySelector('#navMenu'); // Идентификатор меню

    // Открытие/закрытие меню по клику на бургер-картинку
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Закрытие меню при клике вне меню
    document.addEventListener('click', function (event) {
        if (!navMenu.contains(event.target) && event.target !== hamburger) {
            navMenu.classList.remove('active');
        }
    });

    // Закрытие меню при клике на ссылку
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
        });
    });
});
