const READLINE = require("readline-sync")

//function sayHello(name) {
//	console.log(`Hello ${name}`)
//}

//function bother(name1,name2) {
	//sayHello(name1)
	//sayHello(name2)
	//sayHello(name1)
	//sayHello(name2)
	//sayHello(name1)
	//sayHello(name2)
	//sayHello(name1)
//}
//sayHello("Victor")
//sayHello("PAPA")
//sayHello("Wilkin")

//bother("PAPA")
//bother("wilkin")

//function add(x,y) {
//	console.log(x + y)
//}

//add(1, 3)
//add(7, 9)

function getAge() {
	let birthYear = READLINE.question("What is your birthyear? ");
	let currentYear = (new Date()).getFullYear();
	let age = currentYear - birthYear;
	console.log(age);
	return age;
	
}

let userAge = getAge();
if( userAge < 17){;
	console.log("No R-rated mobvies!");
}

let dog = {
	numlegs : 4,
	amputate: function(legs) {
		this.
	}
}


