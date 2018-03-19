$( document ).ready(function() {
    var heights = $(".div-eq-height").map(function() {
	return $(this).height();
    }).get(),
	
	maxHeight = Math.max.apply(null, heights);
    
    $(".div-eq-height").height(maxHeight);
    console.log(maxHeight);
});


/**
$(document).ready(function() {
    $('.carousel').carousel({
	interval: 2000
    })
});
*/
