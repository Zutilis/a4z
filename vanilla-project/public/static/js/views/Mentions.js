import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("a4z - Mentions Légales");
        this.setHtmlPath("mentions.txt");
        this.setDescription("Almost4zutified ou a4z est une association roannaise promouvant la photographie "
                + "et organisant des évènements rap sur Roanne.");
        this.addScript("Menu.js");
    }

    async load() {
        const title = document.querySelector(".legales-title");
        title.style.opacity = 1;

        await new Promise(resolve => setTimeout(resolve, 500));

        const parts = document.querySelector(".legales-parts");
        parts.style.opacity = 1;
    }
}