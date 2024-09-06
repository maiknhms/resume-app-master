const initialState = {
	picture: "",
	firstName: "",
	lastName: "",
	positionTitle: "",
	bio: "",
	email: "",
	contactNumber: "",
	address: "",
	skills: [],
	interests: [],
	languages: [],
	isShowAddEducation: false,
	education: {
		studyProgram: "",
		institute: "",
		graduationDate: "",
		location: {
			city: "",
			country: "",
		},
		marks: "",
		courses: [],
	},
	addedEducation: [],
	isShowAddExperience: false,
	experience: {
		position: "",
		company: "",
		from: "",
		to: "",
		currentlyWorking: false,
		location: {
			city: "",
			country: "",
		},
		description: "",
		tasks: [],
	},
	addedExperience: [],
	isShowAddProject: false,
	project: {
		projectName: "",
		from: "",
		to: "",
		description: "",
	},
	addedProject: [],
	isShowAddCertificate: false,
	certificate: {
		certificateName: "",
		certificationDate: "",
		certificationNumber: "",
		description: "",
	},
	addedCertificate: [],
};

function resumeTemplateReducer(state = initialState, action) {
	switch (action.type) {
		case "pictureChange":
			return { ...state, picture: action.payload };
		case "firstNameChange":
			return { ...state, firstName: action.payload };
		case "lastNameChange":
			return { ...state, lastName: action.payload };
		case "positionTitleChange":
			return { ...state, positionTitle: action.payload };
		case "bioChange":
			return { ...state, bio: action.payload };
		case "emailChange":
			return { ...state, email: action.payload };
		case "contactNumberChange":
			return { ...state, contactNumber: action.payload };
		case "addressChange":
			return { ...state, address: action.payload };
		case "skillsChange":
			return { ...state, skills: action.payload };
		case "interestsChange":
			return { ...state, interests: action.payload };
		case "languagesChange":
			return { ...state, languages: action.payload };
		case "setIsShowAddEducation":
			return { ...state, isShowAddEducation: action.payload };
		case "educationStudyProgramChange":
			return {
				...state,
				education: {
					...state.education,
					studyProgram: action.payload,
				},
			};
		case "educationInstituteChange":
			return {
				...state,
				education: {
					...state.education,
					institute: action.payload,
				},
			};
		case "educationGraduationDateChange":
			return {
				...state,
				education: {
					...state.education,
					graduationDate: action.payload,
				},
			};
		case "educationCityChange":
			return {
				...state,
				education: {
					...state.education,
					location: {
						...state.education.location,
						city: action.payload,
					},
				},
			};
		case "educationCountryChange":
			return {
				...state,
				education: {
					...state.education,
					location: {
						...state.education.location,
						country: action.payload,
					},
				},
			};
		case "educationMarksChange":
			return {
				...state,
				education: {
					...state.education,
					marks: action.payload,
				},
			};
		case "educationCoursesChange":
			return {
				...state,
				education: {
					...state.education,
					courses: action.payload,
				},
			};
		case "educationChange":
			return {
				...state,
				education: action.payload,
			};
		case "educationAdd":
			return {
				...state,
				addedEducation: [...state.addedEducation, action.payload],
			};
		case "educationReset":
			return {
				...state,
				education: {
					...state.education,
					studyProgram: "",
					institute: "",
					graduationDate: "",
					location: {
						...state.education.location,
						city: "",
						country: "",
					},
					marks: "",
					courses: [],
				},
			};
		case "educationRemove":
			return {
				...state,
				addedEducation: [
					...state.addedEducation.slice(0, action.payload),
					...state.addedEducation.slice(action.payload + 1),
				],
			};
		case "educationRemoveAll":
			return {
				...state,
				addedEducation: [],
			};
		case "addedEducationChange":
			return {
				...state,
				addedEducation: [
					...state.addedEducation.slice(0, action.index),
					action.payload,
					...state.addedEducation.slice(action.index + 1),
				],
			};
		case "setIsShowAddExperience":
			return {
				...state,
				isShowAddExperience: action.payload,
			};
		case "experiencePositionChange":
			return {
				...state,
				experience: {
					...state.experience,
					position: action.payload,
				},
			};
		case "experienceCompanyChange":
			return {
				...state,
				experience: {
					...state.experience,
					company: action.payload,
				},
			};
		case "experienceFromChange":
			return {
				...state,
				experience: {
					...state.experience,
					from: action.payload,
				},
			};
		case "experienceToChange":
			return {
				...state,
				experience: {
					...state.experience,
					to: action.payload,
				},
			};
		case "experienceCurrentlyWorkingChange":
			return {
				...state,
				experience: {
					...state.experience,
					currentlyWorking: action.payload,
				},
			};
		case "experienceCityChange":
			return {
				...state,
				experience: {
					...state.experience,
					location: {
						...state.experience.location,
						city: action.payload,
					},
				},
			};
		case "experienceCountryChange":
			return {
				...state,
				experience: {
					...state.experience,
					location: {
						...state.experience.location,
						country: action.payload,
					},
				},
			};
		case "experienceDescriptionChange":
			return {
				...state,
				experience: {
					...state.experience,
					description: action.payload,
				},
			};
		case "experienceTasksChange":
			return {
				...state,
				experience: {
					...state.experience,
					tasks: action.payload,
				},
			};
		case "experienceChange":
			return {
				...state,
				experience: action.payload,
			};
		case "experienceAdd":
			return {
				...state,
				addedExperience: [...state.addedExperience, action.payload],
			};
		case "experienceReset":
			return {
				...state,
				experience: {
					...state.experience,
					position: "",
					company: "",
					from: null,
					to: null,
					currentlyWorking: false,
					location: {
						city: "",
						country: "",
					},
					description: "",
					tasks: [],
				},
			};
		case "experienceRemove":
			return {
				...state,
				addedExperience: [
					...state.addedExperience.slice(0, action.payload),
					...state.addedExperience.slice(action.payload + 1),
				],
			};
		case "experienceRemoveAll":
			return {
				...state,
				addedExperience: [],
			};
		case "addedExperienceChange":
			return {
				...state,
				addedExperience: [
					...state.addedExperience.slice(0, action.index),
					action.payload,
					...state.addedExperience.slice(action.index + 1),
				],
			};
		case "setIsShowAddProject":
			return {
				...state,
				isShowAddProject: action.payload,
			};
		case "projectProjectNameChange":
			return {
				...state,
				project: {
					...state.project,
					projectName: action.payload,
				},
			};
		case "projectFromChange":
			return {
				...state,
				project: {
					...state.project,
					from: action.payload,
				},
			};
		case "projectToChange":
			return {
				...state,
				project: {
					...state.project,
					to: action.payload,
				},
			};
		case "projectDescriptionChange":
			return {
				...state,
				project: {
					...state.project,
					description: action.payload,
				},
			};
		case "projectChange":
			return {
				...state,
				project: action.payload,
			};
		case "projectAdd":
			return {
				...state,
				addedProject: [...state.addedProject, action.payload],
			};
		case "projectReset":
			return {
				...state,
				project: {
					...state.project,
					projectName: "",
					from: null,
					to: null,
					description: "",
				},
			};
		case "projectRemove":
			return {
				...state,
				addedProject: [
					...state.addedProject.slice(0, action.payload),
					...state.addedProject.slice(action.payload + 1),
				],
			};
		case "projectRemoveAll":
			return {
				...state,
				addedProject: [],
			};
		case "addedProjectChange":
			return {
				...state,
				addedProject: [
					...state.addedProject.slice(0, action.index),
					action.payload,
					...state.addedProject.slice(action.index + 1),
				],
			};
		case "setIsShowAddCertificate":
			return {
				...state,
				isShowAddCertificate: action.payload,
			};
		case "certificateCertificateNameChange":
			return {
				...state,
				certificate: {
					...state.certificate,
					certificateName: action.payload,
				},
			};
		case "certificateCertificationDateChange":
			return {
				...state,
				certificate: {
					...state.certificate,
					certificationDate: action.payload,
				},
			};
		case "certificateCertificationNumberChange":
			return {
				...state,
				certificate: {
					...state.certificate,
					certificationNumber: action.payload,
				},
			};
		case "certificateDescriptionChange":
			return {
				...state,
				certificate: {
					...state.certificate,
					description: action.payload,
				},
			};
		case "certificateChange":
			return {
				...state,
				certificate: action.payload,
			};
		case "certificateAdd":
			return {
				...state,
				addedCertificate: [...state.addedCertificate, action.payload],
			};
		case "certificateReset":
			return {
				...state,
				certificate: {
					...state.certificate,
					certificateName: "",
					certificationDate: null,
					certificationNumber: "",
					description: "",
				},
			};
		case "certificateRemove":
			return {
				...state,
				addedCertificate: [
					...state.addedCertificate.slice(0, action.payload),
					...state.addedCertificate.slice(action.payload + 1),
				],
			};
		case "certificateRemoveAll":
			return {
				...state,
				addedCertificate: [],
			};
		case "addedCertificateChange":
			return {
				...state,
				addedCertificate: [
					...state.addedCertificate.slice(0, action.index),
					action.payload,
					...state.addedCertificate.slice(action.index + 1),
				],
			};
		default:
			return state;
	}
}

export default resumeTemplateReducer;

// const initialState = {
// 	count: 0,
// };

// function resumeTemplateReducer(state = initialState, action) {
// 	switch (action.type) {
// 		case "increment":
// 			return { count: state.count + 1 };
// 		case "decrement":
// 			return { count: state.count - 1 };
// 		case "reset":
// 			return init(action.payload);
// 		default:
// 			return new Error();
// 	}
// }

// export default resumeTemplateReducer;
