let numbers = 9;
let numberContainer = document.getElementById("numberContainer")
let result = document.getElementById("result")
let signContainer = document.getElementById("signContainer")

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
    numberContainer.append(number)
}
createAbutton("Erase")
createAbutton(":")
createAbutton("x")
createAbutton("+")
createAbutton("-")
createAbutton("=")
let erase = document.getElementById("Erase")
erase.addEventListener("click",()=>result.textContent = "")
//create an array of all the buttons
buttons = Array.from(document.querySelectorAll(".button"));
//for each button add an event listener
buttons.forEach(button => button
    //if the button is clicked
    .addEventListener("click",
    //append the number to the result
    ()=>result.append(button.textContent)));

function createAbutton(name){
    let bttn = document.createElement("button")
    //assign a name to a button
    let bttnName = document.createTextNode(name)
    //add a class 
    bttn.className = "sign"
    bttn.id = name
    //append a name to a button
    bttn.append(bttnName)
    //append  button to the container
    signContainer.append(bttn)
}