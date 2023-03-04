jQuery(document).ready(function () {
    documentReady();
    $('html, body').animate({ scrollTop: 0 });
    rangeSliderFun();
    rootwizard();
    imgAnimation();
});

$('.show-last-tab').click(function () {

    /*$('.car_selection').removeClass('active');
    $('#car-selection').removeClass('active');
    $('.finance_opt').removeClass('active');
    $('#finance-option').removeClass('active');
    $('.finance_apply').addClass('active');
    $('#apply-finance').addClass('active');*/

});


/*================= SEARCH FUNCTION ========================*/
$('.navbar-formx').keypress(function (e) {
    if (e.which == 13) {
        $.ajax({
            url: 'js/ex.json',
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function (data) {
                var found = 0;
                for (i in data.items) {
                    if ($('.sb-search-input').val().toLowerCase().indexOf(data.items[i].key) !== -1) {
                        window.open(data.items[i].url);
                        found = 1;
                        break;
                    }
                }
                if (!found) {
                    //window.open("https://www.google.com.eg/search?q=" + $('.sb-search-input').val() + "&sitesearch=www.aljfinance.com", "_self", true);
                }
            }
        });
    }
});

$("script[src='fbevents.js']").remove();

$('.login-input').keydown(function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        return false;
    }
});

// Register Steps
$(".opt_tabs li").on("click", function (e) {
    if ($(this).hasClass("disabled")) {
        e.preventDefault();
        return false;
    }
});

/* ================ STICKY HEADER ====================*/

$(".headerBottomWide").sticky({
    topSpacing: 0
});

//Filter URL
if (window.location.href.indexOf('ProductID') > -1 || window.location.href.indexOf('ModelID') > -1) {
    $('.car_selection').children("a").removeClass('active');
    $('.finance_opt').removeClass("disabled").children("a").addClass('active');
    $('#car-selection').removeClass('active');
    $('#finance-option').addClass('active');

    $('.brand_selection').children("a").removeClass('active');
    $('#brand-selection').removeClass('active');
}

if (window.location.href.indexOf('BrandID') > -1) {
    $('.car_selection').removeClass("disabled");
    $('.car_selection').children("a").addClass('active');
    $('.finance_opt').children("a").removeClass('active');
    $('#car-selection').addClass('active');
    $('#finance-option').removeClass('active');

    $('.brand_selection').children("a").removeClass('active');
    $('#brand-selection').removeClass('active');
}

$('body').on("change", "[nx-step]", function () {
    var step = 0;
    step = parseInt($(this).attr('nx-step'));
    /*hopscotch.nextStep();

    $('#1st_Class').parent(".financeOptionSelectCarOpt").addClass('introjs-showElement introjs-relativePosition');
    setTimeout(function () {

    }, 10);*/
});


if ($('.financing-panel').hasClass('ar')) {
    var titleModel ="سنة الصنع" ;
    var contentModel = "حدد موديل السنة";
    var titleClass = "الفئة";
    var contentClass = "حدد الفئة";
    var titleColor = "ألوان السيارة";
    var contentColors = "حدد اللون المفضل لك";
    var nextBtn = "التالي";
    var doneBtn = "تم";
    var closeTooltip = "إغلاق";

} else {
    var titleModel = "Model Year";
    var contentModel = 'Select the model year you prefer.';
    var titleClass = "Vehicle Class" ;
    var contentClass = "Select the class you prefer.";
    var titleColor = "Vehicle Colors";
    var contentColors = "Select the color you prefer.";
    var nextBtn= "Next";
    var doneBtn = "Done";
    var closeTooltip = "Close";
}

var tour = {
    id: "myel",
    i18n: {
        nextBtn: nextBtn,
        doneBtn: doneBtn,
        closeTooltip: closeTooltip
    },
    steps: [
      {
          title:titleModel ,
          content: contentModel,
          target: "#myel",
          placement: "top"
      },
      {
          title:titleClass ,
          content: contentClass,
          target: "#my-other-element",
          placement: "top"
      },
        {
            title:titleColor ,
            content: contentColors,
            target: ".element3s",
            placement: "top"
        }
    ]
};

// Start the tour!
//$('#finance-option').click(function () {
 //   hopscotch.startTour(tour);
//});

function sd() {
    //hopscotch.nextStep();
}

function removeCalcPanel2() {
    $("#ContentPlaceHolder1_prametarArea").removeClass("disabled-area");
}

if ($('.financing-panel').hasClass('active')) {
        //hopscotch.startTour(tour); // by luay
}

// Run again on postback of update panel
function endRequestRangeSliderFun(sender, args) {
    documentReady();
    rangeSliderFun();
}
Sys.WebForms.PageRequestManager.getInstance().add_endRequest(endRequestRangeSliderFun);


function documentReady() {

/*================= SCRIPT FOR EQUAL HEIGHT ========================*/

	$(function(cash) {
		if($('.equal').length > 0)
			$('.equal').responsiveEqualHeightGrid();
	});

/*================= SCRIPT FOR FINANCE OPTION PERIOD ACTIVE ========================*/

	$('.periodList li').click(function(event){
	//remove all pre-existing active classes
	    $('.periodList .active').removeClass('active');

	//add the active class to the link we clicked
		$(this).addClass('active');
	});

/*================= SCRIPT FOR SELECT COLOR ========================*/
	$(".navbar-nav li.current").prev().addClass("noBorder");

/*================= SCRIPT FOR SELECT COLOR ========================*/

	/*$(".colr").click(function(){
		$(this).toggleClass('check');
	});*/

	$('.colr').on('click', function(e) {
		$(this).find('input').prop('checked', true);
		$('.colr').removeClass('check');
		$(this).addClass('check');
	});

/*================= SCRIPT FOR POPOVER ========================*/
	if ($("[data-toggle=popover]") > 0)
	    $("[data-toggle=popover]").popover({ html: true });

/*================= SCRIPT DROPDOWN ANIMATION ========================*/


	//$('.yamm-fw').on('show.bs.dropdown', function(e){
        //$(this).find('dropdown-menu').first().stop(true, true).slideDown(300);        
  	//});
    
	//$('.yamm-fw').on('hide.bs.dropdown', function(e){
		//$(this).find('dropdown-menu').first().stop(true, true).slideUp(300);
	//});
    
	//$('.dropdownTab').on('show.bs.dropdown', function(e){
    	//$(this).find('.dropdown-menu').first().stop(true, true).slideDown(450);
  	//});
    
	//$('.dropdownTab').on('hide.bs.dropdown', function(e){
		//$(this).find('.dropdown-menu').first().stop(true, true).slideUp(450);
    //});

   //$('.yamm-fw .dropdown-toggle').click(function () {
   //    $(this).next('.dropdown-menu').slideDown(450);
   // });
    
   // $('.yamm-fw .dropdown-toggle').focusout(function () {
   //     $(this).next('.dropdown-menu').slideUp(450);
   // });
/*================= SCRIPT FOR LOCATE ADVISOR BOX SHOW HIDE ========================*/

	$(".hideBox").click(function(){
		$(".locateAdvisorInner").hide();
		$(".openBox").show();
	});

	$("#map-canvas").click(function(){
		$(".locateAdvisorInner").hide();
		$(".openBox").show();
	});

	$(".openBox").click(function(){
		$(".locateAdvisorInner").show();
		$(".openBox").hide();
	});


/*================= SCRIPT FOR HEADER TOP HIDE ========================*/

	$(".headerMostTopClose").click(function(){
		$(".headerMostTopWide").hide(400);
	});


/*================= SCRIPT FOR MEGAMENU ========================*/


	$(function() {
		window.prettyPrint && prettyPrint()
			$(document).on('click', '.yamm .dropdown-menu', function(e) {
			  e.stopPropagation()
		})
	});


/*================= SCRIPT FOR LOCATE ADVISOR DROPDOWN ========================*/

	//$('#locateAdvisor').selectpicker({
	//	//liveSearch: true,
	//	maxOptions: 1
	//});



/*================= SCRIPT FOR LOCATE ADVISOR DROPDOWN (Locations-Branch page) ========================*/

	//$('#locateAdvisorLA').selectpicker({
	//	//liveSearch: true,
	//	maxOptions: 1
    //});



    /*================= SCRIPT FOR Warnings ========================*/
	//$(".close_mark_green").click(function () {
	//    $(".green__worning").hide(200);
	//})
    ////
	//$(".close_mark_orange").click(function () {
	//    $(".orange__worning").hide(200);
	//})
    ////
	//$(".close_mark_red").click(function () {
	//    $(".red__worning").hide(200);
	//})
	$('body').on('click', '.green__worning .close_mark,.orange__worning .close_mark,.red__worning .close_mark', function () {
	    $(this).parents('.green__worning ,.orange__worning,.red__worning').fadeOut();
	});


/*================= SCRIPT FOR IMAGE FLIP ANIMATION ========================*/


	$('.flipWrap').hover(function(){
		$(this).addClass('flip');
	},function(){
		$(this).removeClass('flip');
	});


/*================= SCRIPT FOR TARGET SCROLL ========================*/

	$('.smoothScrollTarget').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top - 87
		});
		return false;
	});


