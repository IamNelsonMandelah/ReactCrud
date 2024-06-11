import express from "express";
import {
  authUser,
  registerUser,
  getUsers,
  deleteUser,
  updateUser,
  getUserById,
  getUserProfile,
  updateUserProfile

} from "../controllers/userController.js";

const router = express.Router();

router.route("/").post(registerUser).get(getUsers); // This will be used to register a new user
router
  .route("/:id")
  .delete(deleteUser)
  .get( getUserById)
  .put(updateUser);
router.route("/login").post(authUser);
router
  .route("/profile")
  .get(getUserProfile)
  .put(updateUserProfile);
// router.route("/profile/:id").get(protect, getUserProfile);
router.route("/profile/:id").get(getUserById);

export default router;
