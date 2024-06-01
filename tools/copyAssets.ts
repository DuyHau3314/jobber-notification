import * as fs from 'fs-extra';

// Copy the 'src/emails' directory to 'build/src/'
fs.copy('src/emails', 'build/src/')
  .then(() => {
    console.log('Copy successful!');
  })
  .catch((err) => {
    console.error('Error during copy:', err);
  });
