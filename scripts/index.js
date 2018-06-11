
let divOneSelector = document.querySelector('#dice-1');
let divTwoSelector = document.querySelector('#dice-2');
let button = document.querySelector('.button');


let divOne = {
  value: 6,
  roll: function(){
    let rollOne = Math.floor(Math.random() * divOne.value + 1);
    return divOneSelector.className = `dice_${rollOne}`;
  }
}

let divTwo = {
  value: 6,
  roll: function(){
    let rollTwo = Math.floor(Math.random() * divTwo.value + 1);
    return divTwoSelector.className = `dice_${rollTwo}`;
  }
}

button.addEventListener('click', function(){
  divOne.roll()
  divTwo.roll()
})
