$(function(){
    $(window).scroll(function (){
      $(".sample").each(function(){
        let imgPos = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).addClass("fade_on");
        } else {
          $(this).removeClass("fade_on");
        }
      });
    });
  });