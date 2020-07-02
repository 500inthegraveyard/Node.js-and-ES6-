const inquirer = require("inquirer");
// Intialize Inquirer
const fs = require("fs");
// Intialize write to file
const util = require("util");
// Intialize the util packadge
const writeFileAsync = util.promisify(fs.writeFile);
// make a var to .promise methods
// Prompt user input and questions to awnser
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the title of the project?"
    },
    {
      type: "input",
      name: "location",
      message: "Please describe what the project is about."
    },
    {
      type: "input",
      name: "hobby",
      message: "How do you install the project?"
    },
    {
      type: "input",
      name: "food",
      message: "What is the use case for the project?"
    },
    {
      type: "input",
      name: "github",
      message: "Who are the contributers to the project?"
    },
    {
      type: "input",
      name: "linkedin",
      message: "What tests have been done on the project?"
    }
  ]);
}

function generateHTML(book) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${book.name}</h1>
    <p class="lead">I am from ${book.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${book.github}</li>
      <li class="list-group-item">LinkedIn: ${book.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

promptUser()
  .then(function(book) {
    const html = generateHTML(book);

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });
