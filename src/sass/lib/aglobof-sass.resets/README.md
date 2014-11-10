# sass.resets
> A glob of Sass resets.

## Installation

```shell
$ bower install aglobof-sass.resets
```

## Usage

Include a partial or two in your Sass

```sass
@import "/bower_components/aglobof-sass.resets/normalize";
@import "/bower_components/aglobof-sass.resets/box";
```

Or, include all the partials with the glob file —

```sass
@import "bower_components/aglobof-sass.resets/glob";
```

Include list clear mixins where needed.

```sass
.list {
  @include list-clear;
}

.list__inline {
  @include list-clear-inline;
}
```
