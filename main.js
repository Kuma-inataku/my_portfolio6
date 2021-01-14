$(function() {
  var topBtn = $('#page-top');    
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });

  $(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 0 ){
            $(this).addClass('scrollin');
        }
    });
});
  //スクロールしてトップ
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 1000);
      return false;
  });
});