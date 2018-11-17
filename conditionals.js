const READLINE = require("readline-sync");

// **** Problem 1: R-rated ****
// You cannot see an R-rated movie unless you are at least 18, or you are with
// an adult. Write code that prints whether or not someone can see an
// R-rated movie.
console.log("*** Problem 1: R-rated ***");
let age = READLINE.question("Enter your age: ");
let withAdult = READLINE.question("Are you with an adult? (yes or no): ");


if((age >= 18) || withAdult == "yes"){
console.log("You can see the movie.");
}

else {
console.log("Sneak into the movies.");
}

// **** Problem 2: Umbrella ****
// You should bring an umbrella when you travel, but only if it is raining.
// However, if it is thunderstorming, you should not bring an umbrella since
// that's bad luck. Write code that prints if someone should bring an umbrella
// with them.
console.log("*** Problem 2: Umbrella ***");
let raining = READLINE.question("Is it raining? (yes or no): ");
let thunderstorming = READLINE.question("Is it thunderstorming? (yes or no): ");

if(thunderstorming == "yes" || raining == "no"){
console.log("Do not take umbrella")
}

if(raining== "yes" && thunderstorming!="yes") {
console.log("Take an umbrella")
}
// **** Problem 3: Monkey Trouble ****
// There are two monkeys: Bubbles and Spankey. You are in trouble if both of
// them are smiling, or if neither are smiling. Write code that prints if we
// are in trouble.
console.log("*** Problem 3: Monkey Trouble ***");
let bubbles = READLINE.question("Is Bubbles smiling? (yes or no): ");
let spankey = READLINE.question("Is Spankey smiling? (yes or no): ");

if(bubbles=="yes" && spankey =="yes" || bubbles=="no" && spankey =="no"){
	console.log("You are in trouble");
}
if(bubbles=="yes" && spankey=="no"){
console.log("You are not in trouble");
}

if(bubbles =="no" && spankey =="yes") {
	console.log("You are not in trouble");
}
// **** Problem 4: First Place ****
// Write code that prints the largest of three scores. If there is a tie for
// first place, simply print one of the tie winners.
console.log("*** Problem 4: First Place ***");
let score1 = READLINE.question("Enter the first score: ");
let score2 = READLINE.question("Enter the second score: ");
let score3 = READLINE.question("Enter the third score: ");
let highScore = 0;

if(score1 >= score2 && score1 >= score3){
	highScore = score1;
}
if(score3 >= score1 && score3 >= score2){
	highScore = score3;
}
if(score2 >= score1 && score2 >= score3){
	highScore = score2;
}

console.log(`The highest score was ${highScore}`);

// **** Problem 5: Phone Shopping ****
// At a phone store, you can afford various "tiers" of phones based on how
// much money you have.
//    If you have at least $30 you can buy a prepaid phone.
//    If you have at least $100 you can buy a bottom-tier phone.
//    If you have at least $300 you can buy a middle-tier phone.
//    If you have at least $600 you can buy a top-tier phone.
// Write code that prints all the phone tiers someone can buy based on how much
// money they have.
console.log("*** Problem 5: Phone Shopping ***");
let money = READLINE.question("How much money do you have?: ");
if(money<30){
console.log("You cannot buy any type of phone")
}
if((money>=30) && (money<100)){
console.log("You can only buy a prepaid phone")
}
if((money>=100) && (money<300)){
console.log("You can only buy a bottom-tier phone")
}
if((money>=300) && (money<600)){
console.log("You can only buy a middle-tier phone")
}
if(money>=600){
console.log("You can buy a top-tier phone")
}
// **** Problem 6: Guess My Number ****
// Write code that plays a simple number guessing game with a user. You can
// use any number you like as myNum. If the user guesses the number, print
// a congratulations message. If they guess too low or too high, tell them this.
// If their guess is myNum +/- 3, tell them they are "warm"; otherwise tell
// them they are cold.
console.log("*** Problem 6: Guess My Number ***");
let myNum = 10;
let guess = READLINE.question("I'm thinking of a number 1-15. Guess it: ");

if(guess == myNum){
console.log("Congrats, you guessed it perfectly")
}
if(guess > myNum){
console.log("That number is too high")
}
if(guess < myNum){
console.log("Too low of a number buddy")
}
if(guess == 9 || guess == 8 || guess == 7 || guess == 11 || guess == 12 || guess == 13){
console.log("Super hot, but no quite")
}
else if( guess != myNum){
	console.log("cold")

