//applying an event listener to the Window object 
//when the window loads, this function will be executed
window.onload = function(){
    console.log("hello world");
    //selecting the element from the DOM with id="calculate"
    //add an event listener so that the anonymous function provided 
    //is executed when the element is clicked. 
    document.getElementById("calculate").addEventListener("click",function(){
        //retrieve values from user input on the form
        let num1FromForm = document.getElementById("num1").value;
        let num2FromForm = document.getElementById("num2").value;
        let chosenOperation;
        let operationRadios = document.getElementsByName("operation");
        for (let i=0; i < operationRadios.length; i++) {
            if (operationRadios[i].checked) {
                chosenOperation = operationRadios[i].value;
            }
        }
        console.log(num1FromForm);
        console.log(num2FromForm);
        console.log(chosenOperation);
        //call calculate function with those values and display result
        console.log(calculate(num1FromForm,num2FromForm,chosenOperation));
    });
}

function calculate(num1, num2, operation){
    let result=NaN;
    if (operation === "add"){
        result = parseFloat(num1)+parseFloat(num2);
    }
    if (operation === "subtract"){
        result = num1-num2;
    }
    if (operation === "divide"){
        result = num1/num2;
    }
    if (operation === "multiply"){
        result = num1*num2;
    }
    return result;
}
