let numbers = 9;
let buttonContainer = document.getElementById("buttonContainer")
let result = document.getElementById("result")
//create a button for every possible number
for(let i = 0; i <= numbers;i++){
    //create a button
    let number = document.createElement("button")
    //assign a number to each button
    let numberName = document.createTextNode(i)
    //add a class 
    number.className = "button"
    //append each number to a button
    number.append(numberName)
    //append each button to the container
    buttonContainer.append(number)
}
//create an array of all the buttons
buttons = Array.from(document.querySelectorAll("button"));
//for each button add an event listener
buttons.forEach(button => button
    //if the button is clicked
    .addEventListener("click",
    //append the number to the result
    ()=>result.append(button.textContent)));
