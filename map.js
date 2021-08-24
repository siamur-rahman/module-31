/*const numbers = [4, 6, 8, 10];
const output = [];

for (const number of numbers) {
   const result = number * 2;
   // console.log(result);
   output.push(result);
}
console.log(output);*/

/*system-1(old)....for loop diya function///////////

function doubleOld(number) {
   return number * 2;
}
console.log(doubleOld(5));

/////system-2.....arrow function///////////////
const doubleIt = number => number * 2;
console.log(doubleIt(3));
*/
//////////////////////////////////////////////////////

/*............111aaaa////////////for loop ... arrow function declare ... arrow function k  call///////////
const numbers = [4, 6, 8, 10];
const output2 = [];
const doubleIt = number => number * 2;

for (const number of numbers) {
   const result = doubleIt(number);
   output2.push(result);
}
console.log(output2);*/

/*........111111bbbb////////ekta arrow function declare kore then call ///////////////
const numbers = [4, 6, 8, 10];
const doubleIt = number => number * 2;
const output = numbers.map(doubleIt);
console.log(output);*/

//...............111ccccc/////// direct ekta arrow function declare /////////////
const numbers = [4, 6, 8, 10];
const output = numbers.map(number => number * 2);
console.log(output);

//..////////////////////////comment//////////////////////////..
// 1.loop through each element.
// 2.for each element call the provided function...
// (element diye function ke call korsi)
// 3.result for each element will be started in an array
//  (ekta array er mddhe push korsi)
// ei 3 ta kaj ek line e kora zai....map diye
//////////////////////////comment////////////////////////////


/*
// ..............................................
const numbers = [4, 6, 8, 10];
const doubleIt = number => number * 2;
// console.log(doubleIt);

const output = numbers.map(x => x * 2);
console.log(output);

const squares = numbers.map(x => x * x);
console.log(squares);*/


