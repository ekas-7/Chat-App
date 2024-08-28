const { Server } = require("socket.io");

const io = new Server(8080, {
    cors: {
        origin: "http://localhost:5173",
    },
});

io.on('connection', (socket) => {
    console.log("User Connected");

    // Additional socket event handlers can be added here

    socket.on('disconnect', () => {
        console.log("User Disconnected");
    });
});
