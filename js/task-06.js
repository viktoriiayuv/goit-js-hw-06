const inputEL = document.getElementById("validation-input");

const handleInputValue = event => {
	if (event.currentTarget.value.trim().length === 6) {
		inputEL.classList.add("valid");
		inputEL.classList.remove("invalid");
	} else if (!event.currentTarget.value.trim()) {
		inputEL.classList.remove("invalid");
		inputEL.classList.remove("valid");
	} else {
		inputEL.classList.add("invalid");
		inputEL.classList.remove("valid");
	}
};

inputEL.addEventListener("blur", handleInputValue);
