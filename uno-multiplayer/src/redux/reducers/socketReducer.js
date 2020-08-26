// reducers
const initialState = {
   socket: null,
};

const socketReducer = (state = initialState, action) => {
   switch (action.type) {
      case "SAVE_SOCKET":
         return {
            socket: action.payload,
         };

      default:
         return state;
   }
};

export default socketReducer;
