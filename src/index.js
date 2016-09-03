const wrapBeautifier = require('unibeautify-beautifier').wrapBeautifier;
const pkg = require('../package.json');
const Beautifier = {
  name: 'Pretty Diff',
  options: {},
  beautify() {
    return Promise.resolve('Pretty Diff beautifier results!');
  }
};
const config = {};

module.exports = wrapBeautifier(pkg, Beautifier, config);