
$(function(){

/*	alert("Player 1 is X, and Player 2 is O.");*/

var turn = 0;

var answer =  [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];

	$('.square').on("click", function(){		

		if ($( this ).hasClass( "empty" )){

			if (turn % 2 == 0) {
				turn += 1;
				console.log('turn'+turn);
				$( this ).removeClass("empty");
				$(this).text("X");

				var userMoves = [];
			    for (var i = 0; i <= answer.length; i += 1) {

			        if ($(".square").eq(answer[i]).text() === "X") {

			          userMoves.push(answer[i]);
			          alert(userMoves)
			          console.log(userMoves.length)
			        }
			    }

			    if (userMoves.length === 3) {
			        alert("you won");
			      } else {
			        userMoves = [];
			     	}
				$('.messages').html("<p>Player 2's turn</p>");

			}

			else {
				turn += 1;
				console.log('turn'+turn);
				$( this ).removeClass("empty");
				$(this).text("O");	
				var userMoves = [];
     			for (var i = 0; i <= answer.length; i += 1) {

        		if ($(".square").eq(answer[i]).text() === "O") {
			          userMoves.push(answer[i]);
			          alert(userMoves)
			          console.log(userMoves.length)
			        }
			      }

			      if (userMoves.length === 3) {
			        alert("you won");
			      } else {
			        userMoves = [];
			      }		
				$('.messages').html("<p>Player 1's turn</p>");
			};
			
	} 

		else {

			alert("Already selected; try again");

		}


	});

});



