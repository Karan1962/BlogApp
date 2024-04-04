import { Router } from "express";
import { signUp,login } from "../Controllers/auth.controller.js";
import {google} from "../Controllers/google.controller.js"

const router = Router();

router.post('/signUp',signUp);
router.post('/login',login);
router.post('/googleSignIn',google);


export default router;