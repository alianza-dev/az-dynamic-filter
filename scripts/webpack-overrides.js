const here = require('kcd-common-tools/utils/here');

module.exports = {
  output: {library: 'azDynamicFilter'},
  externals: {angular: 'angular'},
  resolve: {
    alias: {'angular-fix': here('src/angular-fix')}
  }
};
