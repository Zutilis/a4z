<template>
	<section class="ticket-section">
		<div class="ticket-header">
			<p class="kensington-xl">Billetterie</p>
		</div>
		<div class="ticket-items">
			<Card variant="beige" locked>
				<p class="pouler-md">Ouverture à la vente</p>
				<p class="kensington-xl">Sam. 28 juin, 18h</p>
			</Card>
		</div>
	</section>
</template>

<script setup>
import Card from '@/components/card/Card.vue'
</script>

<style>
	.ticket-section {
		display: flex;
		flex-direction: column;
		align-items: center;
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

	.ticket-items {
		text-align: center;
		margin-top: 3rem;
		padding-inline: var(--space-x-page);
	}

	iframe {
		width: 100%;
	}

	@media screen and (min-width: 1024px) {
		.ticket-items {
			width: 50%;
			min-width: fit-content;
		}
	}
</style>