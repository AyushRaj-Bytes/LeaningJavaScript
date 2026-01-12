// Date:12Jan2026


//   ==> DataTypes
//   There are 2 types of Datatypes;
//   1.) Primitive
//   2.) Reference


//   => Primiitive DataType

// let name= "Ayush Raj";    //String
// let number= 369;          //Number
// let IsLearner= true;      //Boolean
// let Employee= null;       //null
// let arc;                  //Undefined
// let Siemen= Symbol(369);  //Symbol
// let BigNum= 8798767898767 //BigInt
// console.log(name)
// console.log(number)
// console.log(Number)
// console.log(IsLearner)
// console.log(Employee)
// console.log(arc)
// console.log(Siemen)
// console.log(BigNum)



//   => Reference Type DataType;

// let MakeArray=[1,2,3,4,5];                                        //Array
// let MakeObject={ "Name" : "Ayush Raj", "Subject" : "JavaScript"}; //Object
// function MakeFunction(){                                          //Function
//      greet("Hello User")
// };
// function greet(){}


// console.log(MakeArray[0]);
// console.log(MakeObject["Name"])
// console.log(greet())


// let defaultNumber= "99";                  //It converts string("99") into a number(99)!
// let defaultNumber= "abcd";                //It's not able to convert "abcd"(STRING) into any (NUMBER) so it displays `NaN`, Period! 

// console.log(parseInt(defaultNumber));     //ParseInt() converts string("") into number(1234...), Period!




// Difference bwtween var and let variables

let name = "Ayush Raj";

{
     let name = "Ayush";
     name = "Rohan";
}
     console.log(name);

// So basically var and let can reassign the value and 
// what would be the output is depends upon the where the console.log() is calling the value 
// if inside the block so firstly gives blocks output if not so it would give output gloabally!



// Difference between const and let/var
// var pi= 3.14
const pi = 3.14;

{    const pi= "Updated"
     console.log(pi);
};
console.log(pi);



// const can not be empty you have to initialize any value to it where this is not with var and let!





