import styled from "styled-components";
import { colors } from "../styles/Variables";

export const ModButton = styled.button`
   position: relative;
   border: 2px solid ${colors.blueDark};
   border-radius: 0.5rem;

   display: inline-flex;
   align-items: center;

   padding: 0rem 1.2rem;
   height: 2.2rem;
   font-size: 0.8rem;
   letter-spacing: 1px;
   color: ${colors.white};
   background-color: ${(props) => props.bgColor};

   text-shadow: -1px -1px 0 ${colors.blueDark}, 1px -1px 0 ${colors.blueDark},
      -1px 1px 0 ${colors.blueDark}, 1px 1px 0 ${colors.blueDark},
      -1.8px -1.8px 0 ${colors.blueDark}, 1.8px -1.8px 0 ${colors.blueDark},
      -1.8px 1.8px 0 ${colors.blueDark}, 1.8px 1.8px 0 ${colors.blueDark};
   box-shadow: 1px 1px 0px 0px ${colors.blueDark},
      2px 2px 0px 0px ${colors.blueDark}, 3px 3px 0px 0px ${colors.blueDark},
      4px 4px 0px 0px ${colors.blueDark}, 5px 5px 0px 0px ${colors.blueDark};

   transform: translate(0, 0);
   transition: 0.12s all ease;

   svg {
      /* filter: drop-shadow(1px 1px 1px rgba(29, 39, 60, 1)); */
      font-size: 0.8rem;
      margin-right: 0.3rem;
   }

   @media screen and (max-width: 800px) {
      padding: 0.6rem 1rem;
      text-shadow: -1px -1px 0 ${colors.blueDark}, 1px -1px 0 ${colors.blueDark},
         -1px 1px 0 ${colors.blueDark}, 1px 1px 0 ${colors.blueDark},
         -1.2px -1.2px 0 ${colors.blueDark}, 1.2px -1.2px 0 ${colors.blueDark},
         -1.2px 1.2px 0 ${colors.blueDark}, 1.2px 1.2px 0 ${colors.blueDark};
      box-shadow: 1px 1px 0px 0px ${colors.blueDark},
         2px 2px 0px 0px ${colors.blueDark}, 3px 3px 0px 0px ${colors.blueDark};
   }

   @media screen and (max-width: 450px) {
      box-shadow: 1px 1px 0px 0px ${colors.blueDark},
         2px 2px 0px 0px ${colors.blueDark};
   }

   &:active {
      box-shadow: 0px 0px 0px 0px ${colors.blueDark};
      transform: translate(5px, 5px);

      @media screen and (max-width: 800px) {
         transform: translate(3px, 3px);
      }

      @media screen and (max-width: 450px) {
         transform: translate(2px, 2px);
      }
   }
`;
