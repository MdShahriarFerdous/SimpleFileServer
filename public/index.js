const button = document.querySelector("#theme-toggle");
const body = document.querySelector("body");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
	body.classList.add(currentTheme);
} else {
	body.classList.add("light-mood");
}

button.addEventListener("click", function () {
	body.classList.toggle("light-mood");
	if (body.classList.contains("light-mood")) {
		localStorage.setItem("theme", "light-mood");
		button.innerHTML = "Dark Mode";
	} else {
		localStorage.setItem("theme", "dark-mood");
		button.innerHTML = "Light Mode";
	}
});
