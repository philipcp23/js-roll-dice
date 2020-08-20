/*Pig Game
*/
let scores, currentScore, activePlayer;

scores = [0, 0];
currentScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

setCurrentZero();
setScoreZero();

// NEW GAME
document.querySelector('.btn-new').addEventListener('click', ()=> {
    setCurrentZero();
    setScoreZero();
    removeDice();
    setActivePanelForNewGame();
 
});

// ROLL DICE
document.querySelector('.btn-roll').addEventListener('click', ()=> {    
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
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        setCurrentZero();
        toggleActivePanel();


       // document.querySelector('.player-0-panel').classList.remove('active');
       // document.querySelector('.player-1-panel').classList.add('active');
        removeDice();
       
    }
});

// HOLD
document.querySelector('.btn-hold').addEventListener('click', ()=> {
    toggleActivePanel();
})





// functions
function toggleActivePanel() {
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function setScoreZero () {
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
}

function setCurrentZero () {
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
}

function removeDice() {
    document.querySelector('.dice').style.display = 'none';
}

function setActivePanelForNewGame() {
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}








// ;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// let x = document.querySelector('#score-0').textContent;





