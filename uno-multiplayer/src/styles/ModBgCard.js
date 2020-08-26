import styled from "styled-components";
import { colors } from "./Variables";

export const ModBgCard = styled.div`
   background-color: ${colors.yellow};
   height: min-content;
   width: 60%;

   border: 0.3rem solid ${colors.blueDark};
   border-radius: 0.6rem;

   padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "3rem")};
   padding-bottom: 1.5rem;
   display: flex;
   align-items: center;
   flex-direction: column;

   box-shadow: 0.5rem 1rem 1.5rem 0.1rem rgba(0, 0, 0, 0.2);

   @media screen and (max-width: 800px) {
      width: 70%;
   }

   @media screen and (max-width: 600px) {
      width: 80%;
   }

   @media screen and (max-width: 350px) {
      width: 90%;
   }
`;
