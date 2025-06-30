const express = require('express');
const router = express.Router();
const PORT = process.env.PORT

// get
router.get('/', (req, res) => {
    res.send('Get all posts');
})

// show
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send('Show post with id:', id);
})

// post
router.post('/', (req, res) => {
    res.send('New post created');
})

// put
router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.send('Full update of post with id:', id);
})

// patch
router.patch('/', (req, res) => {
    const id = req.params.id;
    res.send('Partial update of post with id:', id);
})

// delete
router.delete('/', (req, res) => {
    const id = req.params.id;
    res.send('Delete post with id:', id);
})

