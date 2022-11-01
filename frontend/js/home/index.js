function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

window.onload = function () {
	const elementos = document.getElementsByClassName('elementos');
	fetch('http://localhost:31568')
		.then((resp) => {
			return resp.json();
		})
		.then((data) => {});
};
