import AbstractProjectView from "./AbstractProjectView.js";

export default class extends AbstractProjectView {
    constructor(params) {
        super(params);
        this.setTitle("a4z - Projet Gazo");
        this.setHtmlPath("projects/gazo.txt");
        this.setDescription("Almost4zutified ou a4z est une association roannaise aillant fait des photos et vidéos "
                + "du rappeur Gazo pendant la BSB League de basket à Paris.");
    }
}