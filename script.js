var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

// console.log(css);
// console.log(color1);
// console.log(color2);

function bgstyler() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";	

	css.textContent = body.style.background + ";";
}

function setGradientColor() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";	

	css.textContent = body.style.background + ";";
}	

button.addEventListener("click", function() {
	var randNumber = Math.floor((Math.random() * 256));
	return randNumber.toString(16);
	var newColor = "#";
})



setGradientColor();
color1.addEventListener("input", bgstyler);
color2.addEventListener("input", bgstyler);





