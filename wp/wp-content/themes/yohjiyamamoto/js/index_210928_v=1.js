

var windowWidth, windowSm;
windowWidth = $(window).width();
windowSm = 787;


window.onpageshow = function(event) {
	if (event.persisted) {
		 window.location.reload();
	}
};




$(function(){


	// mainvisual SP
	if($(window).width() < 769 ){

		$('.index__mainvisual').css('height',$(window).height());

	}

	//NEWS btn
	$(".index__news__inner ul li .list").click(function(){

		$(".index__news__inner ul li").removeClass("is-active");
		$(this).parent(".index__news__inner ul li").addClass("is-active");

	});

	//header
	if( document.getElementsByClassName('menu-over')){
		$(window).load(function(){
		var menu = $('header');
		var mobile = $('.mobile');
		var trigg = 500;
		// var trigg = $(".menu-over").offset().top;

			$(window).scroll(function () {

				if( $(window).scrollTop() < trigg ) {
					if( $('header').hasClass('over') ){
					 $('header').removeClass('over');
					 // $('.mobile-btn span').removeClass('over');
					}
				}else{
					if( !$('header').hasClass('over') ){
						$('header').addClass('over');
						// $('.mobile-btn span').addClass('over');
					}
				}
		 });
	 });
	}

	// YouTube
  $(".modal-overlay__inner").click(function(evt) {
    evt.stopPropagation();
  });
  $(window).resize(centeringModalSyncer);
  $(".index__mainvisual__movie__btn, .common-spmovie__btn").click(function() {
    this.blur();
    //YouTube動画のURL
    $("#videoPlayer").attr("src", "https://www.youtube.com/embed/" + $(this).data("video") + "?autoplay=1");
    $(".modal-overlay").fadeIn("fast");
    $(".modal-overlay__inner img").fadeIn();
    // センタリング
    centeringModalSyncer();
  });
  //.modal-overlayクリック
  $(".modal-overlay").click(function() {
    //フェードアウト
    $(".modal-overlay").fadeOut("fast", function() {
        $("#videoPlayer").attr("src", "");
    });
  });
  //センタリング
  function centeringModalSyncer() {
    //画面幅と高さ
    var w = $(window).width();
    var h = $(window).height();
    //modal-overlay__inner幅と高さ
    var cw = $(".modal-overlay__inner").outerWidth();
    var ch = $(".modal-overlay__inner").outerHeight();
    //センタリング
    $(".modal-overlay__inner").css({ left: ((w - cw) / 2), top: ((h - ch) / 2) });
  }


	//swiper
	if($(window).width() > 769){


		var swiper_mv = new Swiper('.index__mainvisual .swiper-container', {
			loop: true,
			effect: 'fade',
			autoplay: {
				delay: 5000,

			},
			pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true
				},

		} );


		var swiper_brandlist = new Swiper('.index__brandlist .swiper-container', {
			loop: true,
			slidesPerView: 5,
			spaceBetween: 20,
			navigation: {
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
		  },
			pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true
				},
			mousewheel: {
				invert: true,
				forceToAxis: true,
			},


		} );


	}else{

		var swiper_mv = new Swiper('.index__mainvisual .swiper-container', {
			loop: true,
			effect: 'fade',
			autoplay: {
				delay: 5000,
			},
			pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true
				},

		} );

		var swiper_brandlist = new Swiper('.index__brandlist .swiper-container', {
			loop: true,
			slidesPerView: 'auto',
			spaceBetween: 5,
			mousewheel: {
				invert: true,
				forceToAxis: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

		} );

		var swiper_index_news = new Swiper('.index__news .swiper-container', {
			loop: true,
			slidesPerView: 2,
			spaceBetween: 10,
			mousewheel: {
				invert: true,
				forceToAxis: true,
			},
		} );

	}


});



