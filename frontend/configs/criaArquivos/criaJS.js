function criaJS(numero) {
	return `const btn = document.querySelector('button');

btn.addEventListener('click', () => {
	const i = document.querySelector('#fullscreen');
	const html = document.querySelector('html');
	if (i.classList.contains('fa-maximize')) {
		html.requestFullscreen();
		i.classList.remove('fa-maximize');
		i.classList.add('fa-minimize');
	} else {
		document.exitFullscreen();
		i.classList.remove('fa-minimize');
		i.classList.add('fa-maximize');
	}
});


const respostaAPI = fetch('http://localhost:31568')
	.then((r) => r.json())
	.then((data) => {
		return data;
	});

window.onload = async () => {
	let resposta = await respostaAPI;
	let arquivo = resposta[${numero}][1];
	let arquivos = [];
	for (let caminhos of arquivo) {
		arquivos.push(\`../..\${caminhos.split('..')[1]}\`);
	}

	let tempoDoSlide = [];
	const main = document.querySelector('main');
	for (let elem of arquivos) {
		const descricaoImagem = elem.split('/')[4].split('.');
		let extensao = descricaoImagem[1];
		tempoDoSlide.push(parseInt(descricaoImagem[0].split('-')[1]));

		if (extensao === 'jpg' || extensao === 'png') {
			let img = document.createElement('img');
			if (elem.includes('01')) {
				img.className = 'selected';
			}
			img.src = elem;
			img.alt = \`\${descricaoImagem[0].split('-')[0]}\`;
			main.appendChild(img);
		}
		if (extensao === 'mp4') {
			let video = document.createElement('video');
			if (elem.includes('01')) {
				video.className = 'selected';
			}
			main.appendChild(video);
			video.src = elem;
			video.loop = true;
			video.autoplay = true;
			video.muted = true;
		}
	}

	for (let i = 0; i < arquivos.length; i++) {
		tempoDoSlide[i] = tempoDoSlide[i] * 1000;
	}

	let indexImagemAtual = 0,
		elementos = document.querySelectorAll('#slider img, #slider video'),
		max = arquivos.length;
	function proximaImagem() {
		elementos[indexImagemAtual].classList.remove('selected');
		indexImagemAtual++;
		if (indexImagemAtual === max) {
			indexImagemAtual = 0;
		}
		elementos[indexImagemAtual].classList.add('selected');
	}

	async function sleep(ms) {
		return await new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function demo() {
		let i = 0;
		while (i < tempoDoSlide.length) {
			console.log(tempoDoSlide[i]);
			await sleep(tempoDoSlide[i]);
			setTimeout(() => {
				proximaImagem();
			}, 100);
			i++;
			if (i === tempoDoSlide.length) {
				i = 0;
			}
		}
	}

	(function iniciar() {
		console.log('Iniciando...');
		demo();
	})();
};`;
}

module.exports = criaJS;