/*================= SCRIPT FOR Show PromoBox/AnyBox  ========================*/
	var select = $(".dopromo").find("a");
	select.click(function (event) {

	    $(this).text($('#Hid_Lang').val());

	    event.preventDefault();
	    $(".none_div").show();
	    $('.equal').responsiveEqualHeightGrid();
	});

/*================= SCRIPT FOR PREV/NEXT SLIDER INFO  ========================*/

	var nextText = '';//$('#myCarousel').find('active').next().find('.tag').text();
	var prevText ='';
	if ($('.carousel-inner .item').length > 0) {
	    $('.sliderController .next').trigger('click');
	} else {
	    $('.sliderControllerWraper').remove();
	}


	$('#myCarousel').on('slid.bs.carousel', function () {
		var t = $(this).find('.active')
		var nxt = t.next();
		var prev = t.prev();
		if(!nxt.length){
			nextText = $('.carousel-inner').children().first().find('h2').text();
		}else{
			nextText = t.next().find('h2').text();
		}

		if(!prev.length){
			prevText = $('.carousel-inner').children().last().find('h2').text();
		}else{
			prevText = t.prev().find('h2').text();
		}
		//console.log($('.followupLogin .right .glyphicon').attr('data-original-title'));
		$('.sliderController a i').attr('data-original-title',nextText);
		$('.sliderController a i').attr('data-original-title',prevText);
	});

	if ($("[data-toggle=popover]") > 0) {
	    $('[data-toggle="popover"]').popover();
	}
	if ($("[data-toggle=tooltip]") > 0) {
	    $('[data-toggle="tooltip"]').tooltip();
	}


	$('.vehicleType').on('click', function(e) {
		$(this).find('input').prop('checked', true);
		$('.vehicleType').removeClass('active');
		$(this).addClass('active');
	});

	$('#advisorLocator').on('shown.bs.modal', function () {
	  $('.advisorLocatorSearchInput').focus()
	});


	$('.dealsList li').hover(function(e) {
		$(this).parent().find('li').not($(this)).css('opacity', 0.6);
	}, function() {
		$(this).parent().find('li').css('opacity', 1);
	});


	// function for opening info pop up
	var activePopup = null;
        //$('.question-icon').on('click', function () {
    $(document).on("click", ".question-icon", function () {
		if(activePopup == null){
			activePopup = $(this);
			$(activePopup).find('.popOver').toggleClass('popOverHide');
		}else{
			if($(activePopup).attr('id')== $(this).attr('id')){
				$(activePopup).find('.popOver').toggleClass('popOverHide');
			}else{
				$(activePopup).find('.popOver').addClass('popOverHide');
				activePopup = $(this);
				$(activePopup).find('.popOver').toggleClass('popOverHide');
			}

		}
	});


	$('.content--budget').on('click', ".vehicleType", function (e) {
	    $(this).find('input').prop('checked', true);
	    $('.vehicleType').removeClass('active');
	    $(this).addClass('active');
	});

	$('.car-details').not('.car-details:first').html($('.car-details:eq(0)').html());

}

/**************************/
// For Modals triggers
/*=========================*/
$('[data-modal]').click(function (e) {
    e.preventDefault();
    $('#' + $('.modal[style*="block"]').attr('id') + '').modal('hide');
    setTimeout(function () {
        $('body').addClass('modal-open');
    }, 400);
    $('#' + $(this).attr('data-modal') + '').modal('show');
});


/*================= ADDITIONAL FUNCTION ADDED ========================*/

(function(window) {
    'use strict';
    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    var hasClass, addClass, removeClass;
    if ('classList' in document.documentElement) {
        hasClass = function(elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function(elem, c) {
            elem.classList.add(c);
        };
        removeClass = function(elem, c) {
            elem.classList.remove(c);
        };
    }
    else {
        hasClass = function(elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function(elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function(elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }
    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }
    var classie = {hasClass: hasClass,addClass: addClass,removeClass: removeClass,toggleClass: toggleClass,has: hasClass,add: addClass,remove: removeClass,toggle: toggleClass};
    if (typeof define === 'function' && define.amd) {
        define(classie);
    } else {
        window.classie = classie;
    }
})(window);


( function( window ) {

	// http://stackoverflow.com/a/11381730/989439
	function mobilecheck() {
		var check = false;
		(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}

	// http://www.jonathantneal.com/blog/polyfills-and-prototypes/
	!String.prototype.trim && (String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g, '');
 });

 function UISearch( el, options ) {
  this.el = el;
  this.inputEl = el.querySelector('.navbar-formx > input.sb-search-input');
  this._initEvents();
 }

 UISearch.prototype = {
  _initEvents : function() {
   var self = this,
    initSearchFn = function( ev ) {
     ev.stopPropagation();
     // trim its value
     self.inputEl.value = self.inputEl.value.trim();

     if( !classie.has( self.el, 'sb-search-open' ) ) { // open it
      ev.preventDefault();
      self.open();
     }
     else if( classie.has( self.el, 'sb-search-open' ) && /^\s*$/.test( self.inputEl.value ) ) { // close it
      ev.preventDefault();
      self.close();
     }
    }
    KeySearchFn = function( ev ) {
     var keyCode = ev.keyCode;
      if(keyCode == 27){
       if( classie.has( self.el, 'sb-search-open' ) && /^\s*$/.test( self.inputEl.value ) ) { // close it
       ev.preventDefault();
       self.close();
      }
     }
    }
   this.el.addEventListener( 'click', initSearchFn );
   this.el.addEventListener('keydown', KeySearchFn);
   this.el.addEventListener( 'touchstart', initSearchFn );
   this.inputEl.addEventListener( 'click', function( ev ) { ev.stopPropagation(); });
   this.inputEl.addEventListener( 'touchstart', function( ev ) { ev.stopPropagation(); } );
  },
  open : function() {
   var self = this;
   classie.add( this.el, 'sb-search-open' );
   // focus the input
   if( !mobilecheck() ) {
    this.inputEl.focus();
   }
   // close the search input if body is clicked
   var bodyFn = function( ev ) {
    self.close();
    this.removeEventListener( 'click', bodyFn );
    this.removeEventListener( 'touchstart', bodyFn );
   };
   document.addEventListener( 'click', bodyFn );
   document.addEventListener( 'touchstart', bodyFn );
  },
  close : function() {
   this.inputEl.blur();
   classie.remove( this.el, 'sb-search-open' );
  }
 }

 // add to global namespace
 window.UISearch = UISearch;

} )( window );

new UISearch(document.getElementById('sb-search'));

(function() {
    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    if (!String.prototype.trim) {
        (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
                return this.replace(rtrim, '');
            };
        })();
    }

    [].slice.call(document.querySelectorAll('input.input__field')).forEach(function(inputEl) {
        // in case the input is already filled..
        if (inputEl.value.trim() !== '') {
            classie.add(inputEl.parentNode, 'input--filled');
        }

        // events:
        inputEl.addEventListener('focus', onInputFocus);
        inputEl.addEventListener('blur', onInputBlur);
    });

    function onInputFocus(ev) {
        classie.add(ev.target.parentNode, 'input--filled');
    }

    function onInputBlur(ev) {
        if (ev.target.value.trim() === '') {
            classie.remove(ev.target.parentNode, 'input--filled');
        }
    }
})(

);

//=====================================helal.js===========================================

function update_pagination_counter(pgntn_selector, pgntn_status_selector) {
    var $pgntn = $(pgntn_selector);
    $(pgntn_status_selector).text("Page " + $pgntn.pagination('getCurrentPage') + " from " + $pgntn.pagination('getPagesCount'));
}

function AddRowToTable(table) {   /*<<<*/
    $table = $(table);
    //console.log($table);
    //var $oldRow = $table.find('tr').eq(-1); // get the  last row
    //var $newRow = $oldRow.clone(true); // clone the node

    var $tmpltRow = $table.find('.tmplt'); // get the template.
    var $newRow = $tmpltRow.clone(true); // clone the node

    $newRow.removeClass("tmplt");
    $newRow.find("th").text(parseInt($table.find('tr').eq(-1).text()) + 1);
    $newRow.find("select").selectpicker({});
    $newRow.show();

    //console.log($newRow);

    //$oldRow.after($newRow); // insert the new row after the old row
    $table.find('tr').eq(-1).after($newRow);


}

