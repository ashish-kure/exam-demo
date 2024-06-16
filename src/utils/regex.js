import store from "../redux/store";
import { equal } from "./javascript";

export const nameValidation = (name) => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(name);
};

export const passwordValidation = (password) => {
  const regex = /[a-zA-Z0-9]{6,30}/;
  return regex.test(password);
};

export const numberValidation = (number) => {
  const regex = /^[0-9]+$/;
  return regex.test(number);
};

export const emailValidation = (email) => {
  const regex = /^[^.][^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return regex.test(email);
};

export const confirmPasswordValidation = (value, compare) => {
  return value === compare;
};

export const questionValidation = (value) => {
  const exam = store.getState().teacher.exam;
  return !exam?.questions?.some(({ question }) => equal(value, question));
};
