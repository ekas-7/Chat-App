#!/bin/bash

# Start the application with Docker Compose
docker compose up -d

# Wait for containers to start
sleep 3

# Display application information
echo ""
echo "=========================================="
echo "🚀 Chat Application Started Successfully!"
echo "=========================================="
echo ""
echo "📱 Frontend: http://localhost:5173"
echo "🔌 Backend API: http://localhost:3000"
echo "🔄 WebSocket: http://localhost:8080"
echo "💾 MongoDB: localhost:27017"
echo ""
echo "To view logs: docker compose logs -f"
echo "To stop: docker compose down"
echo "=========================================="