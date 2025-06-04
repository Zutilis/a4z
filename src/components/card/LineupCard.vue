<template>
	<Card class="lineup-item">
		<AutoScrollText :text="name" class="lineup-name kensington-lg"/>
		<AutoScrollText :text="song" class="pouler-sm"/>
		<img :src="img" alt="" class="lineup-img">
		<AutoScrollText text="Sam. 12 juillet" class="pouler-md"/>
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
	song: {
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
	.lineup-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	[data-theme="light"] .lineup-name {
		color: var(--color-beige);
	}

	.lineup-img {
		height: 10vw;
		min-height: 8rem;
		max-width: 100%;
		object-fit: contain;
		mix-blend-mode: luminosity;
		pointer-events: none;
	}
</style>