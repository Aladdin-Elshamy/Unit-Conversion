const input = document.querySelector(".input");
let value = input.textContent;
const meterInput = document.querySelector(".meter-input");
const feetResult = document.querySelector(".feet-result");
const litersInput = document.querySelector(".liters-input");
const gallonsResult = document.querySelector(".gallons-result");
const kilosInput = document.querySelector(".kilos-input");
const poundsResult = document.querySelector(".pounds-result");
const feetInput = document.querySelector(".feet-input");
const meterResult = document.querySelector(".meter-result");
const gallonsInput = document.querySelector(".gallons-input");
const litersResult = document.querySelector(".liters-result");
const poundsInput = document.querySelector(".pounds-input");
const kilosResult = document.querySelector(".kilos-result");
const converButton = document.querySelector("button");
console.log(input.textContent)
input.addEventListener("input",function(){
    value=input.textContent;
    if(input.textContent === ''){
        value = 0;
    }
})
input.addEventListener("keydown",function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        converButton.click();
    }
})
converButton.addEventListener("click",function(){
    meterInput.textContent = value;
    feetInput.textContent = value;
    litersInput.textContent = value;
    gallonsInput.textContent = value;
    kilosInput.textContent = value;
    poundsInput.textContent = value;
    meterResult.textContent = (value / 3.281).toFixed(3);
    feetResult.textContent = (value * 3.281).toFixed(3);
    gallonsResult.textContent = (value * .264).toFixed(3);
    litersResult.textContent = (value / .264).toFixed(3);
    kilosResult.textContent = (value / 2.204).toFixed(3);
    poundsResult.textContent = (value * 2.204).toFixed(3);
})