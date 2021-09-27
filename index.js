$(document).ready(function() {
    // $('#example').DataTable();
    $('li.hasChildren > a').click( function(e) {
    	e.preventDefault();
    	$(this).toggleClass('active');
    	$(this).parent().find('.submenuSideBar').slideToggle();
    })
    $('.profiler').click( function(e) {
    	e.preventDefault();
    	$(this).toggleClass('active');
    	$(this).parent().find('.submenuProfiler').slideToggle('fast','swing');
    });
    $('.sliderMain').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.sliderThumbanil').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
});