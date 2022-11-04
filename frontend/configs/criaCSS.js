function criaCSS() {
	return `
    * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

/* #slider {
	width: 1440px;
	height: 50vw;
	max-height: 600px;
	position: relative;
} */

#slider img {
	opacity: 0;
	transition: opacity 1s ease-out;
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
#slider video {
	display: none;
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

#slider img.selected {
	opacity: 1;
}
#slider video.selected {
	display: block;
}

    `;
}

module.exports = criaCSS;
