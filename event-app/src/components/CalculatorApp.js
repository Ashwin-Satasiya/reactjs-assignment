import React from 'react';

function add(){

    const a = parseInt( prompt("Value for a "));
    const b = parseInt( prompt("Value for b "));
    let c = a+b;
    alert("Addition is : " +c);
}

function sub(){

    const a = parseInt( prompt("Value for a "));
    const b = parseInt( prompt("Value for b "));
    let c = a-b;
    alert("Substraction is : " +c);
}


function mul(){

    const a = parseInt( prompt("Value for a "));
    const b = parseInt( prompt("Value for b "));
    let c = a*b;
    alert("Multiplication is : " +c);
}

function div(){

    const a = parseInt( prompt("Value for a "));
    const b = parseInt( prompt("Value for b "));
    let c = a/b;
    alert("Division is : " +c);
}


export {add, sub, mul, div};