import { Router } from "express";

import * as feedbackRouter from '../controllers/feedback.controller.js'
const router=Router();
router.post('/youreExperince',feedbackRouter.youreExperince)
export default router;



// import { Router } from "express";
// const router=Router();

// router.get('/',(req,res)=>{
//     try {
//         console.log("hiiiiiiiiiiiiiii");
//         res.status(200).json({ message: "Function executed successfully." });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Internal server error." });
//     }
// })

// export default router;