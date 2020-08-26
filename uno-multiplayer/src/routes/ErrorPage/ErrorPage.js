import React from "react";
import ErrorPageContainer from "./ErrorPageContainer";

export default function ErrorPage() {
   const goToHome = () => {
      window.location.href = "/";
   };

   return <ErrorPageContainer goToHome={goToHome} />;
}
