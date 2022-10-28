const fs = require('fs');

function createElem(tagName, className) {
	const elem = document.createElement(tagName);
	elem.className = className;
	return elem;
}

const src = `./media`;
function catchFolders(src) {
	fs.readdir(src, (err, folders) => {
		if (err) {
			throw err;
		} else {
			console.log(folders);
		}
	});
}

catchFolders(src);
