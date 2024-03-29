function criaIndexHtml() {
	return `
	<!DOCTYPE html>
<html lang="pt-BR">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Teste Mural</title>
		<link rel="stylesheet" href="styles.css" />
		<link
			rel="stylesheet"
			<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
	</head>
	<body>
		<main class="container">
			<header class="cabecalho">
				<h1>Mural IFBA</h1>
			</header>
			<nav class="navegacao">
				<a href="./geral/index.html">Geral</a>
				<a href="./modulo1/index.html">Modulo 1</a>
				<a href="./modulo2/index.html">Modulo 2</a>
				<a href="./modulo3/index.html">Modulo 3</a>
				<a href="./modulo4/index.html">Modulo 4</a>
				<a href="./modulo5/index.html">Modulo 5</a>
				<a href="./modulo6/index.html">Modulo 6</a>
			</nav>
		</main>
	</body>
</html>
`;
}

module.exports = criaIndexHtml;
