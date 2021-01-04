function toggle(el, elT) {
	if (el.src == "https://i.imgur.com/UY7LQBQ.png") {
		el.src = "https://i.imgur.com/ln3Hn90.png";
		elT.innerHTML = "ON";
		localStorage.setItem(el.id, "https://i.imgur.com/ln3Hn90.png");
		localStorage.setItem(elT.id, "ON");
	}

	else {
		el.src = "https://i.imgur.com/UY7LQBQ.png";
		elT.innerHTML = "OFF";
		localStorage.setItem(el.id, "https://i.imgur.com/UY7LQBQ.png");
		localStorage.setItem(elT.id, "OFF");
	}
}

function toggleSub(el, elT, parentLoc) {
	if (parentLoc == null) {
		parentLoc = "";
	}
	if (el.src == "https://i.imgur.com/UY7LQBQ.png") {
		el.src = "https://i.imgur.com/ln3Hn90.png";
		elT.innerHTML = "ON";
		localStorage.setItem(el.id + parentLoc, "https://i.imgur.com/ln3Hn90.png");
		localStorage.setItem(elT.id + parentLoc, "ON");
	}

	else if (el.src == "https://i.imgur.com/ln3Hn90.png") {
		el.src = "https://i.imgur.com/UY7LQBQ.png";
		elT.innerHTML = "OFF";
		localStorage.setItem(el.id + parentLoc, "https://i.imgur.com/UY7LQBQ.png");
		localStorage.setItem(elT.id + parentLoc, "OFF");
	}
}

function destination(headerName, position) {
	localStorage.setItem("devicePicked", headerName);
	localStorage.setItem("position", position);
}

function saveState(el) {
	localStorage.setItem(el.id, el.value);
}

function saveStateSub(el, parentLoc) {
	if (parentLoc == null) {
		parentLoc = "";
	}
	localStorage.setItem(el.id + parentLoc, el.value);
}