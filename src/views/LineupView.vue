<template>
	<Slider title="La line-up" subtitle="20h - 00h" mode="wrap">
		<LineupCard
			v-for="artist in data['line-up']"
			:key="artist.name"
			:name="artist.name"
			:song="artist.song"
			:img="artist.img"
		/>
  </Slider>
</template>

<script setup>
import LineupCard from '@/components/card/LineupCard.vue';
import Slider from '@/components/Slider.vue';

import data from '@/assets/json/data.json'
import { setHead } from '@/composables/setHead'

setHead(
	'La Line-Up | A4Z Trap #2 – Soirée Rap le 12 juillet à Roanne', 
	"Découvrez la programmation complète du festival A4Z Trap #2 à Roanne, avec Beendo Z, Livaï et d'autres artistes rap en showcase le 12 juillet à la salle Fontalon."
)
</script>

<style scoped>
	.slider-section {
		margin-top: var(--space-y-header);
		min-height: calc(100dvh - var(--space-y-header));
	}
</style>