// Author: FirstName LastName// Author: FirstName LastName
const READLINE = require("readline-sync");

// fantasyName Object
let fantasyNameCreator = {
  firstName: '',
  lastName: '',
  momMaidenName: '',
  cityBorn: '',
  dreamCar: '',
  street: '',
  fantasyName: '',
  getNewFirstName: function(){
    this.firstName = READLINE.question("What is your first name? ")
    let newFirstName = this.firstName.substring(0,3)
    this.lastname = READLINE.question("What is your last name?")
    let getNewLastName = this.lastName.substring(0,2)
    let fantasyName = newFirstName + NewLastName.toLowerCase()
    return newFirstName
    /******************************************************************************
      This method returns the user's new first name. To do so, concatenate the
      first 3 letters of their real first name and the first 2 letters of their
      real last name.
    *******************************************************************************/


  },
  getNewLastName: function(){
    /******************************************************************************
      This method returns the user's new last name. To do so, concatenate the
      first 2 letters of their mom's maiden name and the first 3 letters of the
      city where they were born.
    *******************************************************************************/
    

  },
  getTitle: function(){
    /******************************************************************************
      This method returns the user's title. To do so, concatenate the last three
      letters of their real last name, reversed, and the model of their dream car.
    *******************************************************************************/


  },
  getHonorific: function(){
    /******************************************************************************
      This method returns the user's full honorific. To do so, concatenate their
      title, " of ", and the name of the street they live on.
    *******************************************************************************/
     this.street = READLINE.question("Please enter the street you live on; ")
    this.fantasyName = this.getTitle()+ " of " + this.street
    return this.fantasyName
  },

}



/******************************************************************************
                                     run()
  This function runs the program. In order to generate the full Fantasy Name it needs to:
  1. Ask the user to answer a series of questions, each setting one of the fantasyNameCreator's properties
  to what the user typed in.
  2. Call the methods to produce the piece's of the user's Fantasy Name
  3. Create the full Fantasy name by concatenating the new first name, new last name, a comma, and the honorific
  4. Display it for the user to see.
*******************************************************************************/

function run() {

}

// Run the program!
run();
