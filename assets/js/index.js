// Loan 1


const calculatorRangeFirst = document.getElementById("myfirstRange")
const firstSliderValue = document.getElementById("firstSliderValue");


const minRange1 = calculatorRangeFirst.min
const maxRange1 = calculatorRangeFirst.max
const valueRange1 = calculatorRangeFirst.value


calculatorRangeFirst.style.background = `linear-gradient(to right, red 0%, red ${(valueRange1-minRange1)/(maxRange1-minRange1)*100}%, #DEE2E6 ${(valueRange1-minRange1)/(maxRange1-minRange1)*100}%, #DEE2E6 100%)`

calculatorRangeFirst.oninput = function() {
  this.style.background = `linear-gradient(to right, red 0%, red ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 100%)`
};



// Loan 2

const calculatorRangeSecond = document.getElementById("mySecondRange")

const minRange2 = calculatorRangeSecond.min
const maxRange2 = calculatorRangeSecond.max
const valueRange2 = calculatorRangeSecond.value

calculatorRangeSecond.style.background = `linear-gradient(to right, red 0%, red ${(valueRange2-minRange2)/(maxRange2-minRange2)*100}%, #DEE2E6 ${(valueRange2-minRange2)/(maxRange2-minRange2)*100}%, #DEE2E6 100%)`

calculatorRangeSecond.oninput = function() {
  this.style.background = `linear-gradient(to right, red 0%, red ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 100%)`
};



// Loan 3

const calculatorRangeThree = document.getElementById("myThreeRange")

const minRange3 = calculatorRangeThree.min
const maxRange3 = calculatorRangeThree.max
const valueRange3 = calculatorRangeThree.value

calculatorRangeThree.style.background = `linear-gradient(to right, red 0%, red ${(valueRange3-minRange3)/(maxRange3-minRange3)*100}%, #DEE2E6 ${(valueRange3-minRange3)/(maxRange3-minRange3)*100}%, #DEE2E6 100%)`

calculatorRangeThree.oninput = function() {
  this.style.background = `linear-gradient(to right, red 0%, red ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 100%)`
};
