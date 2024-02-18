import AbstractProjectView from "../projects/AbstractProjectView.js";

export default class extends AbstractProjectView {
    constructor(params) {
        super(params);
        this.setTitle("a4z - Projet Fave");
        this.setHtmlPath("projects/fave.txt");
        this.setDescription("Almost4zutified ou a4z est une association roannaise aillant fait des photos et vidéos "
                + "du rappeur Fave en concert rap à Lyon.");
    }
}