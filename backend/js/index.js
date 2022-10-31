const express = require('express'); // Framework para fornecer os recursos http para criação da API
const cors = require('cors'); // Administra as requisições que são feitas para a API (Controle de quem faz a requisição)
const objModuloCaminho = require('./separarModulos');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	return res.json(objModuloCaminho);
});

app.listen(31568, () => {
	console.log('Express started at http://localhost:31568');
});
