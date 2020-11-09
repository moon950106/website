$(function() { 
	
    //home 메뉴 호버했을때
    $(".menu_gnb > li").hover(
        function() { 
            var _this = $(this);
            //var _thispt = _this.parent();
            var _target = _this.find(".dp1")  ;

            _target.stop().slideDown();
           },

           function() { 
            $(".menu_gnb .dp1").stop().slideUp();
            }
      );

    //nation 탭메뉴
    var tabSet = $(".tabset > .tablist > li");     //각각의 탭버튼을 변수에 저장
    var tabCont = $(".tabcont > .cont");       //각각의 콘텐츠를 변수에 저장

    tabCont.hide().eq(0).show();    //컨텐츠 내용 숨기

    tabSet.hover(function(){
      var target = $(this);         //탭버튼의 타겟(순서)을 변수에 저장
      var index = target.index();   //탭버튼의 순서를 변수에 저장
      tabSet.removeClass("on");    //탭버튼의 클래스를 삭제
      target.addClass("on");       //탭타겟의 클래스를 추가
      tabCont.css("display","none");
      tabCont.eq(index).css("display","block");
    });    
    
    //배너 슬라이드
    $(".slide > .tabcont > .cont").ready(function() {
        slide();
    });
    
function slide() {         // 슬라이드 
  var wid = 0;
  var now_num = 0;
  var slide_length = 0;
  var auto = null;
  var $btnsetli = $('.btnset>li');
  var $panel = $('.panel');
  var $panelLi = $panel.children('li');

  function init() {       // 변수 초기화
    wid = $('.slide').width();
    now_num = $('.btnset>li.on').index();
    slide_length = $btnsetli.length;
  }

  function slideEvent() {    // 이벤트 묶음

    $btnsetli.click(function() {    // 슬라이드 하단 btnset버튼 클릭했을때
      now_num = $(this).index();
      slideMove();
    });

    $('.next').click(function() {   // 이후 버튼 클릭했을때
      nextChkPlay();
    });


    $('.prev').click(function() {       // 이전 버튼 클릭했을때
      prevChkPlay();
    });

    autoPlay();    // 오토플레이
    autoPlayStop();     // 오토플레이 멈춤
    autoPlayRestart();    // 오토플레이 재시작
    resize();    // 화면크기 재설정 되었을때
  }

  // 자동실행 함수
  function autoPlay() {
    auto = setInterval(function() {
      nextChkPlay();
    }, 3000);
  }

  // 자동실행 멈춤
  function autoPlayStop() {
    $panelLi.mouseenter(function() {
      clearInterval(auto);
    });
  }


  // 자동실행 멈췄다가 재실행
  function autoPlayRestart() {
    $panelLi.mouseleave(function() {
      auto = setInterval(function() {
        nextChkPlay();
      }, 3000);
    });
  }

  // 이전 버튼 클릭시 조건 검사후 슬라이드 무브
  function prevChkPlay() {
    if (now_num == 0) {
      now_num = slide_length - 1;
    } else {
      now_num--;
    }
    slideMove();
  }

  // 이후 버튼 클릭시 조건 검사후 슬라이드 무브
  function nextChkPlay() {
    if (now_num == slide_length - 1) {
      now_num = 0;
    } else {
      now_num++;
    }
    slideMove();
  }

  // 슬라이드 무브
  function slideMove() {
    $panel.stop().animate({
      'margin-left': -wid * now_num
    });
    $btnsetli.removeClass('on');
    $btnsetli.eq(now_num).addClass('on');
  }

  // 화면크기 조정시 화면 재설정
  function resize() {
    $(window).resize(function() {
      init();
      $panel.css({
        'margin-left': -wid * now_num
      });
    });
  }
  init();
  slideEvent();
}

	var _trigger = $('.best_prd > ul > li > a');

	_trigger.hover(
		function() { 
			var _this = $(this)	;
			var _thispt = _this.parent();
			var _index = _thispt.index();
			
			for(var i = 0; i < $('.best_prd > ul > li').length; i++) { 
				$('.main_wrap .best .bg').removeClass("ty" + (i+1));
			}
			
			$('.main_wrap .best .bg').addClass("ty" + (_index + 1));
			
			$('.best_prd > ul > li').removeClass("on");
			_thispt.addClass("on");
		},
		function() { 

		}
	);
});

