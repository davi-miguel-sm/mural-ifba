const fs = require('fs');
const pegarDados = require('./tratandoApi');
const criaHTML = require('./criaArquivos/criaHtml');
const criaJS = require('./criaArquivos/criaJS');
const criaCSS = require('./criaArquivos/criaCSS');
const criaIndexHtml = require('./criaArquivos/criaIndexHTML');
const criaStylesCSS = require('./criaArquivos/criaStylesCSS');
const criaIndexJS = require('./criaArquivos/criaIndexJS');

async function criaPastas() {
	const dados = await pegarDados();
	let modulos = [];
	for (let i = 0; i < dados.length; i++) {
		modulos.push(dados[i][0]);
	}
	const path = '../../slider';
	try {
		if (!fs.existsSync(`${path}`)) {
			fs.mkdirSync(`${path}`);
			fs.writeFileSync(`${path}/index.html`, criaIndexHtml());
			fs.writeFileSync(`${path}/styles.css`, criaStylesCSS());
			fs.writeFileSync(`${path}/index.js`, criaIndexJS());
		}
		for (let counter = 0; counter < modulos.length; counter++) {
			if (!fs.existsSync(`${path}/${modulos[counter]}`)) {
				fs.mkdirSync(`${path}/${modulos[counter]}`);
			}
			if (!fs.existsSync(`${path}/${modulos[counter]}/index.html`)) {
				fs.writeFileSync(`${path}/${modulos[counter]}/index.html`, criaHTML());
			}
			if (!fs.existsSync(`${path}/${modulos[counter]}/index.js`)) {
				fs.writeFileSync(`${path}/${modulos[counter]}/index.js`, criaJS(counter));
			}
			if (!fs.existsSync(`${path}/${modulos[counter]}/styles.css`)) {
				fs.writeFileSync(`${path}/${modulos[counter]}/styles.css`, criaCSS());
			}
		}
	} catch (err) {
		console.log('Erro na criação: ' + err);
	}
}

criaPastas();
