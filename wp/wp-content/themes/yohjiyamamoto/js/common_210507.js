'use strict';
var swiper_news, swiper_projects, swiper_attention;
var headerHeight = $("header").outerHeight(true);


$(function(){

	var windowWidth, windowSm, event;
	windowWidth = $(window).width();
	event = 'ontouchstart' in window ? 'touchend' : 'click';



	//メインメニュー
	$(".menu-btn").click(function(){
		if($(this).hasClass("is-open")){
			$(this).removeClass("is-open");
			$(".menu-contents").removeClass("is-open");
			$(".overlay").fadeOut();
			$("body").removeClass("show-menu");
		}else{
			$(this).addClass("is-open");
			$(".menu-contents").addClass("is-open");
			$(".overlay").fadeIn();
			$("body").addClass("show-menu");
		}
	});



	if(($('.attention-link').length)){
		if ($(window).width() > 768){
			$('header .inner .menu-contents > aside').css('bottom', '70px');
			$('header .inner .menu-contents').css('padding-top', '97px');
		}else{
			$('header .inner .menu-contents').css('padding-top', '98px');
		}

	}

	//nav　ドロップダウンメニュー
	$(".dropmenu-contents").hide();
	if ($(window).width() > 768){

		$("header .inner nav > ul > li.dropmenu-area").hover(function(){
				$(".dropmenu-contents:not(:animated)",this).slideDown()
			},
			function(){
				$(".dropmenu-contents",this).slideUp();
			}
		);

	}

	//menu-contents
	$("header .menu-contents .dropmenu-area, footer .inner__sitemap__right .dropmenu-area").click(function(){
		$(this).children(".dropmenu-contents").slideToggle();
		$(this).children(".dropmenu-trigg").toggleClass("is-active");
	});


	//ブランドメニュー
	$(".brand-btn").click(function(){
		if($(this).hasClass("is-open")){
			$(this).removeClass("is-open");
			$(".brand-contents").removeClass("is-open");
			$(".overlay").fadeOut();
			$("body").removeClass("show-menu");
		}else{
			$(this).addClass("is-open");
			$(".brand-contents").addClass("is-open");
			$(".overlay").fadeIn();
			$("body").addClass("show-menu");
		}
	});

	$(".brand-contents__inner a").click(function(){
		$(".brand-contents").removeClass("is-open");
		$(".brand-btn").removeClass("is-open");
		$(".overlay").fadeOut();
		$("body").removeClass("show-menu");
	});


	//overlay
	$(".overlay").click(function() {
		$(".overlay").stop(true,true).fadeOut();
		$(".menu-btn").removeClass("is-open");
		$(".menu-contents").removeClass("is-open");
		$(".brand-btn").removeClass("is-open");
		$(".brand-contents").removeClass("is-open");
		$("body").removeClass("show-menu");
	});

	//言語メニュー
	$("header .inner .menu-contents .menu-contents__inner > aside dl dd").click(function(){
			$(this).toggleClass("is-active");
	});
	$("header > .inner > aside dl dd").click(function(){
			$(this).toggleClass("is-active");
	});
	$("footer .inner__other__lang > ul > li").click(function(){
			$("footer .inner__other__lang > div").toggleClass("is-active");
	});


	//フッター SNSモーダル
	$("footer .inner__sitemap__right .modal-open").click(function(){
			if($(this).next(".inner__sitemap__right__modal").hasClass("is-active")){
				$(this).next(".inner__sitemap__right__modal").removeClass("is-active");
			}else{
				$(".inner__sitemap__right__modal").removeClass("is-active");
				$(this).next(".inner__sitemap__right__modal").addClass("is-active");
			}
	});

	$("footer .inner__sitemap__right__modal .modal-close").click(function(){
			 $(this).parent().removeClass("is-active");
	});


	//SHOP ONLINE
	$(".common-shop__inner__select .location").click(function(){
		$(this).toggleClass("is-open");
		$(".common-shop__inner__select .first").toggleClass("is-open").slideToggle(500);
	});

	$(".common-shop__inner__select .first ul li").click(function(){
		var second = $(this).data('secondvalue');
		console.log(second);
		$(".common-shop__inner__select .location").removeClass("is-open");
		$(".common-shop__inner__select .location span").text(second);
		$(".common-shop__inner__select .first").removeClass("is-open").slideToggle(500);

		$(".common-shop__inner__select .second").addClass("is-open");
		$(".common-shop__inner__select .second ul li").removeClass("is-open");
		$(".common-shop__inner__select .second ul li")
			 .filter(
					 function(){
							 return($(this).data('secondcontent') === second);
					 }
			 )
			 .addClass("is-open");
	});

	$(".common-shop__inner__select .second > ul > li p").click(function(){
		$(this).toggleClass("is-open");
		$(this).next(".third").slideToggle(500);
	});




	//swiper
	if($(window).width() > 768){

		if($('.common-projects').length && !$('.common-projects .swiper-none').length){

			var swiper_projects = new Swiper('.common-projects .swiper-container', {
				loop: true,
				slidesPerView: 5,
				spaceBetween: 10,
				mousewheel: {
					invert: true,
					forceToAxis: true,
				}
			} );

		}

		if($('.common-catalog').length){

			var swiper_catalog = new Swiper('.common-catalog .swiper-container', {
				loop: true,
				slidesPerView: 1,
				spaceBetween: 0,
				// slidesPerGroup: 2,
				paginationClickable: true,
				// mousewheel: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
			} );

		}

	}else{

		if($('.common-news').length && !$('.common-news .swiper-none').length){

			var swiper_news = new Swiper('.common-news .swiper-container', {
				loop: true,
				slidesPerView: 2,
				spaceBetween: 20,
				mousewheel: {
					invert: true,
					forceToAxis: true,
				}
			} );

		}


		if($('.common-projects').length && !$('.common-projects .swiper-none').length){

			var swiper_projects = new Swiper('.common-projects .swiper-container', {
				loop: true,
				slidesPerView: 2.5,
				spaceBetween: 10,
				mousewheel: {
					invert: true,
					forceToAxis: true,
				}
			} );

		}


		if($('.common-catalog').length){

			var swiper_catalog = new Swiper('.common-catalog .swiper-container', {
				loop: true,
				slidesPerView: 1,
				spaceBetween: 0,
				// slidesPerGroup: 2,
				paginationClickable: true,
				// mousewheel: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
			} );

		}

	}


});






