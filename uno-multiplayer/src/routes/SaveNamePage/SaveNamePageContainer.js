import React from "react";
import { ModSaveNameForm } from "./SaveNamePageStyles";
import { ModPage, ModBubble, ModPageHeading } from "../../styles/ModPage";
import { ModBgCard } from "../../styles/ModBgCard";
import { ModFormLabel, ModFormInput, ModFormError } from "../../styles/ModForm";
import { ModButton } from "../../styles/ModButton";
import { colors } from "../../styles/Variables";

export default function SaveNamePageContainer({
   handleSubmit,
   handleChange,
   name,
   errors,
}) {
   return (
      <ModPage>
         <ModBubble top></ModBubble>
         <ModBgCard>
            <ModPageHeading>UNO Multiplayer</ModPageHeading>
            <ModSaveNameForm onSubmit={handleSubmit}>
               <div>
                  <ModFormLabel htmlFor="inputName">
                     Enter Your Name
                  </ModFormLabel>
                  <ModFormInput
                     placeholder="Your Name ..."
                     onChange={handleChange}
                     value={name}
                     id="inputName"
                  />
                  {errors.name ? (
                     <ModFormError>{errors.name}</ModFormError>
                  ) : (
                     ""
                  )}
               </div>

               <ModButton bgColor={colors.blueLight} type="submit">
                  Save Name
               </ModButton>
            </ModSaveNameForm>
         </ModBgCard>
         <ModBubble bottom></ModBubble>
      </ModPage>
   );
}
