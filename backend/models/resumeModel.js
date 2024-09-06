const mongoose = require("mongoose");

const experienceSchema = mongoose.Schema({
	position: {
		type: String,
	},
	company: {
		type: String,
	},
	from: {
		type: Date,
		required: true,
	},
	to: {
		type: Date,
	},
	currentlyWorking: {
		type: Boolean,
	},
	location: {
		city: { type: String },
		country: { type: String },
	},
	description: {
		type: String,
	},
	tasks: [String],
});
const educationSchema = mongoose.Schema({
	studyProgram: {
		type: String,
	},
	institute: {
		type: String,
	},
	graduationDate: {
		type: Date,
	},
	location: {
		city: { type: String },
		country: { type: String },
	},
	marks: {
		type: String,
	},
	courses: [String],
});
const certificateSchema = mongoose.Schema({
	certificateName: {
		type: String,
	},
	description: {
		type: String,
	},
	certificationNumber: {
		type: String,
	},
	certificationDate: {
		type: Date,
		required: true,
	},
});
const projectSchema = mongoose.Schema({
	projectName: {
		type: String,
	},
	description: {
		type: String,
	},
	from: {
		type: Date,
		required: true,
	},
	to: {
		type: Date,
	},
});
const ResumeSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "users",
		},
		picture: {
			type: String,
		},
		firstName: {
			type: String,
		},
		lastName: {
			type: String,
		},
		positionTitle: {
			type: String,
		},
		bio: {
			type: String,
		},
		email: {
			type: String,
			trim: true,
		},
		contactNumber: {
			type: String,
		},
		address: {
			type: String,
		},
		skills: {
			type: [String],
		},
		languages: {
			type: [String],
		},
		interests: {
			type: [String],
		},
		project: [projectSchema],
		certificate: [certificateSchema],
		experience: [experienceSchema],
		education: [educationSchema],
		social: {
			twitter: {
				type: String,
			},
			facebook: {
				type: String,
			},
			linkedin: {
				type: String,
			},
		},
	},
	{
		timeStamps: true,
	}
);

module.exports = Resume = mongoose.model("resume", ResumeSchema);
