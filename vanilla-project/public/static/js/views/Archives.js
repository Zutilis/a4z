import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("a4z - Archives");
        this.setHtmlPath("archive.txt");
        this.addScript("DragArchive.js", "ImageArchive.js");
    }

    async load() {
        const first = document.getElementById('first-archive');
        first.classList.add('loaded');
        
        await new Promise(resolve => setTimeout(resolve, 500));

        const second = document.getElementById('second-archive');
        second.classList.add('loaded');

        return true;
    }
}