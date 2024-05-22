import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("a4z - Mentions Légales");
        this.setHtmlPath("mentions.txt");
    }

    async load() {
        const title = document.querySelector(".legales-title");
        title.style.opacity = 1;

        await new Promise(resolve => setTimeout(resolve, 500));

        const parts = document.querySelector(".legales-parts");
        parts.style.opacity = 1;
    }
}