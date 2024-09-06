const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
	let errors = {};

	// data.institute = !isEmpty(data.institute) ? data.institute : "";
	// data.courses = !isEmpty(data.courses) ? data.courses : "";
	// data.marks = !isEmpty(data.marks) ? data.marks : "";
	data.graduationDate = !isEmpty(data.graduationDate) ? data.graduationDate : "";

	// if (Validator.isEmpty(data.institute)) {
	//   errors.institute = "institute field is required";
	// }

	// if (Validator.isEmpty(data.courses)) {
	//   errors.courses = "courses field is required";
	// }

	// if (Validator.isEmpty(data.marks)) {
	//   errors.marks = "Field of study field is required";
	// }

	// if (Validator.isEmpty(data.graduationDate)) {
	// 	errors.graduationDate = "graduationDate field is required";
	// }

	return {
		errors,
		isValid: isEmpty(errors),
	};
};
