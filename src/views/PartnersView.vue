<template>
	<section class="partners-section">
		<div class="partners-header">
			<p class="kensington-xl">Partenaires</p>
		</div>
		<div class="partners-items">
			<a
				v-for="partner in data.partners"
				:key="partner.name"
				:href="partner.href"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					:src="partner.img"
					:alt="partner.name"
				/>
			</a>
		</div>
	</section>
</template>

<script setup>
import data from '@/assets/json/data.json'
</script>

<style>
	.partners-section {
		margin-top: var(--space-y-header);
		min-height: calc(100vh - var(--space-y-header));
	}

	.partners-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding-inline: var(--space-x-page);
		color: var(--color-text);
		margin-bottom: 5rem;
	}

	.partners-items {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		flex-wrap: wrap;
		padding-inline: var(--space-x-page);
		gap: 5rem;
	}

	.partners-items img {
		max-height: 6rem;
		object-fit: cover;
	}
</style>