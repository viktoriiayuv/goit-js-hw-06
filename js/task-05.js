const inputEL = document.getElementById("name-input");
const outputEL = document.getElementById("name-output");

const handleInputChange = event => {
	outputEL.textContent = event.currentTarget.value.trim();
	if (!event.currentTarget.value.trim()) {
		outputEL.textContent = "Anonymous";
	}
};

inputEL.addEventListener("input", handleInputChange);
