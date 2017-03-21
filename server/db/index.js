import mongoose from 'mongoose';
// connect database
export default (db) => {
  return mongoose.connect(db, (err) => {
    if(err) {
      console.log(err)
    }else {
      console.log('Connected to database')
    }
  });
}