function RemoveAllInTable(table) {
    var $table = $(table);
    $table.find("tr:gt(1)").remove();
    var $tmpltRow = $table.find('.tmplt'); // get the template.
    var $newRow = $tmpltRow.clone(true); // clone the node
    $newRow.removeClass("tmplt");
    $newRow.find("th").text(1);
    $newRow.find("select").selectpicker({});
    $newRow.show();
    $table.find('tr').eq(-1).after($newRow);
}

//  Disable button if there're any red validation spans
function chkValidation() {

    if ($('.tab-pane.active').find('span[style*="red"][style*="inline"]').length > 0) {
        $('.pager.wizard .gbtn').attr('disabled', 'disabled');
        //alert("false");
        return false;
    } else {
        $('.pager.wizard .gbtn').removeAttr('disabled');
        //alert("true");
        return true;
    }

}

function chkIncomeValidation() {
    //alert($('.tab-pane').find('span[style*="red"][style*="inline"]').length > 0);
    if ($('.tab-pane').find('span[style*="red"][style*="inline"]').length > 0) {
        return false;
    } else {
        return true;
    }
}

//$(document).ready(function () {

    //if ($('#rootwizard').length > 0) {

    //    if ($('.next-text').length > 0) {
    //        $('.next-text').text(" " + $("#rootwizard ul.nav > li.active+li").find('.wz-title').text());
    //    }


    //    $('#rootwizard').bootstrapWizard({
    //        onTabChange: function (tab, navigation, index) {
    //            chkValidation();
    //            $('.tab-pane.active input').focusout(function () {
    //                chkValidation();
    //            });

    //            window.scrollTo(0, $(".job-header").outerHeight() + $("#globalHeader").outerHeight());  /*<<<*/
    //            if (window.screen.width <= 990) {
    //                window.location.href = $(".wz-show-done>li.active").find("a").attr("href");
    //            }

    //            $(".wz-show-done>li.active").nextAll().removeClass('show-done');
    //            $(".wz-show-done>li.active").removeClass('show-done');
    //            $(".wz-show-done>li.active").prevAll().addClass('show-done');
    //            $('.next-text').text($("#rootwizard ul.nav > li.active+li").find('.wz-title').text());

    //            if ($("#rootwizard ul.nav > li.active").hasClass("success")) {
    //                $("#rootwizard .pager.wizard").hide();
    //            } else {
    //                $("#rootwizard .pager.wizard").show();
    //            }

    //        }
    //    });
    //}

    //// By Luay 31032016 Guest Update Tabs - Online Sales -

    //if ($('#rootwizard_Reg').length > 0) {


    //    if ($('.next-text').length > 0) {
    //        $('.next-text').text(" " + $("#rootwizard_Reg ul.nav > li.active+li").find('.wz-title').text());
    //    }
    //    //Here Map init
    //    HereMap();

    //    $("#tab2").removeClass("in active");
    //    $("#tab4").removeClass("in active");

    //    $('#rootwizard_Reg').bootstrapWizard({
    //        onTabChange: function (tab, navigation, index) {
    //            chkValidation();
    //            $('.tab-pane.active input').focusout(function () {
    //                chkValidation();
    //            });

    //            window.scrollTo(0, $(".job-header").outerHeight() + $("#globalHeader").outerHeight());  /*<<<*/
    //            if (window.screen.width <= 990) {
    //                window.location.href = $(".wz-show-done>li.active").find("a").attr("href");
    //            }

    //            $(".wz-show-done>li.active").nextAll().removeClass('show-done');
    //            $(".wz-show-done>li.active").removeClass('show-done');
    //            $(".wz-show-done>li.active").prevAll().addClass('show-done');
    //            $('.next-text').text($("#rootwizard_Reg ul.nav > li.active+li").find('.wz-title').text());

    //            if ($("#rootwizard_Reg ul.nav > li.active").hasClass("success")) {
    //                $("#rootwizard_Reg .pager.wizard").hide();

    //            } else {
    //                $("#rootwizard_Reg .pager.wizard").show();

    //            }
    //        },
    //        onTabClick: function (tab, navigation, index) {
    //            return chkValidation();
    //        },
    //        onTabShow: function (tab, navigation, index) {
    //            if (index === 1) {
    //                $("#mapFlag")[0].value = 1;
    //            }
    //            else if (index === 3) {
    //                $("#mapFlag")[0].value = 2;
    //            }

    //            var nextText = $("#rootwizard_Reg ul.nav > li.active+li").find('.wz-title').text();
    //            if (index != 5) nextText = $('#Hid_Lang_Next').val() + nextText; else nextText = $('#Hid_Lang_Last').val();

    //            $("#btn_Next").prop("value", nextText);

    //        },
    //        onNext: function (tab, navigation, index) {
    //            $('#Hid_Tab_No').val(index);
    //            chkValidation();
    //            $('.tab-pane.active input').focusout(function () {
    //                chkValidation();
    //            });
    //            $('.tab-pane.active select').change(function () {
    //                chkValidation();
    //            });
    //            return chkValidation();
    //        }
    //    });
    //}

    //// End Guest Update Tabs

    ////model
    //if ($('#rootwizard_mdl').length > 0) {

    //    $('#rootwizard_mdl').bootstrapWizard({
    //        onTabChange: function (tab, navigation, index) {
    //            chkValidation();
    //            $('.tab-pane.active input').focusout(function () {
    //                chkValidation();
    //            });
    //            $('.tab-pane.active select').change(function () {
    //                chkValidation();
    //            });


    //            window.scrollTo(0, $(".job-header").outerHeight() + $("#globalHeader").outerHeight());  /*<<<*/
    //            if (window.screen.width <= 990) {
    //                window.location.href = $(".wz-show-done>li.active").find("a").attr("href");
    //            }

    //            $(".wz-show-done>li.active").nextAll().removeClass('show-done');
    //            $(".wz-show-done>li.active").removeClass('show-done');
    //            $(".wz-show-done>li.active").prevAll().addClass('show-done');
    //            $('.next-text-mdl').text($("#rootwizard_mdl ul.nav > li.active+li").find('.wz-title').text());


    //            // if has class success
    //            if ($(".wz-show-done>li.active").hasClass("success")) {
    //                $("#rootwizard_mdl .pager.wizard").hide();
    //            } else {
    //                $("#rootwizard_mdl .pager.wizard").show();
    //            }
    //        },

    //        onTabClick: function (tab, navigation, index) { // Added By Luay 05092015
    //            return chkValidation();
    //        },
    //        onTabShow: function (tab, navigation, index) {
    //            // Added By Luay 01092015
    //            var nextText = $("#rootwizard_mdl ul.nav > li.active+li").find('.wz-title').text();
    //            if (index != 2) nextText = $('#Hid_Lang_Next').val() + nextText; else nextText = $('#Hid_Lang_Last').val();

    //            $("#btn_Submit").prop("value", nextText);

    //            // Added By Luay 01092015
    //        },
    //        onNext: function (tab, navigation, index) {
    //            $('#Hid_Tab_No').val(index);
    //            chkValidation();
    //            $('.tab-pane.active input').focusout(function () {
    //                chkValidation();
    //            });
    //            $('.tab-pane.active select').change(function () {
    //                chkValidation();
    //            });
    //            return chkValidation();
    //        },
    //    });

    //    if ($('.show-success-modal-alj').length > 0) {
    //        $('.show-success-modal-alj').click(function () {
    //            $('.success-modal-alj').show();
    //            return false;
    //        });
    //    }

    //    if ($('.next-text-mdl').length > 0) {
    //        $('.next-text-mdl').text($("#rootwizard_mdl ul.nav > li.active+li").find('.wz-title').text());
    //    }
    //}

    //if ($(".slct").length > 0) {
    //    $(".slct").selectpicker({});
    //}

    //$(window).scroll(function () {
    //    var total_header = $(".job-header").outerHeight() + $("#globalHeader").outerHeight();

    //    var val_s = $(window).scrollTop();
    //    var active_tab_h = $(".tab-pane.active").height();
    //    var sideBar_h = $("#sidebar").height();
    //    if (sideBar_h < active_tab_h) {
    //        if (total_header < val_s) {
    //            $("#sidebar").css({ "top": val_s - total_header, "bottom": "auto" });
    //        }
    //        if (total_header > val_s) {
    //            $("#sidebar").css({ "top": 0, "bottom": "auto" });
    //        }
    //        if (active_tab_h <= val_s) { //when arrive the end of active tab
    //            $("#sidebar").css({ "top": "auto", "bottom": 0 });
    //        }
    //    } else {
    //        $("#sidebar").css({ "top": 0, "bottom": "auto" });
    //    }

    //});

