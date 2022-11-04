function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const caminho = fetch('http://localhost:31568')
	.then((resp) => {
		return resp.json;
	})
	.then((data) => {
		// const modulos = [];
		// for (let i = 0; i < data.length; i++) {
		// 	modulos.push(data[i][0]);
		// }
		// for (let i = 0; i < data.length; i++) {
		// 	for (let j = 0; j < data[i][1].length; j++) {
		// 		if (data[i][1][j].includes(modulos[i])) {
		// 			data[i][1][j];
		// 		}
		// 	}
		// }
		return data[0];
	});

async function exec() {
	await sleep(10000);
	console.log(caminho);
}

exec();
