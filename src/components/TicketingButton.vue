<template>
	<router-link to="/ticketing" class="ticketing-button-wrapper">
		<div class="ticketing-button">
			<p class="kensington-md">Billetterie - Achete ta place</p>
		</div>
	</router-link> 
</template>

<style>
	.ticketing-button-wrapper {
		position: fixed;
		width: calc(100% - 2 * var(--space-x-page));
		left: 50%;
		transform: translateX(-50%);
		padding: .25rem;
		border-radius: 1rem;
		background-color: var(--color-black);
		box-shadow: 0px 0px 50px 7px rgba(232,103,26,0.5);
		bottom: 2rem;
		z-index: 995;
	}

	@media screen and (min-width: 1024px) {
		.ticketing-button-wrapper {
			width: 50%;
		}
	}

	.ticketing-button {
		text-align: center;
		border-radius: 1rem;
		padding: 1rem;
		background-color: var(--color-orange);
		color: var(--color-navy-blue);
	}
</style>