import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("a4z - Association Roanne");
        this.setHtmlPath("home.txt");
        this.addScript("HomeButton.js");
    }

    async load() {
        
        const title = document.querySelectorAll('.title-container')[0];
        title.classList.add('loaded');

        await new Promise(resolve => setTimeout(resolve, 200));

        const discover = document.querySelectorAll('.discover')[0];
        discover.classList.add('loaded');

        await new Promise(resolve => setTimeout(resolve, 200));

        const leave = document.querySelectorAll('.leave')[0];
        leave.classList.add('loaded');

        return true;
    }
}