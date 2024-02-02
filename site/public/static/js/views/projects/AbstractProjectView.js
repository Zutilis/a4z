import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
	constructor(params) {
		super(params);
		this.addScript("Menu.js");
	}

	async load() {
		await new Promise(resolve => setTimeout(resolve, 200));

		const title = document.querySelector(".project-presentation-title");
		title.style.opacity = 1;

		await new Promise(resolve => setTimeout(resolve, 200));

		const images = document.querySelector(".project-presentation-images");
		images.style.opacity = 1;
	}
}