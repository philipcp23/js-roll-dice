/*Pig Game
*/
let scores, currentScore, activePlayer, gamePlaying = true;

init();

// NEW GAME
document.querySelector('.btn-new').addEventListener('click', init);

// ROLL DICE
document.querySelector('.btn-roll').addEventListener('click', ()=> { 
    if(gamePlaying) {
        // 1. Random number
        let dice = Math.floor(Math.random() *6) + 1;
        // 2. Display result
        let diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        // 3. Update the current score IF the rolled number was NOT a 1
        if(dice !== 1) {
            // Add score
            currentScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = currentScore;
        } else {
            // Next player
            nextPlayer();       
        }        
    }
});

// HOLD
document.querySelector('.btn-hold').addEventListener('click', ()=> {
    if(gamePlaying) {
        // Add current score to total score
        scores[activePlayer] += currentScore;
        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // Check if player won the game
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false; 
        } else {
            // Next player
            nextPlayer();
        }
    }  
});


// functions
function init() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;   
    currentScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';    
}