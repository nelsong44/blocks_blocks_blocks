
$(onReady); // $(document).Ready;

function onReady () {
  console.log('js');

  // call createBox() on button click to create a new box
  $('.createBox').on('click', createBox);
  console.log('box created');

  // call changeBoxColor when box is clicked to change color of box
  $('.boxContainer').on('click', '.box', changeBoxColor);
  console.log('box color changed');
}



function createBox() {
  console.log('createBox activated successfully');

//function to create a new box every time button is clicked
var $addBox = $('<div class="box">');
$('.boxContainer').append($addBox);

//call randomColor()
var random = randomNumber(1, 5); // set (min, max) of color options- 5 color options

//assign an initial random color to a box upon its loading
randomColor($addBox);
function randomColor(x) {
  if(random === 1) {
    $(x).css('background-color', 'orange');
  }
  else if(random === 2) {
    $(x).css('background-color', 'blue');
  }
  else if(random === 3) {
    $(x).css('background-color', 'purple');
  }
  else if(random === 4) {
    $(x).css('background-color', 'red');
  }
  else if(random === 5) {
      $(x).css('background-color', 'green');
}
}}

function changeBoxColor() {
  console.log('changeBoxColor activated successfully');
//function to change color of box to black
  $(this).css('background-color', 'black');
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}










onReady();
