$(document).ready(function() {
    // Smooth scrolling for navbar links
    $('.navbar-nav a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Add animation on scroll
    $(window).on('scroll', function() {
        $('.animate__animated').each(function() {
            var position = $(this).offset().top;

            var windowTop = $(window).scrollTop();
            if (position < windowTop + $(window).height() - 100) {
                $(this).addClass('animate__fadeIn');
            }
        });
    });
});
