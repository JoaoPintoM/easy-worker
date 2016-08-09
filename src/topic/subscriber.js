
const rabbit = require('rabbot');

require('./topology')(rabbit)
  .then(() => {
    require('./subscriber-test1')(rabbit);
    require('./subscriber-test2')(rabbit);
  });