$(window).load(function(){


	var video = $("video").get(0);

	//センタリング
	function centeringModalSyncer() {
		//画面幅と高さ
		var w = $(window).width();
		var h = $(window).height();
		//modal-overlay__inner幅と高さ
		var cw = $(".popup-modal-overlay__inner").outerWidth();
		var ch = $(".popup-modal-overlay__inner").outerHeight();
		//センタリング
		$(".popup-modal-overlay__inner").css({ left: ((w - cw) / 2), top: ((h - ch) / 2) });
	}

 	// センタリング
		centeringModalSyncer();
	//.modal-overlayクリック
	$(".popup-modal-overlay").click(function() {
		//フェードアウト
		$(".popup-modal-overlay").fadeOut("fast");
		video.play();
	});



	//theshop banner
	//variable
	const theshop = $(".index__theshop");
	//set
	TweenMax.set(theshop, { opacity: 0 });
	//timeline
	function theshop_tl(){
		const tl = new TimelineMax();
		tl.to(theshop, 1, { opacity: 1 })
		return tl;
	}

	theshop.waypoint(function(){
		theshop_tl();
	},{ offset : "80%"});


	//collection

	//variable
	const colle = $(".index__collection");
	const colle_h2 = $(".index__collection ul li h2");
	const colle_h2_span = $(".index__collection ul li h2 span");
	const colle_h3 = $(".index__collection ul li h3");
	const colle_figure = $(".index__collection ul li figure");
	const colle_img = $(".index__collection ul li figure img");
	//set
	TweenMax.set([colle_h2_span, colle_h3, colle_figure], { opacity: 0 });
	TweenMax.set(colle_img, { opacity: 0, filter: "blur(10px)", scale: "1.1" });

	//timeline
	function colle_1_tl(){
		const tl = new TimelineMax();
		tl.staggerTo($(".index__collection .index__collection__full li:first-child h2 span"), .1, { opacity: 1, filter: "blur(0em)", ease: Expo.easeIn }, .04)
		.to($(".index__collection .index__collection__full li:first-child figure"), .5 , { opacity: 1, ease: Expo.easeIn }, .01)
		.to($(".index__collection .index__collection__full li:first-child figure img"), .5, { opacity: 1, filter: "blur(0em)", scale: "1", ease: Expo.easeIn }, .02)
		.to($(".index__collection .index__collection__full li:first-child h3"), .5, { opacity: 1, ease: Expo.easeIn }, .3)
		return tl;
	}

	function colle_2_tl(){
		const tl = new TimelineMax();
		tl.staggerTo($(".index__collection .index__collection__full li:nth-child(2) h2 span"), .1, { opacity: 1, filter: "blur(0em)", ease: Expo.easeIn }, .04)
		.to($(".index__collection .index__collection__full li:nth-child(2) figure"), .5 , { opacity: 1, ease: Expo.easeIn }, .01)
		.to($(".index__collection .index__collection__full li:nth-child(2) figure img"), .5, { opacity: 1, filter: "blur(0em)", scale: "1", ease: Expo.easeIn }, .02)
		.to($(".index__collection .index__collection__full li:nth-child(2) h3"), .5, { opacity: 1, ease: Expo.easeIn }, .3)
		return tl;
	}

	function colle_7_tl(){
		const tl = new TimelineMax();
		tl.staggerTo($(".index__collection .index__collection__full li:nth-child(3) h2 span"), .1, { opacity: 1, filter: "blur(0em)", ease: Expo.easeIn }, .04)
		.to($(".index__collection .index__collection__full li:nth-child(3) figure"), .5 , { opacity: 1, ease: Expo.easeIn }, .01)
		.to($(".index__collection .index__collection__full li:nth-child(3) figure img"), .5, { opacity: 1, filter: "blur(0em)", scale: "1", ease: Expo.easeIn }, .02)
		.to($(".index__collection .index__collection__full li:nth-child(3) h3"), .5, { opacity: 1, ease: Expo.easeIn }, .3)
		return tl;
	}

	function colle_3_tl(){
		const tl = new TimelineMax();
		tl.staggerTo($(".index__collection .half li:nth-child(1) h2 span"), .1, { opacity: 1, filter: "blur(0em)", ease: Expo.easeIn }, .04)
		.to($(".index__collection .half li:nth-child(1) figure"), .5 , { opacity: 1, ease: Expo.easeIn }, .01)
		.to($(".index__collection .half li:nth-child(1) figure img"), .5, { opacity: 1, filter: "blur(0em)", scale: "1", ease: Expo.easeIn }, .02)
		.to($(".index__collection .half li:nth-child(1) h3"), .5, { opacity: 1, ease: Expo.easeIn }, .3)
		return tl;
	}

	function colle_4_tl(){
		const tl = new TimelineMax();
		tl.staggerTo($(".index__collection .half li:nth-child(2) h2 span"), .1, { opacity: 1, filter: "blur(0em)", ease: Expo.easeIn }, .04)
		.to($(".index__collection .half li:nth-child(2) figure"), .5 , { opacity: 1, ease: Expo.easeIn }, .01)
		.to($(".index__collection .half li:nth-child(2) figure img"), .5, { opacity: 1, filter: "blur(0em)", scale: "1", ease: Expo.easeIn }, .02)
		.to($(".index__collection .half li:nth-child(2) h3"), .5, { opacity: 1, ease: Expo.easeIn }, .3)
		return tl;
	}

	function colle_5_tl(){
		const tl = new TimelineMax();
		tl.staggerTo($(".index__collection .half li:nth-child(3) h2 span"), .1, { opacity: 1, filter: "blur(0em)", ease: Expo.easeIn }, .04)
		.to($(".index__collection .half li:nth-child(3) figure"), .5 , { opacity: 1, ease: Expo.easeIn }, .01)
		.to($(".index__collection .half li:nth-child(3) figure img"), .5, { opacity: 1, filter: "blur(0em)", scale: "1", ease: Expo.easeIn }, .02)
		.to($(".index__collection .half li:nth-child(3) h3"), .5, { opacity: 1, ease: Expo.easeIn }, .3)
		return tl;
	}

	function colle_6_tl(){
		const tl = new TimelineMax();
		tl.staggerTo($(".index__collection .half li:nth-child(4) h2 span"), .1, { opacity: 1, filter: "blur(0em)", ease: Expo.easeIn }, .04)
		.to($(".index__collection .half li:nth-child(4) figure"), .5 , { opacity: 1, ease: Expo.easeIn }, .01)
		.to($(".index__collection .half li:nth-child(4) figure img"), .5, { opacity: 1, filter: "blur(0em)", scale: "1", ease: Expo.easeIn }, .02)
		.to($(".index__collection .half li:nth-child(4) h3"), .5, { opacity: 1, ease: Expo.easeIn }, .3)
		return tl;
	}


	function colle_1_pc_tl(){
		const tl = new TimelineMax();
		tl.staggerTo($(".index__collection .index__collection__full li:first-child h2 span"), .1, { opacity: 1, filter: "blur(0em)", ease: Expo.easeIn }, .04)
		.to($(".index__collection .index__collection__full li:first-child figure"), .5 , { opacity: 1, ease: Expo.easeIn }, .01)
		.to($(".index__collection .index__collection__full li:first-child figure img"), .5, { opacity: 1, filter: "blur(0em)", scale: "1", ease: Expo.easeIn }, .02)
		.to($(".index__collection .index__collection__full li:first-child h3"), .5, { opacity: 1, ease: Expo.easeIn }, .3)
		.staggerTo($(".index__collection .index__collection__full li:nth-child(2) h2 span"), .1, { opacity: 1, filter: "blur(0em)", ease: Expo.easeIn }, .04)
		.to($(".index__collection .index__collection__full li:nth-child(2) figure"), .5 , { opacity: 1, ease: Expo.easeIn }, .01)
		.to($(".index__collection .index__collection__full li:nth-child(2) figure img"), .5, { opacity: 1, filter: "blur(0em)", scale: "1", ease: Expo.easeIn }, .02)
		.to($(".index__collection .index__collection__full li:nth-child(2) h3"), .5, { opacity: 1, ease: Expo.easeIn }, .3)
		.staggerTo($(".index__collection .index__collection__full li:nth-child(3) h2 span"), .1, { opacity: 1, filter: "blur(0em)", ease: Expo.easeIn }, .04)
		.to($(".index__collection .index__collection__full li:nth-child(3) figure"), .5 , { opacity: 1, ease: Expo.easeIn }, .01)
		.to($(".index__collection .index__collection__full li:nth-child(3) figure img"), .5, { opacity: 1, filter: "blur(0em)", scale: "1", ease: Expo.easeIn }, .02)
		.to($(".index__collection .index__collection__full li:nth-child(3) h3"), .5, { opacity: 1, ease: Expo.easeIn }, .3);
		return tl;
	}

	function colle_2_pc_tl(){
		const tl = new TimelineMax();
		tl.staggerTo($(".index__collection .half li:first-child h2 span"), .1, { opacity: 1, filter: "blur(0em)", ease: Expo.easeIn }, .04)
		.to($(".index__collection .half li:first-child figure"), .5 , { opacity: 1, ease: Expo.easeIn }, .01)
		.to($(".index__collection .half li:first-child figure img"), .5, { opacity: 1, filter: "blur(0em)", scale: "1", ease: Expo.easeIn }, .02)
		.to($(".index__collection .half li:first-child h3"), .5, { opacity: 1, ease: Expo.easeIn }, .3)
		.staggerTo($(".index__collection .half li:nth-child(2) h2 span"), .1, { opacity: 1, filter: "blur(0em)", ease: Expo.easeIn }, .04)
		.to($(".index__collection .half li:nth-child(2) figure"), .5 , { opacity: 1, ease: Expo.easeIn }, .01)
		.to($(".index__collection .half li:nth-child(2) figure img"), .5, { opacity: 1, filter: "blur(0em)", scale: "1", ease: Expo.easeIn }, .02)
		.to($(".index__collection .half li:nth-child(2) h3"), .5, { opacity: 1, ease: Expo.easeIn }, .3)
		.staggerTo($(".index__collection .half li:nth-child(3) h2 span"), .1, { opacity: 1, filter: "blur(0em)", ease: Expo.easeIn }, .04)
		.to($(".index__collection .half li:nth-child(3) figure"), .5 , { opacity: 1, ease: Expo.easeIn }, .01)
		.to($(".index__collection .half li:nth-child(3) figure img"), .5, { opacity: 1, filter: "blur(0em)", scale: "1", ease: Expo.easeIn }, .02)
		.to($(".index__collection .half li:nth-child(3) h3"), .5, { opacity: 1, ease: Expo.easeIn }, .3)
		.staggerTo($(".index__collection .half li:nth-child(4) h2 span"), .1, { opacity: 1, filter: "blur(0em)", ease: Expo.easeIn }, .04)
		.to($(".index__collection .half li:nth-child(4) figure"), .5 , { opacity: 1, ease: Expo.easeIn }, .01)
		.to($(".index__collection .half li:nth-child(4) figure img"), .5, { opacity: 1, filter: "blur(0em)", scale: "1", ease: Expo.easeIn }, .02)
		.to($(".index__collection .half li:nth-child(4) h3"), .5, { opacity: 1, ease: Expo.easeIn }, .3);
		return tl;
	}

	//trigger
	if($(window).width() > 769){
		$(".index__collection .index__collection__full").waypoint(function(){
			colle_1_pc_tl();
		},{ offset : "80%"});
		$(".index__collection .half").waypoint(function(){
			colle_2_pc_tl();
		},{ offset : "80%"});
	}else{
		$(".index__collection .index__collection__full li:first-child").waypoint(function(){
			colle_1_tl();
		},{ offset : "80%"});
		$(".index__collection .index__collection__full li:nth-child(2)").waypoint(function(){
			colle_2_tl();
		},{ offset : "80%"});
		$(".index__collection .index__collection__full li:nth-child(3)").waypoint(function(){
			colle_7_tl();
		},{ offset : "80%"});
		$(".index__collection .half li:nth-child(1)").waypoint(function(){
			colle_3_tl();
		},{ offset : "100%"});
		$(".index__collection .half li:nth-child(2)").waypoint(function(){
			colle_4_tl();
		},{ offset : "100%"});
		$(".index__collection .half li:nth-child(3)").waypoint(function(){
			colle_5_tl();
		},{ offset : "100%"});
		$(".index__collection .half li:nth-child(4)").waypoint(function(){
			colle_6_tl();
		},{ offset : "100%"});
	}



	//blandlist

	//variable
	const brandlist = $(".index__brandlist");
	const brandlist_h2 = $(".index__brandlist h2");
	const brandlist_swiper = $(".index__brandlist .index__brandlist__inner .swiper-container");
	const brandlist_slide = $(".index__brandlist .index__brandlist__inner .swiper-slide");
	const brandlist_slide_h3 = $(".index__brandlist .index__brandlist__inner .swiper-slide h3");
	const brandlist_slide_img = $(".index__brandlist .index__brandlist__inner .swiper-slide figure");
	//set
	TweenMax.set(brandlist_h2, { opacity: 0 });
	TweenMax.set(brandlist_slide, { opacity: 0 });
	// TweenMax.set(colle_img, { opacity: 0, filter: "blur(10px)", scale: "1.1" });

	//timeline
	function brandlist_tl(){
		const tl = new TimelineMax();
		tl.to(brandlist_h2, .6, { opacity: 1, ease: Expo.easeIn })
		.staggerTo(brandlist_slide, .6, { opacity: 1, ease: Expo.easeIn }, .04 , "-=.2");
		return tl;
	}

	//trigger
	brandlist.waypoint(function(){
		brandlist_tl();
	},{ offset : "100%"});



	//womens empowerment banner

	//variable
	const yswe = $(".index__yswe");
	//set
	TweenMax.set(yswe, { opacity: 0 });
	//timeline
	function yswe_tl(){
		const tl = new TimelineMax();
		tl.to(yswe, 1, { opacity: 1 })
		return tl;
	}

	yswe.waypoint(function(){
		yswe_tl();
	},{ offset : "80%"});



	//shop online

	//variable
	const shoponline = $(".common-shop");
	const shoponline_h3 = $(".common-shop__inner h3");
	const shoponline_h4 = $(".common-shop__inner h4 img");
	const shoponline_li = $(".common-shop__inner ul li");

	//set
	TweenMax.set([shoponline_h3, shoponline_h4, shoponline_li], { opacity: 0 });
	TweenMax.set(shoponline_h4, { opacity: 0, filter: "blur(10px)", scale: "1.1" });

	//timeline
	function shoponline_tl(){
		const tl = new TimelineMax();
		tl.to(shoponline_h3, .6, { opacity: 1, ease: Expo.easeIn })
		.to(shoponline_h4, 1.8, { opacity: 1,  filter: "blur(0px)", scale: "1", ease: Expo.easeIn }, "-=1.5")
		.staggerTo(shoponline_li, .6, { opacity: 1, ease: Expo.easeIn }, .1);
		return tl;
	}

	//trigger
	shoponline.waypoint(function(){
		shoponline_tl();
	},{ offset : "100%"});



	//news pc

	//variable
	const news = $(".index__news");
	const news_h2 = $(".index__news__inner h2");
	const news_li = $(".index__news__inner__pc li.is-active");
	const news_span = $(".index__news__inner__pc li.is-active article span");
	const news_h3 = $(".index__news__inner__pc li.is-active article h3");
	const news_figure = $(".index__news__inner__pc li.is-active article figure");
	const news_img = $(".index__news__inner__pc li.is-active article figure img");
	const news_viewmore = $(".index__news__inner__pc li.is-active article  .text__viewmore");
	const news_sli = $(".index__news__inner__pc li .list");

	//set
	TweenMax.set([news_h2, news_span, news_h3, news_figure, news_img, news_viewmore, news_sli], { opacity: 0 });
	TweenMax.set(news_img, { opacity: 0, filter: "blur(10px)", scale: "1.5" });

	//timeline
	function news_tl(){
		const tl = new TimelineMax();
		tl.to(news_h2, .6, { opacity: 1, ease: Expo.easeIn })
		.to(news_span, .6, { opacity: 1, ease: Expo.easeIn }, .1)
		.to(news_h3, .6, { opacity: 1, ease: Expo.easeIn }, .2)
		.to(news_viewmore, .6, { opacity: 1, ease: Expo.easeIn }, .3)
		.to(news_figure, .6, { opacity: 1, ease: Expo.easeIn }, .4)
		.to(news_img, 1, { opacity: 1,  filter: "blur(0px)", scale: "1", ease: Expo.easeIn }, .2)
		.staggerTo(news_sli, .6, { opacity: 1, ease: Expo.easeIn }, .1, "-=.5");
		return tl;
	}

	//trigger
	news.waypoint(function(){
		news_tl();
	},{ offset : "80%"});



	//news sp

	//variable
	const news_sp = $(".common-news");
	const news_sp_h2 = $(".common-news__inner h2");
	const news_sp_swiper = $(".common-news__inner .swiper-container");
	const news_sp_slide = $(".common-news__inner .swiper-container .swiper-slide");
	const news_sp_h4 = $(".common-news__inner .swiper-slide h4");

	//set
	TweenMax.set([news_sp_h2, news_sp_swiper, news_sp_slide], { opacity: 0 });
	// TweenMax.set(projects_h4, { opacity: 0, filter: "blur(10px)", scale: "1.1" });

	//timeline
	function news_sp_tl(){
		const tl = new TimelineMax();
		tl.to(news_sp_h2, .6, { opacity: 1, ease: Expo.easeIn })
		.to(news_sp_swiper, .6, { opacity: 1, ease: Expo.easeIn })
		.staggerFromTo(news_sp_slide, .6, { opacity: 0 }, { opacity: 1, ease: Expo.easeIn }, .1, "-=.5");
		return tl;
	}

	//trigger
	news_sp.waypoint(function(){
		news_sp_tl();
	},{ offset : "95%"});




	//projects

	//variable
	const projects = $(".common-projects");
	const projects_h3 = $(".common-projects__inner h3");
	const projects_h4 = $(".common-projects__inner h4");
	const projects_slide = $(".common-projects__inner .swiper-slide");

	//set
	TweenMax.set([projects_h3, projects_slide], { opacity: 0 });
	// TweenMax.set(projects_h4, { opacity: 0, filter: "blur(10px)", scale: "1.1" });

	//timeline
	function projects_tl(){
		const tl = new TimelineMax();
		tl.to(projects_h3, .6, { opacity: 1, ease: Expo.easeIn })
		.staggerTo(projects_slide, .6, { opacity: 1, ease: Expo.easeIn }, .1, "-=.5");
		return tl;
	}

	//trigger
	projects.waypoint(function(){
		projects_tl();
	},{ offset : "90%"});



});



$(window).on("orientationchange resize", function() {
	//センタリング
	function centeringModalSyncer() {
		//画面幅と高さ
		var w = $(window).width();
		var h = $(window).height();
		//modal-overlay__inner幅と高さ
		var cw = $(".popup-modal-overlay__inner").outerWidth();
		var ch = $(".popup-modal-overlay__inner").outerHeight();
		//センタリング
		$(".popup-modal-overlay__inner").css({ left: ((w - cw) / 2), top: ((h - ch) / 2) });
	}
 	// センタリング
		centeringModalSyncer();
});
