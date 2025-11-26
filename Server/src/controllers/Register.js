import asynHandler from "../utilities/AsyncHandler.js";
import normalusers from "../models/Normaluser.model.js";
import { ApiError } from "../utilities/ApiError.js";
import { ApiResponse } from "../utilities/ApiResponse.js";
import bcrypt from "bcrypt";
import sendEmail from "./Emailverfiy.js";

const Register = asynHandler(async (req, res) => {
  const { username, email, password, Verificationcode, role, isverifyed } =
    req.body;

  // Validate inputs
  if (
    !username?.trim() ||
    !email?.trim() ||
    !password?.trim() ||
    !isverifyed ||
    !role
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await normalusers.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(400, "User already exists");
  }

  // Hash password

  // Create new user

  const hashedPassword = await bcrypt.hash(password, 10);
  const otp = Math.floor(100000 + Math.random() * 900000);

  const otpExpiry = Date.now() + 10 * 60 * 1000;
  const newUser = {
    username,
    email,
    password: hashedPassword,
    isverifyed: isverifyed,
    role: role,
  };

  //await sendEmail(email, otp);
  const createdUser = await normalusers.create(newUser);
  if (!createdUser) {
    throw new ApiError(500, "Error in registration");
  }
  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "otp send successfully"));
});

const Login = asynHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email?.trim() || !password?.trim()) {
    throw new ApiError(400, "All fields are required");
  }
  const user = await normalusers.findOne({ email });

  if (!user) {
    throw new ApiError(400, "Invalid email or password");
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new ApiError(400, "Invalid email or password");
  }
  const userWithoutPassword = await normalusers
    .findById(user._id)
    .select("-password");

  return res
    .status(200)
    .json(new ApiResponse(200, userWithoutPassword, "Login successful"));
});
const verifyOTP = asynHandler(async (req, res) => {
  const { email, code } = req.body;

  const user = await normalusers.findOne({ email });

  if (!user) throw new ApiError(404, "User not found");

  // Check if otp expired
  if (Date.now() > user.verificationExpires) {
    throw new ApiError(400, "OTP expired. Please register again.");
  }

  // Validate OTP
  if (user.verificationCode !== code) {
    throw new ApiError(400, "Invalid OTP");
  }

  // Mark user as verified
  user.isVerified = true;
  user.verificationCode = null;
  user.verificationExpires = null;

  await user.save();

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Account verified successfully"));
});

export { Register, Login, verifyOTP };
