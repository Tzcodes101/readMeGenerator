// function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center">${data.title}</h1>

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
  
    ## Description:
    ${data.description}

    ## Table of Contents: 
    - [Description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [License](#License)
    - [Contributors](#Contributors)
    - [Testing](#Testing)
    - [Questions](#Questions)

    ## Installation:
    ${data.install}

    ## Usage:
    ${data.usage}

    ## License:
    
   ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

    This application is covered by the ${data.license} license. 
    

    ## Contributors:
    ${data.contributing}

    ## Testing:
    ${data.testInst}

    ## Questions:
    ${data.questions}
    Here is my GitHub: [${data.username}](https://github.com/${data.username})
    Email me with any questions: ${data.email}  
  `
};

module.exports = generateMarkdown;
