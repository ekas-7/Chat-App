const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  data: Buffer, // Store binary data in a Buffer
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
