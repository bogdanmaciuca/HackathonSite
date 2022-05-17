//const res = require("express/lib/response");

const submitButton = document.getElementById("submit");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm_password");
const errorMessage =  document.getElementById("error_message");

document.getElementById('id01').style.display='block';

submitButton.addEventListener("click", async (e) => {
	e.preventDefault();
	const username = usernameField.value;
	const password = passwordField.value;
	const confirmPassword = confirmPasswordField.value;

	errorMessage.style.visibility = "hidden";
	if (username != "" && password != "" && password === confirmPassword) {
		const postData = { type: "signup", usr: username, psw: password };
		const options = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(postData)
		};
		const response = await fetch('/api', options);
		if (response.status == 200) {
			location.href = "/chat"
		}
		else if (response.status == 422) {
			// Make error message visible
			errorMessage.textContent = "Email adress already exists";
			errorMessage.style.visibility = "visible";
		}
	}
	else {
		errorMessage.textContent = "Please fill in the fields adequately";
		errorMessage.style.visibility = "visible";
	}
});
