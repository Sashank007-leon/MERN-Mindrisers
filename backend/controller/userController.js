import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import { User } from "../model/model.js";
import jwt from "jsonwebtoken";

const jwtToken = process.env.JWT_SECRET_KEY;

// Function for token
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    jwtToken,
    {
      expiresIn: "1d",
    }
  );
};

export const createUser = async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let data = req.body;
  try {
    let userExists = await User.findOne({ email: data.email });
    if (userExists)
      return res.status(400).send({ message: "Email already exists" });

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10); // Generate a salt
    data.password = await bcrypt.hash(data.password, salt); // Hash password

    let result = await User.create(data);

    const token = generateToken(result);

    res.status(200).json({
      success: true,
      message: "User created successfully",
      result: result,
      token: token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "You are not registered, please sign up",
      });
    }

    let isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateToken(user);

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      result: user,
      token: token,
    });

  } catch (error) {
    console.error("Login Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const getUserDetails = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user, // This contains id, name, and email from the token
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};