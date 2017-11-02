$('document').ready(function(){
	$('#fullpage').fullpage({
		animateAnchor: true,
		allowPageScroll: true,
    loopBottom: true,
    css3:true,
    setAllowScrolling : false, 
		scrollOverflow: true,
		verticalCentered: false,
		slidesNavigation: true,
		anchors: ['firstPage', 'secondPage'],
		controlArrows: false,
        afterRender: function () {
              setInterval(function () {
                  $.fn.fullpage.moveSlideRight();
             }, 4000);
         }
	});
	$('.owl-carousel').owlCarousel({
	    nav:true,
	    center:true,
	    loop:true,
		smartSpeed: 1000,
		fluidSpeed: true,
	    items : 3
	});
	$('.category__box').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('.category__box .category__line').removeClass('category__line_active');
		$('.category__tab').removeClass('category__tab_active');
		$("#"+tab_id).addClass('category__tab_active');
		$(".category__line", this).addClass('category__line_active');
	});
});
