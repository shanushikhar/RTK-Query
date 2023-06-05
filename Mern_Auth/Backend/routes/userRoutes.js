import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controller/userController.js";
import secure from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.route("/auth").post(authUser);
router.route("/logout").post(logoutUser);
router
  .route("/profile")
  .get(secure, getUserProfile)
  .put(secure, updateUserProfile);

export default router;
