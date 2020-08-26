import React, { useState } from "react";
import { useSelector } from "react-redux";
import SaveNamePageContainer from "./SaveNamePageContainer";
import { useHistory } from "react-router-dom";
import { trim } from "lodash";

export default function SaveNamePage() {
   const [name, setName] = useState("");
   const { socket } = useSelector((state) => state.socketReducer);
   const [errors, setErrors] = useState({ name: "" });
   const history = useHistory();

   const handleChange = (e) => {
      setName(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const trimmedName = trim(name);
      const delay = 130;

      if (trimmedName.length === 0) {
         setErrors({
            name: "Name cannot be empty",
         });
      } else {
         socket.emit("saveName", trimmedName);
         setTimeout(() => history.push("/joinRoom"), delay);
      }
   };

   return (
      <SaveNamePageContainer
         handleSubmit={handleSubmit}
         handleChange={handleChange}
         name={name}
         errors={errors}
      />
   );
}
