
const rabbit = require('rabbot');

module.exports = function start() {
  require('./topology')(rabbit)
    .then(() => {
      require('./subscriber-test1')(rabbit);
      require('./subscriber-test2')(rabbit);
    });
};

