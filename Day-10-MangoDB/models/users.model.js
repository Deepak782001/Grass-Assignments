const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating a schema for user
const UserSchema = new Schema({
  // first letter is to be capital
  name: String,
  phone: Number ,
});
// creating model with specific schema
const Usermodel = mongoose.model('Users', UserSchema);
// exporting model
module.export = Usermodel
