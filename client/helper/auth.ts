import { emailRegex } from './regex';

export const checkEmail = (value) => {
  const re = emailRegex;
  return re.test(String(value).toLowerCase());
};

export const checkPassword = (value) => {
  console.log('vale', value.length < 8);
  if (value.length < 8) {
    return false;
  }
  return true;
};

export const validateAuth = (values) => {
  const errors: any = {};
  return errors;
};

export const validateSignup = (values) => {
  const errors: any = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!checkEmail(values.email)) {
    errors.email = 'Enter a valid email.';
  }
  if (!values.firstname) {
    errors.firstname = 'First name is required';
  }
  if (!values.lastname) {
    errors.lastname = 'Last name is required';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
};

export const validateLogin = (values) => {
  const errors: any = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!checkEmail(values.email)) {
    errors.email = 'Enter a valid email.';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
};
