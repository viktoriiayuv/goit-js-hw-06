function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const contaiterEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls input");

function createBoxes(amount) {
	let size = 30;
	const boxArr = [];
	for (let i = 0; i < amount; i += 1) {
		const color = getRandomHexColor();
		const box = document.createElement("div");
		box.style.width = `${size}px`;
		box.style.height = `${size}px`;
		box.style.backgroundColor = color;
		size += 10;
		boxArr.push(box);
	}
	contaiterEl.append(...boxArr);
}

function destroyBoxes() {
	contaiterEl.innerHTML = "";
}

createBtnEl.addEventListener("click", () => createBoxes(inputEl.value));
destroyBtnEl.addEventListener("click", destroyBoxes);
