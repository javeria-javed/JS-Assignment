function adding(){

    let num1 = document.getElementById("firstnum");
    let a = Number(num1.value);
    let num2 = document.getElementById("secondnum");
    let b = Number(num2.value);
    const ans = a + b;
    let res = document.getElementById("result") ;
    res.innerHTML = ans;

}

function subtracting(){

    let num1 = document.getElementById("firstnum");
    let a = Number(num1.value);
    let num2 = document.getElementById("secondnum");
    let b = Number(num2.value);
    const ans = a - b;
    let res = document.getElementById("result") ;
    res.innerHTML = ans;

}
function multiplying(){

    let num1 = document.getElementById("firstnum");
    let a = Number(num1.value);
    let num2 = document.getElementById("secondnum");
    let b = Number(num2.value);
    const ans = a * b;
    let res = document.getElementById("result") ;
    res.innerHTML = ans;

}

function dividing(){

    let num1 = document.getElementById("firstnum");
    let a = Number(num1.value);
    let num2 = document.getElementById("secondnum");
    let b = Number(num2.value);
    const ans = a / b;
    let res = document.getElementById("result") ;
    res.innerHTML = ans;

}