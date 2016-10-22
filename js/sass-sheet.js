// Fix Sidebar when scrolled

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
   
    if (scroll >= 580) {
   
        $(".sidebar ul").addClass("fixed");
    } else {
	    $(".sidebar ul").removeClass("fixed");
    }
}); 


// Smooth scroll for links

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});