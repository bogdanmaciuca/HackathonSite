const submitButton = document.getElementById("submit");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm_password");
const errorMessage =  document.getElementById("error_message");

document.getElementById('id01').style.display='block';

submitButton.addEventListener("click", async (e) => {
	e.preventDefault();
	const email = emailField.value;
	const password = passwordField.value;
	const confirmPassword = confirmPasswordField.value;

	errorMessage.style.visibility = "hidden";
	if (email != "" && password != "" && password === confirmPassword) {
		const postData = { type: "signup", usr: email, psw: password };
		const options = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(postData)
		};
		const response = await fetch('/api', options);
		//console.log(response);
	}
	else {
		errorMessage.style.visibility = "visible";
	}
});
