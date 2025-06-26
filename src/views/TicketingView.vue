<template>
	<section class="ticket-section">
		<div class="ticket-header">
			<p class="kensington-xl">Billetterie</p>
		</div>
		<iframe 
			id="haWidget" 
			allowtransparency="true" 
			src="https://www.helloasso.com/associations/almost4zutified/evenements/a4z-trap-2/widget" 
			style="width: 100%; border: none;" 
			onload="window.addEventListener( 'message', e => { const dataHeight = e.data.height; const haWidgetElement = document.getElementById('haWidget'); haWidgetElement.height = dataHeight + 'px'; } )" ></iframe>
	</section>
</template>

<style>
	.ticket-section {
		margin-top: var(--space-y-header);
		min-height: calc(100vh - var(--space-y-header));
	}

	.ticket-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-inline: var(--space-x-page);
		color: var(--color-text);
	}

	iframe {
		margin-top: 3rem;
		padding-inline: var(--space-x-page);
	}
</style>