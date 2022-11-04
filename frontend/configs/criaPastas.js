const fs = require('fs');
const pegarDados = require('./tratandoApi');
const criaHTML = require('./criaHtml');
const criaJS = require('./criaJS');
const criaCSS = require('./criaCss');

async function criaPastas() {
	const dados = await pegarDados();
	let modulos = [];
	for (let i = 0; i < dados.length; i++) {
		modulos.push(dados[i][0]);
	}
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
				fs.writeFileSync(`${path}/${modulo}/index.html`, criaHTML());
			}
			if (!fs.existsSync(`${path}/${modulo}/index.js`)) {
				fs.writeFileSync(`${path}/${modulo}/index.js`, criaJS());
			}
			if (!fs.existsSync(`${path}/${modulo}/styles.css`)) {
				fs.writeFileSync(`${path}/${modulo}/styles.css`, criaCSS());
			}
		}
	} catch (err) {
		console.log('Erro na criação: ' + err);
	}
}

criaPastas();
