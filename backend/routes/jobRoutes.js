import express from "express";
import { matchJobs } from "../services/matchService.js";

const router = express.Router();

router.post("/match", (req, res) => {
  const { userSkills } = req.body;

  if (!userSkills || userSkills.length === 0) {
    return res.status(400).json({ error: "No skills provided" });
  }

  const results = matchJobs(userSkills);

  res.json(results);
});

export default router;