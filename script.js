let numbers = 9;
let calculatorContainer = document.getElementById("calculatorContainer")
for(let i = 0; i <= numbers;i++){
    let number = document.createElement("button")
    console.log(i)
    let numberName = document.createTextNode(i)
    number.append(numberName)
    calculatorContainer.append(number)
}