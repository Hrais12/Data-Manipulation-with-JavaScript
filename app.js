///////////////////
//  initial Part //
//////////////////


// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


  ///////////////////////////
//  Part 1:  Math Problem //
//////////////////////////

// Check one: if all numbers are divisible by 5
// Since % 5 is 0 if number is divisible by 5, we can use
// arithmetic to verifyvthe totale reminder is 0.

let isDivisBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0 ;

console.log (`The four numbers are divisible by 5: ${isDivisBy5}.`) 

// Check two: if n1 larger than n4
// we use the comparision operator
// 

let isn1Largern4 = n1 > n4 ;

console.log (`n1 is larger than n4: ${isn1Largern4}.`) 

//check 3
// 

let Substn1 = n2-n1 ;

console.log (`Subtract the first number from the second number: ${Substn1}.`) 

let multipl =  Substn1 * n3 ;

console.log (`Multiplying the result by the third number: ${multipl}.`) 


let remainder = multipl % n4 ;

console.log (`the remainder of dividing the result by the fourth number ${remainder}.`) 

// check 4

let isless25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

console.log(isless25)

let isTrue = isSum50 && isTwoOdd && isless25 && isUnique;

console.log (`the result is  ${isTrue}.`) 




 ///////////////////////////
//  Part 2:  Math Problem //
//////////////////////////



/// question 1


let GalAverage = (30 + 28 + 23) / 3;

let GalTrip = 1500 / GalAverage  ;
 console.log(`gallons of fuel needed for the entire trip ${GalTrip}`);

// question 2 

let tripBudget = GalTrip * 3 ;

let isEnough = tripBudget < 175;

console.log(`Will the budget be enough to cover the fuel expense ${isEnough}`);

// quesion 3

let Average = (55 + 60 + 75) / 3;

let TripHours = 1500 / Average ;

console.log(`total hours  the trip will take ${TripHours}`);



///////////////////////////
//  Part 3:  Future Exploration //
//////////////////////////









 












