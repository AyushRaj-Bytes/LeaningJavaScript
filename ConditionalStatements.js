// Date:12Jan2026

// Conditional Statements
//if, if else, else-if, switch and  ternary



// 1.)  if, else if , else 

// const score = 20;
// if (score<=32){
//      console.log("Fail");
// } else if (score<=50){
//      console.log("B")
// } else if (score<=100){
//      console.log("A+")
// }else{
//      console.log("Invalid Score!")
// }



// ---------------------------------------------------------------------




// 2.) Switch

// i.) Switch Example 


// let day = 4;

// switch(day){
//      case 1:
//           console.log("Monday!");
//           break;
//      case 2:
//           console.log("Tuesday!");
//           break;
//      case 3:
//           console.log("Wednesday!");
//           break;
//      case 4:
//           console.log("Thursday!");
//           break;
//      case 5:
//           console.log("Friday!");
//           break;
//      case 6:
//           console.log("Saturday!");
//           break;
//      default:
//           console.log("Invalid Day!");
// }


// ii.) Switch Example

// let num1 = 105;
// let num2 = 10;
// let operation = "/";
// let result;

// switch(operation){
//      case "+" :
//           // return num + num2;
//           // console.log(num1 + num2);
//           result = num1 + num2;
//           console.log(result);
          
//           break;
//      case "-" :
//           result = num1 - num2;
//           console.log(result);
//           break;
//      case "*" :
//           result = num1 * num2;
//           console.log(result);
//           break;
//      case "/" :
//           result = num1 / num2;
//           console.log(result);
//           break;
//      default:
//           result = "Invalid Operations!"
//           console.log(result);
// }




// iii.) Switch Example

let score = 67;

switch(true){
     case score > 90:
          console.log("Exellent");
          break;
     case score > 50:
          console.log("Good");
          break;
     default:
          console.log("Need To Improve");
          break;
}





// -----------------------------------------------------------------------



// 3.) Ternary Statements

// Syntax :-
// contidion ? valueIfTrue : valueIfFalse;


// i.) Ternary Example

// let age = 16;
// let result = age >= 18 ? "Adult" : "Minor";
// console.log(result);


// ii.) Ternary Example

// let age = 2;
// let result = age >=18 ? "Passed" : "Failed";
// console.log(result);\

