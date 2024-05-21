import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "./javascript";

export const isLoggedIn = () => {
  const result = JSON.parse(getLocalStorage("isLoggedIn"));

  return result || false;
};

export const setLoggedIn = () => setLocalStorage("isLoggedIn", true);

export const setLoggedOut = () => removeLocalStorage("isLoggedIn");
