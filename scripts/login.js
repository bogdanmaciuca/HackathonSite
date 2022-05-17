const submitButton = document.getElementById("submit");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const errorMessage = document.getElementById("error_message");

document.getElementById('id01').style.display='block';

submitButton.addEventListener("click", async (e) => {
	e.preventDefault();
	const username = emailField.value;
	const password = passwordField.value;

	errorMessage.style.visibility = "hidden";
	if (username != "" && password != "") {
		const postData = { type: "login", usr: username, psw: password };
		const options = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(postData)
		};
		const response = await fetch('/api', options);
		if (response.status == 200) {
			// Redirect to chat page
			location.href = "/chat";
			console.log("U ROCK!");
		}
		else if (response.status == 401) {
			// Show error
			errorMessage.textContent = "The email or password your entered are incorrect.";
			errorMessage.style.visibility = "visible";
			console.log("U SUCK!");
		}
		console.log(response);
	}
	else {
		errorMessage.textContent = "Please fill in the fields adequately";
		errorMessage.style.visibility = "visible";
	}
});
