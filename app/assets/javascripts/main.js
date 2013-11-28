$(document).ready(function() {
  createCubes();
  addEventListeners();
  addColorPalette();
});

function createCubes(){
  var $body = $("body");
  var $canvas = $("<div class='canvas'></div>");
  //#of rows
  for (var row = 0; row < 30; row++) {
    var $row = $("<div>").addClass("row");
    $canvas.append($row);
    //#of columns
    for (var col = 0; col < 50; col++) {
      var $cube = $("<div/>")
        //how big the squares are
        .css("width", 20)
        .css("height", 20)
        .addClass("cubes");
      $row.append($cube);
    }
  }
  $body.append($canvas);
}

function addEventListeners(){
  //hovers
  $(".cubes").mouseover(function() {
    $(this).addClass('hoveredGreen');
  });
  $(".cubes").mouseout(function() {
    $(this).removeClass('hoveredGreen');
  });

  //paints
  $(".cubes").mousedown(function() {
    $(this).addClass('clickedGreen');
      $(".cubes").on("mouseover", paintCLicked);
  $(".cubes").mouseup(function() {
    $(".cubes").off("mouseover", paintCLicked);
  });
  });
}

function paintCLicked() {
  $(this).addClass('clickedGreen');
}

function addColorPalette() {
  var colorArray = ["#ECF0F1", "#2ECC71", "#3498DB", "#F1C40F", "#E74C3C", "#2C3E50"];
  var $colors = $("<div>").addClass("colors");
  for (var i = 0; i < colorArray.length; i++) {
    $colors.append('<div style="background-color:' +colorArray[i]+'" id="palette-' + i + '" class="colorPalette"></div>');
  }
  $('body').append($colors);
}








