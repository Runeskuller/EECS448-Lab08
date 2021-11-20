function change() {
	let paragraph = document.getElementById("paragraph")

	let borderRed = document.getElementById("borderRed") 
	let borderGreen = document.getElementById("borderGreen") 
	let borderBlue = document.getElementById("borderBlue") 
	let borderWidth = document.getElementById("borderWidth") 

	paragraph.style.borderColor = "rgb(" + borderRed.value + "," + borderGreen.value + "," + borderBlue.value + ")"
	paragraph.style.borderWidth = borderWidth.value + "px"


	let backgroundRed = document.getElementById("backgroundRed") 
	let backgroundGreen = document.getElementById("backgroundGreen") 
	let backgroundBlue = document.getElementById("backgroundBlue") 

	paragraph.style.backgroundColor = "rgb(" + backgroundRed.value + "," + backgroundGreen.value + "," + backgroundBlue.value + ")"
}