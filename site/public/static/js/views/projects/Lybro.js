import AbstractProjectView from "../projects/AbstractProjectView.js";

export default class extends AbstractProjectView {
    constructor(params) {
        super(params);
        this.setTitle("a4z - Projet Lybro");
        this.setHtmlPath("projects/lybro.txt");
        this.setDescription("Almost4zutified ou a4z est une association roannaise aillant fait des photos "
                + "du rappeur Lybro en showcase rap à Lyon.");
    }
}