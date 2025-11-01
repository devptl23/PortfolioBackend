import Contact from '../models/contact.model.js';

// CRUD handlers backing the /api/contacts routes required for the assignment rubric.

export const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    const result = await contact.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.json({ message: 'Contact deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteAllContacts = async (req, res) => {
  try {
    // Bulk removal powers the "clear collection" admin task noted in the assignment.
    await Contact.deleteMany();
    res.json({ message: 'All contacts deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
