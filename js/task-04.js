let counterValue = 0;
const valueEl = document.querySelector("#value");
const buttonDecrementEl = document.querySelector('button[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('button[data-action="increment"]');

const handleButtonDecrementClick = event => {
	counterValue -= 1;
	valueEl.textContent = counterValue;
};

const handleButtonIncrementClick = event => {
	counterValue += 1;
	valueEl.textContent = counterValue;
};

buttonDecrementEl.addEventListener("click", handleButtonDecrementClick);
buttonIncrementEl.addEventListener("click", handleButtonIncrementClick);
