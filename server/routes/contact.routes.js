import express from 'express';
import {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
  deleteAllContacts
} from '../controllers/contact.controller.js';

const router = express.Router();

router.route('/api/contacts')
  .get(getContacts)
  .post(createContact)
  .delete(deleteAllContacts);

router.route('/api/contacts/:id')
  .get(getContactById)
  .put(updateContact)
  .delete(deleteContact);

export default router;
