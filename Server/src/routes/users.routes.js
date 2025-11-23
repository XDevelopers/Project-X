import { Router } from "express";
import {Login, Register, verifyOTP} from "../controllers/Register.js";
import { IsAuthenticated } from "../meddleWare/Authenticated.js";

const router = Router();

router.route("/register").post(Register,verifyOTP);
// router.route("/otpValidation").post(IsAuthenticated, verif);
router.route("/login").post(Login);
// router.route("/logout").post(logoutUser)

export default router;
