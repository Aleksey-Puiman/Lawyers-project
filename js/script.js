let burgerButton = document.querySelectorAll('.header__menu-button');
if (burgerButton) {
    let burgerMenu = document.querySelector('.header__hidden-menu');
    burgerButton.forEach(element => {
        element.addEventListener("click", function () {
            document.body.classList.toggle('lock');
            burgerMenu.classList.toggle('active');
        });
    });
    let hiddenMenu_Arcons = burgerMenu.querySelectorAll('.header__menu-elements li');
    hiddenMenu_Arcons.forEach(element => {
        element.addEventListener("click", function () {
            burgerMenu.classList.toggle('active')
        })
    });
}

var swiper = new Swiper(".presentaion", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '">' + "</div>";
        },
    },
});

var swiper = new Swiper(".reviews__slider", {
    navigation: {
        nextEl: ".reviews__swiper-button-next",
        prevEl: ".reviews__swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 24,
    freeMode: true,
    breakpoints: {
        425: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1.5,
        },
        1320: {
            slidesPerView: 2,
        }
    }
});