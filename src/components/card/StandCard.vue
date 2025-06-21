<template>
	<a :href="href" target="_blank">
		<Card class="stand-item">
			<AutoScrollText :text="name" class="stand-name kensington-lg"/>
			<AutoScrollText :text="type" class="pouler-sm"/>
			<div class="stand-avatar">
				<img
					:src="avatar"
					:alt="name"
					:class="{ cover: useCover }">
			</div>
		</Card>
	</a>
</template>

<script setup>
import Card from '@/components/card/Card.vue'
import AutoScrollText from '@/components/AutoScrollText.vue'

const props = defineProps({
	name: String,
	type: String,
	avatar: String,
	href: String,
})

const useCover = ['Custom Vinyle', 'Lowlita Ongles'].includes(props.name)
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

.stand-avatar {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;
	width: 55%;
	max-width: 8rem;
	border-radius: 50%;
	background-color: var(--color-white);
	mix-blend-mode: luminosity;
	overflow: hidden;
}

.stand-avatar img {
	width: 100%;
	height: 100%;
	border-radius: 50%;
	aspect-ratio: 1 / 1;
	object-fit: contain;
	pointer-events: none;
}

.stand-avatar img.cover {
	object-fit: cover;
}
</style>