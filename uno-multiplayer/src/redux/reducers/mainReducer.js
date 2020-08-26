import produce from "immer";

const initialState = {
   user: null,
   room: null,
};

const mainReducer = (state = initialState, action) => {
   switch (action.type) {
      //USER ACTIONS
      case "SAVE_USER":
         return produce(state, (draft) => {
            draft.user = action.payload;
         });
      case "UPDATE_USER":
         return produce(state, (draft) => {
            draft.user = action.payload;
         });

      //ROOM ACTIONS
      case "SAVE_ROOM":
         return produce(state, (draft) => {
            draft.room = action.payload;
         });
      case "UPDATE_ROOM":
         return produce(state, (draft) => {
            draft.room = action.payload;
         });
      case "LEAVE_ROOM":
         return produce(state, (draft) => {
            draft.room = null;
         });

      default:
         return state;
   }
};

export default mainReducer;
