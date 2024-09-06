const validateProfileInput = require("../validation/profile");
const validateExperienceInput = require("../validation/experience");
const validateEducationInput = require("../validation/education");

const Resume = require("../models/resumeModel");
const User = require("../models/userModel");

const getUserProfile = async (req, res) => {
  const errors = {};
  Resume.find()
    .populate("user", ["name", "picture"])
    .then((profiles) => {
      if (!profiles) {
        error.noprofile = "There are no profiles";
        return res.status(404).json(errors);
      }
      res.json(profiles);
    })
    .catch((err) => res.status(404).json({ profile: "There are no profiles" }));
};

const getAllProfiles = async (req, res) => {
  const errors = {};
  Resume.findOne({ user: req.user.id })
    .populate("user", ["name"])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        return res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch((err) => res.status(404).json(err));
};

const getProfileById = async (req, res) => {
  const errors = {};

  Resume.findOne({ user: req.params.user_id })
    .populate("user", ["name", "picture"])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(400).json(errors);
      }

      res.json(profile);
    })
    .catch((err) =>
      res.status(404).json({ profile: "There is no profile for this user" })
    );
};

const createProfile = async (req, res) => {
  const { errors, isValid } = validateProfileInput(req.body);

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  //Get fields
  const profileFields = {};
  profileFields.user = req.user.id;
  if (req.body.firstName) profileFields.firstName = req.body.firstName;
  if (req.body.lastName) profileFields.lastName = req.body.lastName;
  if (req.body.positionTitle)
    profileFields.positionTitle = req.body.positionTitle;
  if (req.body.bio) profileFields.bio = req.body.bio;
  if (req.body.email) profileFields.email = req.body.email;
  if (req.body.contactNumber)
    profileFields.contactNumber = req.body.contactNumber;

  if (req.body.address) profileFields.address = req.body.address;

  //Skills - Split into array
  // if (typeof req.body.skills !== "undefined") {
  //   profileFields.skills = req.body.skills.split(",");
  // }

  if (req.body.skills) profileFields.skills = req.body.skills;

  // languages -Split into array
  // if (typeof req.body.languages !== "undefined") {
  //   profileFields.languages = req.body.languages.split(",");
  // }

  if (req.body.languages) profileFields.languages = req.body.languages;

  //interests - Split into array
  // if (typeof req.body.interests !== "undefined") {
  //   profileFields.interests = req.body.interests.split(",");
  // }
  if (req.body.interests) profileFields.interests = req.body.interests;

  //Social
  profileFields.social = {};
  if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
  if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
  if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;

  Resume.findOne({ user: req.user.id }).then((profile) => {
    if (profile) {
      //Update
      Resume.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      ).then((profile) => res.json(profile));
    } else {
      //Create

      new Resume(profileFields).save().then((profile) => res.json(profile));
    }
  });
};

const addExperience = async (req, res) => {
  const { errors, isValid } = validateExperienceInput(req.body);

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Resume.findOne({ user: req.user.id }).then((resume) => {
    const newExp = {
      position: req.body.position,
      company: req.body.company,
      from: req.body.from,
      to: req.body.to,
      currentlyWorking: req.body.currentlyWorking,
      location: req.body.location,
      description: req.body.description,
      tasks: req.body.tasks,
    };

    //Add to exp array
    resume.experience.unshift(newExp);

    resume.save().then((resume) => res.json(resume));
  });
};

const addEducation = async (req, res) => {
  const { errors, isValid } = validateEducationInput(req.body);

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Resume.findOne({ user: req.user.id }).then((profile) => {
    const newEdu = {
      studyProgram: req.body.studyProgram,
      institute: req.body.institute,
      courses: req.body.courses,
      location: req.body.location,
      marks: req.body.marks,
      graduationDate: req.body.graduationDate,
    };

    //Add to edu array
    profile.education.unshift(newEdu);

    profile.save().then((profile) => res.json(profile));
  });
};

const addProject = async (req, res) => {
  // const { errors, isValid } = validateEducationInput(req.body);
  // Check Validation
  // if (!isValid) {
  // 	return res.status(400).json(errors);
  // }
  Resume.findOne({ user: req.user.id }).then((profile) => {
    const newProject = {
      projectName: req.body.projectName,
      description: req.body.description,
      from: req.body.from,
      to: req.body.to,
    };
    //Add to edu array
    profile.project.unshift(newProject);

    profile.save().then((profile) => res.json(profile));
  });
};

const addCertificate = async (req, res) => {
  // const { errors, isValid } = validateEducationInput(req.body);
  // //Check Validation
  // if (!isValid) {
  // 	return res.status(400).json(errors);
  // }
  Resume.findOne({ user: req.user.id }).then((profile) => {
    const newCertificate = {
      certificateName: req.body.certificateName,
      description: req.body.description,
      certificationNumber: req.body.certificationNumber,
      certificationDate: req.body.certificationDate,
    };

    //Add to edu array
    profile.certificate.unshift(newCertificate);

    profile.save().then((profile) => res.json(profile));
  });
};

