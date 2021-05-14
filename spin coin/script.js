'use strict'

const startNew = document.getElementById('new');
const headorTailsSpin = document.getElementById('coin');
const spinButton = document.getElementById('spin');

const playerName = document.getElementById('player-name');
const playerbetMoney = document.getElementById('bet-money');
const playerselectOption = document.getElementById('select');
const buttonAdd = document.getElementById('btn-add');
const listAdd = document.querySelector('.list-add')


var currentBet = 0;
var currentBet1 = 0;

var totalMoney = 0;
var wonMoney = 0;

var headorTailsSpinEl;


// const headorTailsSpinEl = Math.trunc(Math.random() * 2) + 1;


// 
spinButton.addEventListener('click', () => {
    let coin = ['H', 'T'];
    headorTailsSpinEl = Math.trunc(Math.random() * 2);
    document.querySelector('.progresssteps').innerHTML = 'Spinning in progress...Wait for 3 seconds'
    setTimeout(() => {
        
        document.getElementById('coin').textContent = coin[`${headorTailsSpinEl}`]
        
    }, 3000);
    setTimeout(() => {
            document.querySelector('.progresssteps').style.display = "none";
            document.getElementById('contest').textContent = 'game is in progress'
            
            
        }, 3000);
    setTimeout( () => {
        winner();
    },5000)
    localStorage.setItem('headorTailsSpinEl', headorTailsSpinEl);
    

});

buttonAdd.addEventListener('click', () => {
    addItem()

})


function select() {
    if (document.getElementById('val1').selected) {
        currentBet += Number(playerbetMoney.value)
        console.log(currentBet)
    } else if (document.getElementById('val2').selected) {
        currentBet1 += Number(playerbetMoney.value)
    }
}

var items = JSON.parse(localStorage.getItem('head-or-tails')) || [];

function addItem() {
    // item = inputBox.value;
    // inputBox = document.getElementById('player-name')
    var playerName = document.getElementById('player-name');
    var item = playerName.value;
    var item1 = playerbetMoney.value
    var item2 = playerselectOption.value
    winner()


    if (item === '') {
        return document.getElementById('list').innerHTML = "you need to add name and bet";
    }
    items.push({
        playerName: item,
        playerbetMoney: item1,
        playerselectOption: item2
    })
    localStorage.setItem('head-or-tails', JSON.stringify(items));
    listItems()
    // inputBox.value = ''
    playerName.value = ''
    playerbetMoney.value = ''
    playerselectOption.value = ''
}

function listItems() {
    var list = ''

    for (var i = 0; i < items.length; i++) {
        list += "<li>"
        list += items[i].value + " "

    }
    document.getElementById('list').innerHTML = ''
    const add = document.createElement('li')
    add.innerHTML = `${playerName.value} , ${playerbetMoney.value} : ${playerselectOption.value}`
    listAdd.appendChild(add);
    select()
    document.querySelector('.heads-total').innerHTML = `Total bets in heads ${currentBet}`
    document.querySelector('.tails-total').innerHTML = `Total bets in tails ${currentBet1}`



}

function winner() {

    // const headorTailsSpinEl = Math.trunc(Math.random() * 2) + 1;
    setTimeout(() => {
       
        if (headorTailsSpinEl === 0) {
            document.getElementById('contest').innerHTML = ''
            document.getElementById('list').innerHTML = ''
            const add = document.createElement('li')
            add.innerHTML = `${playerName} , ${totalMoney += currentBet * 2} Won(${wonMoney += currentBet})`
            document.getElementById('contest').appendChild(add);

        } else if (headorTailsSpinEl === 1) {
            // document.getElementById('winner-contest').innerHTML = 'no bets added yet'
            document.getElementById('contest').innerHTML = ''
            document.getElementById('list').innerHTML = ''
            const add = document.createElement('li')
            add.innerHTML = `${playerName} , ${totalMoney += currentBet1 * 2} Won(${wonMoney += currentBet1})`
            document.getElementById('contest').appendChild(add);
        }
    }, 3)
}

startNew.addEventListener('click', () => {
    location.reload()
}) 
