import React from "react";
import { ModPage, ModBubble, ModPageSmallHeading } from "../../styles/ModPage";
import { ModBgCard } from "../../styles/ModBgCard";
import { FaShareAlt } from "react-icons/fa";
import { ModButton } from "../../styles/ModButton";
import { ModRoundSmallButton } from "../../styles/ModRoundButton";
import { colors } from "../../styles/Variables";
import {
   ModRoomInfo,
   ModRoomId,
   ModUsersInfo,
   ModRoomUser,
   ModRoomMessage,
} from "./RoomPageStyles";

export default function RoomPageContainer({
   room,
   readyState,
   handleReadyState,
   roomMessage,
}) {
   return (
      <ModPage>
         <ModBubble top></ModBubble>
         <ModBgCard paddingTop="1.25rem">
            <ModPageSmallHeading>Room Page</ModPageSmallHeading>
            <ModRoomInfo>
               <ModRoomId>#{room.roomId}</ModRoomId>
               <ModRoundSmallButton>
                  <FaShareAlt />
               </ModRoundSmallButton>
            </ModRoomInfo>
            <ModUsersInfo>
               {room.users.map((user) => (
                  <ModRoomUser key={user.userId} ready={user.userReadyState}>
                     <h3>{user.name}</h3>
                     <p>• {user.userReadyState ? "Ready" : "Not Ready"}</p>
                  </ModRoomUser>
               ))}
            </ModUsersInfo>
            <ModButton
               bgColor={readyState ? colors.blueLight : colors.green}
               onClick={handleReadyState}
            >
               {readyState ? "Not Ready" : "Ready !"}
            </ModButton>
            <ModRoomMessage>{roomMessage}</ModRoomMessage>
         </ModBgCard>
         <ModBubble bottom></ModBubble>
      </ModPage>
   );
}
