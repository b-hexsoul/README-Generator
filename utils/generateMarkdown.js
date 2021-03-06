// function to generate markdown for README
function generateMarkdown(data) {
  let badge = '';
  let licenseText = '';
  
  if (data.license === 'MIT License') {
    badge = '[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://opensource.org/licenses/MIT)'
    licenseText = 'This application is covered under MIT License, visit https://opensource.org/licenses/MIT for more information'
  } else if (data.license === 'GNU GPLv3') {
    badge = '[![GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)'
    licenseText = 'This application is covered under GNU GPLv3, visit https://www.gnu.org/licenses/gpl-3.0.en.html for more information'
  } else if (data.license === 'ISC License') {
    badge = '[![ISC License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    licenseText = 'This application is covered under ISC License, visit https://opensource.org/licenses/ISC for more information'
  } else if (data.license === 'Apache License 2.0') {
    badge = '[![Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)'
    licenseText = 'This application is covered under Apache License 2.0, visit https://www.apache.org/licenses/LICENSE-2.0 for more information'
  } else if (data.license === 'Mozilla Public License 2.0') {
    badge = '[![Mozilla License 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://www.mozilla.org/en-US/MPL/2.0/)'
    licenseText = 'This application is covered under Mozilla License 2.0, visit https://www.mozilla.org/en-US/MPL/2.0/ for more information'
  }

  return `
${badge}
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}
${licenseText}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Take a look at my github ${data.github}
Shoot me an email ${data.email}`;
}

module.exports = generateMarkdown;
