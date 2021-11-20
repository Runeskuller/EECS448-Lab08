function verify(){
	var pass1 = document.getElementById("pass1")
	var pass2 = document.getElementById("pass2")
	
	if (pass1.value.length < 8){
		window.alert("Password must be at least 8 characters")
	}
	else if (pass1.value != pass2.value){
		window.alert("Passwords must match")
	}
	else {
		window.alert("Password successfully verified!")
	}
}