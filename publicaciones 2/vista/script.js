/*--------------------------
        ScrollUp
    ---------------------------- */
$.scrollUp({
    scrollText: '<i class="fa fa-angle-double-up"></i>',
    easingType: 'linear',
    scrollSpeed: 1500,
    animation: 'fade'
});

/*---- CounterUp ----*/
$('.count').counterUp({
    delay: 10,
    time: 1000
});

 /*-----------------------------------
        Scroll zoom
    -------------------------------------- */
    window.sr = ScrollReveal({
        duration: 800,
        reset: false
    });
    sr.reveal('.scroll-zoom');


    /*-----------------------
        Shop filter active 
    ------------------------- */
    $('.filter-active a').on('click', function (e) {
        e.preventDefault();
        $('.product-filter-wrapper').slideToggle();
    })
