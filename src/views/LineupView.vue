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
</script>

<style scoped>
	.slider-section {
		margin-top: var(--space-y-header);
		min-height: calc(100vh - var(--space-y-header));
	}
</style>