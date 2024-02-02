export default class {
    constructor(params) {
        this.params = params;
        this.load_footer = false;
        this.html_path = "";
        this.description = "";
        this.scripts = [];
    }

    setTitle(title) {
        document.title = title;
    }

    setDescription(desc) {
        document.querySelector('meta[name="description"]').setAttribute("content", desc);
    }

    setHtmlPath(path) {
        this.html_path = "../static/html/" + path;
    }

    addScript() {
        for (let i = 0; i < arguments.length; i++)
            this.scripts.push("../static/js/scripts/" + arguments[i]);
    }

    getScripts() {
        return this.scripts;
    }

    async getHtml() {
        try {
            const response = await fetch(this.html_path);

            if (response.ok)
                return await response.text();

            return '<p class="title-container">Error</p>';
        } catch (error) {
            console.log(error);
            return '<p class="title-container">Error</p>';
        }
    }

    async loadFooter() {
        if (!this.load_footer) {
            const footer = document.querySelector(".footer-menu-container");

            if (footer != null)
                footer.classList.add('loaded');
    
            this.load_footer = true;
            return true;
        }
        return true;
    }

    async load() {
        return true;
    }
}