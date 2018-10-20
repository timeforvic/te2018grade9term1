// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// fill in object below with all relevant properties (see instructions)
let changeMachine = {
	inputCents : undefined,
	quaters : undefined,
	dimes : undefined,
	nickels : undefined,
	pennies : undefined,
	greeting : "bLeep blOop! i'm a CHanGE macHINe!Please enter cents as a positive integer",
	farewell : "BLOop BleEp! i Hope yOU aRE SATiSfieD wITh thiS SerVicE!"

};
let inputCents = READLINE.question("bLeep blOop! i'm a CHanGE macHINe!Please enter cents as a positive integer")
let cents = changeMachine.inputCents
let quarters = Math.floor(inputCents/25);
console.log(`quarters=${quarters}`);
let remainder1= Math.floor(inputCents%25);
let dimes = Math.floor(remainder1/10);
console.log(`dimes=${dimes}`);
let remainder2 = Math.floor(remainder1%10);
let nickels = Math.floor(remainder2/5);
console.log(`nickels=${nickels}`);
let remainder3 = Math.floor(remainder2%5);
let pennies = Math.floor(remainder3/1);
console.log(`pennies=${pennies}`);
changeMachine.quarters = quarters
changeMachine.dimes = dimes
changeMachine.nickels = nickels
changeMachine.pennies = pennies
console.log("BLOop BleEp! i Hope yOU aRE SATiSfieD wITh thiS SerVicE!");




// write code below that simulates the change machine in action!
