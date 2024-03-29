function criaStylesCSS() {
	return `
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap');

* {
	box-sizing: border-box;
	margin: 0;
}

body {
	font-family: 'Jost', sans-serif;
	background-color: lightgray;
	height: 100vh;
}

.container {
	display: flex;
	flex-direction: column;
	min-width: 400px;
	text-align: center;
	height: 100%;
}

.container .cabecalho {
	padding: 10px;
	background: #009f3b;
	color: #b61b15;
	text-shadow: 2px 2px 1px #000000;
	box-shadow: 0px 3px 10px 1px #023b32;
}

.cabecalho h1 {
	font-size: 3rem;
	padding: 15px 0px;
}

.container .navegacao {
	background-color: #fff;
	font-size: 2vw;
	width: 60vw;
	align-self: center;
	margin-top: 5vw;
}

.container a {
	display: block;
	padding: 10px 0px;
	text-decoration: none;
	color: rgb(32, 31, 31);
	font-size: 1.2em;
}

.container a:hover {
	background-color: rgba(43, 154, 209, 0.4);
}

.container a:active {
	background-color: #05421ca9;
}

	`;
}

module.exports = criaStylesCSS;
