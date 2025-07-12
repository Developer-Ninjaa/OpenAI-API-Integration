const express = require('express');
const router = express.Router();
const apiClient = require('../utils/apiClient');
const multer = require('multer');
const upload = multer();

router.get('/:id/retrieve_legal_agreement', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await apiClient.get(`/api/contracts/${id}/retrieve_legal_agreement`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json(err.response.data);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const response = await apiClient.get(`/api/contracts/${req.params.id}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json(err.response.data);
  }
});

router.post('/', async (req, res) => {
  try {
    const response = await apiClient.post(`/api/contracts`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json(err.response.data);
  }
});

router.post('/:id/legal_agreement', async (req, res) => {
  try {
    const response = await apiClient.post(`/api/contracts/${req.params.id}/legal_agreement`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json(err.response.data);
  }
});

router.post('/:id/attachments', upload.single('attachment'), async (req, res) => {
  try {
    const response = await apiClient.post(`/api/contracts/${req.params.id}/attachments`, req.file, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json(err.response.data);
  }
});

router.put('/:id/submit_for_approval', async (req, res) => {
  try {
    const response = await apiClient.put(`/api/contracts/${req.params.id}/submit_for_approval?fields=["id","status"]`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json(err.response.data);
  }
});

module.exports = router;
