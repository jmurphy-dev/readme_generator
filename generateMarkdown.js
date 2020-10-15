// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  * Table of Contents
    *${installation}
    *${usage}
    *${license}
    *${contributing}
    *${tests}
    *${questions}



`;
}

module.exports = generateMarkdown;
