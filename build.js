'use strict'

var Metalsmith = require('metalsmith');
var templates = require('metalsmith-templates');
var sass = require('metalsmith-sass');
var markdown = require('metalsmith-markdown');

var metalsmith = Metalsmith(__dirname)
  .use(sass({
    outputDir: "css/"
  }))
  .use(markdown())
  .use(templates({
    engine: "handlebars",
    directory: "src/templates",
    partials: {
      head: "partials/head",
      header: "partials/header",
      footer: "partials/footer"
    }
  }))

metalsmith
  .build(function(err){
    if (err) throw err;
  });
