import Home from "/static/js/views/Home.js";
import Archives from "/static/js/views/Archives.js";
import Projects from "/static/js/views/Projects.js";
import Mentions from "/static/js/views/Mentions.js";
import UrbanParty from "/static/js/views/projects/UrbanParty.js";
import Chorale from "/static/js/views/projects/Chorale.js";
import Lybro from "/static/js/views/projects/Lybro.js";
import Bekar from "/static/js/views/projects/Bekar.js";
import Fave from "/static/js/views/projects/Fave.js";
import InterBdeVichy from "/static/js/views/projects/InterBdeVichy.js";
import Gazo from "/static/js/views/projects/Gazo.js";

let progress_inter;

const pathToRegex = (path) => new RegExp(`^${path.replace(/\/$/, '/?')}$`);

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
    
    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};


const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/archives/", view: Archives },
        { path: "/mentions-legales/", view: Mentions },
        { path: "/projets/", view: Projects },
        { path: "/projets/urban-party/", view: UrbanParty },
        { path: "/projets/chorale/", view: Chorale },
        { path: "/projets/lybro/", view: Lybro },
        { path: "/projets/bekar/", view: Bekar },
        { path: "/projets/fave/", view: Fave },
        { path: "/projets/gazo/", view: Gazo },
        { path: "/projets/inter-bde-vichy/", view: InterBdeVichy }
    ];

    const path = location.pathname;

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: path.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        navigateTo(routes[0].path);
        return ;
    }

    const logo = document.querySelector(".logo-container");
    if (match.route.path == "/") 
    {
        if (logo.classList.contains("logo-small"))
        {
            logo.classList.remove("logo-small");
            logo.classList.add("logo-large");

            await new Promise(resolve => setTimeout(resolve, 400));
        }
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();

    const scripts = document.head.getElementsByTagName('script'); 

    for (var i = scripts.length - 1; i >= 0; i--) {
        let script = scripts[i];
        script.parentNode.removeChild(script);
    }

    for (const script_src of view.getScripts())
    {
        let script = document.createElement('script');
        script.setAttribute('src', script_src);
        document.head.appendChild(script);
    }

    await new Promise(resolve => setTimeout(resolve, 300));
    
    await view.loadFooter();

    await view.load();

    lazyLoadBackgroundImages();
};

window.addEventListener('popstate', async function(event) 
{
    await new Promise(resolve => setTimeout(resolve, 100));

    const logo = document.querySelector(".logo-container");
    logo.classList.remove(location.pathname === "/" ? "logo-small" : "logo-large");
    logo.classList.add(location.pathname === "/" ? "logo-large" : "logo-small");

    setTimeout(router, 100);
});

document.addEventListener("DOMContentLoaded", async () =>
{
    const logo = document.querySelector(".logo-container");
    logo.classList.add(location.pathname === "/" ? "logo-large" : "logo-small");

    await new Promise(resolve => setTimeout(resolve, 200));
    
    document.body.addEventListener("click", async (e) => 
    {
        if (e.target.matches("[data-link]"))
        {
            e.preventDefault();

            if (e.target.href.endsWith("https://a4z.fr" + location.pathname))
                return ;

            document.querySelector("#app").innerHTML = ``;

            await new Promise(resolve => setTimeout(resolve, 100));

            if (logo.classList.contains("logo-large"))
            {
                logo.classList.remove("logo-large");
                logo.classList.add("logo-small");

                await new Promise(resolve => setTimeout(resolve, 400));
            }

            await new Promise(resolve => setTimeout(resolve, 100));

            navigateTo(e.target.href);
        }
    });

    router();
});