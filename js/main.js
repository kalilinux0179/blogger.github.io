const responsive = {
    0: { items: 1 },
    320: { items: 1 },
    560: { items: 2 },
    960: { items: 3 }
}
$(document).ready(function () {
    $nav = $('.nav');
    $tooglecollapse = $('.toogle-collapse');
    // click event on toogle menu
    $tooglecollapse.click(function () {
        $nav.toggleClass('collapse');
    })
    // owl-carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        responsive: responsive
        // nav: true
    });

    // scroll up
    $('.move-up').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    })

    // aos
    AOS.init();
})