import { Router } from "express";
import { body } from "express-validator";
import { createUser, getUserDetails, loginUser } from "../controller/userController.js";
import fetchUser from "../middleware/fetchUser.js";

let userRouter = Router();

// 🛠️ Route to create a new user with validation middleware
userRouter.route("/createUser").post(
  [
    body("name", "Name must be at least 3 characters long").isLength({ min: 3 }),
    body("email", "Invalid email format").isEmail(),
    body("password", "Password must be at least 6 characters long").isLength({ min: 6 }),
  ],
  createUser
);

// 🛠️ Route to login a user with validation middleware
userRouter.route("/login").post(
  [
    body("email", "Invalid email format").isEmail(),
  ],
  loginUser
)

userRouter.get("/", fetchUser, getUserDetails);

export default userRouter;
