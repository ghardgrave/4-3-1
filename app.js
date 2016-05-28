
$(function(){

	alert("Player 1 is X, and Player 2 is O.");

	var turn = 0;

	var gameOver = false;
 
	$('.square').click(function(){

		if ($( this ).hasClass( "empty" )){

			if (turn % 2 == 0) {
			$(this).removeClass( 'empty' ).addClass('x');
			winCheck();
			turn += 1; 
			console.log(turn);
			$('.messages').html("<p>Player 2's turn</p>");

			}

			else  {
			$(this).removeClass( 'empty' ).addClass('o');
			winCheck();
			turn += 1; 
			console.log(turn);
			$('.messages').html("<p>Player 1's turn</p>")
			};
	
		}

		else if (!$( this ).hasClass( "empty" )){

			alert("Already selected; try again");

		}


});

});

var wins = [['#a1', '#b1', '#c1'], ['#a2','#b2','#c2'], ['#a3','#b3','#c3'], ['#a1','#a2','#a3'], ['#b1','#b2','#b3'], ['#c1','#c2','#c3'], ['#a1','#b2','#c3'], ['#a3','#b2','#c1']];


function winCheck(wins) {

	for (var k = 1; k <=7 ; k++){
         
		if ($( wins[k] ).hasClass( "x" )){
			console.log("x wins");
		}

		else if ($( wins[k] ).hasClass( "o" )){
			console.log("o wins");
		}
		} 
	  
}




/* WINNING COMBOS
    for (k in this.wins){
        var pattern = this.wins[k];

        var p = this.board[pattern[0]] + this.board[pattern[1]] + this.board[pattern[2]];
            if (p == "XXX") {
              return "X";  // X Won!
            } else if (p == "OOO") {
              return "O";  // O Won!
            }
          }

          // Check if all spaces in the board are filled, then its a Cat's game
          var cnt = 0;
          for (s in this.board) {
            if (this.board[s]) { cnt+=1; }
          }
          if (cnt == 9) {
            return "Cat";  // Cat's game!
          }
      }
    };


*/