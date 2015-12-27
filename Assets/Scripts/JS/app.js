var lithiumApp = (function ($) {
  //variables
  var currentSlide = 1;
  var clicked = false;
  //functions
  var carousel = function () {
    var loop = setInterval(next,10000);
    $(".header").css("background-size", "cover");
    $(".header").css("background-image", "url(Assets/Images/slide"+currentSlide+".jpg)");

    function next() {
      currentSlide += 1;
      if (currentSlide == 5) {
        currentSlide = 1;
      }
      $(".header").css("background-image", "url(Assets/Images/slide"+currentSlide+".jpg)");
    }
  }

  var ignition = function () {
    carousel();
  }

  //return
  return {
    start: ignition
  };

})(jQuery);

$(document).ready(function () {
  lithiumApp.start();
});
