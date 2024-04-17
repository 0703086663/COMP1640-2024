const express = require("express");
const router = express.Router();

const AdminController = require("../controllers/adminController");
const {
  isAdmin,
  isManager,
  isStaff,
  isCoordinator,
} = require("../middlewares/checkRole");

router.get("/download", isManager, AdminController.download);
router.get(
  "/manage-contribution",
  isManager,
  AdminController.manageContribution
);
router.get("/manage-faculty", isAdmin, AdminController.manageFaculty);
router.get("/manage-user", isCoordinator, AdminController.manageUser);
router.get("/", isStaff, AdminController.index);

module.exports = router;
