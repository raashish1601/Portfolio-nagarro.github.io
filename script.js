$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      500,
      "linear"
    );
  });
});

let lastnameln = lastname.length-1;
let index = 0;
let incre=1;
// surname=document.getElementById("surname");
setInterval(() => {
    if(incre){
        index+=1;
    }
    else{
        index-=1;
    }
    
    if (index> lastnameln){
        incre=0;
    }
    if (index==0){
        incre=1;
    }
    
