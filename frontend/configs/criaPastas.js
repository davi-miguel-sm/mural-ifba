const pegarDados = require('./tratandoApi');
const criaHTML = require('./criaHtml');
const fs = require('fs');

async function alteraPastas() {
	const dados = await pegarDados();
	const modulos = Object.keys(dados);
	const path = './slider';
	try {
		for (let modulo of modulos) {
			if (!fs.existsSync(`${path}`)) {
				fs.mkdirSync(`${path}`);
			}
			if (!fs.existsSync(`${path}/${modulo}`)) {
				fs.mkdirSync(`${path}/${modulo}`);
			}
			if (!fs.existsSync(`${path}/${modulo}/index.html`)) {
				fs.writeFileSync(`${path}/${modulo}/index.html`, criaHTML(modulo), (err) => {
					console.log(err);
				});
			}
		}
	} catch (err) {
		console.log('Erro na criação: ' + err);
	}
}

alteraPastas();
