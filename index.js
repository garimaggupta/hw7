//Include the required packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//This function forces the user to provide an input to the field
const validateInput = function (input) {
    if (input === '') {
      return 'This is a required field';
    }
    return true;
  }

// array of questions for user
const questions = [
    { message:"What is your github username?",
      type:"input",
      name:"gitUserName",
      validate: validateInput
    },
    { message:"What is your email address?",
      type:"input",
      name:"email",
      validate: validateInput
    },
    { message:"What is your project's title",
      type:"input",
      name:"projectName",
      validate: validateInput
    },
    { message:"What is your project's git repository?",
    type:"input",
    name:"repo",
    validate: validateInput
    },
    { message:"Please provide short description fo your project",
      type:"input",
      name:"projectDesc",
      validate: validateInput
    },
    { message:"What kind of license should your project have?",
      type:"list",
      name:"license",
      choices:["MIT","Mozilla","Apache","BSD","Perl"],
      validate: validateInput
    },
    { message:"Enter project installation instructions. (Optional)",
      type:"input",
      name:"installation"
    },
    { message:"What command should be run to run tests? (Optional)",
      type:"input",
      name:"testInfo"
    },
    { message:"What does the user need to know about using the repo? (Optional)",
      type:"input",
      name:"usage"
    },    
    { message:"What does the user needto know about contributing to the repo? (Optional)",
      type:"input",
      name:"contributing"
    }
];

// function to write README file
function writeToFile(fileName, data) 
{
  fs.writeFile(fileName, data, function(err) 
  {
    if (err) 
    {
     return console.log(err);
    }
 console.log("README.md successfully generated!");      
  });     
}

// function to initialize program
function init() 
{
//prompt the user for readme contents
   inquirer.prompt(questions)
   .then(function(response) {
       const readmeData = generateMarkdown(response);
       writeToFile("Project-README.md",readmeData);
   })
}

// function call to initialize program
init();
