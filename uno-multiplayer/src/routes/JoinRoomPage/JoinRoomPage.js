import React, { useState, useEffect } from "react";
import JoinRoomPageContainer from "./JoinRoomPageContainer";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function JoinRoomPage() {
   const dispatch = useDispatch();
   const history = useHistory();
   const { socket } = useSelector((state) => state.socketReducer);
   const { user } = useSelector((state) => state.mainReducer);
   const [roomId, setRoomId] = useState("");
   const [error, setError] = useState("");

   const handleCreateRoom = () => {
      socket.emit("createRoom");
   };

   const handleJoinRoom = (e) => {
      e.preventDefault();
      socket.emit("joinRoom", roomId);
   };

   const handleIdInput = (e) => {
      setRoomId(e.target.value);
   };

   useEffect(() => {
      if (user.roomId) {
         socket.emit("leaveRoom", user.roomId);
      }

      const leaveRoom = (userData) => {
         dispatch({ type: "LEAVE_ROOM", payload: null });
         dispatch({ type: "UPDATE_USER", payload: userData });
      };

      const createdRoom = (roomData) => {
         const delay = 100;
         dispatch({ type: "SAVE_ROOM", payload: roomData });
         setTimeout(() => history.push("/room"), delay);
      };

      const joinedRoom = (roomData) => {
         const delay = 100;
         dispatch({ type: "SAVE_ROOM", payload: roomData });
         setTimeout(() => history.push("/room"), delay);
      };

      const noRoom = (msg) => {
         setError(msg);
      };

      socket.on("userLeftRoom", leaveRoom);
      socket.on("userCreatedRoom", createdRoom);
      socket.on("userJoinedRoom", joinedRoom);
      socket.on("noRoomExists", noRoom);

      return () => {
         socket.off("userLeftRoom", leaveRoom);
         socket.off("userCreatedRoom", createdRoom);
         socket.off("userJoinedRoom", joinedRoom);
         socket.off("noRoomExists", noRoom);
      };
   }, []);

   return (
      <JoinRoomPageContainer
         roomId={roomId}
         handleCreateRoom={handleCreateRoom}
         handleJoinRoom={handleJoinRoom}
         handleIdInput={handleIdInput}
         error={error}
      />
   );
}
