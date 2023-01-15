const inputEL = document.getElementById("validation-input");

const handleInputValue = event => {
	if (event.currentTarget.value.trim().length === 6) {
		inputEL.classList.add("valid");
		inputEL.classList.remove("invalid");
		return;
	}
	if (!event.currentTarget.value) {
		inputEL.classList.remove("invalid");
		inputEL.classList.remove("valid");
		return;
	}
	inputEL.classList.add("invalid");
	inputEL.classList.remove("valid");
};

inputEL.addEventListener("blur", handleInputValue);
