
function getRandom (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let divOne = {
  value: 1,
  roll: function () {
    this.value = getRandom(1, 6)
    return this.value
  }
}
let divTwo = {
  value: 1,
  roll: function () {
    this.value = getRandom(1, 6)
    return this.value
  }
}

function printDices (one, two) {

  let divOneSelector = document.querySelector('#dice-1');
  let divTwoSelector = document.querySelector('#dice-2');

  divOneSelector.style['background'] = `url(/images/inverted-dice-${one}.svg) no-repeat`
  divTwoSelector.style['background'] = `url(/images/inverted-dice-${two}.svg) no-repeat`
}

let button = document.querySelector('.button')
button.addEventListener('click', function () {
  printDices(divOne.roll(), divTwo.roll())
})

printDices(divOne.value, divTwo.value)
