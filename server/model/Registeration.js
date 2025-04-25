const mongoose = require('mongoose');

const studentRegistrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
 
  
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  
  createdAt: { type: Date, default: Date.now },

}

);

module.exports = mongoose.model('StudentRegistration', studentRegistrationSchema);