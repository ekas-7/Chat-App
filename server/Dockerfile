FROM node:16-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port for the server
EXPOSE 3000

# Start the server with nodemon for development
CMD ["npm", "start"]