$(window).load(function(){
  document.getElementById('livePlayer');

  var windowWidth;
  windowWidth = $(window).width();
  var youtube_id = $(".youtube-id").data("video");//youtube動画ID

  // COUNTDOWN TIMER

  var end_date = ( new Date(2024, 8, 27, 17, 0, 0) ).getTime();
  var current_date = ( new Date() ).getTime() + ( new Date() ).getTimezoneOffset() * 60 * 1000; // 現在時刻を標準時UTCへ変換

  //確認用 & 分岐用
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

    if( period > 0 ){ //残り時間が0になっていなければカウントダウン表示

      //小数点以下切り捨て
      var day = 0;
      day = Math.floor( period /( 60 * 60 * 24 ) ); // 秒 分 時

      var hour = Math.floor( period /( 60 * 60 ) ); // 秒 分
      hour = hour - day * 24; // day（日数）を引く

      var minute = Math.floor( period / 60 ); // 秒
      minute = minute - ( (day * 24 * 60) + (hour * 60) ); // day（日数）と hour（時）を引く

      var second = Math.floor( period );
      second = second - ( (day * 24 * 60 * 60 ) + (hour * 60 * 60) + (minute * 60) );

      var insert = "";
      if( day > 0 ){
        insert += '<div class="day"><span class="small">START IN</span><span>' + day + '</span><span class="small">DAYS</span></div>' + '';//<br class="sp-visible">
        insert += '<span>' + addZero(hour) + ':' + '</span>';
      }else{
        insert += '<span>' + addZero(hour) + ':' + '</span>';
      }
      insert += '<span>' + addZero(minute) + ':' + '</span>';
      insert += '<span>' + addZero(second) + '' + '</span>';
      document.getElementById("result").innerHTML = insert;
      if( period > 0 ){ //残り時間がある場合更新
        setTimeout(countdownTimer,10);
      }else{
        $('.countdown-timer').fadeOut(4000);
        setTimeout( function() {
          $('#liveview').fadeIn(4000);
        }, 8000 );
        liveView();
      }

    }else{ //残り時間が0になったら 00 : 00 : 00
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


  // カウントダウンが 0 day 00 : 00 : 00 になった
  // もしくは now_date > end_dateだった場合
  // ライブ配信をポップアップに表示

  function liveView(){
      //ポップアップ表示
      $("#livePlayer").attr("src", "https://www.youtube.com/embed/" + youtube_id + "?autoplay=1");// ライブ配信URL
      $('#livePlayer').fadeIn(4000);
      $('#liveview').addClass('is-view');
  }




});