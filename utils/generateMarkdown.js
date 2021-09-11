// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# title:${data.title}
            email:${data.email}
            github:${data.github}
            linkdin:${data.linkdin}
            description:${data.description}
            table of contents:${data.contents}
            installtion:${data.installtion}
            liscense:${data.liscense}
            contributing:${data.contributing}
            tests:${data.tests}
            questions:${data.questions}
`;
}

module.exports = generateMarkdown;
