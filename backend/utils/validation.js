// Email validation
export const isValidEmail = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

// Phone validation - 10 digits
export const isValidPhone = (phone) => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
};

// Password validation - minimum 6 characters
export const isValidPassword = (password) => {
  return password && password.length >= 6;
};

// Name validation
export const isValidName = (name) => {
  return name && name.trim().length >= 2;
};
