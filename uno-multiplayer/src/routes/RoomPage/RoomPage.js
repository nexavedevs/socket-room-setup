import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import RoomPageContainer from "./RoomPageContainer";

export default function RoomPage() {
   const dispatch = useDispatch();
   const { socket } = useSelector((state) => state.socketReducer);
   const { room } = useSelector((state) => state.mainReducer);
   const [readyState, setReadyState] = useState(false);
   const [roomMessage, setRoomMessage] = useState("");

   const handleReadyState = () => {
      setReadyState(!readyState);
      socket.emit("toggleReadyState", room.roomId);
   };

   const showMessage = (roomMessage) => {
      setRoomMessage(roomMessage);
   };

   useEffect(() => {
      const updateRoom = (roomData) => {
         dispatch({ type: "UPDATE_ROOM", payload: roomData });

         if (!roomData.startGame) {
            showMessage(roomData.message);
         } else {
            showMessage(roomData.message);
            console.log("STARTING GAME BUDDY !");
         }
      };
      socket.on("roomUpdated", updateRoom);

      return () => {
         socket.off("roomUpdated", updateRoom);
      };
   }, []);

   return (
      <RoomPageContainer
         room={room}
         handleReadyState={handleReadyState}
         readyState={readyState}
         roomMessage={roomMessage}
      />
   );
}
