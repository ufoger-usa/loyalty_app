import fs from 'fs-extra';
import path from 'path';

const buildDir = path.resolve(process.cwd(), 'dist');
const indexHtmlPath = path.join(buildDir, 'index.html');
const _404HtmlPath = path.join(buildDir, '404.html');

async function setupSpaRedirect() {
  try {
    // Ensure the dist directory exists (it should after build)
    await fs.ensureDir(buildDir);

    // Check if index.html exists
    const indexExists = await fs.pathExists(indexHtmlPath);
    if (!indexExists) {
      console.error(`Error: Source ${indexHtmlPath} does not exist. Build might have failed or output to a different directory.`);
      process.exit(1); // Exit if source index.html is not found
    }
    console.log(`Source file ${indexHtmlPath} found.`);

    const _404Exists = await fs.pathExists(_404HtmlPath);
    if (_404Exists) {
      console.warn(`Warning: Target ${_404HtmlPath} already exists. It will be overwritten.`);
      // Optionally, you could delete it first if overwrite issues are suspected, though fs.copy with overwrite:true should handle it.
      // await fs.remove(_404HtmlPath);
      // console.log(`Removed existing ${_404HtmlPath} before copying.`);
    }

    // Copy index.html to 404.html, ensuring it overwrites
    await fs.copy(indexHtmlPath, _404HtmlPath, { overwrite: true });
    console.log(`Successfully copied ${indexHtmlPath} to ${_404HtmlPath} for SPA redirect handling.`);

    // Basic verification: Check if the copied 404.html seems to contain the base path
    // This is a simple check; more robust checks could parse the HTML.
    const copiedContent = await fs.readFile(_404HtmlPath, 'utf-8');
    if (copiedContent.includes('href="/loyalty_app/') || copiedContent.includes('src="/loyalty_app/')) {
      console.log(`Verification: ${_404HtmlPath} appears to contain the correct '/loyalty_app/' base paths.`);
    } else {
      console.warn(`Verification Warning: ${_404HtmlPath} might NOT contain the correct '/loyalty_app/' base paths. Please double-check its content if SPA routing fails.`);
      // console.log("Content of copied 404.html (first 500 chars):", copiedContent.substring(0, 500) + "...");
    }

  } catch (err) {
    console.error('Error during post-build script (setupSpaRedirect):', err);
    process.exit(1); // Exit with error code if script fails
  }
}

setupSpaRedirect();
