$(window).load(function(){
// COUNTDOWN TIMER

	var end_date = ( new Date( 2024, 8, 27, 17, 00 ) ).getTime();//　カウントダウン終了時刻　標準時変換
	
	var current_date = ( new Date() ).getTime() + ( new Date() ).getTimezoneOffset() * 60 * 1000; // 現在時刻 標準時変換

	if(end_date > current_date){
		countdownTimer();
	}else{
		$('.countdown-timer').remove();
		liveView();
	}

	var timer_interval = 1000;

	function countdownTimer(){

		$('.countdown-timer').fadeIn();

		var now_date = ( new Date() ).getTime() + ( new Date() ).getTimezoneOffset() * 60 * 1000; // 現在時刻 毎秒更新用

		var period = ( end_date - now_date ) / 1000;

		if( period > 0 ){ //残り時間があればカウントダウン表示

			//小数点以下切り捨て
			var day = 0;
			day = Math.floor( period /( 60 * 60 * 24 ) );

			var hour = Math.floor( period /( 60 * 60 ) );
			hour = hour - day * 24;

			var minute = Math.floor( period / 60 );
			minute = minute - ( (day * 24 * 60) + (hour * 60) );

			var second = Math.floor( period );
			second = second - ( (day * 24 * 60 * 60 ) + (hour * 60 * 60) + (minute * 60) );

			var insert = "";
			if( day > 0 ){
				insert += '<div class="day"><span class="small">START IN</span><span>' + day + '</span><span class="small">DAYS</span></div>';
				insert += '<span>' + addZero(hour) + ':' + '</span>';
			}else{
				insert += '<span>' + addZero(hour) + ':' + '</span>';
			}
			insert += '<span>' + addZero(minute) + ':' + '</span>';
			insert += '<span>' + addZero(second) + '' + '</span>';
			document.getElementById('result').innerHTML = insert;
			if( period > 0 ){ //残り時間がある場合更新
				setTimeout(countdownTimer,10);
			}else{
				$('.countdown-timer').fadeOut(4000);
				setTimeout( function() {
					$('#liveview').fadeIn(4000);
				}, 8000 );
				liveView();
			}

		}else{ // 00 : 00 : 00
			// var insert = "";
			// insert += '<span>00:</span><span>00:</span><span>00</span>';
			// document.getElementById('result').innerHTML = insert;
			$('.countdown-timer').fadeOut(3000);
			setTimeout( function() {
				liveView();
			}, 3000 );
		}

		// 時　: 分 : 秒　2桁でそろえる
		function addZero(num){
			return('0' + num).slice(-2);
		}

	}


	// ライブ配信表示
	function liveView(){
		var liveview_movie_id = $('.index__mainvisual__movie__bnr').data("video");
		if( windowWidth > 768 ){
			//ポップアップ表示
			$("#livePlayer").attr("src", "https://www.youtube.com/embed/" + liveview_movie_id + "?autoplay=1");// ライブ配信URL
			$('#livePlayer').fadeIn(4000);
			$('#liveview').addClass('is-view');
		}else{
			$('#liveBanner').fadeIn(4000);
		}
	}

	centeringModalSyncer_live();

	//センタリング
	function centeringModalSyncer_live() {
	  //画面幅と高さ
	  var w = $(window).width();
	  var h = $(window).height();
	  //modal-overlay__inner幅と高さ
	  var cw = $(".modal-overlay-liveview__inner").outerWidth();
	  var ch = $(".modal-overlay-liveview__inner").outerHeight();
	  //センタリング
	  $(".modal-overlay-liveview__inner").css({ left: ((w - cw) / 2), top: ((h - ch) / 2) });
	}


	$(".modal-overlay-liveview__inner").click(function(evt) {
	  evt.stopPropagation();
	});
	$(window).resize(centeringModalSyncer_live);
	//.modal-overlay-liveviewクリック
	$(".modal-overlay-liveview").click(function() {
	  //フェードアウト
	  $(".modal-overlay-liveview").fadeOut("fast", function() {
	      $("#livePlayer").attr("src", "");
	  });
	});

	$(".index__mainvisual__movie__bnr").click(function() {
	  if(end_date > current_date){
	    countdownTimer();
	    $(".modal-overlay-liveview").fadeIn(1000);
	  }else{
	    $('.countdown-timer').remove();
	    $(".modal-overlay-liveview").fadeIn(1000);
	    liveView();
	  }
	});
});
