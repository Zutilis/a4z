<template>
	<section class="food-section">
		<div class="food-header">
			<p class="kensington-xl">Food</p>
			<p class="pouler-lg">17h - 00h</p>
		</div>

		<div class="food-items">
			<Card
				v-for="item in data.food"
				:key="item.name"
				class="food-item"
				variant="beige"
				locked="true"
			>
				<div class="food-item-col">
					<div class="food-item-header">
						<p class="kensington-lg">{{ item.name }}</p>
						<p class="pouler-sm">{{ item.details }}</p>
					</div>
				</div>
				<div class="food-item-col" v-if="item.img">
					<img :src="item.img" :alt="item.name" class="food-img">
				</div>
			</Card>
		</div>
	</section>
</template>

<script setup>
import Card from '@/components/card/Card.vue'
import data from '@/assets/json/data.json'
</script>

<style>
	.food-section {
		margin-top: var(--space-navbar-header);
	}

	.food-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-inline: var(--space-container-mobile);
		color: var(--color-text);
	}

	.food-items {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1.5rem var(--space-container-mobile) 0;
		gap: 1rem;
	}

	.food-item {
		display: flex;
		width: 100%;
		gap: 1rem;
		align-items: stretch;
	}

	.food-item-header {
		text-align: center;
	}

	.food-item-col {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.food-img {
		width: 100%;
		height: 100%;
		max-height: 5rem;
		mix-blend-mode: luminosity;
		object-fit: cover;
		border-radius: 1rem;
	}
</style>