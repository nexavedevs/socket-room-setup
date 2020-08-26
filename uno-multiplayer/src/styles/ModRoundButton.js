import styled from "styled-components";
import { colors } from "./Variables";

export const ModRoundButton = styled.button`
   font-size: 1.2rem;
   height: 2.5rem;
   width: 2.5rem;

   border: 0.15rem solid ${colors.blueDark};
   border-radius: 50%;

   background-color: ${colors.green};

   display: flex;
   align-items: center;
   justify-content: center;

   cursor: pointer;
   box-shadow: none;
   transition: 0.1s all ease-in-out;

   &:active {
      box-shadow: inset 0 0 10px 3px rgba(29, 39, 60, 0.6);
   }
`;

export const ModRoundSmallButton = styled.button`
   font-size: 0.75rem;
   height: 1.55rem;
   width: 1.55rem;

   border: 0.13rem solid ${colors.blueDark};
   border-radius: 50%;

   background-color: ${colors.green};

   display: flex;
   align-items: center;
   justify-content: center;

   cursor: pointer;
   box-shadow: none;
   transition: 0.1s all ease-in-out;

   &:active {
      box-shadow: inset 0 0 6px 3px rgba(29, 39, 60, 0.6);
   }
`;
