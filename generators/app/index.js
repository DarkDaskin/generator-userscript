'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const process = require('process');

function nonEmptyString(input) {
  return input.length > 0 ? true : 'The value is required.';
}

// Work around Windows console bold reset bug: https://github.com/chalk/chalk/issues/145
const unbold = /^win/.test(process.platform) ? '\x1b[m' : '';

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the gnarly ' + chalk.red('generator-userscript') + ' generator!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your userscript name',
        default: path.basename(process.cwd()),
        validate: nonEmptyString
      },
      {
        type: 'input',
        name: 'namespace',
        message: 'Your userscript namespace (usually an URL)',
        default: '',
        validate: nonEmptyString,
        store: true
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your userscript description',
        default: ''
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this._copyTpl('package.json');
    this._copyTpl('src/meta.json');
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('!(package.json)'),
      this.destinationRoot()
    );
    this.fs.copy(
      this.templatePath('src/!(meta.json)'),
      this.destinationPath('src')
    );
  }

  _copyTpl(path) {
    this.fs.copyTpl(
      this.templatePath(path),
      this.destinationPath(path),
      this.props
    );
  }

  install() {
    this.installDependencies({npm: true, bower: false});
  }

  end() {
    this.log('\n\nAll done!');
    this.log(
      `Now you can run ${chalk.yellow.bold('npm run build') + unbold} and your script will be placed into the ${chalk
      .yellow('dest/')} directory.`);
    this.log(`Also you can use ${chalk.yellow.bold('npm run build:prod') + unbold} to get a minified build.`);
    this.log(`Your script metadata can be specified in the ${chalk.yellow('src/meta.json')} file.`);
  }
};
