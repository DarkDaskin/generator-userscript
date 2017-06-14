# generator-userscript [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Yeoman generator for building userscripts with TypeScript and Webpack

## Installation

First, install [Yeoman](http://yeoman.io) and generator-userscript using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-userscript
```

Then generate your new project:

```bash
yo userscript
```

## Authoring your script

 * Script [metadata](https://wiki.greasespot.net/Metadata_Block) can be specified in`src/meta.json`.
   * The contents of this file is validated using the `meta.schema.json` JSON schema.
   * By default the script is configured to run on all pages. It is recommended to set up the `include` property with [rules](https://wiki.greasespot.net/Include_and_exclude_rules) to be run only on pages the script supports.
 * Script code is written in TypeScript and located in `src/index.ts`. You can split your code to modules and include them with an `import` directive.
 * CSS styles to be injected into web pages can be specified in `src/index.css` or any other CSS file imported into `src/index.ts`.
   * If you do not need custom CSS styles, remove the import to exclude CSS injecting code from the compiled script.
   * If you prefer other styling languages like LESS or SASS, you can install a corresponding Webpack loader and configure it in the `webpack.config.ts` file.

## Building your script

 * All script files are combined into a single JS file with [Webpack](https://webpack.js.org/). The resulting file will be placed into the `dest/` directory.
 * To build a human-readable version of your script, run `npm build` in the Node.js command propmt.
 * To build a minified version of your script, run `npm build:prod` in the Node.js command propmt.

## License

MIT © [Dark Daskin](https://github.com/DarkDaskin/)


[npm-image]: https://badge.fury.io/js/generator-userscript.svg
[npm-url]: https://npmjs.org/package/generator-userscript
[travis-image]: https://travis-ci.org/DarkDaskin/generator-userscript.svg?branch=master
[travis-url]: https://travis-ci.org/DarkDaskin/generator-userscript
[daviddm-image]: https://david-dm.org/DarkDaskin/generator-userscript.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/DarkDaskin/generator-userscript
