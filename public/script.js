$(document).ready(function () {
    new Swiper('.swiper-container', {
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 16,
        breakpoints: {
            1366: {
                slidesPerView: 1,
                spaceBetween: 16
            },
            1028: {
                slidesPerView: 1,
                spaceBetween: 14
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
});
