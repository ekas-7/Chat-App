const multer = require('multer');
const File = require('../models/File'); // Adjust the path as necessary

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadImage = (req, res) => {
  upload.single('file')(req, res, async function (err) {
    if (err) {
      return res.status(500).json({ message: 'An error occurred during the upload', error: err });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    try {
      // Create a new file document with the binary data
      const newFile = new File({
        filename: req.file.originalname,
        contentType: req.file.mimetype,
        data: req.file.buffer, // Store the binary data
      });

      // Save the file to the database
      await newFile.save();

      res.status(200).json({
        message: 'File uploaded and saved to database successfully',
        fileId: newFile._id, // Return the file ID or any other relevant information
      });
    } catch (dbErr) {
      res.status(500).json({ message: 'An error occurred while saving the file to the database', error: dbErr });
    }
  });
};

// Route to get a file by ID
const getFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    // Set the response headers to prompt a file download
    res.setHeader('Content-Type', file.contentType);
    res.setHeader('Content-Disposition', `attachment; filename="${file.filename}"`);
    res.send(file.data);
  } catch (err) {
    res.status(500).json({ message: 'An error occurred while retrieving the file', error: err });
  }
};

module.exports = { uploadImage, getFile };
