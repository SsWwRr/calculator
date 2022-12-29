let numbers = 9;
let buttonContainer = document.getElementById("buttonContainer")
for(let i = 0; i <= numbers;i++){
    let number = document.createElement("button")
    console.log(i)
    let numberName = document.createTextNode(i)
    number.className = "button"
    number.append(numberName)
    buttonContainer.append(number)
}
buttons = Array.from(document.querySelectorAll("button"))
buttons.forEach(button => button.addEventListener("click",()=>console.log(button.textContent)))
console.log(buttons)