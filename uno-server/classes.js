const { generateId } = require("./utilFuncs");

class User {
   constructor(id) {
      this.userId = id;
      this.name = "";
      this.roomId = null;
      this.userReadyState = false;
   }

   setName(name) {
      this.name = name;
   }

   setRoomId(roomId) {
      this.roomId = roomId;
   }

   setUserReadyState(state) {
      this.userReadyState = state;
   }
}

class Room {
   constructor() {
      this.roomId = generateId();
      this.users = [];
      this.roomMessage = "";
      this.startGame = false;
   }

   addUser(socket, user) {
      socket.join(this.roomId);
      this.users.push(user);
      this.setRoomState();
   }

   removeUser(socket, user) {
      socket.leave(this.roomId);
      this.users = this.users.filter((u) => u.userId !== user.userId);
      this.setRoomState();
   }

   setRoomState() {
      let allUsersReady = this.users.every((user) => user.userReadyState);

      if (this.users.length < 2) {
         this.roomMessage = "Add More People";
         this.startGame = false;
      } else if (!allUsersReady) {
         this.roomMessage = "Waiting For Others...";
         this.startGame = false;
      } else {
         this.roomMessage = "Entering game";
         this.startGame = true;
      }
   }
}

module.exports = { User, Room };
