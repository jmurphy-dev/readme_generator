// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  <a href=""><img src="https://img.shields.io/badge/<License>-<${data.license}>"></a>
  ---

${data.description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
# Installation
  ${data.installation}
# Usage
  ${data.usage}
# License
  ${data.license}
# Contributing
  ${data.contributing}
# Tests
  ${data.tests}
# Questions  
  ${data.questions}
`;
}

module.exports = generateMarkdown;
