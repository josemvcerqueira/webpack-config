import firstTrip from "./first-trip-hi-dpi.jpg";

function addImage() {
	const img = document.createElement("img");
	img.alt = "First trip";
	img.width = 300;
	img.src = firstTrip;

	const body = document.querySelector("body");
	body.appendChild(img);
}

export default addImage;
