// Included packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// Created an array of questions for user input
const questions = [
    { 
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    { 
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    { 
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
    },
    { 
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.',
    },
    { 
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines.',
    },
    { 
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions.',
    },
    { 
        type: 'list',
        name: 'license',
        message: 'Please choose a license.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    { 
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    { 
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
]; 



// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  }
  
  // Modify the init function to call writeToFile and pass the generated README content
  function init() {
    inquirer.prompt(questions).then((response) => {
      const readmeContent = generateMarkdown(response);
      writeToFile('README.md', readmeContent);
    });
  }
  
  // Function call to initialize app
  init();