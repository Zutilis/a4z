<template>
	<NavyCard class="lineup-item">
		<p class="lineup-name kensington-lg">
			{{ name }}
		</p>
		<AutoScrollText :text="song" class="pouler-sm"/>
		<img :src="img" alt="" class="lineup-img">
		<p class="pouler-md">
			Sam. 12 juillet
		</p>
	</NavyCard>
</template>

<script setup>
import NavyCard from '@/components/NavyCard.vue';
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

	.lineup-name {
		color: var(--color-beige);
	}

	.lineup-img {
		height: 125px;
		max-width: 100%;
		mix-blend-mode: luminosity;
		pointer-events: none;
	}
</style>