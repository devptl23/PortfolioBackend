import express from 'express';
import {
  createEducation,
  getEducations,
  getEducationById,
  updateEducation,
  deleteEducation,
  deleteAllEducations
} from '../controllers/education.controller.js';

const router = express.Router();

router.route('/api/qualifications')
  .get(getEducations)
  .post(createEducation)
  .delete(deleteAllEducations);

router.route('/api/qualifications/:id')
  .get(getEducationById)
  .put(updateEducation)
  .delete(deleteEducation);

export default router;
