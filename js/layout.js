var count = 0;

$(function() { 
	function zeroOn() { 
		$('.nav ul li').removeClass("on");
		for(var j = 0; j < $('.page').length; j++) { 
			$('.header').removeClass("ty" + j);
		}			
	}
	
	function swch() { 
				for(var j = 0; j < $('.page').length; j++) { 
					$('.header').removeClass("ty" + j);
				}	
		
				$('.header .header_inner .logo h1 img').attr("src", "img/logo.png");
				
				$('.header').addClass("ty" + count);

				switch(count) { 
					case 0 :
						$('.nav ul li').removeClass("on");
					break;

					case 1 :							
					$('.header .header_inner .logo h1 img').attr("src", "img/logo2.png");
						
					break;
					
					case 2 :
					
					break;

					case 3 :
	
					break;
					
					case 4 :							
					$('.header .header_inner .logo h1 img').attr("src", "img/logo2.png");
						
					break;					
				}		
	}
	$('.nav ul li a').on("click", function(e) { 
		
		
		e.preventDefault();
		
		if(!$("html, body").is(":animated")) { 
			var liIndex = $(this).parent().index();


			count = liIndex + 1;
			console.log("여기서의 카운터 ==", count);
			var offz = $('.page').eq(liIndex + 1).offset().top;

			zeroOn();
			$('.nav ul li').eq(liIndex).addClass("on");	
			swch();		
		}
		

		
			
		
		$('html, body').animate({"scrollTop" : offz});
	});
	
	$('.logo .btn').on("click", function() { 
		zeroOn();
		$('html, body').animate({"scrollTop" : 0});
	});
	
var pshparell = { };
pshparell.winHT = $(window).height();
pshparell.distance = pshparell.winHT;
pshparell.count = 0;
pshparell.mnoving = false;	
pshparell.length = $(document).find(".page").length;



	$(".page").each(function (index, element) { 
		
		$(element).on("mousewheel DOMMouseScroll", function (e) {
			//console.log($(this).html());
			
			//console.log("e ====", e);
			//console.log("originalEvent ====", e.originalEvent);
			
			e.preventDefault();

			var El = e.originalEvent;			

			var delta = 0;

			if (El.wheelDelta) {
				delta = event.wheelDelta / 120;
				//if (window.opera) delta = -delta;
			} else if (El.detail) delta = -El.detail / 3;		

			//console.log("dd?????? ==", El.detail);
			//console.log("event.wheelDelta ==", event.wheelDelta);

			
			//console.log("next", $(window).scrollTop());
			//console.log("moveTop", moveTop);
			
			
			if(pshparell.mnoving == false) { 				
				pshparell.mnoving = true;
				
				// 마우스휠을 위에서 아래로			
				if (delta  < 0 ) {
					if($(window).scrollTop() == pshparell.distance * (pshparell.length-1)) {
						moveTop = $(this).offset().top;				   
					} else { 
						moveTop = $(this).next().offset().top;
						count ++;	
						console.log(count);
						
						zeroOn();
						$('.nav ul li').eq(count -1).addClass("on");
						

						
						
						
					}					
				// 마우스휠을 아래에서 위로
				} else {
					if($(window).scrollTop() < pshparell.distance) { 
					   moveTop = $(this).offset().top;
					} else { 
						moveTop = $(this).prev().offset().top;
						count --;
						console.log(count);
						$('.nav ul li').removeClass("on");
						$('.nav ul li').eq(count -1).addClass("on");
						
						
						
					}	
					
				}
				
				swch();

				
				
				$("html,body").stop().animate({
					scrollTop: moveTop + 'px'
				}, {
					duration: 800, complete: function () {
						pshparell.mnoving = false;	
					}
				});	
			}
			
		});
	});	
	
	function lypopfunc(wd, ht) {
	$('.popup').show();
	$('.popup_containor').css({"width" : wd, "margin-left" : -(wd/2), "height" : ht});
} 

$(function() { 
	$('popup .close').on("click", function() { 
		$('popup').hide();
	});
})
});