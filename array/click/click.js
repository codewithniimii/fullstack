const incrementBtn = document.querySelector('#increment')
const decrementBtn = document.querySelector('#decrement')
const counterEl = document.getElementById('counter')
let counter = 0

function incrementCounter(){
counter++
counterEl.innerText = counter
}

function decrementCounter(){
    counter--
    counterEl.innerText = counter
    }
    
incrementBtn.addEventListener('click', incrementCounter)
decrementBtn.addEventListener('click', decrementCounter)