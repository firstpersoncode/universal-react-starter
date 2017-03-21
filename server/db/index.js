const mongoose = require('mongoose');
// connect database
module.exports = (db) => {
  return mongoose.connect(db, (err) => {
    if(err) {
      console.log(err)
    }else {
      console.log('Connected to database')
    }
  });
}
