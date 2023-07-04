import express from "express";
import {CreateData , GetAll , Getby_id , DeleteData } from "../controller/user.js"

const router = express.Router();


//API routes.
router.post("/createdata",CreateData);

router.get("/getdata",GetAll);

router.get("/getdata/:id",Getby_id);

router.delete("/delete/:id",DeleteData);

export default router;