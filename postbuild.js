const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');
const sourceFile = path.join(docsDir, 'index.html');
const destFile = path.join(docsDir, '404.html');

// Ensure the source file exists before attempting to copy
if (fs.existsSync(sourceFile)) {
  fs.copyFile(sourceFile, destFile, (err) => {
    if (err) {
      console.error('Error copying index.html to 404.html:', err);
      process.exit(1); // Exit with an error code if copy fails
    }
    console.log('Successfully copied index.html to 404.html for GitHub Pages SPA redirect.');
  });
} else {
  console.warn(`Source file ${sourceFile} not found. Skipping copy to 404.html.`);
  // Depending on your workflow, you might want to exit with an error here too
  // process.exit(1); 
}
