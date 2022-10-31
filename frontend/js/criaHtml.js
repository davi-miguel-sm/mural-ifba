function criaHTML(modulo) {
	return `<!DOCTYPE html>
<html lang="pt-BR">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Mural Ifba</title>
	</head>
	<body>
		<main>
			<a href="./slider/${modulo}.html">${modulo}</a>
		</main>
	</body>
</html>
`;
}

module.exports = criaHTML;
