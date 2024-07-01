import { removeUserInfo } from "../redux/slices/userSlice";
import store from "../redux/store";
import { Navigate } from "react-router-dom";

export const equal = (value1, value2) => value1 === value2;

export const getLocalStorage = (key) => localStorage.getItem(key);

export const setLocalStorage = (key, value) => localStorage.setItem(key, value);

export const removeLocalStorage = (key) => localStorage.removeItem(key);

export const capitalize = (text) => text[0].toUpperCase() + text.slice(1);

export const objectKeys = (object) => Object.keys(object);

export const objectValues = (object) => Object.values(object);

export const objectEntries = (object) => Object.entries(object);

export const logOut = () => {
  store.dispatch({ type: "LOGOUT" });
  store.dispatch(removeUserInfo());
  return <Navigate to="/sign-in" />;
};
