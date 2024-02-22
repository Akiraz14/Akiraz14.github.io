const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const envFields = [
  'skillsApiUrl',
  'contactApiUrl',
  'reCaptchaV2SiteKey',
  'reCaptchaV3SiteKey',
];

let envContent = '';
envFields.forEach(field => {
  envContent+= `\r\n  ${field}: "${process.env[field]}",`;
});

const envFileContent = `
export const environment = {
  production: ${process.env['production']},
  ${envContent}
};
`;

const targetPath = './src/environments/environment.ts'
const targetPathProd = './src/environments/environment.prod.ts'

// Create the directory
mkdirSync('./src/environments', { recursive: true });

// Create the file
writeFileSync(targetPath, envFileContent);
writeFileSync(targetPathProd, envFileContent);
