const uploadImage = (request, response) => {
    if (!request.file) {
      return response.status(404).json("File not found");
    }
  
    // Define the base URL for serving images
    const url = `${request.protocol}://${request.get('host')}`;
    const imageUrl = `${url}/file/${request.file.filename}`;
  
    response.status(200).json(imageUrl);
  };
  
  module.exports = {  uploadImage };