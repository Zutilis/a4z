function initImage() {

	let archive = document.querySelector("#first-archive");
	let images = archive.querySelectorAll(".archive-image");

	if (images.length <= 1)
		return ;
	
	let rod_container = archive.querySelector(".archive-images-rod-container");
	const time = 5000;
	let i = 0;

	while (rod_container.firstChild)
		rod_container.removeChild(rod_container.firstChild);

	for (let ai = 0; ai < images.length; ai++) {
		const archive_image_rod_container = document.createElement("div");
		const archive_image_rod = document.createElement("div");
		const archive_image_rod_progress = document.createElement("div");

		archive_image_rod_container.classList.add("archive-image-rod-container");
		archive_image_rod.classList.add("archive-image-rod");
		archive_image_rod_progress.classList.add("archive-image-rod-progress");

		archive_image_rod_progress.style.transition = "width " + (time / 1000) + "s ease-in-out";
		archive_image_rod_progress.style.width = "O%";

		archive_image_rod_container.appendChild(archive_image_rod);
		archive_image_rod_container.appendChild(archive_image_rod_progress);
		rod_container.appendChild(archive_image_rod_container);
	}

	const next = async () => {
		if (archive.id !== "first-archive") {
			clearInterval(progress_inter);
			return ;
		}

		const actual = images[i];
		let wait = false;

		if (images[i+1] != null) {
			i++;
		} else {
			let rods = rod_container.querySelectorAll(".archive-image-rod-container");
			
			rods.forEach((tmp)  => {
				let progress_rod = tmp.querySelector(".archive-image-rod-progress");
				progress_rod.style.transition = "none";
				progress_rod.style.width = "0";
			});

			i = 0;
			wait = true;
		}

		const next = images[i];

		if (wait)
			await new Promise(resolve => setTimeout(resolve, 100));

		progress();

		next.classList.add("loaded");
		actual.classList.remove("loaded");
	}

	const progress = () => {
		let progress_rod = rod_container.querySelectorAll(".archive-image-rod-container")[i].querySelector(".archive-image-rod-progress");
		
		progress_rod.style.transition = "width " + (time / 1000) + "s ease-in-out";
		progress_rod.style.width = "100%";
	}

	setTimeout(() => {
		progress();
		progress_inter = setInterval(next, time);
	}, 300);
}

initImage();