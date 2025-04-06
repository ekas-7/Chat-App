# Chat-App

A real-time chat application built with Node.js, Socket.IO, and React.

![Screenshot 2025-01-02 at 2 25 30 AM](https://github.com/user-attachments/assets/49bb948a-f8be-4c8d-b137-e85bbae0c553)

![Screenshot 2025-01-02 at 2 25 39 AM](https://github.com/user-attachments/assets/774c8af1-d2ba-4528-a87b-3b170b2a5c28)

![Screenshot 2025-01-02 at 2 26 01 AM](https://github.com/user-attachments/assets/c129ecb2-18cf-4bde-92d4-ea34931dc3b2)

## Features

* Real-time messaging between multiple users
* User authentication and authorization with Google OAuth
* Chat room creation and management
* File sharing capabilities
* Resizable chat interface
* Online/offline status indicators
* Message read receipts

## Project Structure

The project is divided into three main components:

- **frontend**: React application built with Vite
- **server**: Express.js backend API
- **socket**: Socket.IO server for real-time communication

## Getting Started

### Prerequisites

* Docker and Docker Compose
* Node.js (version 16+) and npm (for local development without Docker)

### Running with Docker (Recommended)

1. Clone the repository:
   ```bash
   git clone https://github.com/ekas-7/Chat-App.git
   cd Chat-App
   ```

2. Create a `.env` file in the root directory based on the example:
   ```bash
   cp .env.example .env
   ```

3. Start the application:
   ```bash
   ./start.sh
   ```
   Or run Docker Compose directly:
   ```bash
   docker compose up -d
   ```

4. The application will be available at:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000
   - Socket Server: http://localhost:8080
   - MongoDB: localhost:27017

5. To view logs:
   ```bash
   docker compose logs -f
   ```

6. To stop the application:
   ```bash
   docker compose down
   ```

### Manual Setup (Without Docker)

1. Clone the repository:
   ```bash
   git clone https://github.com/ekas-7/Chat-App.git
   cd Chat-App
   ```

2. Set up the frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. Set up the server:
   ```bash
   cd server
   npm install
   npm start
   ```

4. Set up the socket server:
   ```bash
   cd socket
   npm install
   npm start
   ```

5. Ensure MongoDB is running locally or update the connection string in `.env`

## Development

### Frontend

The frontend is built with React, using Vite as the build tool. Key technologies:
- React 18
- Material UI
- Socket.IO client
- Google OAuth authentication
- TailwindCSS

### Server

The backend API is built with Express.js. Key technologies:
- Express.js
- MongoDB with Mongoose
- Multer for file uploads
- CORS support

### Socket Server

The WebSocket server is built with Socket.IO for real-time communication:
- Socket.IO
- User presence tracking
- Real-time message delivery

## Contributing

Contributions are welcome! If you'd like to contribute to the Chat-App, please:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Commit your changes with a clear commit message
4. Open a pull request against the main branch

## Todo

* Implement user profiles and avatars
* Add support for multimedia messages
* Improve chat room management and moderation features
* Add end-to-end encryption
* Implement message search functionality
* Add notification system
* Create mobile app versions

## License

This project is licensed under the MIT License.

## Acknowledgments

* Socket.IO for real-time communication
* React for building the user interface
* Node.js for server-side functionality
* Google OAuth for authentication