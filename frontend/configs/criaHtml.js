function criaHTML() {
	return `<!DOCTYPE html>
<html lang="pt-BR">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="style.css" />
		<title>Mural</title>
	</head>
	<body>
		<main id="slider"></main>
	</body>
	<script src="adicionaMedia.js"></script>
	<script src="controlaMedia.js"></script>
</html>
`;
}

module.exports = criaHTML;
