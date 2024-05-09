import { Router } from "express";
import * as AuthRouter from './controller/feedback.controller.js'


const router=Router();

router.post('/signup',AuthRouter.signup)

export default router;