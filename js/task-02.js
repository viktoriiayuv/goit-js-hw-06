const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsEL = document.getElementById("ingredients");

const ingredientsListItem = list => {
	return list.map(item => {
		const ingredientsListEl = document.createElement("li");
		ingredientsListEl.textContent = item;
		ingredientsListEl.classList.add("item");
		return ingredientsListEl;
	});
};

const ingredientsItems = ingredientsListItem(ingredients);
ingredientsEL.append(...ingredientsItems);
