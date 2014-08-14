---
template: index.jade
title: Glob
---

Glob is a [bower](http://bower.io) managed, modular UI framework. Its goal is to allow flexibility in the scope of css requirements and minimize the amount of unused code. Each module is seperately installable, following the same conventions for Sass and JavaScript.

## Getting Started

The vision for Glob is to create a single Scss file and get designing quickly by requiring a few key importable packages.

For a Sass example, create a root import file —
```bash
$ touch main.scss
```

Install some Glob Sass packages
```bash
$ bower install aglobof-sass.resets
```

Import from the root file
```sass
// reset import
@import "./bower/aglobof-sass.resets/normalize";
@import "./bower/aglobof-sass.resets/box";
```

## Examples
