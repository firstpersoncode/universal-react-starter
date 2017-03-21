import mongoose from 'mongoose';
const headersSchema = mongoose.Schema({
  data: String,
});
export default mongoose.model('Headers', headersSchema);
