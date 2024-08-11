// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license.replace(' ','_')}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  require `[License Details](https://choosealicense.com/licenses/${license.toLowerCase()}/)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ${renderLicenseLink(license)}

  ${renderLicenseBadge(license)}
  `
}

// TODO: Create a function to generate markdown for README
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
${renderLicenseSection(data.licnse)}

## Questions
If you have any questions, reach me at
${data.email}
Check out my other projects at
[${data.github}](https://github.com/${data.github})





`;
}

module.exports = generateMarkdown;
