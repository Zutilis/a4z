<template>
	<section class="partners-section">
		<div class="partners-header">
			<p class="kensington-xl">Partenaires</p>
		</div>
		<div class="partners-items">
			<img 
				v-for="partner in data.partners" 
				:key="partner.name" 
				:src="partner.img" 
				:alt="partner.name" 
			/>
		</div>
	</section>
</template>

<script setup>
import data from '@/assets/json/data.json'
</script>

<style scoped>
.partners-section {
	margin: 115px 0 5rem;
}

.partners-header {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-inline: var(--space-container-mobile);
	color: var(--color-text);
}

.partners-items {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 1.5rem var(--space-container-mobile) 0;
	gap: 3rem;
}

.partners-items img {
	max-height: 8rem;
	width: 70%;
	object-fit: contain;
}
</style>