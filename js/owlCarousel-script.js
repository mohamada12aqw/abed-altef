jQuery(document).ready(function(){
	
	
		
		//Script for carousel with lightbox
		$("a[rel^='prettyPhoto']").prettyPhoto();    
		
		$(".owl-slider").owlCarousel({
			 items: 4,
			 itemsDesktop: [1199, 3],
			 itemsDesktopSmall: [991, 3],
			 itemsTablet: [767,3],
      		 itemsMobile : [480,1]
		});
		
		var owl = $(".owl-slider");	 
		$(".carouselControllerWraper .next").click(function(){
			owl.trigger('owl.next');
		})
		$(".carouselControllerWraper .prev").click(function(){
			owl.trigger('owl.prev');
		});
});
