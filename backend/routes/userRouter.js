const router = require("express").Router();
const {
  register,
  activateEmail,
  login,
  getAccessToken,
  forgotPassword,
  resetPassword,
  getUserInfo,
  getUsersAllInfo,
  logout,
  updateUser,
  updateUsersRole,
  deleteUser,
} = require("../controllers/userCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

router.post("/register", register);
router.post("/activate", activateEmail);
router.post("/login", login);
router.post("/refresh_token", getAccessToken);
router.post("/forgot", forgotPassword);
router.post("/reset", auth, resetPassword);

router.get("/info", auth, getUserInfo);
router.get("/all_info", auth, authAdmin, getUsersAllInfo);
router.get("/logout", logout);

router.patch("/update", auth, updateUser);
router.patch("/update_role/:id", auth, authAdmin, updateUsersRole);
router.delete("/delete/:id", auth, authAdmin, deleteUser);

module.exports = router;
