    $(document).ready(function () { 
    var win = 0;
    var loss = 0;
    var tie = 0;
    var player1;
    var player2;
    var rps = [ "Rock", "Paper", "Scissors" ];
    var newGameBtn = $('.restart');
    var btn = $('.hoverable');

    btn.mouseenter( function() {
        $(this).addClass('pulse');
    }).mouseleave( function() {
        $(this).removeClass('pulse');
    });

    //disable refresh button if the game hasn't been played
    if ($('#result1' === "---")) {
        newGameBtn.addClass('disabled');
    }
    else {
        console.log('Error!');
    }
        newGameBtn.click( function() {
        location.reload();
    });

    function determineWinner(player1, player2) {
        if (player1 === player2) {
            ++tie;
        }
        else if ( (player1 === 'Rock' && player2 === 'Paper') || (player1 === 'Paper' && player2 === 'Scissors') || (player1 === 'Scissors' && player2 === 'Rock') ) {
            ++loss;
        }
        else if ( (player1 === 'Rock' && player2 === 'Scissors') || (player1 === 'Paper' && player2 === 'Rock') || (player1 === 'Scissors' && player2 === 'Paper') ) {
            ++win;
        }
        else {
            alert('What could you possibly have done?');
        }
        $('#score').text( win + ' W' + ' - ' + tie + ' T' + ' - ' + loss + ' L');
    }

    function computerChoice() {
        var result = Math.floor(Math.random()*3);
        $('#result2').text(
            rps[result]
        );
        player2 = rps[result];
        determineWinner(player1, player2);
    }

    //click functionality. Enable refresh button and start the game tracking
    $('.rps').click( function() {
        var playerChoice = $('#result1');
        newGameBtn.removeClass('disabled');

        if ($(this).attr('id') === "rock") {
            playerChoice.text('Rock');
        }
        else if ($(this).attr('id') === "paper") {
            playerChoice.text('Paper');
        }
        else if ($(this).attr('id') === "scissors") {
            playerChoice.text('Scissors');
        }
        else {
            alert('What could you possibly have done?');
        }
        player1 = playerChoice.text();
        computerChoice();
    });
});