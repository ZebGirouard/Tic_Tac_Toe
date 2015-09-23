var squares = [1,2,3,4,5,6,7,8,9];
var computerSquares = [];
var humanSquares = [];
var winConditions = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var computerMark = 'X';
var humanMark = 'O';
var gameEnded;
var startGame = function() {
  $('button').each(function() {
    $(this).text('');
  });
};  
$(document).ready(function() {
  startGame();
  $('button').each(function() {
    $(this).click(function() {
      endGame = function() {
        humanSquares = [];
        computerSquares = [];
        squares = [1,2,3,4,5,6,7,8,9];
        $('button').text('');
        gameEnded = true;
      }
      gameEnded = false;
      //mark human move
      humanSquare = $(this)
      humanSquare.text(humanMark);
      console.log(humanSquare);
      humanSquare = parseInt(humanSquare[0].id);
      humanSquares.push(humanSquare);
      //remove selection from remaining squares
      console.log("The human played in square "+humanSquare);
      humanIndex = squares.indexOf(humanSquare);
      console.log("Human index is..."+humanIndex);
      squares.splice(humanIndex,1);
      
      //Check if human won
      winConditions.forEach(function(winCondition, index, array) {
        if (winCondition.every(function(val) { 
          return humanSquares.indexOf(val) >= 0; })) {
          alert("Human's a winner!");
          endGame();
        }
      });
      if (squares.length === 0) {
        alert("It's a tie!");
        endGame();
      }
      if (!gameEnded) {
        computerIndex = Math.floor(Math.random()*squares.length);
        computerSquare = squares[computerIndex];
        computerSquares.push(computerSquare);
        console.log("The computer played in "+computerSquare);
        $('#'+squares[computerIndex]).text(computerMark);
        squares.splice(computerIndex,1);
        console.log(squares);
        //Check if computer won
        winConditions.forEach(function(winCondition, index, array) {
          if (winCondition.every(function(val) { return computerSquares.indexOf(val) >= 0; })) {
            alert("Computer's a winner!");
            endGame();
          }
        });
      }
      else {
        console.log(gameEnded);
      }
    });
  });
});