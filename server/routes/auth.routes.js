import express from "express";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// Dedicated auth endpoints for issuing and revoking JWT tokens.
router.post("/signin", authCtrl.signin);
router.get("/signout", authCtrl.signout);

export default router;
