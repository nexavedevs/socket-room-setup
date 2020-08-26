import React from "react";
import {
   ModPage,
   ModBubble,
   ModPageHeading,
   ModPageSmallHeading,
} from "../../styles/ModPage";
import { ModBgCard } from "../../styles/ModBgCard";
import { ModButton } from "../../styles/ModButton";
import { colors } from "../../styles/Variables";

export default function ErrorPageContainer({ goToHome }) {
   return (
      <ModPage>
         <ModBubble top></ModBubble>
         <ModBgCard>
            <ModPageHeading style={{ marginBottom: "1rem" }}>
               Oopsy !
            </ModPageHeading>
            <ModPageSmallHeading style={{ marginBottom: "2rem" }}>
               You are playing with an Error.
            </ModPageSmallHeading>
            <ModButton bgColor={colors.orange} onClick={goToHome}>
               Go to Home
            </ModButton>
         </ModBgCard>
         <ModBubble bottom></ModBubble>
      </ModPage>
   );
}
