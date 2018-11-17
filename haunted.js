const READLINE = require("readline-sync");

let player = {
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears Wilkin calling out for help from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  console.log(`${player.name} opens the door and see two doors.`);
  let door1 = READLINE.question("Would you like to enter door1?: ")
  if(door1 == "yes"){
    console.log("You see Wilkin running towards you with a knife and you run back out.")
  }
  else {
    let door2 = READLINE.question("Would you like to enter door2? ")
    if(door2 == "yes"){
      console.log("The room starts to fill up with water. You slowly drown to death. ")
    }
    else{
      console.log("You hear screaming coming from the left of you.")
      let runtowards = READLINE.question("Do you decide to run towards the noise? ")

      if( runtowards == "yes"){
        console.log(`You see Wilkin with blood all over his hands and a knife over ${player.name}'s body laughing. `)
        console.log("Oh wait...wait what? You just watched your future...")
      }
      else{
        console.log("You call the police and arrive. ")
        console.log("You run out the house with Wilkin chasing you. ")
        console.log("Wilkin gets shot by the police. ")
        console.log("The police give you Wally's deli for your situation.")
      }
    }
  }
} else {
  console.log(`${player.name} decides not to open the door. However, you get stabbed by Wilkin from behind. You are now dead.`);
}
console.log("Thanks for playing!.");
