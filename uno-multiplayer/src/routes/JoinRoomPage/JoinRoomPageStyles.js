import styled from "styled-components";
import { colors } from "../../styles/Variables";

export const CreateButtonContainer = styled.div`
   margin-top: 3rem;
`;

export const JoinRoomPageDivider = styled.p`
   margin-top: 1.8rem;
   font-size: 0.8rem;
   position: relative;
   width: 3rem;

   display: flex;
   justify-content: center;
   align-items: center;

   &::before,
   &::after {
      content: "";
      position: absolute;

      width: 6rem;
      height: 0.1rem;

      border-radius: 10px;
      background-color: ${colors.blueDark};
   }

   &::before {
      left: 100%;
   }

   &::after {
      right: 100%;
   }
`;

export const ModJoinRoomForm = styled.form`
   margin-top: 1.8rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   div {
      margin-top: 0.6rem;
      margin-bottom: 0.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media screen and (max-width: 450px) {
         flex-direction: column;
      }
   }

   input {
      width: 85%;
      margin: 0;

      @media screen and (max-width: 450px) {
         margin-bottom: 0.7rem;
      }
   }
`;
