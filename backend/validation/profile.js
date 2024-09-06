// const Validator = require("validator");
// const isEmpty = require("./is-empty");

// module.exports = function validateProfileInput(data) {
//   let errors = {};

//   data.skills = !isEmpty(data.skills) ? data.skills : "";

//   if (Validator.isEmpty(data.skills)) {
//     errors.skills = "Skills field is required";
//   }

//   if (!isEmpty(data.twitter)) {
//     if (!Validator.isURL(data.twitter)) {
//       errors.twitter = "Not a valid URL";
//     }
//   }

//   if (!isEmpty(data.facebook)) {
//     if (!Validator.isURL(data.facebook)) {
//       errors.facebook = "Not a valid URL";
//     }
//   }

//   if (!isEmpty(data.linkedin)) {
//     if (!Validator.isURL(data.linkedin)) {
//       errors.linkedin = "Not a valid URL";
//     }
//   }

//   return {
//     errors,
//     isValid: isEmpty(errors),
//   };
// };

const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  // data.skills = !isEmpty(data.skills) ? data.skills : "";

  // if (Validator.isEmpty(data.skills)) {
  //   errors.skills = "Skills field is required";
  // }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
