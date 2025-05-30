<template>
	<div class="hero-image-container">
		<svg xmlns="http://www.w3.org/2000/svg" style="display: none" viewBox="0 0 220 220">
			<filter id="wavy">
				<feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="8" result="turbulence" />
				<feDisplacementMap in2="turbulence" in="SourceGraphic" scale="35" xChannelSelector="R" yChannelSelector="G" />
			</filter>
		</svg>
		<img src="@/assets/img/landing.jpg" alt="" class="hero-image">
	</div>

	<section class="landing-section">
		<BeigeCard class="event-intro">
			<p class="pouler-md">12 juillet 2025 - Fontalon - Roanne</p>
			<p class="kensington-xl">A4Z Trap #2</p>
		</BeigeCard>
		<div class="event-schedule">
			<ScheduleCard time="17h - 20h" label="Les stands" details="Marques indés – barber – nails – tournoi FIFA – ..." />
			<ScheduleCard time="20h - 00h" label="La soirée" details="DJ sets rap – Beendo Z – Livaï – rappeurs – ..." />
		</div>
	</section>

	<Slider title="Les stands" subtitle="17h - 20h"
		footerTitle="Tous les stands >" footerTo="/stands"
	>
		<StandCard name="Purpleplace" type="Vetements" img="src/assets/img/stand/purpleplace.png"/>
		<StandCard name="Ja'z Barber" type="Barber" img="src/assets/img/stand/jazbarber.jpg"/>
		<StandCard name="Thys" type="Custom sneakers" img="src/assets/img/stand/thys.jpg"/>
	</Slider>

	<Slider title="La line-up" subtitle="20h - 00h" mode="wrap" 
		footerTitle="Toute la line-up >" footerTo="/line-up"
	>
		<LineupCard name="Beendo Z" song="Pas bête" img="src/assets/img/lineup/beendo.png"/>
		<LineupCard name="Livaï" song="Nous deux c'est mieux <3" img="src/assets/img/lineup/livai.png"/>
		<LineupCard name="Knotty" song="Une nuit de +" img="src/assets/img/lineup/knotty.png"/>
		<LineupCard name="Ayuur" song="Sur un fil" img="src/assets/img/lineup/ayuur.png"/>
	</Slider>
</template>

<script setup>
import ScheduleCard from '@/components/landing/ScheduleCard.vue';
import StandCard from '@/components/stand/StandCard.vue';
import LineupCard from '@/components/lineup/LineupCard.vue';
import BeigeCard from '@/components/BeigeCard.vue';
import Slider from '@/components/Slider.vue';
</script>

<style>
.hero-image-container {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100vh;
	mix-blend-mode: luminosity;
	pointer-events: none;
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
	gap: 2rem;
	margin-bottom: calc(5rem + 2rem);
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

.debug-spacer {
	width: 100%;
	margin-top: 150vh;
}
</style>