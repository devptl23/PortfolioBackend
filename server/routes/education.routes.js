import express from "express";
import {
  createEducation,
  getEducations,
  getEducationById,
  updateEducation,
  deleteEducation,
  deleteAllEducations
} from "../controllers/education.controller.js";

const router = express.Router();

// Exposes qualification endpoints (aka education) under /api/qualifications.
router
  .route("/")
  .get(getEducations)
  .post(createEducation)
  .delete(deleteAllEducations);

router
  .route("/:id")
  .get(getEducationById)
  .put(updateEducation)
  .delete(deleteEducation);

export default router;
