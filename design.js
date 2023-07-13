/*
Decision Making:

var a=parseInt(prompt("Enter the Frist number"));
var b=parseInt(prompt("Enter the second number"));
if(a>b)
{
    console.log("A is greater");
}
else{
    console.log("B is greater");
}

Basic switch case:
*/
var a=parseInt(prompt("Enter the Frist number"));
var b=parseInt(prompt("Enter the second number"));
var op=prompt("Enter the operator");
switch(op){
    case '+':document.getElementById("result").textContent=(a+b);break;
    case '-':document.getElementById("result").textContent=(a-b);break;
    case '*':document.getElementById("result").textContent=(a*b);break;
    case '/':document.getElementById("result").textContent=(a/b);break;
    case '%':document.getElementById("result").textContent=(a%b);break;
}


