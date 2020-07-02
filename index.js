var fs = require('fs');
var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of the project?",
      name: "titleAnswer"
    },
    {
        type: "input",
        message: "Describe what your project is about.",
        name: "DescriptionAnswer"
      },
    
  ])
    .then(function(response) {
        const answers = response.data((name) =>name)
        
        fs.appendFile("READMEFINALSSSS.md","\n" + response, (err) =>{
            if (err){
            return console.log(err);
            }
        console.log("Success")

        })
    })



// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

// <!-- Upend all the information to a readme file
//         user writes the title
//         user writes the description 
//         user writes installation steps
//         user writes what he wants in useage
//         add a license
//         user writers any contributers
//         user puts in any test cases
//         Table of contents should be ahrdcoded inside (leave this out until the end, it shud pull from the answers, possibly ask the user what to includ in table of contents with a list.)
//     Place the github badge on the readme (from coby in 4:19 Wednesday resources channel)
//  -->
// console.log ("RESPONSE: ", response),

// JSON.stringify(response)

