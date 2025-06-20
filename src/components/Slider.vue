<template>
	<section class="slider-section">
		<div class="slider-header" v-if="title || subtitle">
			<p class="kensington-xl" v-if="title">{{ title }}</p>
			<p class="pouler-lg" v-if="subtitle">{{ subtitle }}</p>
		</div>

		<slot name="before"></slot>

		<div
			class="slider-container"
			:class="{ 'is-wrap': mode === 'wrap', 'is-slider': mode === 'slider' }"
		>
			<slot></slot>
		</div>

		<div class="slider-footer" v-if="footerTitle && footerTo">
			<Card class="pouler-md" variant="beige" locked>
				<router-link :to="footerTo">{{ footerTitle }}</router-link>
			</Card>
		</div>
	</section>
</template>

<script setup>
import Card from '@/components/card/Card.vue'

defineProps({
	title: String,
	subtitle: String,
	footerTitle: String,
	footerTo: String,
	mode: {
		type: String,
		default: 'slider',
		validator: (value) => ['slider', 'wrap'].includes(value),
	},
})
</script>

<style>
.slider-section {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin-bottom: 5rem;
}

.slider-header {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-inline: var(--space-x-page);
	color: var(--color-text);
}

.slider-footer {
	display: flex;
	flex-direction: column;
	align-self: center;
	justify-self: center;
	padding-inline: var(--space-x-page);
}

.slider-footer > * {
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	cursor: pointer;
}

.slider-container {
	display: flex;
	gap: 1rem;
	padding: 0 var(--space-x-page) .75rem;
}

/* Horizontal scroll mode */
.slider-container.is-slider {
	overflow-x: auto;
	overflow-y: visible;
	scroll-snap-type: x mandatory;
	scroll-padding-inline: var(--space-x-page);
	scrollbar-width: none;
}

.slider-container.is-slider::-webkit-scrollbar {
	display: none;
}

.slider-container.is-slider > * {
	flex: 0 0 auto;
	width: calc((100% - (1rem * (var(--slider-items-count) - 1))) / var(--slider-items-count));
	scroll-snap-align: start;
}

/* Wrap mode (like a grid) */
.slider-container.is-wrap {
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
}

.slider-container.is-wrap > * {
	width: calc((100% - (1rem * (var(--slider-items-count) - 1))) / var(--slider-items-count));
}
</style>