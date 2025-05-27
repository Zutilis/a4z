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

	<div class="debug-spacer">
		<p>Test</p>
	</div>
</template>

<script setup>
import ScheduleCard from '@/components/Landing/ScheduleCard.vue';
import BeigeCard from '@/components/BeigeCard.vue';
</script>

<style scoped>
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