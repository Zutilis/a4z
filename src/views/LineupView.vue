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
import LineupCard from '@/components/lineup/LineupCard.vue';
import Slider from '@/components/Slider.vue';

import data from '@/assets/json/data.json'
</script>

<style scoped>
	.slider-section {
		margin-top: 115px;
	}
</style>