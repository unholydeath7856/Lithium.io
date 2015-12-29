var lithiumApp = (function ($) {
  //variables
  var currentSlide = 1;
  var clicked = false;
  //functions
  var carousel = function () {
    var loop = setInterval(next,10000);
    $(".header .container").css("background-size", "cover");
    $(".header .container").css("background-image", "url(Assets/Images/slide"+currentSlide+".jpg)");

    function next() {
      currentSlide += 1;
      if (currentSlide == 5) {
        currentSlide = 1;
      }
      $(".header").css("background-image", "url(Assets/Images/slide"+currentSlide+".jpg)");
    }
  }

  var showSections = function() {
    $(window).scroll(function () {
      var scrollOffsetY = window.pageYOffset;
      var scrollChange = 50;
      if (scrollOffsetY > scrollChange) {
        $('.about .container').fadeIn(3500);
        $('.header').css("height","650");
        $('.about').css("transition","transform 2s");
        $('.about').css("transform","rotateY(0deg)");
        $('.result').css("transition","transform 2s");
        $('.result').css("transform","rotateY(0deg)");
        $('.result .container').fadeIn(3500);
        $('.original-image').fadeIn(3500);
      }
      if (scrollOffsetY > scrollChange + 100) {
        $('.container').fadeIn(3500);
        $('.container').css("display","block");
        $('.submit').css("transition","transform 2s");
        $('.submit').css("transform","rotateY(0deg)");
      }
    });
  }

  var ignition = function () {
    carousel();
    showSections();
  }

  //return
  return {
    start: ignition
  };

})(jQuery);

$(document).ready(function () {
  lithiumApp.start();
});

function previewImage (input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var imgName = $('body').find('#preview').attr('name');
      $('.file-name').text(imgName);
      $('#preview').attr('src',e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}
