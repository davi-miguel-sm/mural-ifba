const pegarDados = require('./tratandoApi');
const criaHTML = require('./criaHtml');
const fs = require('fs');

async function alteraPastas() {
	const dados = await pegarDados();
	const modulos = Object.keys(dados);
	try {
		for (let modulo of modulos) {
			if (!fs.existsSync(`./slider/${modulo}`)) {
				fs.mkdirSync(`./slider/${modulo}`);
			}
			if (!fs.existsSync(`./slider/${modulo}/index.html`)) {
				fs.writeFileSync(`./slider/${modulo}/index.html`, criaHTML(modulo), (err) => {
					console.log(err);
				});
			}
		}
	} catch (err) {
		console.log('Gerou o Erro: ' + err);
	}
}

alteraPastas();