//});

function rootwizard() {
    if ($('#rootwizard').length > 0) {

        if ($('.next-text').length > 0) {
            $('.next-text').text(" " + $("#rootwizard ul.nav > li.active+li").find('.wz-title').text());
        }


        $('#rootwizard').bootstrapWizard({
            onTabChange: function (tab, navigation, index) {
                chkValidation();
                $('.tab-pane.active input').focusout(function () {
                    chkValidation();
                });

                //window.scrollTo(0, $(".job-header").outerHeight() + $("#globalHeader").outerHeight());  /*<<<*/
                //if (window.screen.width <= 990) {
                //    window.location.href = $(".wz-show-done>li.active").find("a").attr("href");
                //}

                $(".wz-show-done>li>a.active").parent("li").nextAll().removeClass('show-done');
                $(".wz-show-done>li>a.active").parent("li").removeClass('show-done');
                $(".wz-show-done>li>a.active").parent("li").prevAll().addClass('nav-item show-done');
                $('.next-text').text($("#rootwizard ul.nav > li>a.active+li>a").find('.wz-title').text());

                if ($("#rootwizard ul.nav > li.active").hasClass("success")) {
                    $("#rootwizard .pager.wizard").hide();
                } else {
                    $("#rootwizard .pager.wizard").show();
                }

            }
        });
    }

    // By Luay 31032016 Guest Update Tabs - Online Sales -

    if ($('#rootwizard_Reg').length > 0) {


        if ($('.next-text').length > 0) {
            $('.next-text').text(" " + $("#rootwizard_Reg ul.nav > li.active+li").find('.wz-title').text());
        }
        //Here Map init
        HereMap();

        $("#tab2").removeClass("show active");
        $("#tab4").removeClass("show active");

        $('#rootwizard_Reg').bootstrapWizard({
            onInit: function (tab, navigation, index) {
                //alert(tab);
                $(".wz-show-done>li.active").nextAll().addClass('disabledTab');
            },   

            onTabChange: function (tab, navigation, index) {
                //alert('test');
                chkValidation();
                $('.tab-pane.active input').focusout(function () {
                    chkValidation();
                });

                window.scrollTo(0, $(".job-header").outerHeight() + $("#globalHeader").outerHeight());  /*<<<*/
                if (window.screen.width <= 990) {
                    window.location.href = $(".wz-show-done>li.active").find("a").attr("href");
                }


                $(".wz-show-done>li>a.active").parent("li").nextAll().addClass('disabledTab');
                $(".wz-show-done>li>a.active").parent("li").nextAll().removeClass('show-done');
                $(".wz-show-done>li>a.active").parent("li").removeClass('show-done');
                $(".wz-show-done>li>a.active").parent("li").removeClass('disabledTab');
                $(".wz-show-done>li>a.active").parent("li").prevAll().addClass('show-done');
                $(".wz-show-done>li>a.active").parent("li").prevAll().removeClass('disabledTab');
                $('.next-text').text($("#rootwizard_Reg ul.nav > li>a.active+li>a").find('.wz-title').text());

                if ($("#rootwizard_Reg ul.nav > li.active").hasClass("success")) {
                    $("#rootwizard_Reg .pager.wizard").hide();

                } else {
                    $("#rootwizard_Reg .pager.wizard").show();

                }
            },
            onTabClick: function (tab, navigation, index) {
                return chkValidation();
            },
            onTabShow: function (tab, navigation, index) {
                if (index === 1) {
                    $("#mapFlag")[0].value = 1;
                }
                else if (index === 3) {
                    $("#mapFlag")[0].value = 2;
                }

                var nextText = $("#rootwizard_Reg ul.nav > li.active+li").find('.wz-title').text();
                if (index != 6) nextText = $('#Hid_Lang_Next').val() + nextText; else nextText = $('#Hid_Lang_Last').val();

                $("#btn_Next").prop("value", nextText);

            },
            onNext: function (tab, navigation, index) {
                $('#Hid_Tab_No').val(index);
                chkValidation();
                $('.tab-pane.active input').focusout(function () {
                    chkValidation();
                });
                $('.tab-pane.active select').change(function () {
                    chkValidation();
                });
                return chkValidation();
            }
        });
    }

    // End Guest Update Tabs

    //model
    if ($('#rootwizard_mdl').length > 0) {

        $('#rootwizard_mdl').bootstrapWizard({
            onTabChange: function (tab, navigation, index) {
                chkValidation();
                $('.tab-pane.active input').focusout(function () {
                    chkValidation();
                });
                $('.tab-pane.active select').change(function () {
                    chkValidation();
                });


                window.scrollTo(0, $(".job-header").outerHeight() + $("#globalHeader").outerHeight());  /*<<<*/
                if (window.screen.width <= 990) {
                    window.location.href = $(".wz-show-done>li.active").find("a").attr("href");
                }

                $(".wz-show-done>li.active").nextAll().removeClass('show-done');
                $(".wz-show-done>li.active").removeClass('show-done');
                $(".wz-show-done>li.active").prevAll().addClass('show-done');
                $('.next-text-mdl').text($("#rootwizard_mdl ul.nav > li.active+li").find('.wz-title').text());


                // if has class success
                if ($(".wz-show-done>li.active").hasClass("success")) {
                    $("#rootwizard_mdl .pager.wizard").hide();
                } else {
                    $("#rootwizard_mdl .pager.wizard").show();
                }
            },

            onTabClick: function (tab, navigation, index) { // Added By Luay 05092015
                return chkValidation();
            },
            onTabShow: function (tab, navigation, index) {
                // Added By Luay 01092015
                var nextText = $("#rootwizard_mdl ul.nav > li.active+li").find('.wz-title').text();
                if (index != 2) nextText = $('#Hid_Lang_Next').val() + nextText; else nextText = $('#Hid_Lang_Last').val();

                $("#btn_Submit").prop("value", nextText);

                // Added By Luay 01092015
            },
            onNext: function (tab, navigation, index) {
                $('#Hid_Tab_No').val(index);
                chkValidation();
                $('.tab-pane.active input').focusout(function () {
                    chkValidation();
                });
                $('.tab-pane.active select').change(function () {
                    chkValidation();
                });
                return chkValidation();
            },
        });

        if ($('.show-success-modal-alj').length > 0) {
            $('.show-success-modal-alj').click(function () {
                $('.success-modal-alj').show();
                return false;
            });
        }

        if ($('.next-text-mdl').length > 0) {
            $('.next-text-mdl').text($("#rootwizard_mdl ul.nav > li.active+li").find('.wz-title').text());
        }
    }

    if ($(".slct").length > 0) {
        $(".slct").selectpicker({});
    }

    $(window).scroll(function () {
        var total_header = $(".job-header").outerHeight() + $("#globalHeader").outerHeight();

        var val_s = $(window).scrollTop();
        var active_tab_h = $(".tab-pane.active").height();
        var sideBar_h = $("#sidebar").height();
        if (sideBar_h < active_tab_h) {
            if (total_header < val_s) {
                $("#sidebar").css({ "top": val_s - total_header, "bottom": "auto" });
            }
            if (total_header > val_s) {
                $("#sidebar").css({ "top": 0, "bottom": "auto" });
            }
            if (active_tab_h <= val_s) { //when arrive the end of active tab
                $("#sidebar").css({ "top": "auto", "bottom": 0 });
            }
        } else {
            $("#sidebar").css({ "top": 0, "bottom": "auto" });
        }

    });

}

//------***-----
if ($('.s_product').length > 0) {
    $('.s_product').pagination({
        items: 100,
        itemsOnPage: 10,
        displayedPages: 3,
        edges: 1,
        cssStyle: 'light-theme',
        onPageClick: function (pageN, e) {
            //console.log(pageN ,$(e.target).parents());
            update_pagination_counter(".s_product", ".s_product_status");
        },
        onInit: function () {
            update_pagination_counter(".s_product", ".s_product_status");
        }
    });

    $(".s_product_gotopage").change(function () {
        $('.s_product').pagination('selectPage', $(this).val());
        $(this).val("");
        update_pagination_counter(".s_product", ".s_product_status");
    });
}
/**************************/

