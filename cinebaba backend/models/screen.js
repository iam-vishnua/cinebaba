const mongoose = require('mongoose');

const screenSchema = new mongoose.Schema({
    screenNumber: Number,
    theatre: {
        type: mongoose.ObjectId,
        ref: 'Theatre'
    }
    

  });

  const Screen = mongoose.model('Screen', screenSchema);

  module.exports = Screen