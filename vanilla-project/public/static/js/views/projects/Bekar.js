import AbstractProjectView from "./AbstractProjectView.js";

export default class extends AbstractProjectView {
    constructor(params) {
        super(params);
        this.setTitle("a4z - Projet Bekar");
        this.setHtmlPath("projects/bekar.txt");
        this.setDescription("Almost4zutified ou a4z est une association roannaise aillant fait des photos et vidéos "
                + "du rappeur Bekar en showcase rap à Clermont-Ferrand.");
    }
}