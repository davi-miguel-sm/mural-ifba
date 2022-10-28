const fs = require('fs');

function listarArquivosDoDiretorio(diretorio, arquivos) {
	if (!arquivos) {
		arquivos = [];
	}
	let listaDeArquivos = fs.readdirSync(diretorio);
	for (let k in listaDeArquivos) {
		let stat = fs.statSync(diretorio + '/' + listaDeArquivos[k]);
		if (stat.isDirectory()) {
			listarArquivosDoDiretorio(diretorio + '/' + listaDeArquivos[k], arquivos);
		} else {
			arquivos.push(diretorio + '/' + listaDeArquivos[k]);
		}
	}
	return arquivos;
}

let arquivos = listarArquivosDoDiretorio('src/media');

console.log(arquivos);
