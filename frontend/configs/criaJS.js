function criaJS() {
	return `

const main = document.querySelector('main');
let tempoDoSlide = [];

for (let elem of arquivos) {
	const descricaoImagem = elem.split('/')[2].split('.');
	let extensao = descricaoImagem[1];
	tempoDoSlide.push(parseInt(descricaoImagem[0].split('-')[1]));

	if (extensao === 'jpg') {
		let img = document.createElement('img');
		if (elem.includes('01')) {
			img.className = 'selected';
		}
		img.src = elem;
		img.alt = \`\${descricaoImagem[0].split('-')[0]}\`;
		main.appendChild(img);
	} else if (extensao === 'mp4') {
		let video = document.createElement('video');
		if (elem.includes('01')) {
			video.className = 'selected';
		}
		main.appendChild(video);
		video.src = elem;
		video.loop = true;
		video.autoplay = true;
		// video.muted = true;
	}
}

for (let i = 0; i < arquivos.length; i++) {
	tempoDoSlide[i] = tempoDoSlide[i] * 1000;
}

let indexImagemAtual = 0,
	elementos = document.querySelectorAll('#slider img, #slider video'),
	max = arquivos.length,
	tempo = tempoDoSlide[0];

function proximaImagem() {
	elementos[indexImagemAtual].classList.remove('selected');
	indexImagemAtual++;
	if (indexImagemAtual === max) {
		indexImagemAtual = 0;
	}
	elementos[indexImagemAtual].classList.add('selected');
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
	let i = 0;
	while (i < tempoDoSlide.length) {
		await sleep(tempoDoSlide[i]);
		setTimeout(() => {
			proximaImagem();
		}, 100);
		if (i === tempoDoSlide.length - 1) {
			i = 0;
		}
	}
}

function iniciar() {
	demo();
}

window.addEventListener('load', iniciar);

`;
}

module.exports = criaJS;
