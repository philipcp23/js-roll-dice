/*Pig Game
*/
let scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', ()=> {    
    // 1. Random number
    let dice = Math.floor(Math.random() *6) + 1;
    // 2. Display result
    let diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // 3. Update the round score IF the rolled number was NOT a 1
});










// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// let x = document.querySelector('#score-0').textContent;





