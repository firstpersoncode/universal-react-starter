const mongoose = require('mongoose');
const Headers = require('./headersSchema')(mongoose);
module.exports = {
  Headers,
};
