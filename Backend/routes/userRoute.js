import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
  getUserName,
} from "../controllers/userController.js";
import authUser from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.post("/getName", authUser, getUserName);

export default userRouter;
