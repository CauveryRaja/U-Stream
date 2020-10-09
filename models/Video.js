const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let VideoSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    category: {
      type: String,
      required: true
    },
    content: {
      type: Buffer,
      required: true
    },
    author: {
      type: String,
      required: true
    }
});

module.exports = Video = mongoose.model('video', VideoSchema);
