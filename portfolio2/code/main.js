"use strict";

$(function () {

  //背景色の変更
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height() / 1.5) {
      $("body").css("background","rgb(104,183,135)" )
    } else {
      $("body").css("background","rgb(219, 201, 209)" )
    }

    $(".slide-trigger").each(function () {
      //トリガーが画面半分を超えたら//
      let trigger_point = $(this).offset().top - $(window).height() / 1.5;


      if ($(window).scrollTop() > trigger_point) {
        $("body").css("background", "rgb(205, 133, 63)")
      }
    }); 
    
    $(".slide-trigger2").each(function () {
      //トリガーが画面半分を超えたら//
      let trigger_point = $(this).offset().top - $(window).height() / 1.5;


      if ($(window).scrollTop() > trigger_point) {
        $("body").css(({"background":"#efefef", "color":"rgb(11,54,97)" }));
      }else{
        $("body").css("color", "rgb(232,240,222)");
      }
    }); 

  });

  //背景

  //ハンバーガー
  $("#hamburger").click(function(){
    $(this).toggleClass("active");
    $(".header-nav").fadeToggle();
    $("body").toggleClass("hidden");
  });

  $(".header-li").click(function(){
    $("body").removeClass(".hidden");
    $("#hamburger").toggleClass("active");
    $(".header-nav").fadeOut();

  })

  //parallax

  $(window).scroll(function () {
    let value = -$(window).scrollTop() / 40;
    let value2 = -$(window).scrollTop() / 80;

    $(".parallax").css({
      transform: "translateY(" + value + "%)",
    });
    $(".parallax2").css({
      transform: "translateY(" + value2 + "%)",
    });
  });

});

//back-to-top

$(document).ready(function(){
  $(window).scroll(function() {
      if($(this).scrollTop() > 100) { // 100pxスクロールしていたら上に戻るボタンを表示
          $(".back-to-top").fadeIn(); 
      } else {
          $(".back-to-top").fadeOut();
      }
  });
  $(".back-to-top").click(function() {
      $("body,html").animate({scrollTop:0},800); // 800msかけて上に戻る
  });
});
