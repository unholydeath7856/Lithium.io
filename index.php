<?php
$file_name = "No File Choosen";
$imagePath = "Assets/Images/placeholder.jpg";
if(isset($_FILES['image'])) {
  //if ((@$_FILES['image']['type']) == 'image/jpg' || (@$_FILES['image']['type']) == 'image/png') {
    $chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    $dir_name = substr(str_shuffle($chars),0,15);
    mkdir("Assets/Images/toGreyscale/$dir_name/");
    move_uploaded_file($_FILES['image']['tmp_name'], "Assets/Images/toGreyscale/$dir_name/".$_FILES['image']['name']);
    $imagePath = "Assets/Images/toGreyscale/$dir_name/".$_FILES['image']['name'];
  //}
}
 ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Lithium.io</title>
    <link href='https://fonts.googleapis.com/css?family=Cantarell:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="Assets/Styles/CSS/main.css" media="screen" title="no title" charset="utf-8">
  </head>
  <body>
    <header id="top" class="header">
      <div class="container">
        <img class="logo" src="Assets/Images/logo.png" alt="logo" />
        <div class="text-container">
          <h3 class="kicker">A picture is worth a thousand words</h3>
          <h3 class="title">Lithium.io: A simple greyscale application</h3>
        </div>
      </div>
    </header>

    <div class="col-1">
      <section id="about" class="about">
        <div class="container">
          <h3 class="section-header">About</h3>
          <p class="about-text">
            Lithium.io is a simple application which grayscales an image which has been submited through php then using canvas the image is greycaled and compared.
          </p>
          <h3 class="section-header">How To Use</h3>
          <p class="about-text">
            In order to use this webapp you must download an image to your computer than submit it. Second wait then it will be uploaded and greyscaled.
          </p>
        </div>
      </section>

      <section id="submit" class="submit">
        <div class="container">
          <h3 class="section-header">Submit Photo</h3>
          <form class="image-submit" action="index.php" method="post" enctype='multipart/form-data'>
            <label class="custom-upload" for="file-submit"><span class="file-icon"></span>Choose A File</label>
            <input id="file-submit" type="file" name="image" value="Submit Image" onchange="previewImage(this);"><br><br>
            <img class="placeholder-img" id="preview" src="Assets/Images/placeholder.jpg" alt="placement img" /><br>
            <input class="send" type="submit" name="submit" value="Submit">
          </form>
        </div>
      </section>
    </div>

    <div class="col-2">
      <section id="result" class="result">
        <div class="container">
          <h3 class="section-header">Result</h3>
          <div class="original">
            <img class="original-image" src=<?php if ($imagePath != "") { print($imagePath); }  ?> onload="grayScaleImage(this,true);" alt="placement img" />
          </div>
          <div class="result">
            <canvas id="greyscale" width="300" height="300"></canvas>
          </div>
        </div>
      </section>
    </div>

    <footer id="bot" class="footer">

    </footer>

    <script src="Assets/Scripts/JS/jquery.js" type="text/javascript"></script>
    <script src="Assets/Scripts/JS/app.js" type="text/javascript"></script>
  </body>
</html>
