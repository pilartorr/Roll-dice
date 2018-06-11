
let divOneSelector = document.querySelector('#dice-1')
let divTwoSelector = document.querySelector('#dice-2')
let button = document.querySelector('.button')

let divOne = {
  value: () => Math.floor(Math.random() * 6 + 1),
  roll: function () {
    return divOneSelector.className = `dice_${divOne.value()}`
  }
}

let divTwo = {
  value: () => Math.floor(Math.random() * 6 + 1),
  roll: function () {
    return divTwoSelector.className = `dice_${divTwo.value()}`
  }
}

button.addEventListener('click', function () {
  divOne.roll()
  divTwo.roll()
})
