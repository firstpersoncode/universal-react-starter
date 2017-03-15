module.exports = (mongoose) => {
  const headersSchema = mongoose.Schema({
    data: String,
  });
  const Headers = mongoose.model('Headers', headersSchema);

  return Headers;
};
