const mongoose = require('mongoose');
const defaultSchema = mongoose.Schema({
  data: String,
});
const Default = mongoose.model('Default', defaultSchema);
module.exports = Default;
