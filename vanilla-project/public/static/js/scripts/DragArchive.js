function initDrag() {
	let first = document.getElementById("first-archive");
	let second = document.getElementById("second-archive");

	let isDraging = false;
	let isStarted = false;
	let isEnding = false;
	let canDrag = false;
	let startX = 0;

	if (second == null)
		return ;

	setInterval(() => {
		if (!isDraging && !isEnding) {			
			first.style.transform = 'translateX(-12%)';

			setTimeout(() => {
				first.style.transform = 'translateX(0%)';
				setTimeout(() => {
					first.style.transform = '';
				}, 600);
			}, 600);
		}
	}, 7000);

	function isChildOfFirst(target) {
		while (target !== null) {
			if (target === first)
				return (true);

			target = target.parentNode;
		}
		return false;
	}

	const reset = () => {
		first = document.getElementById("first-archive");
		second = document.getElementById("second-archive");

		isDraging = false;
		isStarted = false;
		isEnding = false;
		canDrag = true;
		startX = 0;

		first.addEventListener('mousedown', startDrag);
		first.addEventListener('mousemove', moveDrag);
		first.addEventListener('mouseup', endDrag(false));
	
		first.addEventListener('pointerdown', startDrag);
		first.addEventListener('pointermove', moveDrag);
		first.addEventListener('pointerup', endDrag(false));
	
		first.addEventListener('touchstart', startDrag, {passive: true});
		first.addEventListener('touchmove', moveDrag, {passive: true});
		first.addEventListener('touchend', endDrag(false));
	}

	const startDrag = (e) => {
		if (!isChildOfFirst(e.target) || isEnding || !canDrag)
			return ;

		startX = e.clientX || e.touches[0].clientX;
		isStarted = true;

		first.style.transition = "box-shadow 0.6s ease, transform 0.15s ease, opacity 0.5s ease";
	}
	
	const moveDrag = (e) => {
		if (!isStarted || isEnding || !canDrag)
			return ;

		isDraging = true;
		const currentX = e.clientX || e.touches[0].clientX;
		const diffX = currentX - startX;

		first.style.left = diffX + "px";

		let max = window.innerWidth * -0.3;

		if (max < -200)
			max = -200;

		if (diffX < max) endDrag(true);
		else if (diffX > 10) endDrag(false);
	}

	const endDrag = async (can) => {
		if (!isStarted || !isDraging || isEnding || !canDrag)
			return ;

		isEnding = true;

		if (can) await anim();
		else {
			first.style.left = "";
			canDrag = false;

			setTimeout(() => {
				reset();
			}, 200);
		}
	}

	const anim = () => {
		first.style.transform = 'translateX(-5%)';
		setTimeout(() => {

			first.classList.remove("loaded");
			first.style.transform = '';
			first.style.transition = '';
			first.style.left = '';
			first.id = '';
	
			let last_see_more = first.querySelector('.archive-button');
			last_see_more.classList.remove('loaded');
	
			second.id = "first-archive";
			first = second;
			first.style.transform = '';
			first.style.transition = '';
			first.style.left = '0 px';

			initImage();

			setTimeout(() => {

				const see_more = second.querySelector('.archive-button');
				see_more.classList.add('loaded');
		
				clearInterval(progress_inter);
		
				const archives = document.querySelectorAll('.archive');
				const nextIndex = Array.from(archives).indexOf(second) + 1;
	
				setTimeout(() => {
	
					let next = null;
					if (archives[nextIndex] != null) next = archives[nextIndex];
					else next = archives[0];
			
					next.id = "second-archive";
					second = next;
					second.style.transform = '';
					second.style.transition = '';
					second.style.left = '0 px';
					
					setTimeout(() => {
						next.classList.add("loaded");
						canDrag = false;
						reset();
					}, 100);
				}, 100);
			}, 200);
		}, 200);
	}
	reset();
}

initDrag();