const show = (form, error) => {
  // form not found
  if (!form) {
    return;
  }

  if (!(error && error.response && error.response.status === 400)) {
    return;
  }

  // setting isValid
  Object.keys(form).map((key) => {
    if (form[key] instanceof Object) {
      form[key].success = true;
    }
  });

  // setting isInvalid
  Object.keys(error.response.data).map((key) => {
    if (form[key] instanceof Object) {
      form[key].error = error.response.data[key];
      form[key].success = false;
    }
  });
};

const clear = (form) => {
  // form not found
  if (!form) {
    return;
  }

  // clear all error/success
  Object.keys(form).map((key) => {
    if (form[key] instanceof Object) {
      form[key].error = [];
      form[key].success = false;
    }
  });
};

module.exports = {show, clear};
