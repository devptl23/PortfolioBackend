import express from 'express';
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
  deleteAllProjects
} from '../controllers/project.controller.js';

const router = express.Router();

router.route('/api/projects')
  .get(getProjects)
  .post(createProject)
  .delete(deleteAllProjects);

router.route('/api/projects/:id')
  .get(getProjectById)
  .put(updateProject)
  .delete(deleteProject);

export default router;
