'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-userscript:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'test-script',
        namespace: 'http://example.org/',
        description: 'test-script-description'
      });
  });

  it('creates files', () => {
    assert.file([
      '.gitignore',
      'meta.schema.json',
      'package.json',
      'tsconfig.json',
      'webpack.config.ts',
      'webpack.prod.config.ts',
      'src/index.css',
      'src/index.ts',
      'src/meta.json',
      'src/tsconfig.json'
    ]);
  });

  it('substitutes variables', () => {
    assert.jsonFileContent('package.json',
      {
        name: 'test-script',
        description: 'test-script-description'
      });
    assert.jsonFileContent('src/meta.json',
      {
        name: 'test-script',
        namespace: 'http://example.org/',
        description: 'test-script-description'
      });
  });
});
