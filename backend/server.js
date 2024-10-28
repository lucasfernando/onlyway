const express = require('express');
const app = express();
const port = 3000;

var corsMiddleware = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

    next();
}


// const filtro = document.getElementById('filtro');
// const lista = document.getElementById('lista');
// const itens = Array.from(document.querySelectorAll('#lista li'));

// filtro.addEventListener('input', () => {
//   const texto = filtro.value.toLowerCase();
//   const itensFiltrados = itens.filter(item => item.textContent.toLowerCase().includes(texto));
//   lista.innerHTML = '';
//   itensFiltrados.forEach(item => lista.appendChild(item));
// });

app.use(corsMiddleware);

app.get('/', (req, res) => {
    res.status(200).json({ message: `Hello, ${req.query.name}!` });
});

app.listen(port, () => {
    console.log(`Server listening at http://127.0.0.1:${port}`);
});
