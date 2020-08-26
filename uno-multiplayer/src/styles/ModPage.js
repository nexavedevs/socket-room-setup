import styled, { css } from "styled-components";
import { colors } from "./Variables";
import bubbleImg from "../images/bubble.png";

export const ModPage = styled.section`
   background-color: ${colors.pinkDark};
   min-height: 100vh;
   position: relative;
   z-index: 0;
   padding: 1rem 0;

   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

export const ModBubble = styled.div`
   z-index: -10;
   position: absolute;
   ${(props) =>
      props.top
         ? css`
              top: 3rem;
              left: 3rem;
           `
         : css`
              bottom: 3rem;
              right: 3rem;
           `}

   background-image: url(${bubbleImg});
   background-size: cover;
   background-repeat: no-repeat;
   width: 3.5rem;
   height: 3.5rem;

   &::after {
      content: "";
      position: absolute;
      display: inline-block;

      

      ${(props) =>
         props.top
            ? css`
                 bottom: 3.5rem;
                 left: 3.5rem;
              `
            : css`
                 top: 3.5rem;
                 right: 3.5rem;
              `}

      background-image: url(${bubbleImg});
      background-size: cover;
      background-repeat: no-repeat;
      width: 1.5rem;
      height: 1.5rem;
   }
`;

export const ModPageHeading = styled.h1`
   font-size: 2rem;

   @media screen and (max-width: 800px) {
      font-size: 1.75rem;
   }
   @media screen and (max-width: 450px) {
      font-size: 1.6rem;
   }

   @media screen and (max-width: 350px) {
      box-decoration-break: clone;
   }
`;

export const ModPageSmallHeading = styled.h1`
   font-size: 1.1rem;

   @media screen and (max-width: 800px) {
      /* font-size: 1.6rem; */
   }
   @media screen and (max-width: 450px) {
      /* font-size: 1.5rem; */
   }

   @media screen and (max-width: 350px) {
      box-decoration-break: clone;
   }
`;
