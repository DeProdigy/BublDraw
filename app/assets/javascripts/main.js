$(document).ready(function() {
  createcircles();
  addColorPalette();
  addEventListeners();
  window.colorChosen = "palette-1";
});

function createcircles(){
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
        .addClass("circles");
      $row.append($cube);
    }
  }
  $body.append($canvas);
}

function addEventListeners(){
  //hovers
  //user hover on and off the circle
  $(".circles").on('mouseover', hoveredOn);
  $(".circles").on('mouseout', hoveredOff);

  //paints
  //user clicks down
  $(".circles").on('mousedown', function() {
    //shut off hovers
    $(".circles").off('mouseover', hoveredOn);
    $(".circles").off('mouseout', hoveredOff);
    //add that color to the circle that was clicked
    $(this).addClass(window.colorChosen);
    //start painting
    $(".circles").on("mouseover", paintCLicked);
    //user releases click, stop painting
    $(".circles").mouseup(function() {
      $(".circles").off("mouseover", paintCLicked);
    });

  });

  //select color
  $(".colors").on("click", function(){
    var color = this.id;
    window.colorChosen = color;
  });
}

function hoveredOn() {
  $(this).addClass(window.colorChosen);
}

function hoveredOff() {
  $(this).removeClass(window.colorChosen);
}

function paintCLicked() {
  $(this).addClass(window.colorChosen);
}

function addColorPalette() {
  var colorArray = ["#ECF0F1", "#2ECC71", "#3498DB", "#F1C40F", "#E74C3C", "#2C3E50"];
  var $colors = $("<div>").addClass("colorPalette");
  for (var i = 0; i < colorArray.length; i++) {
    $colors.append('<div style="background-color:' +colorArray[i]+'" id="palette-' + i + '" class="colors"></div>');
  }
  $('body').append($colors);
}








