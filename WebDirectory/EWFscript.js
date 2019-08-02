var index = 0;
var images = [];
var timeOut = 2750;

images[0] = "EWFimage1.jpeg";
images[1] = "EWFimage3.jpg";
images[2] = "EWFimage4.jpg";
images[3] = "EWFimage5.png";

function carousel() {
	document.slide.src = images[index];

	if (index < images.length - 1) {
		index++;
	} else {
		index = 0;
	}

	setTimeout("carousel()", timeOut);
}

window.onload = carousel;