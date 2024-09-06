const express = require('express');
const app = express();
const port = 3000;

var corsMiddleware = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

    next();
}

app.use(corsMiddleware);

app.get('/', (req, res) => {
    res.status(200).json({ message: `Hello, ${req.query.name}!` });
});

app.listen(port, () => {
    console.log(`Server listening at http://127.0.0.1:${port}`);
});
