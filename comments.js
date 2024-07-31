// Create new server

const express = require('express');
const router = express.Router();
const comments = require('../controllers/comments');

router.get('/comments', comments.getComments);
router.get('/comments/:id', comments.getComment);
router.post('/comments', comments.createComment);
router.put('/comments/:id', comments.updateComment);
router.delete('/comments/:id', comments.deleteComment);

module.exports = router;