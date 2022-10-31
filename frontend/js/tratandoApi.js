const axios = require('axios');
async function getDados() {
	try {
		const resposta = await axios.get('http://localhost:31568');
		const dados = await resposta.data;
		return dados;
	} catch (err) {
		console.log('Gerou o err: ' + err);
	}
}

module.exports = getDados;
