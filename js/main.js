(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    

    // Enhanced Navbar on scrolling with modern effects
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Mobile navbar improvements
    $('.navbar-toggler').on('click', function() {
        setTimeout(function() {
            if ($('.navbar-collapse').hasClass('show')) {
                $('body').addClass('navbar-open');
            } else {
                $('body').removeClass('navbar-open');
            }
        }, 100);
    });

    // Close mobile navbar when clicking on links
    $('.navbar-nav .nav-link').on('click', function() {
        if ($(window).width() < 992) {
            $('.navbar-collapse').collapse('hide');
            $('body').removeClass('navbar-open');
        }
    });

    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    
    if ($videoSrc) {
        console.log($videoSrc);
    }
    
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })
    
    
    // Enhanced Back to top button with smooth animation
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter with enhanced animation
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Enhanced Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // =============== ADVANCED BEAUTIFICATION FEATURES ===============
    
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });

    // Parallax effect for hero images
    $(window).scroll(function() {
        var scrolled = $(this).scrollTop();
        var parallax = $('.hero-header');
        var speed = scrolled * 0.5;
        parallax.css('transform', 'translateY(' + speed + 'px)');
    });

    // Image lazy loading effect
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Animated counter for stats
    function animateCounter(element, target) {
        var current = 0;
        var increment = target / 100;
        var timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.text(Math.floor(current) + '+');
        }, 20);
    }

    // Trigger counter animation when stats come into view
    $(window).scroll(function() {
        $('.stat-number').each(function() {
            if (isElementInViewport(this) && !$(this).hasClass('animated')) {
                $(this).addClass('animated');
                var target = parseInt($(this).text().replace('+', ''));
                animateCounter($(this), target);
            }
        });
    });

    // Enhanced hover effects for project items
    $('.project-item').hover(
        function() {
            $(this).find('img').css('transform', 'scale(1.1) rotate(2deg)');
            $(this).find('.project-title').css({
                'color': '#EAA636',
                'transform': 'translateY(-5px)'
            });
        },
        function() {
            $(this).find('img').css('transform', 'scale(1) rotate(0deg)');
            $(this).find('.project-title').css({
                'color': '',
                'transform': 'translateY(0)'
            });
        }
    );

    // Enhanced form validation with visual feedback
    $('.form-control').on('focus', function() {
        $(this).parent().addClass('focused');
    }).on('blur', function() {
        if ($(this).val() === '') {
            $(this).parent().removeClass('focused');
        }
    });

    // Service cards tilt effect
    $('.service-item').hover(function() {
        $(this).css('transform', 'perspective(1000px) rotateX(5deg) rotateY(5deg) translateY(-10px)');
    }, function() {
        $(this).css('transform', 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)');
    });

    // Typewriter effect for main title (optional)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.html('');
        function type() {
            if (i < text.length) {
                element.html(element.html() + text.charAt(i));
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Loading animation
    $(document).ready(function() {
        $('body').addClass('loaded');
        
        // Stagger animation for gallery items
        $('.gallery-item').each(function(index) {
            $(this).css('animation-delay', (index * 0.1) + 's');
        });
        
        // Animate feature items
        $('.feature-item').each(function(index) {
            $(this).css('animation-delay', (index * 0.2) + 's');
        });
    });

    // Image preloader for better performance
    function preloadImages(array) {
        if (!preloadImages.list) {
            preloadImages.list = [];
        }
        var list = preloadImages.list;
        for (var i = 0; i < array.length; i++) {
            var img = new Image();
            img.onload = function() {
                var index = list.indexOf(this);
                if (index !== -1) {
                    list.splice(index, 1);
                }
            }
            list.push(img);
            img.src = array[i];
        }
    }

    // Preload gallery images
    var imagesToPreload = [
        'img/pic11.jpg', 'img/pic12.jpg', 'img/pic13.jpg', 'img/pic14.jpg',
        'img/pic15.jpg', 'img/pic16.jpg', 'img/pic17.jpg', 'img/pic18.jpg',
        'img/pic19.jpg', 'img/pic20.jpg', 'img/pic21.jpg', 'img/pic22.jpg',
        'img/pic23.jpg', 'img/pic24.jpg', 'img/pic25.jpg', 'img/pic26.jpg'
    ];
    preloadImages(imagesToPreload);

    // Enhanced lightbox effects
    $(document).on('click', '[data-lightbox]', function(e) {
        e.preventDefault();
        // Add custom lightbox animations here
        $(this).css('transform', 'scale(0.95)');
        setTimeout(() => {
            $(this).css('transform', 'scale(1)');
        }, 150);
    });

    // Scroll progress indicator
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(this).height();
        var scrollPercent = (scrollTop) / (docHeight - winHeight);
        var scrollPercentRounded = Math.round(scrollPercent * 100);
        
        // Update a progress bar if you add one
        $('.scroll-progress').css('width', scrollPercentRounded + '%');
    });

    // Mobile menu enhancement
    $('.navbar-toggler').click(function() {
        $(this).toggleClass('active');
        $('.navbar-collapse').toggleClass('show-mobile');
    });

    console.log('🎨 My Imagine Photography - Advanced beautification loaded successfully!');
    
})(jQuery);

