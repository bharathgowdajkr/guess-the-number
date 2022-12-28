'use strict';

console.log(document.querySelector('.message').textContent);

var randNum = ''

if (randNum == '') {
    randNum = Math.floor(Math.random() * 20) + 1;
    console.log("if", randNum);
}

document.querySelector('.check').addEventListener('click', function () {
    console.log(randNum);

    if (document.querySelector('.guess').value == randNum) {
        document.querySelector('.message').textContent = '🥳Correct number🤩'
        document.querySelector('.number').textContent = randNum
        if (document.querySelector('.score').textContent > document.querySelector('.highscore').textContent) {
            document.querySelector('.highscore').textContent = document.querySelector('.score').textContent
        }
        document.querySelector('.boddy').style.background = 'green';

    } else if (document.querySelector('.guess').value > randNum && document.querySelector('.guess').value < 21) {
        document.querySelector('.message').textContent = '🫣greater than ? number🫣'
        document.querySelector('.score').textContent = document.querySelector('.score').textContent - 1
        document.querySelector('.boddy').style.background = 'red';

    } else if (document.querySelector('.guess').value < randNum && document.querySelector('.guess').value < 21) {
        document.querySelector('.message').textContent = '🫣lesser than ? number🫣'
        document.querySelector('.score').textContent = document.querySelector('.score').textContent - 1
        document.querySelector('.boddy').style.background = 'red';
    } else if (document.querySelector('.guess').value > 21 || document.querySelector('.guess').value < 0) {
        document.querySelector('.message').textContent = '😵oh no you going out of box😵'
        document.querySelector('.score').textContent = document.querySelector('.score').textContent - 1
        document.querySelector('.boddy').style.background = '#00bfff';
    } 
})

document.querySelector('.again').addEventListener('click', function () {
    randNum = Math.floor(Math.random() * 10) + 1;
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.guess').value = ''
    document.querySelector('.number').textContent = '?'
    if (document.querySelector('.score').textContent > document.querySelector('.highscore').textContent) {

        document.querySelector('.highscore').textContent = document.querySelector('.score').textContent

    }
    document.querySelector('.score').textContent = 20
    document.querySelector('.boddy').style.background = 'black';

})