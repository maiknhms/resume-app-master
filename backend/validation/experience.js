const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
	let errors = {};

	// data.position = !isEmpty(data.position) ? data.position : "";
	// data.company = !isEmpty(data.company) ? data.company : "";
	// data.graduationDate = !isEmpty(data.graduationDate)
	//   ? data.graduationDate
	//   : "";

	// if (Validator.isEmpty(data.position)) {
	//   errors.position = "Job position field is required";
	// }

	// if (Validator.isEmpty(data.company)) {
	//   errors.company = "Company field is required";
	// }

	// if (Validator.isEmpty(data.graduationDate)) {
	//   errors.graduationDate = "graduationDate field is required";
	// }

	return {
		errors,
		isValid: isEmpty(errors),
	};
};
