import {
  getLocalStorage,
  objectEntries,
  removeLocalStorage,
  setLocalStorage,
} from "./javascript";

export const isLoggedIn = () => {
  const result = JSON.parse(getLocalStorage("isLoggedIn"));
  return result || false;
};

export const setLoggedIn = () => setLocalStorage("isLoggedIn", true);

export const setLoggedOut = () => removeLocalStorage("isLoggedIn");

export const addUserLocalStorage = (obj) =>
  objectEntries(obj).forEach(([key, value]) => {
    setLocalStorage(key, value);
  });

export const removeUserLocalStorage = (...rest) =>
  rest.forEach((key) => removeLocalStorage(key));
