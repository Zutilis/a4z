<template>
	<Card class="stand-item">
		<AutoScrollText :text="name" class="stand-name kensington-lg"/>
		<AutoScrollText :text="type" class="pouler-sm"/>
		<img :src="img" alt="" class="stand-img">
	</Card>
</template>

<script setup>
import Card from '@/components/card/Card.vue';
import AutoScrollText from '@/components/AutoScrollText.vue';

defineProps({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
})
</script>

<style>
	.stand-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	[data-theme="light"] .stand-name {
		color: var(--color-beige);
	}

	.stand-img {
		margin-top: .75rem;
		width: 55%;
		max-width: 8rem;
		border-radius: 50%;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		pointer-events: none;
	}
</style>