var readlineSync = require('readline-sync');

console.log("Type in Celsius and press enter to calculate Fahrenheit. Press e to exit")

function ftoC(c){
    var f = c * (9 / 5) + 32;    
    return f

};
function convertStringToNumber(aNumber){
    return Number(aNumber)
}

function calc(){

var celsius = readlineSync.question("enter Celsius:");
//var input = readlineSync;
//Convert celsius string to number
if (celsius === "e"){
    console.log("Thanks for using my app");
    process.exit(1);    
}

celsius = convertStringToNumber(celsius)
var fahrenheit = ftoC(celsius)
if (isNaN(celsius)){
    console.log("input must be a number");
}
else
     console.log("in Amerika it is " + fahrenheit + "F");
    if (celsius === "e"){
        process.exit(1);
    }

    else {
    calc();
}



};
calc();



         /* if (fahrenheit === "e"){
            
            console.log("Thanks for using my app");  
          
          }
          else {
          validate();
        
          };*/
   
 

