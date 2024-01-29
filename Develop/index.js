// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your project used?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project have?',
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'Other'
                ],
    },
    {
        type: 'input',
        name: 'otherLicense',
        message: 'You selected "Other" for the license. Please specify your license:',
        when: (answers) => answers.license === 'Other'
    },    
    {
        type: 'input',
        name: 'tests',
        message: 'How have you tested this project?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address for further questions:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub profile URL:',
    },  
];


// Function to map each license choice with corresponding badge
const licenseBadges = {
    'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GNU General Public License v3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Other': ''
};


// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            return;
        }
        console.log(`${fileName} has been generated!`);
    });
};


// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = `
# ${answers.title}

${licenseBadges[answers.license]}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## License

This project is licensed under the ${answers.license}.

## Tests 

This project has been tested by the development team using ${answers.tests}.

## Questions

For any questions, please contact me at:

- Email: [${answers.email}](mailto:${answers.email})
- GitHub: [${answers.github}](${answers.github})
`;
        writeToFile('README.md', readmeContent);
    });
};

// Function call to initialize app
init();
