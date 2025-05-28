const express = require('express');
const router = express.Router();

const { getAllWebtoons, createWebtoon, getWebtoonById, deleteWebtoonById } = require('../controllers/webtoonController');
const authMiddleware = require('../middlewares/authMiddleware');

// Public Routes
router.get('/', getAllWebtoons);
router.get('/:id', getWebtoonById);

// Protected Routes (JWT Required)
router.post('/', authMiddleware, createWebtoon);
router.delete('/:id', authMiddleware, deleteWebtoonById);

module.exports = router;