$(".dash_menu_tab_title").click(function () {
    $(".dash_menu_tab").slideToggle();
});
//--------------------------------------

/*
// Create By Muhammad Ghunaim
*/

function getShortFileName(fullPath) {
    if (fullPath.substring(3, 11) === 'fakepath') {
        fullPath = fullPath.substring(12);
        if (fullPath.length > 35) {
            fullPath = '...' + fullPath.slice(-33);
        }
    }
    return fullPath;
}

//Added by Mohammed Ghunaim for EC2 car reservation countdown

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {

        if(display == null) {return}

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

//window.onload = function () {
//    var Minutes = 60 * $("#hid_Counter").val();
//    display = document.querySelector('#time');
//    startTimer(Minutes, display);
//};


//===================================== validations-script.js ===========================================

function IsIDValid(sender, args) {
    var IDNumber = args.Value;
    var total = 0;
    var finalresult = "";
    var temp = "";
    var LastDigit;
    var Flag = 0;

    if (IDNumber.length < 10) {
        Flag = 0;
    } else {
        for (i = 1; i <= 9; i++) {
            if (i % 2 != 0) {
                temp = MakeTwoDigit((parseInt(IDNumber.charAt(i - 1)) * 2));
                total = total + parseInt(temp.charAt(0)) + parseInt(temp.charAt(1));
                temp = "";
            } else {
                total = total + parseInt(IDNumber.charAt(i - 1));
            }
        }
        finalresult = MakeTwoDigit(total);
        LastDigit = parseInt(IDNumber.charAt(9));
        if ((LastDigit == parseInt(finalresult.charAt(1))) || (LastDigit == 10 - parseInt(finalresult.charAt(1)))) {
            Flag = 1;
        } else {
            Flag = 0;
        }
    }
    //alert(IDNumber);
    if (Flag == 1) {
        args.IsValid = true;
    } else {
        args.IsValid = false;
    }
}

function IsIBANValid(sender, args) {
    var IBANNumber = "SA" + args.Value;
    var result = validate_saudi_iban(IBANNumber);

    if (result == 0) {
        args.IsValid = true;
    } else {
        args.IsValid = false;
    }
}

function IsIBANValidOnNext(args) {
    var IBANNumber = "SA" + args;
    var result = validate_saudi_iban(IBANNumber);

    if (result == 0) {
        return true;
    } else {
        return false;
    }
}

function MakeTwoDigit(num) {
    var newNum = '';
    if (num < 10) { newNum = "0" + num.toString(); } else { newNum = num.toString() };
    return newNum.substr(0, 2);
}

function IsValidIncome(sender, args) {
    var income = args.Value;
    var monthlyPayment = $('#Hid_MonthlyPremium').val();

    if (Math.ceil(income * 0.45) >= monthlyPayment) {
        args.IsValid = true;
    } else {
        args.IsValid = false;
    }
}

function IsValidContributoryWage(sender, args) {
    var contributoryWage = args.Value;
    var monthlyIncome = $('#txt_monthlyIncome_IncomeTab').val();
    if (parseInt(contributoryWage) < parseInt(monthlyIncome)) {
        if (parseInt(contributoryWage) < 0) {
            args.IsValid = false;
        } else {
            args.IsValid = true;
        }
        
    } else {
        args.IsValid = false;
    }
}

//===================================== SweetAlertBox.js ===========================================


//function Alert_Error(caption, msg) {
//    swal({ title: caption, text: msg, type: 'error', confirmButtonColor: '#518599', confirmButtonText: 'OK' });
//}
//function Alert_Success(caption, msg) {
//    swal({ title: caption, text: msg, type: 'success', confirmButtonColor: '#518599', confirmButtonText: 'Done' });
//}
//function Alert_Warning(caption, msg) {
//    swal({ title: caption, text: msg, type: 'warning', confirmButtonColor: '#518599', confirmButtonText: 'OK' });
//}
//function Alert_Error_ar(caption, msg) {
//    swal({ title: caption, text: msg, type: 'error', confirmButtonColor: '#518599', confirmButtonText: '�����' });
//}
//function Alert_Success_ar(caption, msg) {
//    swal({ title: caption, text: msg, type: 'success', confirmButtonColor: '#518599', confirmButtonText: '��' });
//}
//function Alert_Warning_ar(caption, msg) {
//    swal({ title: caption, text: msg, type: 'warning', confirmButtonColor: '#518599', confirmButtonText: '�����' });
//}

//function Alert_Account(mobile_num) {
//    swal({ title: "You already have a username.", text: " Your mobile no. " + mobile_num + " . Do you want to reset your password? ", type: "warning", showCancelButton: true, confirmButtonColor: "#518599", confirmButtonText: "Reset Password!", cancelButtonText: "Cancel", closeOnConfirm: true, closeOnCancel: true }, function (isConfirm) { if (isConfirm) { window.location.href = 'account_password_reset.aspx'; } });
//}

//function Alert_No_Mobile() {
//    swal({ title: "Please visit the branch", text: "To update your mobile number.", type: "warning", confirmButtonColor: "#518599", confirmButtonText: "OK!", closeOnConfirm: true }, function (isConfirm) { if (isConfirm) { window.location.href = 'index.aspx'; } });
//}

//function Alert_Registration() {
//    swal({ title: "", text: "You don't have a username. would you like to register ", type: "warning", showCancelButton: true, confirmButtonColor: "#518599", confirmButtonText: "Registration !", cancelButtonText: "Cansel", closeOnConfirm: true, closeOnCancel: true }, function (isConfirm) { if (isConfirm) { window.location.href = 'account_registration.aspx'; } });
//}

//function Alert_Registration_ar() {
//    swal({ title: "", text: "��� ���� ���ȡ �� ��� ����� ������ ����. ", type: "warning", showCancelButton: true, confirmButtonColor: "#518599", confirmButtonText: "����� ������ ���� !", cancelButtonText: "�����", closeOnConfirm: true, closeOnCancel: true }, function (isConfirm) { if (isConfirm) { window.location.href = 'account_registration_ar.aspx'; } });
//}

//function Alert_Account_ar(mobile_num) {
//    swal({ title: "���� ������ ��� ������.", text: "��� ������ ����� �� ��  " + mobile_num + " . �� ���� �� ������ ��� ���� ������ ������ �߿", type: "warning", showCancelButton: true, confirmButtonColor: "#518599", confirmButtonText: "������� ���� ������!", cancelButtonText: "�����", closeOnConfirm: true, closeOnCancel: true }, function (isConfirm) { if (isConfirm) { window.location.href = 'account_password_reset_ar.aspx'; } });
//}

//function Alert_No_Mobile_ar() {
//    swal({ title: "������ ����� �����", text: "������ ��� ������ ����� ��.", type: "warning", confirmButtonColor: "#518599", confirmButtonText: "�����!", closeOnConfirm: true }, function (isConfirm) { if (isConfirm) { window.location.href = 'index_ar.aspx'; } });
//}

//function showWaitMessage() {
//    if (chkFormValide() == true) {
//        $('#PleaseWait').css('visibility', 'visible');
//        //$('#PleaseWait').modal('show');
//    }
//}

//function hideWaitMessage() {
//    $('#PleaseWait').css('visibility', 'hidden');
//    //$('#PleaseWait').modal('hide');
//}

//function chkFormValide() {
//    if ($('.contentAreaWide').find('span[style*="red"][style*="inline"]').length > 0) {
//        return false;
//    } else {
//        return true;
//    }
//}

//================================== sideMenu.js ===========================================


/*
 * Sidr
 * https://github.com/artberri/sidr
 *
 * Copyright (c) 2013 Alberto Varela
 * Licensed under the MIT license.
 */

; (function ($) {

    var sidrMoving = false,
        sidrOpened = false;

    // Private methods
    var privateMethods = {
        // Check for valids urls
        // From : http://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-an-url
        isUrl: function (str) {
            var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
              '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
              '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
              '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
              '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
              '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
            if (!pattern.test(str)) {
                return false;
            } else {
                return true;
            }
        },
        // Loads the content into the menu bar
        loadContent: function ($menu, content) {
            $menu.html(content);
        },
        // Add sidr prefixes
        addPrefix: function ($element) {
            var elementId = $element.attr('id'),
                elementClass = $element.attr('class');

            if (typeof elementId === 'string' && '' !== elementId) {
                $element.attr('id', elementId.replace(/([A-Za-z0-9_.\-]+)/g, 'sidr-id-$1'));
            }
            if (typeof elementClass === 'string' && '' !== elementClass && 'sidr-inner' !== elementClass) {
                $element.attr('class', elementClass.replace(/([A-Za-z0-9_.\-]+)/g, 'sidr-class-$1'));
            }
            $element.removeAttr('style');
        },
        execute: function (action, name, callback) {
            // Check arguments
            if (typeof name === 'function') {
                callback = name;
                name = 'sidr';
            }
            else if (!name) {
                name = 'sidr';
            }

            // Declaring
            var $menu = $('#' + name),
                $body = $($menu.data('body')),
                $html = $('html'),
                menuWidth = $menu.outerWidth(true),
                speed = $menu.data('speed'),
                side = $menu.data('side'),
                displace = $menu.data('displace'),
                onOpen = $menu.data('onOpen'),
                onClose = $menu.data('onClose'),
                bodyAnimation,
                menuAnimation,
                scrollTop,
                bodyClass = (name === 'sidr' ? 'sidr-open' : 'sidr-open ' + name + '-open');

            // Open Sidr
            if ('open' === action || ('toggle' === action && !$menu.is(':visible'))) {
                // Check if we can open it
                if ($menu.is(':visible') || sidrMoving) {
                    return;
                }

                // If another menu opened close first
                if (sidrOpened !== false) {
                    methods.close(sidrOpened, function () {
                        methods.open(name);
                    });

                    return;
                }

                // Lock sidr
                sidrMoving = true;

                // Left or right?
                if (side === 'left') {
                    bodyAnimation = { left: menuWidth + 'px' };
                    menuAnimation = { left: '0px' };
                }
                else {
                    bodyAnimation = { right: menuWidth + 'px' };
                    menuAnimation = { right: '0px' };
                }

                // Prepare page if container is body
                if ($body.is('body')) {
                    scrollTop = $html.scrollTop();
                    $html.css('overflow-x', 'hidden').css('direction', 'ltr').scrollTop(scrollTop);
                }

                // Open menu
                if (displace) {
                    $body.addClass('sidr-animating').css({
                        width: $body.width(),
                        position: 'absolute',
                        direction: 'ltr'
                    }).animate(bodyAnimation, speed, function () {
                        $(this).addClass(bodyClass);
                    });
                }
                else {
                    setTimeout(function () {
                        $(this).addClass(bodyClass);
                    }, speed);
                }
                $menu.css('display', 'block').animate(menuAnimation, speed, function () {
                    sidrMoving = false;
                    sidrOpened = name;
                    // Callback
                    if (typeof callback === 'function') {
                        callback(name);
                    }
                    $body.removeClass('sidr-animating');
                });

                // onOpen callback
                onOpen();
            }
                // Close Sidr
            else {
                // Check if we can close it
                if (!$menu.is(':visible') || sidrMoving) {
                    return;
                }

                // Lock sidr
                sidrMoving = true;

                // Right or left menu?
                if (side === 'left') {
                    bodyAnimation = { left: 0 };
                    menuAnimation = { left: '-' + menuWidth + 'px' };
                }
                else {
                    bodyAnimation = { right: 0 };
                    menuAnimation = { right: '-' + menuWidth + 'px' };
                }

                // Close menu
                if ($body.is('body')) {
                    scrollTop = $html.scrollTop();
                    $html.removeAttr('style').scrollTop(scrollTop);
                }
                $body.addClass('sidr-animating').animate(bodyAnimation, speed).removeClass(bodyClass);
                $menu.animate(menuAnimation, speed, function () {
                    $menu.removeAttr('style').hide();
                    $body.removeAttr('style');
                    $('html').removeAttr('style');
                    sidrMoving = false;
                    sidrOpened = false;
                    // Callback
                    if (typeof callback === 'function') {
                        callback(name);
                    }
                    $body.removeClass('sidr-animating');
                });

                // onClose callback
                onClose();
            }
        }
    };

    // Sidr public methods
    var methods = {
        open: function (name, callback) {
            privateMethods.execute('open', name, callback);
        },
        close: function (name, callback) {
            privateMethods.execute('close', name, callback);
        },
        toggle: function (name, callback) {
            privateMethods.execute('toggle', name, callback);
        },
        // I made a typo, so I mantain this method to keep backward compatibilty with 1.1.1v and previous
        toogle: function (name, callback) {
            privateMethods.execute('toggle', name, callback);
        }
    };

    $.sidr = function (method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'function' || typeof method === 'string' || !method) {
            return methods.toggle.apply(this, arguments);
        }
        else {
            $.error('Method ' + method + ' does not exist on jQuery.sidr');
        }

    };

    $.fn.sidr = function (options) {

        var settings = $.extend({
            name: 'sidr',         // Name for the 'sidr'
            speed: 200,            // Accepts standard jQuery effects speeds (i.e. fast, normal or milliseconds)
            side: 'left',         // Accepts 'left' or 'right'
            source: null,           // Override the source of the content.
            renaming: true,           // The ids and classes will be prepended with a prefix when loading existent content
            body: 'body',         // Page container selector,
            displace: true, // Displace the body content or not
            onOpen: function () { },  // Callback when sidr opened
            onClose: function () { }   // Callback when sidr closed
        }, options);

        var name = settings.name,
            $sideMenu = $('#' + name);

        // If the side menu do not exist create it
        if ($sideMenu.length === 0) {
            $sideMenu = $('<div />')
              .attr('id', name)
              .appendTo($('body'));
        }

        // Adding styles and options
        $sideMenu
          .addClass('sidr')
          .addClass(settings.side)
          .data({
              speed: settings.speed,
              side: settings.side,
              body: settings.body,
              displace: settings.displace,
              onOpen: settings.onOpen,
              onClose: settings.onClose
          });

        // The menu content
        if (typeof settings.source === 'function') {
            var newContent = settings.source(name);
            privateMethods.loadContent($sideMenu, newContent);
        }
        else if (typeof settings.source === 'string' && privateMethods.isUrl(settings.source)) {
            $.get(settings.source, function (data) {
                privateMethods.loadContent($sideMenu, data);
            });
        }
        else if (typeof settings.source === 'string') {
            var htmlContent = '',
                selectors = settings.source.split(',');

            $.each(selectors, function (index, element) {
                htmlContent += '<div class="sidr-inner">' + $(element).html() + '</div>';
            });

            // Renaming ids and classes
            if (settings.renaming) {
                var $htmlContent = $('<div />').html(htmlContent);
                $htmlContent.find('*').each(function (index, element) {
                    var $element = $(element);
                    privateMethods.addPrefix($element);
                });
                htmlContent = $htmlContent.html();
            }
            privateMethods.loadContent($sideMenu, htmlContent);
        }
        else if (settings.source !== null) {
            $.error('Invalid Sidr Source');
        }

        return this.each(function () {
            var $this = $(this),
                data = $this.data('sidr');

            // If the plugin hasn't been initialized yet
            if (!data) {

                $this.data('sidr', name);
                if ('ontouchstart' in document.documentElement) {
                    $this.bind('touchstart', function (e) {
                        var theEvent = e.originalEvent.touches[0];
                        this.touched = e.timeStamp;
                    });
                    $this.bind('touchend', function (e) {
                        var delta = Math.abs(e.timeStamp - this.touched);
                        if (delta < 200) {
                            e.preventDefault();
                            methods.toggle(name);
                        }
                    });
                }
                else {
                    $this.click(function (e) {
                        e.preventDefault();
                        methods.toggle(name);
                    });
                }
            }
        });
    };

})(jQuery);


