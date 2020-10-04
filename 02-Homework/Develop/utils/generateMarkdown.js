// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
    ## Description:
    ${data.description}

    ## Table of Contents: 
    - Installation
    - Usage
    - Liscense 
    - Contribution Guidelines
    - Test Instructions
    - Questions

    ## Installation:
    ${data.install}

    ## Usage:
    ${data.usage}

    ## Liscense Number:
    ${data.liscense}

    ## Contribution Guidelines:
    ${data.contributing}

    ## Test Instructions:
    ${data.testInst}

    ## Questions:
    ${data.questions}

      
  `
};

module.exports = generateMarkdown;
