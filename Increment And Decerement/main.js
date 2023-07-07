const getValue = document.querySelector('#box');

const increment = () =>{

let value = parseInt(getValue.innerText);

value = value + 1;

getValue.innerText = value;

};

const decerement = () =>{

    let value = parseInt(getValue.innerText);
    
    value = value - 1;
    
    getValue.innerText = value;
    
    };