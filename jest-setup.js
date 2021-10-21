// const path = require('path')

module.exports = async () => {
  // global.testServer = await require(path.resolve(__dirname, './server'));
  global.testServer = await require('./server/server');
};
