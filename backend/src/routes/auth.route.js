import express from "express";
import {
  login,
  logout,
  onboard,
  signup,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/onboarding", protectRoute, onboard);
console.log("Loading auth routes");
console.log("Registering router path: /your-path-here");
// check if user is logged in
router.get("/me", protectRoute, async (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});
export default router;
