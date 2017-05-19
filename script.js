
$(onReady); // shorthand of $(document).ready(function(){});

function onReady () {
  console.log('js linked');

  // call createBox() on button - click to create a new box
  $('.createBox').on('click', createBox);

  // call boxColorToBlack() when box is clicked to change color of box
  $('.boxContainer').on('click', '.box', boxColorToBlack);
}


//function to create a new box every time button is clicked
function createBox() {
  console.log('box created');


  var $addBox = $('<p class="box">');
  $('.boxContainer').append($addBox);

  //call randomNumber()
  var random = randomNumber(1, 5); // set (min, max) of color options- 5 color options

  //assign an initial random color to a box upon its creation
  //calling randomColor() inside createBox() so they both run at same time
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

//function to change color of box to black
function boxColorToBlack() {
  console.log('box color changed to black');

  $(this).css('background-color', 'black');
}

//randomNumber() generate a random number rounded down to nearest whole number
//to be assigned to a color
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
