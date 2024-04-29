// Removes any redundant useless CSS properties across multiple html files
// Created on April 28, 2024
// Last updated
// To run script: purgecss --config purgecss.config.js 

module.exports = {
    content: ["tastebuds-page.html", "postup-page-v3.html"],
    css: ["globals-test-output.css"],
    output: "output"  // This will create an output directory in the same path
  }  