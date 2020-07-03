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
      name: "install",
      message: "How do you install the project?"
    },
    {
      type: "input",
      name: "usecase",
      message: "What is the use case for the project?"
    },
    {
      type: "input",
      name: "contributers",
      message: "Who are the contributers to the project?"
    },
    {
      type: "input",
      name: "tests",
      message: "What tests have been done on the project?"
    }
    
  ])
    .then(function(response) {
        
         
        var markdownTitle = generateMarkdown(response)
      
        
        fs.appendFile("README.md",markdownTitle, (err) =>{
            if (err){
            return console.log(err);
            }
        console.log("Success")

        })
    })



