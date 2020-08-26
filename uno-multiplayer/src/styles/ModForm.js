import styled from "styled-components";
import { colors } from "../styles/Variables";

export const ModFormLabel = styled.label`
   font-size: 0.7rem;
   @media screen and (max-width: 450px) {
      font-size: 0.8rem;
   }
`;

export const ModFormInput = styled.input`
   font-size: 1rem;
   padding: 0.6rem 0.3rem;
   text-align: center;
   height: 2.5rem;

   border: 0.15rem solid ${colors.blueDark};
   border-radius: 0.4rem;

   caret-color: ${colors.blueDark};
   color: ${colors.blueDark};

   ::placeholder {
      opacity: 0.2;
      line-height: 1;
   }

   @media screen and (max-width: 1100px) {
      width: 65%;
      font-size: 0.9rem;
   }
   @media screen and (max-width: 450px) {
      font-size: 1rem;
      width: 80%;
   }
`;

export const ModFormError = styled.p`
   font-size: 0.75rem;
   color: ${colors.pinkDark};
   font-family: monospace;
   font-weight: 800;
`;
