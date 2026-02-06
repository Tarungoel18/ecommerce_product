import { createSlice } from "@reduxjs/toolkit";
import { sessionID } from "../../constants/AppConst";

const initialState = {
  session: localStorage.getItem(sessionID),
};

const sessionSlice = createSlice({
  name:"session",
  initialState,
  reducers:{
   setSessionId: (state, action) => {
      state.session = action.payload;
      if (action.payload) {
        localStorage.setItem(sessionID, action.payload);
      } else {
        localStorage.removeItem(sessionID);
      }
    }
  }
})

export const {setSessionId} = sessionSlice.actions;
export default sessionSlice.reducer;