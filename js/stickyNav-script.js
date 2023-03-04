jQuery(document).ready(function(){	

	$(function() {
		var header = $(".subNavigationWide");
		var toppos = $('.subNavigationWide').offset().top;
		var monthlyOfferTop = ( $('.footerTopWide').offset().top - $(header).height());		
		$(window).scroll(function() {    
		var scroll = $(window).scrollTop(); 
		if (scroll >= toppos && scroll <=monthlyOfferTop) {
			header.addClass("sticky");
		} else {            
			header.removeClass("sticky");
		}       
		});
});
		
		// var head = $(".headerTopWide").height();
		// var nav = $(".navbar").height();
		// var pageH = $(".pageHeaderWide").height();
		// var total = head + pageH + nav ;
		//// console.log(total);
		// var scroll = window.scrollTop();
		// if(scroll >= total){
		// 	header.addClass("sticky");
		// } else {            
		// 	header.removeClass("sticky");
		// } 
	
	
});