$(window).load(function(){

	// スムーススクロール
	var urlHash = location.hash;
	if(urlHash) {
	    $('body,html').stop().scrollTop(0);
	    setTimeout(function(){
			headerHeight = $("header").outerHeight(true);
	        var target = $(urlHash);
	        var position = target.offset().top - headerHeight;
	        $('body,html').stop().animate({scrollTop:position}, 1500);
	    }, 1000);
	}
	$('a[href^="#"]').click(function() {
	    var href= $(this).attr("href");
	    var target = $(href);
	    var position = target.offset().top - headerHeight;
		$('body,html').stop().animate({scrollTop:position}, 1500);
		$(".overlay").fadeOut();
        $("body").removeClass("show-menu");
		return false;
	});



	//attention
	if($('.attention-link').length && !$('#attention-link_swiper-none').length){
		var swiper_attention = new Swiper('.attention-link .swiper-container', {
			loop: true,
			effect: 'slide',
			swipe: 'noSwiping',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			speed: 1000,
			longSwipes: false,
		} );
	}


	//header 下方向スクロールで隠す,上スクロールで表示
	var startPos = 0, winScrollTop = 0;

	$(window).on('scroll',function(){
		headerHeight = $("header").height();
		winScrollTop = $(window).scrollTop();
		if (winScrollTop >= startPos ) {
				if(winScrollTop >= headerHeight && !$('.parallax').length && !$('.menu-contents.is-open').length && !$('.brand-contents.is-open').length){
						$('header').css('top', -headerHeight);
						$('.attention-link').addClass('hide');
						if($('.attention-link').length && !$('#attention-link_swiper-none').length){
							swiper_attention.autoplay.stop();
							swiper_attention.slideTo(1,1000,true);
						}
				}else if($('.parallax').length){
					$('header').css('top', 0);
					$('.attention-link').removeClass('hide');
					if($('.attention-link').length && !$('#attention-link_swiper-none').length){
						swiper_attention.autoplay.start();
					}
				}
		} else {
				$('header').css('top', 0);
				$('.attention-link').removeClass('hide');
				if($('.attention-link').length && !$('#attention-link_swiper-none').length){
					swiper_attention.autoplay.start();
				}

		}
		startPos = winScrollTop;
	});


	// attention close
	$('.attention-link .close').click(function(){
		$('.attention-link').addClass('is-active').delay(2000).queue( function(){ $(this).remove(); } );
		$('header .inner').removeClass('attention-link-visible');
	});

	//COLLECTION SHOP
	if(($('.collection-common-online').length)){
		$('footer').css('margin-top', 0);
	}
	//parallax body
	if(($('header.parallax').length)){
		$('body').css('overflow-x','hidden');
	}

	$(".loading").fadeOut("1500");

});
