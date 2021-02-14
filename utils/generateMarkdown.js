// function to generate markdown for README

function generateReadme(answers) {
  return `
${answers.project}

## Description 
${answers.description}




## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation
${answers.installation}


## Usage 
${answers.usage}



## Credits
${answers.collaborators}




## License
${answers.license}


## Badges

![badge](https://img.shields.io/badge/license-${answers.license}-lightgreen)<br />

## Contributing
${answers.contributing}



## Tests
${answers.test}


`;
}

module.exports = generateReadme;
