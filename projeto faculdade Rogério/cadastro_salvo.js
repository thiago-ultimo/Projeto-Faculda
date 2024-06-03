const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Rota para lidar com requisições POST para /salvar-dados
app.post('/salvar-dados', (req, res) => {
    const dados = req.body; // Dados recebidos do cliente
    // Aqui você pode salvar os dados em algum lugar
    console.log('Dados recebidos:', dados);
    res.json({ message: 'Dados recebidos com sucesso.' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
