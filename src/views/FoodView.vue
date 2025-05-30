<template>
	<section class="food-section">
		<div class="food-header">
			<p class="kensington-xl">Food</p>
			<p class="pouler-lg">17h - 00h</p>
		</div>

		<div class="food-items">
			<BeigeCard class="food-item">
				<div class="food-item-col">
					<div class="food-item-header">
						<p class="kensington-lg">Snackinblack</p>
						<p class="pouler-sm">Burgers - 18h - 23h</p>
					</div>
				</div>
				<div class="food-item-col">
					<img src="@/assets/img/food/snackinblack.jpg" alt="" class="food-img">
				</div>
			</BeigeCard>
			<BeigeCard class="food-item">
				<div class="food-item-col">
					<div class="food-item-header">
						<p class="kensington-lg">Pizza Cosy</p>
						<p class="pouler-sm">Pizzas - 18h - 23h</p>
					</div>
				</div>
				<div class="food-item-col">
					<img src="@/assets/img/food/pizzacosy.webp" alt="" class="food-img">
				</div>
			</BeigeCard>
			<BeigeCard class="food-item">
				<div class="food-item-col">
					<div class="food-item-header">
						<p class="kensington-lg">Buvette sur place</p>
						<p class="pouler-sm">Drinks - 17h - 00h</p>
					</div>
				</div>
			</BeigeCard>
		</div>
	</section>
</template>

<script setup>
import BeigeCard from '@/components/BeigeCard.vue'
</script>

<style scoped>
.food-section {
	margin: 115px 0 5rem;
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