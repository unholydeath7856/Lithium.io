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

function grayScaleImage (image, bPlaceImage) {
  var myCanvas = document.getElementById('greyscale');
  var myCanvasContext = myCanvas.getContext("2d");
  var imageWidth = image.width;
  var imageHeight = image.height;

  myCanvas.width = image.width;
  myCanvas.height = image.height;
  myCanvasContext.drawImage(image,0,0);

  var imageData = myCanvasContext.getImageData(0,0,imageWidth,imageHeight);

  for (var j = 0; j < imageData.height; j++) {
    for (var i = 0; i < imageData.width; i++) {
      var index = (i*4) * imageData.width + (j*4);
      var red = imageData.data[index];
      var green = imageData.data[index+1];
      var blue = imageData.data[index+2];
      var alpha = imageData.data[index+3];
      var average = (red+green+blue)/3;
      imageData.data[index] = average;
      imageData.data[index+1] = average;
      imageData.data[index+2] = average;
      imageData.data[index+3] = alpha;
    }
  }
  if (bPlaceImage) {
    
  }
  return myCanvas.toDataURL();
}
