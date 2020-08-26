import React from "react";
import { ModPage, ModBubble, ModPageHeading } from "../../styles/ModPage";
import { ModBgCard } from "../../styles/ModBgCard";
import { ModFormLabel, ModFormInput, ModFormError } from "../../styles/ModForm";
import { ModButton } from "../../styles/ModButton";
import { colors } from "../../styles/Variables";
import {
   CreateButtonContainer,
   JoinRoomPageDivider,
   ModJoinRoomForm,
} from "./JoinRoomPageStyles";
import { FaPlusCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { ModRoundButton } from "../../styles/ModRoundButton";

export default function JoinRoomPageContainer({
   roomId,
   error,
   handleCreateRoom,
   handleJoinRoom,
   handleIdInput,
}) {
   return (
      <ModPage>
         <ModBubble top></ModBubble>
         <ModBgCard>
            <ModPageHeading>Join Room page</ModPageHeading>

            <CreateButtonContainer>
               <ModButton bgColor={colors.green} onClick={handleCreateRoom}>
                  <FaPlusCircle color={colors.blueDark} /> Create Room
               </ModButton>
            </CreateButtonContainer>

            <JoinRoomPageDivider>OR</JoinRoomPageDivider>

            <ModJoinRoomForm onSubmit={handleJoinRoom}>
               <ModFormLabel>Join Room</ModFormLabel>
               <div>
                  <ModFormInput
                     placeholder="Room ID ..."
                     id="inputName"
                     onChange={handleIdInput}
                     value={roomId}
                  />
                  <ModRoundButton>
                     <FaArrowRight color={colors.blueDark} />
                  </ModRoundButton>
               </div>
               <ModFormError>{error}</ModFormError>
            </ModJoinRoomForm>
         </ModBgCard>
         <ModBubble bottom></ModBubble>
      </ModPage>
   );
}
