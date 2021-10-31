const login = {
  email: {
    notEmpty: {
      errorMessage: "Email cannot be empty",
      bail: true,
    },
  },
  password: {
    notEmpty: {
      errorMessage: "Password cannot be empty",
      bail: true,
    },
  },
};

module.exports = { login };
