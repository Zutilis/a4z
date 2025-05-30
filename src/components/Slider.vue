<template>
	<section class="slider-section">
		<div class="slider-header" v-if="title || subtitle || $slots.header">
			<slot name="header" v-if="title">
				<p class="kensington-xl">{{ title }}</p>
			</slot>
			<slot name="header" v-if="subtitle">
				<p class="pouler-lg">{{ subtitle }}</p>
			</slot>
		</div>

		<div
			class="slider-container"
			:class="{ 'is-wrap': mode === 'wrap', 'is-slider': mode === 'slider' }"
		>
			<slot />
		</div>
	</section>
</template>

<script setup>
defineProps({
	title: String,
	subtitle: String,
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
	gap: 1rem;
	margin-bottom: 5rem;
}

.slider-header {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-inline: var(--space-container-mobile);
}

/* Common styles */
.slider-container {
	display: flex;
	gap: 1rem;
	padding: 0.75rem var(--space-container-mobile) 1.5rem;
}

/* Horizontal scroll mode */
.slider-container.is-slider {
	overflow-x: auto;
	overflow-y: visible;
	scroll-snap-type: x mandatory;
	scroll-padding-inline: var(--space-container-mobile);
	scrollbar-width: none;
}

.slider-container.is-slider::-webkit-scrollbar {
	display: none;
}

.slider-container.is-slider > * {
	flex: 0 0 auto;
	width: calc((100% - var(--space-container-mobile)) / 2);
	scroll-snap-align: start;
}

/* Wrap mode (like a grid) */
.slider-container.is-wrap {
	flex-wrap: wrap;
	justify-content: center;
}

.slider-container.is-wrap > * {
	width: calc((100% - var(--space-container-mobile)) / 2);
	max-width: 300px;
}
</style>