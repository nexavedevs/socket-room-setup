require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const { User, Room } = require("./classes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(express.static("./public"));

const users = {};
const rooms = {};

io.on("connection", async (socket) => {
   users[socket.id] = new User(socket.id);
   socket.emit("userInitialized", users[socket.id]);

   socket.on("disconnect", () => {
      delete users[socket.id];
   });

   //Save Name
   socket.on("saveName", (name) => {
      users[socket.id].setName(name);
      socket.emit("userUpdated", users[socket.id]);
   });

   //Create Room
   socket.on("createRoom", () => {
      const newRoom = new Room();
      rooms[newRoom.roomId] = newRoom;

      users[socket.id].setRoomId(newRoom.roomId);
      newRoom.addUser(socket, users[socket.id]);

      socket.emit("userCreatedRoom", newRoom);
      socket.emit("userUpdated", users[socket.id]);
   });

   //Join Room
   socket.on("joinRoom", (roomId) => {
      if (!rooms[roomId]) {
         socket.emit("noRoomExists", "Room Does Not Exist");
      } else {
         joiningRoom = rooms[roomId];

         users[socket.id].setRoomId(joiningRoom.roomId);
         joiningRoom.addUser(socket, users[socket.id]);

         socket.emit("userJoinedRoom", joiningRoom);
         socket.emit("userUpdated", users[socket.id]);
         io.to(roomId).emit("roomUpdated", joiningRoom);
      }
   });

   //Leave Room
   socket.on("leaveRoom", (roomId) => {
      const currentUser = users[socket.id];
      const currentRoom = rooms[roomId];

      currentUser.setRoomId(null);
      currentUser.setUserReadyState(false);
      currentRoom.removeUser(socket, currentUser);

      io.to(roomId).emit("roomUpdated", currentRoom);
      socket.emit("userLeftRoom", currentUser);
   });

   //User Ready
   socket.on("toggleReadyState", (roomId) => {
      const state = !users[socket.id].userReadyState;
      const currentRoom = rooms[roomId];

      users[socket.id].setUserReadyState(state);
      rooms[roomId].setRoomState();

      io.to(roomId).emit("roomUpdated", currentRoom);
      socket.emit("userUpdated", users[socket.id]);
   });
});

const port = 5000;
http.listen(port, () => console.log(`listening on port: ${port}`));
