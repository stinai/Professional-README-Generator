function generateMarkdown(data) {
    return `# ${data.title}
  
  ![${data.license}](https://img.shields.io/badge/license-${data.license}-green)
  
  ## Description
  ${data.desc}
  
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
  ## Installation
  To install the necessary dependencies, run the following command:
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## License 
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  To run tests, run the following command:
  ${data.test}
  
  ## Questions
  If you have any questions about this repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}). You can find more of my work at [${data.username}](https://www.github.com/${data.username}).
  `;
  }
  
  module.exports = generateMarkdown;