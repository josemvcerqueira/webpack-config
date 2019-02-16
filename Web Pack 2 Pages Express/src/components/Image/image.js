import trip from "./first-trip-hi-dpi.jpg";
import "./trip.scss";

class Trip {
	render() {
		const img = document.createElement("img");
		img.src = trip;
		img.alt = "trip";
		img.classList.add("trip-image");

		const body = document.querySelector("body");
		body.appendChild(img);
	}
}

export default Trip;
