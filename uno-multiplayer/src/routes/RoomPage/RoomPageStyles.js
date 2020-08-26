import styled from "styled-components";
import { fonts, colors } from "../../styles/Variables";

export const ModRoomInfo = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 0.35rem;
`;

export const ModRoomId = styled.p`
   font-family: ${fonts.utility};
   color: ${colors.pinkDark};
   font-size: 1.5rem;
   margin-right: 0.5rem;
`;

export const ModUsersInfo = styled.div`
   margin: 0.8rem 0;
   background-color: ${colors.white};
   width: 65%;

   border: 4px solid ${colors.blueDark};
   border-radius: 0.7rem;

   padding: 0.8rem 1rem;

   @media screen and (max-width: 800px) {
      width: 70%;
   }

   @media screen and (max-width: 500px) {
      width: 80%;
   }
`;

export const ModRoomUser = styled.div`
   width: 100%;

   display: flex;
   justify-content: space-between;
   align-items: center;

   padding: 0.4rem 0;

   h3 {
      color: ${colors.blueDark};
      font-size: 0.9rem;
   }

   p {
      color: ${(props) => (props.ready ? colors.green : colors.pinkDark)};
      font-size: 0.8rem;
      font-family: ${fonts.utility};
   }
`;

export const ModRoomMessage = styled.p`
   margin-top: 0.8rem;
   color: ${colors.blueDark};
   font-size: 0.7rem;
`;
