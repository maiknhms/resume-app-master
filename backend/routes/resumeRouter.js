const router = require("express").Router();
const {
  getUserProfile,
  getAllProfiles,
  getHandle,
  getProfileById,
  createProfile,
  addExperience,
  addEducation,
  addProject,
  addCertificate,
  deleteProject,
  deleteCertificate,
  deleteExperience,
  deleteEducation,
  deleteUser,
  editEducation,
  editExperience,
  editProject,
  editCertificate,
  getResumeInfo,
  getResumeAllInfo,
} = require("../controllers/resumeCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

router.get("/all", auth, getUserProfile);
router.get("/get", auth, getAllProfiles);
router.get("/user/:user_id", getProfileById);

router.post("/profile", auth, createProfile);
router.post("/experience", auth, addExperience);
router.post("/education", auth, addEducation);
router.post("/project", auth, addProject);
router.post("/certificate", auth, addCertificate);

router.delete("/project/:pro_id", auth, deleteProject);
router.delete("/certificate/:cer_id", auth, deleteCertificate);
router.delete("/experience/:exp_id", auth, deleteExperience);
router.delete("/education/:edu_id", auth, deleteEducation);
router.delete("/", auth, deleteUser);

router.put("/edit-education/:arrayId", editEducation);
router.put("/edit-experience/:arrayId", auth, editExperience);
router.put("/edit-project/:arrayId", auth, editProject);
router.put("/edit-certificate/:arrayId", auth, editCertificate);

// router.get("/get-resume/:resumeId", auth, getResumeInfo);
router.get("/all_info", auth, authAdmin, getResumeAllInfo);

module.exports = router;
