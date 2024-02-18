import AbstractProjectView from "../projects/AbstractProjectView.js";

export default class extends AbstractProjectView {
    constructor(params) {
        super(params);
        this.setTitle("a4z - Projet Chorale");
        this.setHtmlPath("projects/chorale.txt");
        this.setDescription("Almost4zutified ou a4z est une association roannaise aillant fait des photos "
                + "de l'équipe de basket de Roanne La Chorale.");
    }
}