import { Router } from "express";

import * as feedbackRouter from '../controllers/feedback.controller.js'
const router=Router();
router.post('/youreExperince',feedbackRouter.youreExperince)
export default router;



