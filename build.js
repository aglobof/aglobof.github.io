'use strict'

var Metalsmith = require('metalsmith');
var templates = require('metalsmith-templates');
var sass = require('metalsmith-sass');
var markdown = require('metalsmith-markdown');
var watch = require('metalsmith-watch');
var connect = require('connect');
var serve = require('serve-static');

var isDev = false

process.argv.forEach(function(val, index, array) {
  if (val === 'dev') isDev = true
})

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

if (isDev) {
  metalsmith
    .use(watch())
}

metalsmith
  .build(function(err){
    if (err) throw err;
  });

if (isDev) {
  var app = connect()
  app.use(serve(__dirname + '/build'));
  app.listen(8000, function() {
    console.log('running on port 8000')
  });
}
