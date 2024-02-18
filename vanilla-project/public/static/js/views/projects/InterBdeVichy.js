import AbstractProjectView from "./AbstractProjectView.js";

export default class extends AbstractProjectView {
    constructor(params) {
        super(params);
        this.setTitle("a4z - Projet Soirée Inter BDE");
        this.setHtmlPath("projects/inter-bde-vichy.txt");
        this.setDescription("Almost4zutified ou a4z est une association roannaise aillant réalisé une prestation de DJ "
                + "pour une soirée inter BDE au Palais des Congrès de Vichy.");
    }
}