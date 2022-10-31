const axios = require('axios');
let urlAPI = 'http://localhost:31568/',
	objeto;

function pegarConteudoDeAPI(caminho) {
	return axios.get(caminho);
}

pegarConteudoDeAPI(urlAPI).then((resposta) => {
	const data = reposta.data;
	const modulo = data.map((elemento) => {
		return elemento.split('/')[1];
	});
});