const deleteProject = async (req, res) => {
  Resume.findOne({ user: req.user.id })
    .then((profile) => {
      // Get remove index
      const removeIndex = profile.project
        .map((item) => item.id)
        .indexOf(req.params.pro_id);

      //Splice out of array
      profile.project.splice(removeIndex, 1);

      //Save
      profile.save().then((profile) => res.json(profile));
    })
    .catch((err) => res.status(404).json(err));
};

const deleteCertificate = async (req, res) => {
  Resume.findOne({ user: req.user.id })
    .then((profile) => {
      // Get remove index
      const removeIndex = profile.certificate
        .map((item) => item.id)
        .indexOf(req.params.cer_id);

      //Splice out of array
      profile.certificate.splice(removeIndex, 1);

      //Save
      profile.save().then((profile) => res.json(profile));
    })
    .catch((err) => res.status(404).json(err));
};

const deleteExperience = async (req, res) => {
  Resume.findOne({ user: req.user.id })
    .then((profile) => {
      // Get remove index
      const removeIndex = profile.experience
        .map((item) => item.id)
        .indexOf(req.params.exp_id);

      //Splice out of array
      profile.experience.splice(removeIndex, 1);

      //Save
      profile.save().then((profile) => res.json(profile));
    })
    .catch((err) => res.status(404).json(err));
};

const deleteEducation = async (req, res) => {
  Resume.findOne({ user: req.user.id })
    .then((profile) => {
      // Get remove index
      const removeIndex = profile.education
        .map((item) => item.id)
        .indexOf(req.params.edu_id);

      //Splice out of array
      profile.education.splice(removeIndex, 1);

      //Save
      profile.save().then((profile) => res.json(profile));
    })
    .catch((err) => res.status(404).json(err));
};

const deleteUser = async (req, res) => {
  Resume.findOneAndRemove({ user: req.user.id }).then(() => {
    User.findOneAndRemove({ _id: req.user.id }).then(() =>
      res.json({ success: true })
    );
  });
};

const editEducation = async (req, res) => {
  const arrayId = req.params.arrayId;

  const { studyProgram, courses, institute, graduationDate, location, marks } =
    req.body;

  const edu = await Resume.updateOne(
    {
      "education._id": arrayId,
    },
    {
      $set: {
        "education.$.studyProgram": studyProgram,
        "education.$.courses": courses,
        "education.$.institute": institute,
        "education.$.location": location,
        "education.$.marks": marks,
        "education.$.graduationDate": graduationDate,
      },
    }
  );

  if (edu) {
    res.send("Successful");
  } else {
    res.status(500).send("Not successful");
  }
};

const editExperience = async (req, res) => {
  const arrayId = req.params.arrayId;

  const {
    position,
    company,
    description,
    location,
    from,
    to,
    currentlyWorking,
    tasks,
  } = req.body;

  const exp = await Resume.updateOne(
    {
      "experience._id": arrayId,
    },
    {
      $set: {
        "experience.$.position": position,
        "experience.$.company": company,
        "experience.$.from": from,
        "experience.$.to": to,
        "experience.$.description": description,
        "experience.$.location": location,
        "experience.$.currentlyWorking": currentlyWorking,
        "experience.$.tasks": tasks,
      },
    }
  );

  if (exp) {
    res.send("Successful");
  } else {
    res.status(500).send("Not successful");
  }
};

const editProject = async (req, res) => {
  const arrayId = req.params.arrayId;
  const { projectName, description, from, to } = req.body;

  const pro = await Resume.updateOne(
    { "project._id": arrayId },
    {
      "project.$.projectName": projectName,
      "project.$.description": description,
      "project.$.from": from,
      "project.$.to": to,
    }
  );
  if (pro) {
    res.send("success");
  } else {
    res.status(500).send("Not Successful");
  }
};

const editCertificate = async (req, res) => {
  const arrayId = req.params.arrayId;
  const { certificateName, description, certificateNo, certificationDate } =
    req.body;

  const cer = await Resume.updateOne(
    { "certificate._id": arrayId },
    {
      "certificate.$.certificateName": certificateName,
      "certificate.$.description": description,
      "certificate.$.certificateNo": certificateNo,
      "certificate.$.certificationDate": certificationDate,
    }
  );
  if (cer) {
    res.send("success");
  } else {
    res.status(500).send("Not Successful");
  }
};

// For admin Access
const getResumeAllInfo = async (req, res) => {
  try {
    // const resume = await Resume.find().select("-user");
    const resume = await Resume.find();
    res.json(resume);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

// const getResumeInfo = async (req, res) => {
//   try {
//     const resumeId = req.params.resumeId;
//     const resume = await Resume.findById({ _id: resumeId });
//     res.json(resume);
//   } catch (err) {
//     return res.status(500).json({ msg: err.message });
//   }
// };

module.exports = {
  deleteUser,
  deleteEducation,
  deleteExperience,
  deleteCertificate,
  deleteProject,
  addCertificate,
  addProject,
  addEducation,
  addExperience,
  createProfile,
  getProfileById,
  getAllProfiles,
  getUserProfile,
  editEducation,
  editExperience,
  editProject,
  editCertificate,
  // getResumeInfo,
  getResumeAllInfo,
};
