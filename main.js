document.getElementById("submit").addEventListener("click", function(e) {
	e.preventDefault();
	var error = document.getElementById("error");
        var re = /\S+@\S+\.\S+/;
	var email = document.getElementById("email").value;
	if(re.test(email)) {
		document.getElementById("error").innerHTML = "<p id='green'>You were successfully added to the newsletter group.</p>";
	} else {
		document.getElementById("error").innerHTML = "<p id='red'>The email id you entered is invalid. Please try again.</p>";
	}
	document.getElementById("form").reset();
});


    
