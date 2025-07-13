const express = require('express');
const router = express.Router();
const apiClient = require('../utils/apiClient');

router.get('/:id', async (req, res) => {
  try {
    const response = await apiClient.get(`/api/quote_requests/${req.params.id}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json(err.response.data);
  }
});

router.post('/', async (req, res) => {
  try {
    const response = await apiClient.post(`/api/quote_requests`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json(err.response.data);
  }
});

router.post('/:quote_request_id/pending_quote_suppliers', async (req, res) => {
  try {
    const response = await apiClient.post(`/api/quote_requests/${req.params.quote_request_id}/pending_quote_suppliers`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json(err.response.data);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const response = await apiClient.put(`/api/quote_requests/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json(err.response.data);
  }
});

router.get('/', async (req, res) => {
  try {
    const response = await apiClient.get(`/api/quote_requests?creatable-from-type=RequisitionHeader&fields=["id"]`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json(err.response.data);
  }
});

module.exports = router;
