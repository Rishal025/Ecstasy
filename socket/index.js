const io = require('socket.io')(8900, {
    cors: {
        origin: "http://localhost:3000",
    }
});

let users = [];

const addUser = (userId, socketId) => {
    console.log(socketId);
    !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
}

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
}

const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
    console.log('socket connected');

    //take userId and socketId from user
    socket.on("addUser", (userId) => {
        console.log(userId+"idddd");
        addUser(userId, socket.id);
        io.emit("getUsers", users);
    });

    //send and get messages
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
         const user = getUser(receiverId);
         io.to(user.socketId).emit("getMessage", {
            senderId,
            text
         });
    });

    socket.on("disconnect", () => {
        console.log('socket disconnected');
        removeUser(socket.id);
        io.emit("getUsers", users);
    })

})