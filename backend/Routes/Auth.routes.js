import { Router } from "express";
import { signUp,login,googleLogin } from "../Controllers/auth.controller.js";

const router = Router();

router.post('/signUp',signUp);
router.post('/login',login);
router.post('/googleSignIn',googleLogin);


export default router;