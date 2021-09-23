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
    })
});