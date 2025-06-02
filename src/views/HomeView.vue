<template>
	<div class="hero-image-container">
		<svg xmlns="http://www.w3.org/2000/svg" style="display: none" viewBox="0 0 220 220">
			<filter id="wavy">
				<feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="8" result="turbulence" />
				<feDisplacementMap in2="turbulence" in="SourceGraphic" scale="35" xChannelSelector="R" yChannelSelector="G" />
			</filter>
		</svg>
		<img src="/images/landing.webp" alt="" class="hero-image">
	</div>

	<section class="landing-section">
		<Card class="event-intro" variant="beige" locked>
			<p class="pouler-md">12 juillet 2025 - Fontalon - Roanne</p>
			<p class="kensington-xl">A4Z Trap #2</p>
		</Card>

		<div class="event-schedule">
			<ScheduleCard time="17h - 20h" label="Les stands" details="Marques indés – barber – nails – tournoi FIFA – ..." />
			<ScheduleCard time="20h - 00h" label="La soirée" details="DJ sets rap – Beendo Z – Livaï – rappeurs – ..." />
		</div>
	</section>

	<Slider title="Les stands" subtitle="17h - 20h" footerTitle="Tous les stands >" footerTo="/stands">
		<StandCard
			v-for="stand in data.stands"
			:key="stand.name"
			:name="stand.name"
			:type="stand.type"
			:img="stand.img"
		/>
	</Slider>

	<Slider title="La line-up" subtitle="20h - 00h" mode="wrap" footerTitle="Toute la line-up >" footerTo="/line-up">
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
import ScheduleCard from '@/components/card/ScheduleCard.vue'
import StandCard from '@/components/card/StandCard.vue'
import LineupCard from '@/components/card/LineupCard.vue'
import Card from '@/components/card/Card.vue'
import Slider from '@/components/Slider.vue'
import data from '@/assets/json/data.json'
</script>

<style>
	.hero-image-container {
		position: absolute;
		width: 100%;
		height: 100vh;
		mix-blend-mode: luminosity;
		pointer-events: none;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
	}

	.hero-image {
		position: relative;
		top: 0;
		left: 50%;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 40%;
		filter: url(#wavy);
		transform: scale(1.05) translateX(-50%);
		pointer-events: none;
	}

	.landing-section {
		display: flex;
		justify-content: center;
		flex-direction: column;
		position: relative;
		height: 100vh;
		padding: 0 var(--space-container-mobile);
		margin-bottom: 7rem;
		gap: 2rem;
	}

	.event-intro {
		display: flex;
		flex-direction: column;
		text-align: center;
		gap: .75rem;
		padding: 2rem 1rem;
	}

	.event-schedule {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>