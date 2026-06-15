let result = document.getElementById("result");


// Addition

function add(){

    let a = Number(document.getElementById("number1").value);

    let b = Number(document.getElementById("number2").value);


    result.innerHTML = a + b;

}



// Subtraction

function subtract(){

    let a = Number(document.getElementById("number1").value);

    let b = Number(document.getElementById("number2").value);


    result.innerHTML = a - b;

}



// Multiplication

function multiply(){

    let a = Number(document.getElementById("number1").value);

    let b = Number(document.getElementById("number2").value);


    result.innerHTML = a * b;

}



// Division

function divide(){

    let a = Number(document.getElementById("number1").value);

    let b = Number(document.getElementById("number2").value);



    if(b == 0){

        result.innerHTML="Cannot divide by zero";

    }

    else{

        result.innerHTML = a / b;

    }


}



// Square

function square(){

    let a = Number(document.getElementById("number1").value);


    result.innerHTML = a * a;

}



// Cube

function cube(){

    let a = Number(document.getElementById("number1").value);


    result.innerHTML = a * a * a;

}