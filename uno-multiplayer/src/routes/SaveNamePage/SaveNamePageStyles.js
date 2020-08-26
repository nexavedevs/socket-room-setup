import styled from "styled-components";

export const ModSaveNameForm = styled.form`
   margin-top: 4rem;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 2.2rem;
   }

   input {
      width: 95%;
      margin: 0.55rem 0 0.4rem 0;
   }

   @media screen and (max-width: 450px) {
      margin-top: 3rem;
   }
`;
