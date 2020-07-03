var fs = require('fs');
var inquirer = require("inquirer");
var generateMarkdown = require("./export");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the project?"
    },
    {
      type: "input",
      name: "description",
      message: "Please describe what the project is about."
    },
    {
      type: "input",
      name: "Install",
      message: "How do you install the project?"
    },
    {
      type: "input",
      name: "Usecase",
      message: "What is the use case for the project?"
    },
    {
      type: "input",
      name: "Contributers",
      message: "Who are the contributers to the project?"
    },
    {
      type: "input",
      name: "Tests",
      message: "What tests have been done on the project?"
    }
    
  ])
    .then(function(response) {
        // const answers = response ((name) =>name)
         
        var markdownTitle = generateMarkdown(response)
      
        
        fs.writeFile("README.md",markdownTitle, (err) =>{
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


// .then(function(res) {
//   const repoNames = res.map(function(repo){
//     return repo.name;
//   });
//     const repoNamesStr = repoNames.join("\n");
    
//     fs.appendFile("READMEFINALPPPPPPPPPPP.md",repoNamesStr, function(err) {
//         if (err){
//         throw err;
//         }
//     console.log("Success")
//         console.log(res)
//     })
// })


