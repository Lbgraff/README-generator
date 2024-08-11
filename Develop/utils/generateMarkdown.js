// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license.replace(' ', '_')}-blue.svg)`;
}

// Function that returns the license link
function renderLicenseLink(license) {
  return`[License Details](https://choosealicense.com/licenses/${license}/)`
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  return `
  ${renderLicenseLink(license)}

  ${renderLicenseBadge(license)}
  `
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table Of Contents
  * [Installation](#installation)
  * [Testing](#testing)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)
  * [Questions](#questions)






## Installation
  ${data.installation}

## Testing
  ${data.testing}

## Usage
${data.usage}

## Contribution
${data.contribution}

## License
${renderLicenseSection(data.license)}

## Questions
If you have any questions, reach me at
${data.email}
Check out my other projects at
[${data.github}](https://github.com/${data.github})





`;
}

module.exports = generateMarkdown;
