$(document).ready(function(){
  var x = "x";
  var o = "o";
  var spot = $('#board li')
  var turns = 0;
  
  // Spot vars
  var spot1 = $('#spot1');
  var spot2 = $('#spot2');
  var spot3 = $('#spot3');
  var spot4 = $('#spot4');
  var spot5 = $('#spot5');
  var spot6 = $('#spot6');
  var spot7 = $('#spot7');
  var spot8 = $('#spot8');
  var spot9 = $('#spot9');
  
  // Click handler = Place x/o on the board per play - checks if theres a winner or if it's a tied game.
  $('#board li').click(function(){
    if(turns == 9){
      alert('Tie Game');
      clearBoard(spot);
    } else if($(this).hasClass('disable')){
      alert('This spot is already filled');
    } else if(turns%2 == 0){
      takeTurn(this, o);
    } else {
      takeTurn(this, x);  
    }
  });
    
  // Reset button - click handler
  $("#reset").click(function(){
    clearBoard(spot);
  });

  // Place an x/o in box on grid clicked on (depending on turn), and then checks if there's a winner.
  function takeTurn(box, userPlay){
      turns++;
      $(box).text(userPlay);
      $(box).addClass('disable ' + userPlay);
      checkWinner(userPlay)
  }
  // Check to see if any of the combos are met where classes are the same, horizontally, vertically or diagonally in the grid.
  function checkWinner(turnInput){
    if(spot1.hasClass(turnInput) && spot2.hasClass(turnInput) && spot3.hasClass(turnInput) ||
      spot4.hasClass(turnInput) && spot5.hasClass(turnInput) && spot6.hasClass(turnInput) ||
      spot7.hasClass(turnInput) && spot8.hasClass(turnInput) && spot9.hasClass(turnInput) ||
      spot1.hasClass(turnInput) && spot4.hasClass(turnInput) && spot7.hasClass(turnInput) ||
      spot2.hasClass(turnInput) && spot5.hasClass(turnInput) && spot8.hasClass(turnInput) ||
      spot3.hasClass(turnInput) && spot6.hasClass(turnInput) && spot9.hasClass(turnInput) ||
      spot1.hasClass(turnInput) && spot5.hasClass(turnInput) && spot9.hasClass(turnInput) ||
      spot3.hasClass(turnInput) && spot5.hasClass(turnInput) && spot7.hasClass(turnInput) ){
      alert('Winner: ' + turnInput);
      clearBoard(spot);
    }
  }
  // Clears the board for a new game - zeros turn counter, removes classes and text from grid.
  function clearBoard(gridSpace){
    $(gridSpace).text(' ');
    $(gridSpace).removeClass('disable');
    $(gridSpace).removeClass('o');
    $(gridSpace).removeClass('x');
    turns = 0;
  }

}); 