<template>
	<Card class="stand-item">
		<AutoScrollText :text="name" class="stand-name kensington-lg"/>
		<p class="pouler-sm">
			{{ type }}
		</p>
		<img :src="img" alt="" class="stand-img">
	</Card>
</template>

<script setup>
import Card from '@/components/Card.vue';
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
		margin-top: .5rem;
		width: 55%;
		border-radius: 50%;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		pointer-events: none;
	}
</style>