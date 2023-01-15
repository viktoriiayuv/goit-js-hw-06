const formEl = document.querySelector(".login-form");

const handleFormInputsValue = event => {
	event.preventDefault();
	if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {
		alert("You must fill all fields");
		return;
	}
	const formValuesObj = {
		email: event.currentTarget.elements.email.value,
		password: event.currentTarget.elements.password.value,
	};
	console.log(formValuesObj);
	formEl.reset();
};

formEl.addEventListener("submit", handleFormInputsValue);
