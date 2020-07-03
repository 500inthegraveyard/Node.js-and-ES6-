function generateMarkdown(data) {
    return `# ${data.title}
    # ${data.Tests}
  
  `;
  }
  
  module.exports = generateMarkdown;