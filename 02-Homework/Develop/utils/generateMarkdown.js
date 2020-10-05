// function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center">${data.title}</h1>

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
  
    ## Description:
    ${data.description}

    ## Table of Contents: 
    - [Description](## Description)
    - [Installation](## Installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation:
    ${data.install}

    ## Usage:
    ${data.usage}

    ## License Number:
    
   ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

    This application is covered by the ${data.license} license. 
    

    ## Contributors:
    ${data.contributing}

    ## Test Instructions:
    ${data.testInst}

    ## Questions:
    ${data.questions}
    Find me on GitHub: [${data.username}](https://github.com/${data.username})
    ✉️ Email me with any questions: ${data.email}
    _This README was generated with ❤️ by [README-generator] 🔥🔥🔥_
  

      
  `
};

module.exports = generateMarkdown;
