/*--------------------------
すべて見る - 開閉
---------------------------*/
$(function(){
	$(".more").on("click", function() {
	  $(this).toggleClass("on-click");
	  $(".txt-hide").slideToggle(1000);
	});
  }); 