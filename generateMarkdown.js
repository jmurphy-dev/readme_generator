// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  * Table of Contents
    * Installation
    * Usage
    * License
    * Contributing
    * Tests
    * Questions 
  * Installation
    ${data.installation}
  * Usage
    ${data.usage}
  * License
    ${data.license}
  * Contributing
    ${data.contributing}
  * Tests
    ${data.tests}
  * Questions  
    ${data.questions}
`;
}

module.exports = generateMarkdown;
