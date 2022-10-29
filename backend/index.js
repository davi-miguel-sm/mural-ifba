const listarArquivosDoDiretorio = require('./listarArquivos'); // Função necessária para que seja feita a listagem dos arquivos
const express = require('express'); // Framework para fornecer os recursos http para criação da API
const bodyParser = require('body-parser'); // Responsavel por fazer o tratamento dos dados, convertendo-os para um objeto javscript.(extended false é para que não se usem campos encadeados)
const cors = require('cors'); // Administra as requisições que são feitas para a API (Controle de quem faz a requisição)
const morgan = require('morgan'); // Cria um log do lado do servidor a respeito das requisições que são feitas para a API

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

let db = listarArquivosDoDiretorio('./src/media');
console.log(typeof db);

app.get('/', (req, res) => {
	return res.json(db);
});

app.listen(31568, () => {
	console.log('Express started at http://localhost:31568');
});
