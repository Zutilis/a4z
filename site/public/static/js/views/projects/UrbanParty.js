import AbstractProjectView from "../projects/AbstractProjectView.js";

export default class extends AbstractProjectView {
    constructor(params) {
        super(params);
        this.setTitle("a4z - Projet Urban Party");
        this.setHtmlPath("projects/urban-party.txt");
        this.setDescription("Almost4zutified ou a4z est une association roannaise aillant organisé "
                + "une soirée rap nommée Urban Party à Roanne, avec la présence du rappeur Zeroname et Luvto.");
    }
}