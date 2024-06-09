//"use strict";
console.log("hello day 12")
let x=20;
console.log(x);
 var y=20;
console.log(y);
//function
function sum(x, y){
    console.log(x+y);
}
sum(2, 4);
let m=[1, 2, 3, 4];
for (i in m){
    console.log(m[i]);
}
for(i of m){
    console.log(i);
}
let{name, age}={name:"sachin", age:"20"};
console.log(name);

function div(j, k){
    console.log(j/k);
    try{
        if(k==0) throw "divide by zero";
    }
    catch(error){
        console.log("number cant divide by zero");
    }
}
div(2, 2);
