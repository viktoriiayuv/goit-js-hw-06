function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");

const handleButtonClick = event => {
	let color = getRandomHexColor();
	bodyEl.style.background = color;
	spanEl.textContent = color;
};

buttonEl.addEventListener("click", handleButtonClick);