//=======================sideMenu-script.js==================================

//jQuery(document).ready(function () {

//    /*================= SCRIPT FOR TAB MENU ========================*/

//    $('#tabMenuTrigger, .tabMenuClose').sidr();

//});


//===============================rangerSlider-script.js==============================

//jQuery(document).ready(function () {
//    rangeSliderFun();
//});

//// Run again on postback of update panel
//function endRequestRangeSliderFun(sender, args) {
//    rangeSliderFun();
//}
//Sys.WebForms.PageRequestManager.getInstance().add_endRequest(endRequestRangeSliderFun);



function rangeSliderFun() {
    //Script for monthly Income slider ranger
    if ($("#monthlyIncome").length > 0) {
        //var monthlyIncomeSlider = $("#monthlyIncome").slider().data('slider');
        //$("#monthlyIncome").on('slide', function (slideEvt) {
        //    $("#monthlyIncomeVal").val(slideEvt.value);
        //    if ($('#myCarousel').length == 0) { resetDownPaymen(); }
        //});

        $("#monthlyIncomeVal").on('input', function (e) {
            //monthlyIncomeSlider.setValue(parseInt($(this).val()));
            if ($('#myCarousel').length == 0) { resetDownPaymen(); }
        });

        function resetDownPaymen() {
            //downPaymentSlider.setValue(parseInt($('#downPayment').attr('data-slider-min')));
            $("#downPaymentVal").val(parseInt($('#downPayment').attr('data-slider-min')));
        }
    }

    //Script for down payment slider ranger
    if ($("#downPayment").length > 0) {
       // var downPaymentSlider = $("#downPayment").slider().data('slider');
        //$("#downPayment").on('slide', function (slideEvt) {
        //    $("#downPaymentVal").val(slideEvt.value);
        //    if ($('#myCarousel').length == 0) { resetMonthly(); }
        //});

        $("#downPaymentVal").on('input', function (e) {
            //downPaymentSlider.setValue(parseInt($(this).val()));
            if ($('#myCarousel').length == 0) { resetMonthly(); }
        });

        function resetMonthly() {
            //monthlyIncomeSlider.setValue(parseInt($('#monthlyIncome').attr('data-slider-min')));
            $("#monthlyIncomeVal").val(parseInt($('#monthlyIncome').attr('data-slider-min')));
        }
    }


    ///----New Salary Slider 05092016 By Luay----
    //Script for monthly Income slider ranger
    if ($("#monthlySalary").length > 0) {
        //var monthlySalarySlider = $("#monthlySalary").slider().data('slider');
        //$("#monthlySalary").on('slide', function (slideEvt) {
        //    $("#monthlySalaryVal").val(slideEvt.value);
        //});

        //$("#monthlySalaryVal").on('input', function (e) {
        //    monthlySalarySlider.setValue(parseInt($(this).val()));
        //});
    }

    if ($("#residual").length > 0) {
        //var residualSlider = $("#residual").slider().data('slider');
        //$("#residual").on('slide', function (slideEvt) {
        //    $("#residualVal").val(slideEvt.value);
        //});

        //$("#residualVal").on('input', function (e) {
        //    residualSlider.setValue(parseInt($(this).val()));
        //});
    }
}

