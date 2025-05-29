<template>
	<NavyCard class="stand-item">
		<AutoScrollText :text="name" class="stand-name kensington-lg"/>
		<p class="pouler-sm">
			{{ type }}
		</p>
		<img :src="img" alt="" class="stand-img">
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

	.stand-name {
		color: var(--color-beige-gray);
	}

	.stand-img {
		margin-top: .5rem;
		width: 55%;
		border-radius: 50%;
		pointer-events: none;
	}
</style>