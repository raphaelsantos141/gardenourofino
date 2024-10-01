/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
    "use strict";

    /* Preloader */
    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);

    /* JQuery Menu */
    $('header nav').meanmenu();

    /* Tooltip */
    $('[data-toggle="tooltip"]').tooltip();

    /* Sticky Header */
    $(".sticky-wrapper-header").sticky({ topSpacing: 0 });

    /* Mouseover Effect for Mega Menu */
    $(".main-menu ul li.megamenu").hover(
        function () {
            $("#wrapper").addClass('overlay');
        },
        function () {
            $("#wrapper").removeClass('overlay');
        }
    );

    /* NiceScroll */
    $(".brand-box").niceScroll({
        cursorcolor: "#9b9b9c",
    });

    /* NiceSelect */
    $('select').niceSelect();

    /* OwlCarousel - Blog Post Slider */
    $('.carousel-slider-post').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    /* OwlCarousel - Banner Rotator Slider */
    $('.banner-rotator-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    /* OwlCarousel - Product Slider */
    $('#product-in-slider').owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            960: { items: 3 },
            1200: { items: 4 }
        }
    });

    /* Scroll to Top */
    $(window).on('scroll', function () {
        const scroll = $(window).scrollTop();
        $("#back-to-top").toggleClass('b-show_scrollBut', scroll >= 100);
    });

    $("#back-to-top").on("click", function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
    });

    /* Contact Form Validation */
    $.validator.setDefaults({
        submitHandler: function () {
            alert("submitted!");
        }
    });

    $("#contact-form").validate({
        rules: {
            firstname: "required",
            email: { required: true, email: true },
            lastname: "required",
            message: "required",
            agree: "required"
        },
        messages: {
            firstname: "Please enter your firstname",
            email: "Please enter a valid email address",
            lastname: "Please enter your lastname",
            message: "Please enter your message",
            agree: "Please accept our policy"
        },
        errorElement: "div",
        errorPlacement: function (error, element) {
            error.addClass("help-block");
            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("input"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element) {
            $(element).closest(".col-md-4, .col-md-12").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function (element) {
            $(element).closest(".col-md-4, .col-md-12").addClass("has-success").removeClass("has-error");
        }
    });

    /* Hero Slider */
    new Swiper('.heroslider', {
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: 'auto',
        paginationClickable: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        }
    });

    /* Product Filters */
    new Swiper('.swiper-product-filters', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        breakpoints: {
            1024: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 30, slidesPerColumn: 1 },
            640: { slidesPerView: 2, spaceBetween: 20, slidesPerColumn: 1 },
            480: { slidesPerView: 1, spaceBetween: 10, slidesPerColumn: 1 }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        }
    });

    /* Countdown */
    $('[data-countdown]').each(function () {
        const $this = $(this);
        const finalDate = $this.data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime(''
                + '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
                + '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
                + '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
                + '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
                + '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
        });
    });

    /* Deal Slider */
    $('.deal-slider').slick({
        dots: false,
        infinite: false,
        prevArrow: '.previous-deal',
        nextArrow: '.next-deal',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    /* News Slider */
    $('#news-slider').slick({
        dots: false,
        infinite: false,
        prevArrow: '.previous',
        nextArrow: '.next',
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    /* Fancybox */
    $(".fancybox").fancybox({
        maxWidth: 1200,
        maxHeight: 600,
        width: '70%',
        height: '70%'
    });

    /* Toggle Sidebar */
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

    /* Optional Blog Carousel */
    $('#blogCarousel').carousel({
        interval: 5000
    });
});
