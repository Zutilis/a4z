<template>
	<Slider title="La line-up" subtitle="20h - 00h" mode="wrap">
		<LineupCard name="Beendo Z" song="Pas bête" img="src/assets/img/lineup/beendo.png"/>
		<LineupCard name="Livaï" song="Nous deux c'est mieux <3" img="src/assets/img/lineup/livai.png"/>
		<LineupCard name="Knotty" song="Une nuit de +" img="src/assets/img/lineup/knotty.png"/>
		<LineupCard name="Ayuur" song="Sur un fil" img="src/assets/img/lineup/ayuur.png"/>
	</Slider>
</template>

<script setup>
import LineupCard from '@/components/lineup/LineupCard.vue';
import Slider from '@/components/Slider.vue';
</script>

<style scoped>
	.slider-section {
		margin-top: 115px;
	}
</style>