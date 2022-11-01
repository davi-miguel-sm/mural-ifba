const listarArquivosDoDiretorio = require('./listarArquivos'); // Função necessária para que seja feita a listagem dos arquivos

const caminhos = listarArquivosDoDiretorio('../media');

const modulos = caminhos.map((caminho) => {
	return caminho.split('/')[2];
});

const arrayModulos = [...new Set(modulos)];

let objModuloCaminho = {};

for (let modulo of arrayModulos) {
	eval(`objModuloCaminho.${modulo} = []`);
	for (let caminho of caminhos) {
		if (caminho.includes(modulo)) {
			eval(`objModuloCaminho.${modulo}.push(caminho)`);
		}
	}
}

let resultado = Object.keys(objModuloCaminho).map((key) => {
	return [key, objModuloCaminho[key]];
});

module.exports = resultado;
