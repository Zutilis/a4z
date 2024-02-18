function initMenu() {
	let menu = document.querySelector("#logo-menu");

	let cloned_menu = menu.cloneNode(true);
	menu.parentNode.replaceChild(cloned_menu, menu);

	cloned_menu.addEventListener('click', () => { clickMenu(); });

	document.querySelector(".menu-logo").addEventListener("keypress", (e) => {
		e.stopImmediatePropagation();
		if (e.keyCode == 13) clickMenu(); 
	});

	clickMenu = () => {
		const nav = document.querySelector("#menu-nav");
		const legal = document.querySelector(".legal-container");
		const titles = nav.querySelectorAll(".menu-title");
		let is_menu_opened = nav.classList.contains("loaded");

		if (!is_menu_opened) {
			nav.classList.add("loaded");
			legal.style.opacity = 0;

			setTimeout(() => {
				titles.forEach((title) => {
					title.classList.add("loaded");
				});
				legal.style.height = "0px";
			}, 200);

		} else {
			titles.forEach((title) => {
				title.classList.remove("loaded");
			});

			setTimeout(() => {
				nav.classList.remove("loaded");
				legal.style.height = "60px";
				legal.style.opacity = 1;
			}, 200);
		}
	}
}

initMenu();