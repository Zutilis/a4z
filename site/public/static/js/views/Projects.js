import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("a4z - Projets");
        this.setHtmlPath("projects.txt");
        this.setDescription("Almost4zutified ou a4z est une association roannaise promouvant la photographie "
                + "et organisant des évènements rap sur Roanne.");
        this.addScript("Menu.js", "Projects.js");
    }

    async load() {
        const projects_container = document.querySelector(".projects-container.loaded");
        projects_container.style.opacity = 1;
    }
}