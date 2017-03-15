const mongoose = require('mongoose');
const headersSchema = mongoose.Schema({
  data: String,
});
const Headers = mongoose.model('Headers', headersSchema);

module.exports = Headers;
