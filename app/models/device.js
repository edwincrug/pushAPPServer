// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DeviceSchema = new Schema({
  title: String,
  token:{
    type: String,
    unique: true
  }
});


mongoose.model('Device', DeviceSchema);
