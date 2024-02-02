function initHome() {
	const leave = document.querySelector('.leave');

	leave.addEventListener('click', () => { anim(); });
	leave.addEventListener("keypress", (event) => { if (event.keyCode == 13) anim(); });

	anim = () => {
		leave.style.animation = 'error .8s ease-in-out';
		setTimeout(() => {
			leave.style.animation = '';
		}, 1000);
	}
}

initHome();