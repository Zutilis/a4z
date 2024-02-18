function isElementInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
	  rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
	  rect.bottom >= 0
	);
}

function lazyLoadBackgroundImages () {
	const lazyLoadElements = document.querySelectorAll('.lazy-load');

	lazyLoadElements.forEach(async (element) => {
		if (isElementInViewport(element)) {
			element.style.backgroundImage = 'url(' + element.getAttribute('data-src');
			element.style.animation = 'showImage .5s ease-in-out .5s forwards';
		}
	});
}

function registerLoadImageEvents()
{
	window.addEventListener('scroll', lazyLoadBackgroundImages);
	window.addEventListener('resize', lazyLoadBackgroundImages);
	lazyLoadBackgroundImages();
}