function registerGsap(){
	let nav_mobile = document.querySelector(".nav-mobile");
	let nav_mobile_item = document.querySelectorAll(".nav-mobile-item");
	let nav_mobile_transparent = document.querySelector(".nav-mobile-transparent");
	let time = 0.5;

	let tl = gsap.timeline({ paused: true });
	tl.fromTo(nav_mobile, { minWidth: "36px" }, {
		width: window.innerWidth < 480 ? "90%" : "auto",
		height: "auto",
		minWidth: "14rem",
		duration: time
	}, 0);
	tl.fromTo(".nav-mobile-transparent", { display: "none" }, { 
		opacity: 1,
		display: "block",
		duration: time
	}, 0);
	tl.to(nav_mobile_item, {
		opacity: 1,
		yPercent: -20,
		duration: 0.2,
		stagger: { amount: 0.2 }
	});
	
	function openMenu(open) {
		if (!open) {
			tl.play();
			nav_mobile.classList.add("opened");
		} else {
			tl.reverse();
			nav_mobile.classList.remove("opened");
		}
	}

	nav_mobile.addEventListener('click', () => {
		openMenu(nav_mobile.classList.contains("opened"));
	})

	nav_mobile_transparent.addEventListener('click', () => {
		if (nav_mobile.classList.contains("opened"))
			openMenu(true);
	})

	window.addEventListener('resize', () => {
		if (nav_mobile.classList.contains("opened"))
			nav_mobile.style.width = window.innerWidth < 480 ? "90%" : "auto";
		else
			nav_mobile.style.width = "2.3rem";
	})
}