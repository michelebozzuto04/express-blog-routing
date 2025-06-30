const express = require('express');
const app = express();
const PORT = process.env.PORT;
const PostRouter = require('./routers/posts');

app.get('/', (req, res) => {
    res.send('Index page')
})

app.use('/posts', PostRouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})