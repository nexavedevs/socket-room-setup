import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect,
} from "react-router-dom";
import socketIOClient from "socket.io-client";

import SaveNamePage from "./routes/SaveNamePage/SaveNamePage";
import JoinRoomPage from "./routes/JoinRoomPage/JoinRoomPage";
import RoomPage from "./routes/RoomPage/RoomPage";
import ErrorPage from "./routes/ErrorPage/ErrorPage";

function App() {
   const dispatch = useDispatch();
   const { user } = useSelector((state) => state.mainReducer);
   const ENDPOINT = "http://localhost:5000/";

   useEffect(() => {
      const socket = socketIOClient(ENDPOINT);
      dispatch({ type: "SAVE_SOCKET", payload: socket });

      socket.on("userInitialized", (user) => {
         dispatch({ type: "SAVE_USER", payload: user });
      });

      socket.on("userUpdated", (user) => {
         dispatch({ type: "UPDATE_USER", payload: user });
      });
   }, []);

   return (
      <div className="App">
         <Router>
            <Switch>
               <Route path="/" exact>
                  <SaveNamePage />
               </Route>
               <Route path="/joinRoom">
                  {user ? <JoinRoomPage /> : <Redirect to="/error" />}
               </Route>
               <Route path="/room">
                  {user ? <RoomPage /> : <Redirect to="/error" />}
               </Route>
               <Route path="/error">
                  <ErrorPage />
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
