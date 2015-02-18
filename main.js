var num_array = ['', ''];
var num_index = 0;
var operator = 1;
var my_result = null;
//var screenDisplay = document.querySelector('#enter');

///////////////add//////////////////////////////////
function add_numbers(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(isNaN(num1) || isNaN(num2))
    {
        alert("Please follow instructions!");
        return false;
    }
    else{
        //alert("your answer is " + (num1 - num2));
        return (num1 + num2);
    }
}

///////////////subtract//////////////////////////////

function sub_numbers(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);    
    if(isNaN(num1) || isNaN(num2))
    {
        alert("Please follow instructions!");
        return false;
    }
    else{
        //alert("your answer is " + (num1 - num2));
        return (num1 - num2);
    }
}


///////////////multiply///////////////////////////////
function multi_numbers(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);    
    if(isNaN(num1) || isNaN(num2))
    {
        alert("Please follow instructions!");
        return false;
    }
    else{
        //alert("your answer is " + (num1 * num2));
        return (num1 * num2);
    }
}


///////////////divide/////////////////////////////////
function div_numbers(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(isNaN(num1) || isNaN(num2))
    {
        alert("Please follow instructions!");
        return false;
    }
    else{
        if(num2>0){
           //alert("your answer is " + (num1 / num2));
            //document.querySelector(num1 + num2).innerHTML=.checker;
            return (num1 / num2);
        }
        else
        {
            alert("you cant divide zero");
            return false;
    }
            //anything after the return, it will never run.
    }
}


function calc(){
//var number1 = document.querySelector('').value;
//var operator = document.querySelector('#operator').value;
//var number2 = document.querySelector('#number2').value;
var checker = document.querySelector('#checker');
// div_numbers(number1, number2);
// make a decision on which function to run
//var result = 0;
switch(operator) {
    case "+":
        my_result = add_numbers(parseFloat(num_array[0]), parseFloat(num_array[1]));
        break;
    case "-":
        my_result = sub_numbers(parseFloat(num_array[0]), parseFloat(num_array[1]));
        break;
    case "*":
        my_result = multi_numbers(parseFloat(num_array[0]), parseFloat(num_array[1]));
        break;
    case "/":
        my_result = div_numbers(parseFloat(num_array[0]), parseFloat(num_array[1]));
        break;
    default:
        alert('does not compute!');
        break;
}

if(my_result !== false && my_result !='undefined'){
        document.querySelector('#enter').value= my_result;
        document.querySelector('#checker').value = num_array[0] + " " + operator + " " + num_array[1];
        
        }
        else{
            alert("there was a problem with the math");
        }
}


function my_reset() {
        //document.getElementById("#enter").reset(); //clears field but doesnt reset
        num_array = ['',''];
        num_index = '0';
        my_result = null;
        operator = '';
        document.querySelector('#enter').value = '';
}

function add_num(digit){    /*
    if(my_result!=null) {
        document.querySelector('#enter').value='';
        my_result=null;
        num_index='';
        num_array[num_index]=''; ≈
        } */
    document.querySelector('#enter').value+=digit;
    num_array[num_index]+=digit;
}

function symbols(input_operator){
    if(my_result!==null){
        num_array[0] = my_result;
        num_array[1] = '';
    }
    document.querySelector('#enter').value+=input_operator;
    operator = input_operator;
    num_index=1;
}

