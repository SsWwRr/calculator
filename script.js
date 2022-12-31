//define all possible numbers
let numbers = 9;
//numberContainer
let numberContainer = document.getElementById("numberContainer")
//what calculator display
let result = document.getElementById("result")
//container for operators
let signContainer = document.getElementById("signContainer")
//single operator
let operator = []
//number1 operator and number 2
let equationElements = []
//whole equation
let equation = []

let firstNumber = ""
let secondNumber = ""
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
let equals = document.getElementById("=")
let onepart = []
let twopart = []
let threepart = []
let fourpart = []
let counter = 0

let erase = document.getElementById("Erase")
erase.addEventListener("click",()=>result.textContent = "")
//create an array of all the buttons
let buttons = Array.from(document.querySelectorAll(".button"));
//for each button add an event listener
buttons.forEach(button => button
    //if the button is clicked
    .addEventListener("click",
    //append the number to the result
    ()=>{
        result.append(button.textContent)
        equationElements = result.textContent
        console.log(equationElements.length)
    }));
    //create an array of all the signs
let signs = Array.from(document.querySelectorAll(".sign"))
console.log(signs)
    //for each sign add an event listener
    signs.forEach(sign => sign.addEventListener("click",()=>{
        //append the sign to the result
        if(sign.textContent != "=" && sign.textContent != "Erase"){
            result.append(" " + sign.textContent + " ")
            //save the sign so that it can be used later
            equationElements = result.textContent
            console.log(equationElements)
            equationElements = equationElements.replace(/\s/g, '')
            for(let i = 0; i < equationElements.length;i++){
                if(isNaN(equationElements[i]) == true){
                    counter++
                }
                if(counter > 1){
                    calculate()
                }
            }
            
        }
    
    }))
    //when = pressed
    equals.addEventListener("click",()=>
    {   
        //TODO
        if(equationElements.length < 2){
            alert("Before presseing = input an equation")
            return
        }
        calculate()
    })

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
function add(a,b){
    return a + b
}
function substract(a,b){
    return a - b
}
function divide(a,b){
    return a/ b
}
function multiply(a,b){
    return a * b
}
console.log(add(3,3))
console.log(substract(3,3))
console.log(divide(3,3))
console.log(multiply(3,3))
function operate(number1,operator,number2){
    let array =  number1 + operator + number2 
    for(let i = 0; i < array.length;i++){
        if(array[i] == "+"){
            return number1 + number2
        }else if(array[i] == "-"){
            return number1 - number2
        }
        else if(array[i] == ":"){
            return number1 / number2
        }
        else if(array[i] == "x"){
            return number1 * number2
        }
    }
}
function equationBuilder(number,equation){
    for(let i = 0; i < number.length;i++){
        equation.push(number[i])
    }
    return equation
}
console.log(operate(1,"+",2))
console.log(operate(1,"-",2))
console.log(operate(1,":",2))
console.log(operate(1,"x",2))
function calculate(){
    //remove whitespace from the equation
     console.log(equationElements +" lala")
     equationElements = equationElements.replace(/\s/g, '')
    //loop over the length of the equation
    for(let i = 0; i < equationElements.length;i++){
        //push the elements as numbers into a new array
        onepart.push(parseInt(equationElements[i]))
    }
    //loop over the length of the new array
    for(let i = 0; i < onepart.length;i++){
        //if an element is a number
        if(isNaN(onepart[i])  == false){
            //push it into a new array
            twopart.push(onepart[i])
        }
        //if the element is not a number
        if(isNaN(onepart[i]) == true){
            operator = equationElements[i]
            //stop looping
            break
        }
    }
    console.log(operator)
    for(let i = 0; i < onepart.length;i++){
        if(onepart[i] != twopart[i]){
            threepart.push(onepart[i])
        }
    }       
    
    console.log(twopart)
    for(let i = 0; i < threepart.length;i++){
        //if an element is a number
        if(isNaN(threepart[i])  == false){
            //push it into a new array
            fourpart.push(threepart[i])
        }
        
    }
    console.log(fourpart)
    //take the first array and convert it into numbers
    for(let i = 0; i< twopart.length;i++){
        firstNumber += twopart[i]
    }
    firstNumber = parseInt(firstNumber)
    //take the second array and convert it into numbers
    for(let i = 0; i< fourpart.length;i++){
        secondNumber += fourpart[i]
    }
    secondNumber = parseInt(secondNumber)
    equation = operate(firstNumber,operator,secondNumber)
    //check the sign and do this : numbers1 {sign} numbers 2
    onepart = []
    twopart = []
    threepart = []
    fourpart = []
    equationElements = equation
    console.log(equationElements)
    result.textContent = equation
    counter = 0
    firstNumber = ""
    secondNumber = ""
    }























