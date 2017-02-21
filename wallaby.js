module.exports = function (wallaby) {
  return {
    files: [
      'app/**/*.js',
      '!app/**/*.spec.js'
    ],

    tests: [
      'app/**/*.spec.js'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    testFramework: 'ava',

    setup: function () {
      require('babel-polyfill');
      require(`${wallaby.localProjectDir}/../strongman/strongman-client/src/test/ava.helpers`);
    },

    debug: true
  };
};
