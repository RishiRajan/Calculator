// -------------------- Function to create HTML elements on DOM--------------------------------

let create = (type,className,id,parentid) => {
    let element  = document.createElement(type);
    element.className = className;
    element.id = id;
    if(parentid) document.getElementById(parentid).append(element);
    else document.body.append(element);
    return element;

}


//--------------------------------body starts here----------------------------------------------------

create("div","container-fluid","bodyFluidDiv",0);
create("div","row","bodyRowDiv","bodyFluidDiv");

create("div","col-lg-4  p-2","dummy","bodyRowDiv"); //dummy div for space 
create("div","col-lg-5","calcDiv","bodyRowDiv");

create("div","card col-lg-10","calcCard","calcDiv");
document.getElementById("calcCard").style.marginTop = "15%";


let title = create("h1","card-title","title","calcCard")
title.innerHTML = "Calculator";
title.style.marginTop = '3%';

let description = create("p","card-body","description","calcCard");
description.innerHTML ="Calculator built using DOM"




create("div","row","row2","calcCard");
create("div","col-sm-2","dummy","row2");
let display  = create("input","form-control me-2 col-sm-8","result","row2");
display.type = "text";

display.style.height ="75px";
display.style.border ="0";
display.style.backgroundColor = "#DCDCDC";
display.style.borderRadius ="0";
document.getElementById("result").disabled = true;


//--------------------------- Row 3 ---------------------------------------------------
let row3 = create("div","row","row3","calcCard");
create("div","col-sm-2","dummy","row3");
row3.style.marginTop ="0.5%";

let C = create("button","col-sm-2  p-2 btn-primary calcButtons","clear","row3");
C.innerHTML ="C";
C.setAttribute("onClick","Clear()");



let back  = create("button","col-sm-2  p-2 calcButtons","back","row3");
back.type = "button";
back.innerHTML ="←";
back.setAttribute("onClick","ClearOne()");

let dec = create("button","col-sm-2  p-2 calcButtons","dec","row3");
dec.type ="button";
dec.innerHTML=".";
dec.setAttribute("onClick","Display('.')");

let multiply = create("button","col-sm-2  p-2 calcButtons","multiply","row3");
multiply.type ="button";
multiply.innerHTML="*";
multiply.setAttribute("onClick","Display('*')");

//--------------------------- Row 4 ---------------------------------------------------
let row4 = create("div","row","row4","calcCard");
create("div","col-sm-2","dummy","row4");
row4.style.marginTop ="0.5%";

let seven = create("button","col-sm-2  p-2 calcButtons","seven","row4");
seven.type = "button";
seven.innerHTML ="7";
seven.setAttribute("onClick","Display('7')");

let eight = create("button","col-sm-2  p-2 calcButtons","eight","row4");
eight.type = "button";
eight.innerHTML ="8";
eight.setAttribute("onClick","Display('8')");

let nine = create("button","col-sm-2  p-2 calcButtons","nine","row4");
nine.type = "button";
nine.innerHTML ="9";
nine.setAttribute("onClick","Display('9')");

let divide = create("button","col-sm-2  p-2 calcButtons","divide","row4");
divide.type = "button";
divide.innerHTML ="/";
divide.setAttribute("onClick","Display('/')");

//--------------------------- Row 5 ---------------------------------------------------
let row5 = create("div","row","row5","calcCard");
create("div","col-sm-2","dummy","row5");
row5.style.marginTop ="0.5%";

let four = create("button","col-sm-2  p-2 calcButtons","four","row5");
four.type = "button";
four.innerHTML ="4";
four.setAttribute("onClick","Display('4')");

let five = create("button","col-sm-2  p-2 calcButtons","five","row5");
five.type = "button";
five.innerHTML ="5";
five.setAttribute("onClick","Display('5')");

let six = create("button","col-sm-2  p-2 calcButtons","six","row5");
six.type = "button";
six.innerHTML ="6";
six.setAttribute("onClick","Display('6')");

let sub = create("button","col-sm-2  p-2 calcButtons","subtract","row5");
sub.type = "button";
sub.innerHTML ="-";
sub.setAttribute("onClick","Display('-')");
//--------------------------- Row 6---------------------------------------------------
let row6 =create("div","row","row6","calcCard");
create("div","col-sm-2","dummy","row6");
row6.style.marginTop ="0.5%";
let one = create("button","col-sm-2  p-2 calcButtons","1","row6");
one.type = "button";
one.innerHTML ="1";
one.setAttribute("onClick","Display('1')");

let two = create("button","col-sm-2  p-2 calcButtons","2","row6");
two.type = "button";
two.innerHTML ="2";
two.setAttribute("onClick","Display('2')");

let three = create("button","col-sm-2  p-2 calcButtons","3","row6");
three.type = "button";
three.innerHTML ="3";
three.setAttribute("onClick","Display('3')");

let plus = create("button","col-sm-2  p-2 calcButtons","add","row6");
plus.type = "button";
plus.innerHTML ="+";
plus.setAttribute("onClick","Display('+')");

//--------------------------- Row 7---------------------------------------------------
row7 = create("div","row","row7","calcCard");
create("div","col-sm-2","dummy","row7");
row7.style.marginTop ="0.5%";
let zero = create("button","col-sm-2  p-2 calcButtons","zero","row7");
zero.type = "button";
zero.innerHTML ="0";
zero.setAttribute("onClick","Display('0')");

let doubleZero = create("button","col-sm-2  p-2  calcButtons","doubleZero","row7");
doubleZero.type = "button";
doubleZero.innerHTML ="00";
doubleZero.setAttribute("onClick","Display('00')");

let equal = create("button","col-sm-4 btn-primary calcButtons","equal","row7");
equal.type = "button";
equal.innerHTML ="=";
equal.setAttribute("onClick","Calculate()");
//---------------------------------------------------------------------------------------

// 

//---------------------------------------------------------------------------------------

document.onkeydown = (key) =>{
    switch(key.key){
        case "0" :
            Display('0');
            break;
        case "1" :
            Display("1");
            break;
        case "2" :
            Display("2");
            break;
        case "3" :
            Display("3");
            break;
        case "4" :
            Display("4");
            break;
        case "5" :
            Display("5");
            break;
        case "6" :
            Display("6");
            break;
        case "7" :
            Display("7");
            break;
        case "8" :
            Display("8");
            break;
        case "9" :
            Display("9");
            break;
        
        case "Backspace":
            ClearOne();
            break;
        default:
            alert("Only numbers are allowed")
    }
}


function Display(num){
    let outputScreen = document.getElementById("result");
    outputScreen.value += num;
}


function Clear(){
    let outputScreen = document.getElementById("result");
    outputScreen.value ="";
}

function ClearOne(){
    let outputScreen = document.getElementById("result");
    outputScreen.value = outputScreen.value.slice(0,-1);
}

function Calculate(){
    let outputScreen = document.getElementById("result");
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
    
        console.log(err);
        alert("Only Numbers are Allowed");
    }
}


let array = document.getElementsByClassName("calcButtons");
for(let i in array){
    array[i].style.marginRight = "0.5%";
}


/*--------keycodes ----
0   48
1   49
2   50
3   51
4   52
5   53
6   54
7   55
8   56
9   57 
backspace   8
*/

