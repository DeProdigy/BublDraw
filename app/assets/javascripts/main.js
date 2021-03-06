$(document).ready(function() {
  createcircles();
  addColorPalette();
  addEventListeners();
  window.colorChosen = "palette-1";
  mixpanel.track("Main Page Visit");
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
        .css("width", 19)
        .css("height", 19)
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
    //add that color to the circle that was clicked
    $(this).addClass(window.colorChosen);
    //start painting
    $(".circles").on("mouseover", paintCLicked);
    //user releases click, stop painting
    $(".circles").mouseup(function() {
      $(".circles").off("mouseover", paintCLicked);
    });

  });

  //change the cursor to a paint brush
  // $(".canvas").on("mouseover", paintBrush);
  // $(".canvas").on("mouseout", removePaintBrush);

  //select color
  $(".colors").on("click", function(){
    var color = this.id;
    window.colorChosen = color;
  });
}

function paintBrush() {
  $('body').addClass('paintbrush');
}

function removePaintBrush() {
  $('body').removeClass('paintbrush');
}

function hoveredOn() {
  $(this).addClass('hovered-' + window.colorChosen);
}

function hoveredOff() {
  $(this).removeClass('hovered-' + window.colorChosen);
}

function paintCLicked() {
  //remove previous classes to stack more colors on top of each other
  $(this).removeClass();
  $(this).addClass('circles');
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








