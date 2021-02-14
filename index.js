const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
//borrowing code from activity 32
function promptUser(){
  return inquirer.prompt([
      {
    type: 'input',
    name: 'project',
    message: 'What is the name of your GitHub project?'
    
      },
      {
          type: 'input',
          message: 'What is a brief description of your app?',
          name: 'description'
      },
      {            
          default: 'npm i',
          message: 'How is the installation process?',
          name: 'dependencies'
      },
      {
        type: 'input',
        message:'What is the project usage?',
        name:'usage'
      },
      {
        type:'input',
        message: 'Link the collaborators github profiles',
        name:"collaborators"
      },
      {
        type: 'list',
        message: 'License:',
        name: 'license',
        choices: [
          'Apache',
          'Academic',
          'GNU',
          'MIT',
        ]
      },
      {
        type: 'input',
        message: 'What are your contributing guidelines?',
        name:"contributing"
      },
      {
        default: 'npm test',
        message: 'What are some tests and show me an example:',
        name: 'test'
      }
    ]).then((answers) => {
      console.log(answers);
      return answers;
    });
    
  }
  
  

  async function init() {
    try {
      const answers = await promptUser();
      const generateMarkdown = generateReadme(answers);

      await writeFileAsync('./README.md', generateMarkdown);
      console.log('Successfully added to README');
    } catch(err) {
      console.log(err);
    }
  }
  

// function call to initialize program
init();
