var index = 0;
var images = [];
var timeOut = 2750;

images[0] = "BlueBoyJasperDad.jpg";
images[1] = "BlackAndWhiteSunGlassesFamily.jpg";
images[2] = "SamsWeddingFamilyPic.jpg";
images[3] = "CuteFamilyPic.jpg";

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