FROM node:16-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies and nodemon globally
RUN npm install && npm install -g nodemon

# Copy the rest of the application
COPY . .

# Expose port for the socket server
EXPOSE 8080

# Start the socket server with nodemon for development
CMD ["npm", "start"]