//===============================modernizr.js==============================

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
; window.Modernizr = function (a, b, c) { function D(a) { j.cssText = a } function E(a, b) { return D(n.join(a + ";") + (b || "")) } function F(a, b) { return typeof a === b } function G(a, b) { return !!~("" + a).indexOf(b) } function H(a, b) { for (var d in a) { var e = a[d]; if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e : !0 } return !1 } function I(a, b, d) { for (var e in a) { var f = b[a[e]]; if (f !== c) return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f } return !1 } function J(a, b, c) { var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + p.join(d + " ") + d).split(" "); return F(b, "string") || F(b, "undefined") ? H(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), I(e, b, c)) } function K() { e.input = function (c) { for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k; return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function (a) { for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e; return t }("search tel url email datetime date month week time datetime-local number range color".split(" ")) } var d = "2.8.3", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k = b.createElement("input"), l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "), o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r = { svg: "http://www.w3.org/2000/svg" }, s = {}, t = {}, u = {}, v = [], w = v.slice, x, y = function (a, c, d, e) { var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body"); if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j); return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i }, z = function (b) { var c = a.matchMedia || a.msMatchMedia; if (c) return c(b) && c(b).matches || !1; var d; return y("@media " + b + " { #" + h + " { position: absolute; } }", function (b) { d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute" }), d }, A = function () { function d(d, e) { e = e || b.createElement(a[d] || "div"), d = "on" + d; var f = d in e; return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = F(e[d], "function"), F(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f } var a = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" }; return d }(), B = {}.hasOwnProperty, C; !F(B, "undefined") && !F(B.call, "undefined") ? C = function (a, b) { return B.call(a, b) } : C = function (a, b) { return b in a && F(a.constructor.prototype[b], "undefined") }, Function.prototype.bind || (Function.prototype.bind = function (b) { var c = this; if (typeof c != "function") throw new TypeError; var d = w.call(arguments, 1), e = function () { if (this instanceof e) { var a = function () { }; a.prototype = c.prototype; var f = new a, g = c.apply(f, d.concat(w.call(arguments))); return Object(g) === g ? g : f } return c.apply(b, d.concat(w.call(arguments))) }; return e }), s.flexbox = function () { return J("flexWrap") }, s.flexboxlegacy = function () { return J("boxDirection") }, s.canvas = function () { var a = b.createElement("canvas"); return !!a.getContext && !!a.getContext("2d") }, s.canvastext = function () { return !!e.canvas && !!F(b.createElement("canvas").getContext("2d").fillText, "function") }, s.webgl = function () { return !!a.WebGLRenderingContext }, s.touch = function () { var c; return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) { c = a.offsetTop === 9 }), c }, s.geolocation = function () { return "geolocation" in navigator }, s.postmessage = function () { return !!a.postMessage }, s.websqldatabase = function () { return !!a.openDatabase }, s.indexedDB = function () { return !!J("indexedDB", a) }, s.hashchange = function () { return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7) }, s.history = function () { return !!a.history && !!history.pushState }, s.draganddrop = function () { var a = b.createElement("div"); return "draggable" in a || "ondragstart" in a && "ondrop" in a }, s.websockets = function () { return "WebSocket" in a || "MozWebSocket" in a }, s.rgba = function () { return D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba") }, s.hsla = function () { return D("background-color:hsla(120,40%,100%,.5)"), G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla") }, s.multiplebgs = function () { return D("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background) }, s.backgroundsize = function () { return J("backgroundSize") }, s.borderimage = function () { return J("borderImage") }, s.borderradius = function () { return J("borderRadius") }, s.boxshadow = function () { return J("boxShadow") }, s.textshadow = function () { return b.createElement("div").style.textShadow === "" }, s.opacity = function () { return E("opacity:.55"), /^0.55$/.test(j.opacity) }, s.cssanimations = function () { return J("animationName") }, s.csscolumns = function () { return J("columnCount") }, s.cssgradients = function () { var a = "background-image:", b = "gradient(linear,left top,right bottom,from(#9f9),to(white));", c = "linear-gradient(left top,#9f9, white);"; return D((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), G(j.backgroundImage, "gradient") }, s.cssreflections = function () { return J("boxReflect") }, s.csstransforms = function () { return !!J("transform") }, s.csstransforms3d = function () { var a = !!J("perspective"); return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b, c) { a = b.offsetLeft === 9 && b.offsetHeight === 3 }), a }, s.csstransitions = function () { return J("transition") }, s.fontface = function () { var a; return y('@font-face {font-family:"font";src:url("https://")}', function (c, d) { var e = b.getElementById("smodernizr"), f = e.sheet || e.styleSheet, g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : ""; a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0 }), a }, s.generatedcontent = function () { var a; return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function (b) { a = b.offsetHeight >= 3 }), a }, s.video = function () { var a = b.createElement("video"), c = !1; try { if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "") } catch (d) { } return c }, s.audio = function () { var a = b.createElement("audio"), c = !1; try { if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "") } catch (d) { } return c }, s.localstorage = function () { try { return localStorage.setItem(h, h), localStorage.removeItem(h), !0 } catch (a) { return !1 } }, s.sessionstorage = function () { try { return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0 } catch (a) { return !1 } }, s.webworkers = function () { return !!a.Worker }, s.applicationcache = function () { return !!a.applicationCache }, s.svg = function () { return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect }, s.inlinesvg = function () { var a = b.createElement("div"); return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg }, s.smil = function () { return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate"))) }, s.svgclippaths = function () { return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath"))) }; for (var L in s) C(s, L) && (x = L.toLowerCase(), e[x] = s[L](), v.push((e[x] ? "" : "no-") + x)); return e.input || K(), e.addTest = function (a, b) { if (typeof a == "object") for (var d in a) C(a, d) && e.addTest(d, a[d]); else { a = a.toLowerCase(); if (e[a] !== c) return e; b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b } return e }, D(""), i = k = null, function (a, b) { function l(a, b) { var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement; return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild) } function m() { var a = s.elements; return typeof a == "string" ? a.split(" ") : a } function n(a) { var b = j[a[h]]; return b || (b = {}, i++, a[h] = i, j[i] = b), b } function o(a, c, d) { c || (c = b); if (k) return c.createElement(a); d || (d = n(c)); var g; return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g } function p(a, c) { a || (a = b); if (k) return a.createDocumentFragment(); c = c || n(a); var d = c.frag.cloneNode(), e = 0, f = m(), g = f.length; for (; e < g; e++) d.createElement(f[e]); return d } function q(a, b) { b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) { return s.shivMethods ? o(c, a, b) : b.createElem(c) }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function (a) { return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")' }) + ");return n}")(s, b.frag) } function r(a) { a || (a = b); var c = n(a); return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a } var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g, h = "_html5shiv", i = 0, j = {}, k; (function () { try { var a = b.createElement("a"); a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function () { b.createElement("a"); var a = b.createDocumentFragment(); return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined" }() } catch (c) { g = !0, k = !0 } })(); var s = { elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: c, shivCSS: d.shivCSS !== !1, supportsUnknownElements: k, shivMethods: d.shivMethods !== !1, type: "default", shivDocument: r, createElement: o, createDocumentFragment: p }; a.html5 = s, r(b) }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.mq = z, e.hasEvent = A, e.testProp = function (a) { return H([a]) }, e.testAllProps = J, e.testStyles = y, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e }(this, this.document), function (a, b, c) { function d(a) { return "[object Function]" == o.call(a) } function e(a) { return "string" == typeof a } function f() { } function g(a) { return !a || "loaded" == a || "complete" == a || "uninitialized" == a } function h() { var a = p.shift(); q = 1, a ? a.t ? m(function () { ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1) }, 0) : (a(), h()) : q = 0 } function i(a, c, d, e, f, i, j) { function k(b) { if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) { "img" != a && m(function () { t.removeChild(l) }, 50); for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload() } } var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = { t: d, s: c, e: f, a: i, x: j }; 1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () { k.call(this, r) }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l)) } function j(a, b, c, d, f) { return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this } function k() { var a = B; return a.loader = { load: j, i: 0 }, a } var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) { return "[object Array]" == o.call(a) }, x = [], y = {}, z = { timeout: function (a, b) { return b.length && (a.timeout = b[0]), a } }, A, B; B = function (a) { function b(a) { var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = { url: c, origUrl: c, prefixes: a }, e, f, g; for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g)); for (f = 0; f < b; f++) c = x[f](c); return c } function g(a, e, f, g, h) { var i = b(a), j = i.autoCallback; i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () { k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2 }))) } function h(a, b) { function c(a, c) { if (a) { if (e(a)) c || (j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() }), g(a, j, b, 0, h); else if (Object(a) === a) for (n in m = function () { var b = 0, c; for (c in a) a.hasOwnProperty(c) && b++; return b }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() } : j[n] = function (a) { return function () { var b = [].slice.call(arguments); a && a.apply(this, b), l() } }(k[n])), g(a[n], j, b, n, h)) } else !c && l() } var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n; c(h ? a.yep : a.nope, !!i), i && c(i) } var i, j, l = this.yepnope.loader; if (e(a)) g(a, 0, l, 0); else if (w(a)) for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l) }, B.addPrefix = function (a, b) { z[a] = b }, B.addFilter = function (a) { x.push(a) }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () { b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete" }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) { var k = b.createElement("script"), l, o, e = e || B.errorTimeout; k.src = a; for (o in d) k.setAttribute(o, d[o]); c = j ? h : c || f, k.onreadystatechange = k.onload = function () { !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null) }, m(function () { l || (l = 1, c(1)) }, e), i ? k.onload() : n.parentNode.insertBefore(k, n) }, a.yepnope.injectCss = function (a, c, d, e, g, i) { var e = b.createElement("link"), j, c = i ? h : c || f; e.href = a, e.rel = "stylesheet", e.type = "text/css"; for (j in d) e.setAttribute(j, d[j]); g || (n.parentNode.insertBefore(e, n), m(c, 0)) } }(this, document), Modernizr.load = function () { yepnope.apply(window, [].slice.call(arguments, 0)) };


//================================ customSelect.js =============================

//=================================imgAnimation-script.js========================================

//jQuery(document).ready(function () {

//    /*================= SCRIPT FOR IMAGE ANIMATION (png-gif) ========================*/

//    $(".link-boxed-list .vc").hover(function () {
//        $('.link-boxed-list .vc img').attr("src", "img/vehiclesComparison.gif");
//    }, function () {
//        $('.link-boxed-list .vc img').attr("src", "img/vehiclesComparison.png");
//    });

//    $(".link-boxed-list .lc").hover(function () {
//        $('.link-boxed-list .lc img').attr("src", "img/leasingCalculator.gif");
//    }, function () {
//        $('.link-boxed-list .lc img').attr("src", "img/leasingCalculator.png");
//    });
//});


function imgAnimation() {
    $(".link-boxed-list .vc").hover(function () {
        $('.link-boxed-list .vc img').attr("src", "img/vehiclesComparison.gif");
    }, function () {
        $('.link-boxed-list .vc img').attr("src", "img/vehiclesComparison.png");
    });

    $(".link-boxed-list .lc").hover(function () {
        $('.link-boxed-list .lc img').attr("src", "img/leasingCalculator.gif");
    }, function () {
        $('.link-boxed-list .lc img').attr("src", "img/leasingCalculator.png");
    });

}


//=================================equal-height.js=======================================

(function ($) {

    /*** Set all elements within the collection to have the same height.*/
    $.fn.equalHeight = function () {
        var heights = [];
        $.each(this, function (i, element) {
            $element = $(element);
            var element_height;
            // Should we include the elements padding in it's height?
            var includePadding = ($element.css('box-sizing') == 'border-box') || ($element.css('-moz-box-sizing') == 'border-box');
            if (includePadding) {
                element_height = $element.innerHeight();
            } else {
                element_height = $element.height();
            }
            heights.push(element_height);
        });
        this.height(Math.max.apply(window, heights));
        return this;
    }

    /*** Create a grid of equal height elements. */
    $.fn.equalHeightGrid = function (columns) {
        var $tiles = this;
        $tiles.css('height', 'auto');
        for (var i = 0; i < $tiles.length; i++) {
            if (i % columns == 0) {
                var row = $($tiles[i]);
                for (var n = 1; n < columns; n++) {
                    row = row.add($tiles[i + n]);
                }
                row.equalHeight();
            }
        }
        return this;
    };

    /*** Detect how many columns there are in a given layout. */

    $.fn.detectGridColumns = function () {
        var offset = 0, cols = 0;
        this.each(function (i, elem) {
            var elem_offset = $(elem).offset().top;
            if (offset == 0 || elem_offset == offset) {
                cols++;
                offset = elem_offset;
            } else {
                return false;
            }
        });
        return cols;
    };

    /*** Ensure equal heights now, on ready, load and resize. */

    $.fn.responsiveEqualHeightGrid = function () {
        var _this = this;
        function syncHeights() {
            var cols = _this.detectGridColumns();
            _this.equalHeightGrid(cols);
        }
        $(window).bind('resize load', syncHeights);
        syncHeights();
        return this;
    };

})(jQuery);


function encodeURL(URL) {
    var newURL = URL.replace(/scRipt/g, '');
    newURL = newURL.replace(/</g, '');
    newURL = newURL.replace(/>/g, '');
    newURL = newURL.replace(/-/g, '');
    newURL = newURL.replace(/\'/g, '');
    newURL = newURL.replace(/"/g, '');
    return newURL;
}



function ExpensesCalc(obj) {  
    //var x = Number(obj.value);

    var x1 = Number(document.getElementById('txt_FoodExpenses').value); 
    var x2 = Number(document.getElementById('txt_HousingAndServicesExpenses').value); 
    var x3 = Number(document.getElementById('txt_HouseHelpExpenses').value); 
    var x4 = Number(document.getElementById('txt_WaterAndElectricityExpenses').value); 
    var x5 = Number(document.getElementById('txt_EducationExpenses').value); 
    var x6 = Number(document.getElementById('txt_TransportationAndCommunicationExpenses').value); 
    var x7 = Number(document.getElementById('txt_HealthCareExpenses').value); 
    var x8 = Number(document.getElementById('txt_InsuranceExpenses').value); 
    var x9 = Number(document.getElementById('txt_FutureExpenses').value); 

    var z = x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9


    //var y = Number(document.getElementById('txt_TotalExpenses').value);   
    //var z = x + y;
    document.getElementById('txt_TotalExpenses').value = z;
}

function ButtonClick() {
    if ($('#txt_Login_Password').val() != "") {
        var seed = $('#hdrandomSeed');
        md5auth(seed.val());
    }
    return true;
}

function md5auth(seed) {
    var PasswordText = $('#txt_Login_Password');
    var Password = PasswordText.val();
    var hash = calcMD5(seed + calcMD5(Password).toLowerCase());
    PasswordText.val(hash.toLowerCase());
    return true;
}

function calcMD5(input) {
    return $.md5(input);
} 
