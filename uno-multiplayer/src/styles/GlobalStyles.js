import { createGlobalStyle } from "styled-components";
import { fonts, colors } from "./Variables";

const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
      font-family: ${fonts.default};
      line-height: 1;

      &:focus {
         outline: none;
      }
   }
   html {
      font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
      min-height: 100vh;
   }
   body {
      box-sizing: border-box;
      font-family: ${fonts.default};
      line-height: 1;
      min-height: 100vh;
      color: ${colors.blueDark};
   }

   
`;

export default GlobalStyle;
