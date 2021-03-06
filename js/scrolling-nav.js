
//jQuery for page scrolling feature - requires jQuery Easing plugin
$('document').ready (function() {

    $('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
        $(this).parents('.navbar-collapse').collapse('hide');
    });

    
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeOutExpo');
        event.preventDefault();
    });

    if ($(window).width() > '1024') {
        $(window).stellar();
    }; 
});
