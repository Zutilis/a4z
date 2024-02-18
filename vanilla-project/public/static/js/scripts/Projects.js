function initProjects() {
	const years = document.querySelectorAll('.year');

	years.forEach((year) => {

		const year_header = year.querySelector(".project-year-header");
		const projects_container = year.querySelector(".projects-container");

		year_header.addEventListener('click', () => {

			const isShowed = projects_container.classList.contains("loaded");

			if (isShowed)
				projects_container.style.opacity = "0";
			else
				projects_container.classList.add("loaded");
		});
	});
}

initProjects();