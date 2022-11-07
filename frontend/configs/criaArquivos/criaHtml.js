function criaHTML() {
	return `<!DOCTYPE html>
<html lang="pt-BR">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="styles.css" />
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
		<title>Mural</title>
	</head>
	<body>
		<main id="slider"></main>
	</body>
	<script src="index.js"></script>
</html>
`;
}

module.exports = criaHTML;
