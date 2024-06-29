const express = require('express');
const router = express.Router();



// GET /contacts
router.get('/', (req, res) => {
  // Handle GET request for contacts
  res.send('GET request for contacts');
});

// POST /contacts
router.post('/', (req, res) => {
  // Handle POST request for contacts
  res.send('POST request for contacts');
});

// PUT /contacts/:id
router.put('/:id', (req, res) => {
  // Handle PUT request for a specific contact
  res.send(`PUT request for contact ${req.params.id}`);
});

// DELETE /contacts/:id
router.delete('/:id', (req, res) => {
  // Handle DELETE request for a specific contact
  res.send(`DELETE request for contact ${req.params.id}`);
});

module.exports = router;
