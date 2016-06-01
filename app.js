$(function(){

alert("TIC-TAC TOE: Player 1 is X, and Player 2 is O.");

var turn = 0;

$('#reset').on("click", function(){
location.reload(); 
});

$('.square').on("click", function(){	

	if ($( this ).hasClass( "empty" )){
			
			
			if (turn % 2 == 0) {
				console.log('turn'+turn);
				$( this ).removeClass("empty");
				$( this ).html("X");
				check("X");
				turn += 1;	
				$('.messages').html("<p>Player 2's turn</p>");

			}

			else {
				console.log('turn'+turn);
				$( this ).removeClass("empty");

				$( this ).html("O");
				check("O");
				turn += 1;	
				$('.messages').html("<p>Player 1's turn</p>");
			};
		
	} 

	else {
			alert("Already selected; try again");
	}


	});




});



function check(xo){

	var answers = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ];
	

    var won = false;
    var userMoves = [];

 	for (var i = 0; i < answers.length; i += 1) {

            for (var j = 0; j < answers[i].length; j += 1) {

                if ($(".square").eq(answers[i][j]).text() === xo) {

                    userMoves.push(answers[i][j]);
                }
            }

            if (userMoves.length === 3) {
                won = true;
            } else {
                userMoves = [];
            }
        }

        if (won) {
        	if (xo == "X") {
           		alert("Player 1 wins");
           		location.reload(); 
           	}
            else {
            	alert("Player 2 wins"); 
            	location.reload(); 
        	}

            }
       }






