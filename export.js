function generateMarkdown(data) {
    
    return `# ${data.title}
    
     ${data.description}
     ${data.tests}
     ${data.contributers}
     ${data.usecase}
     ${data.install}
     ${data.description}
   
  `;
  }

//    My next step was to read the key instead of the values and then put the keys on the reademe as headers, but I couldnt figure out how to do this; something like Object.keys(response)[3]...
  
  module.exports = generateMarkdown;