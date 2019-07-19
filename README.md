# postcss-class-checker
This repository contains a postCSS plugin to check the CSS code for selectors.

## Installation
Simply install this plugin with the following command:
```
npm install --save-dev @real-digital/postcss-class-checker
```

## Usage
```js
postcss([
    classChecker({
        expected: [
            '.my-button',
            '.my-table',
            '#uniq-wrapper',
        ],
        blacklist: [
            '.useless-class',
        ],
    })
])
```
If you are missing selectors in your CSS that you expect or there are selectors that you don't want to have, then this plugin will throw an error.

This plugin does not transform CSS code, it only serves to test the compiled CSS code.
## Options
Available options are:
- `expected` (array): list of selectors you expect in your css file.
- `blacklist` (array): list of selectors you do NOT want in your css file.

## Planned Features
- Improve error handling (postCSS Warning?)
