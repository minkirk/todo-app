import {  getAllUsers, getMyProfile, login, logout, register } from "../controllers/userController.js";
import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


//fetching all users
router.get("/all",getAllUsers);


//creating a new user
router.post("/new",register);

router.post("/login",login);

router.get("/logout",logout);



router.get("/me",isAuthenticated,getMyProfile);


export default router;