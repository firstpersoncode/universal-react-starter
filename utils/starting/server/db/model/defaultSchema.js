import mongoose from 'mongoose';
const defaultSchema = mongoose.Schema({
  data: String,
});
export default mongoose.model('default', defaultSchema);
