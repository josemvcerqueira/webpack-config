import "./hello-world.scss";

class HelloWorld {
	buttonCssClass = "hello-world-button";
	render() {
		const button = document.createElement("button");
		button.innerHTML = "Hello World";
		button.classList.add(this.buttonCssClass);
		const body = document.querySelector("body");
		button.type = "button";
		button.addEventListener("click", () => {
			const p = document.createElement("p");
			p.innerHTML = "Hello World";
			p.classList.add("hello-world-text");
			body.appendChild(p);
		});
		body.appendChild(button);
	}
}

export default HelloWorld;
