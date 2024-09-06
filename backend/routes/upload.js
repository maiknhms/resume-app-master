const router = require("express").Router();
const uploadImage = require("../middleware/uploadImage");
const uploadCtrl = require("../controllers/uploadCtrl");
const auth = require("../middleware/auth");

router.post("/upload_picture", uploadImage, auth, uploadCtrl.uploadAvatar);

module.exports = router;
