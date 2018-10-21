
document.addEventListener("DOMContentLoaded", function(event) { 

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesMade = [];
var computerArray = [];

function startDoc() {
    document.getElementById("guessesLeft-text").innerText = "Guesses Left: " +  guessesLeft;
    document.getElementById("guessesMade-text").innerText = "Guesses Made: " + guessesMade;
    document.getElementById("wins-text").innerText = "Wins: " +  wins;
    document.getElementById("losses-text").innerText = "Losses: " +  losses;
}

startDoc();

document.onkeyup = function(event) {
    if(guessesLeft < 1) {
        alert("You have no guesses left. Loose one point");
        losses++;
        if(losses > 4) {
            alert("You lost 5 times.  Game Over");
            location.reload();
        }
        guessesLeft = 10;
        guessesMade = []
        startDoc();
        
    }
    else {

        if((event.which < 65) || (event.which > 90) ) {
            return false;
        }
    
        var userGuess = event.key + "  ";
    
        for(var i = 65; i < 91; i++)
            {
                computerArray.push(i);
                
            }
        
        var computerGuess = computerArray[Math.floor(Math.random() * computerArray.length)];
        
        guessesMade.push(userGuess.toUpperCase());
        
        var guesses = "";

        for(var z = 0; z < guessesMade.length; z++) {
           guesses += (guessesMade[z]);
        }

        guessesLeft--;
        
        if(event.which === computerGuess) {
            wins++;
            alert("You win one point");
            if(wins > 4) {
                
                alert("YOU WIN THE GAME!");
                location.reload();
            }
          
            else {
                guessesLeft = 10;
                guessesMade = []
                startDoc();
            }
        }
        

        startDoc();

        
    }
        
    
    };

  });

