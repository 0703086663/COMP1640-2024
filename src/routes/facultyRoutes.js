const express = require("express");
const router = express.Router();

const FacultyController = require("../controllers/facultyController");
const { upload } = require("../middlewares/updateMulter");
const { isAdmin } = require("../middlewares/checkRole");

router.get("/delete/:id", isAdmin, FacultyController.delete);
router.post("/update/:id", isAdmin, FacultyController.update);
router.post("/store", upload.single("image"), isAdmin, FacultyController.store);
router.use("/", FacultyController.index);

module.exports = router;
