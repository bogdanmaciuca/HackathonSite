const submitButton = document.getElementById("submit");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

document.getElementById('id01').style.display='block';

submitButton.addEventListener("click", async (e) => {
	e.preventDefault();
	const email = emailField.value;
	const password = passwordField.value;

	errorMessage.style.visibility = "hidden";
	if (email != "" && password != "") {
		const postData = { type: "login", usr: email, psw: password };
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
