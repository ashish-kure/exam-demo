import { createSlice } from "@reduxjs/toolkit";
import {
  addUserLocalStorage,
  removeUserLocalStorage,
  setLoggedIn,
  setLoggedOut,
} from "../../utils/authentication";

const initialState = {
  id: null,
  name: "",
  role: "",
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      const { id, name, role, token } = action.payload;

      addUserLocalStorage({ id, name, role, token });
      token && setLoggedIn();

      return {
        name,
        role,
        id: id ? id : state.id,
        token: token ? token : state.token,
      };
    },

    removeUserInfo: (state, action) => {
      setLoggedOut();
      removeUserLocalStorage("id", "token", "name", "role");

      return initialState;
    },
  },
});

export default userSlice.reducer;
export const { addUserInfo, removeUserInfo } = userSlice.actions;
