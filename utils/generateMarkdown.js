// function to generate markdown for README
function generateMarkdown(data) {
   let license_badge = ''

// Get License Badge based on user chosen license
  switch(data.license)
  {
    case 'Apache':
      license_badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'BSD':
      license_badge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'MIT':
      license_badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Mozilla':
      license_badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case 'Perl':
      license_badge = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
      break;
    }

// Design the contents of Readme based on user input
  let finalMarkDown = `# ${data.projectName}`  

// If user provides git repository, then show the badge with technology used by the project
  if (data.repo != '')
   {
    finalMarkDown +=  `
    
![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${data.gitUserName}/${data.repo}?style=flat&logo=appveyor)

` 
  }

// Define Table of Contents based on user input
  
let TOC = 
`
## Description
    
${data.projectDesc}

## Table of Contents
`
if (data.installation != '')
TOC += 
`* [Installation](#installation)
`;

if (data.usage != '') 
TOC += 
`* [Usage](#usage)
`;

if (data.contributing != '')
TOC += 
`* [Contributing](#contributing)
`;

if (data.testInfo != '')
TOC += 
`* [Tests](#tests)
`;
TOC +=
`* [License](#license)
`;

//Add Table of Contents to README
  finalMarkDown += TOC;


//Continue developing the README content
  if (data.installation != '')
   finalMarkDown +=  
`

## Installation
  
*Steps required to install project and how to get the development environment running:*
  
${data.installation}
`
  
  if (data.usage != '') 
  finalMarkDown +=
`
## Usage 
  
*Instructions and examples for use:*
  
${data.usage}
`

  if (data.contributing != '')
  finalMarkDown += `
## Contributing

${data.contributing}

`

  if (data.testInfo != '')
  finalMarkDown += `
## Tests
  
*Tests for application and how to run them:*
  
${data.testInfo}
`

finalMarkDown+= 
`  
## License

`
if (license_badge === '')
 finalMarkDown += data.license;
else
 finalMarkDown += license_badge;
  
 finalMarkDown += `


---
  
## Questions?
  
For any questions, please contact me with the information below:
 
GitHub Profile: [${data.gitUserName}](https://github.com/${data.gitUserName}) 
  
Email: ${data.email}`

//return the final README content
  return finalMarkDown;
}

module.exports = generateMarkdown;
