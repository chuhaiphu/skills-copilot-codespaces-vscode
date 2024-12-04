// Create web server
// Create a web server that listens on port 3000 and responds with the following:
// 1. GET /comments - responds with a JSON object containing comments
// 2. POST /comments - adds a new comment
// 3. PUT /comments - updates a comment
// 4. DELETE /comments - deletes a comment

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let comments = [];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = req.body;
    comments[id] = comment;
    res.json(comment);
});

app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    comments.splice(id, 1);
    res.json(comments);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});