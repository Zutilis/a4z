<template>
	<section class="landing-section">
		<div class="landing-items">
			<div class="event-intro">
				<Card variant="beige" locked>
					<p class="pouler-md">12 juillet 2025 - Fontalon - Roanne</p>
					<p class="kensington-xl">A4Z Trap #2</p>
				</Card>
			</div>

			<div class="event-schedule">
				<ScheduleCard time="17h - 20h" label="Les stands" details="Marques indés – barber – nails – tournoi FIFA – ..." />
				<ScheduleCard time="20h - 00h" label="La soirée" details="DJ sets rap – Beendo Z – Livaï – rappeurs – ..." />
			</div>
		</div>
	</section>

	<Slider title="Les stands" subtitle="17h - 20h" footerTitle="Tous les stands >" footerTo="/stands">
		<StandCard
			v-for="stand in data.stands.slice(0, 6)"
			:key="stand.name"
			:name="stand.name"
			:type="stand.type"
			:avatar="stand.avatar"
			:href="stand.href"
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
import { setHead } from '@/composables/setHead'

setHead(
	'A4Z Trap #2 – Soirée Rap le 12 juillet à Roanne | Association A4Z', 
	"A4Z Trap revient à Roanne le 12 juillet ! Le festival rap organisé par l'association A4Z (almost4zutified) avec Beendo Z, Livaï et d'autres artistes en showcase à la salle Fontalon."
)
</script>

<style>
	.landing-section {
		position: relative;
		min-height: 100dvh;
		margin-bottom: 7rem;
	}

	.landing-items {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: var(--space-y-header) 0;
		gap: 2rem;
		overflow-y: visible;
	}

	.landing-section::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: url('/images/landing.webp');
		background-size: cover;
		background-position: center 100%;
		background-repeat: no-repeat;
		mix-blend-mode: luminosity;
		z-index: 0;
		height: 99%;
		pointer-events: none;
		transform: scale(1.1);
	}

	.event-intro, .event-schedule {
		padding: 0 var(--space-x-page);
		position: relative;
		z-index: 2;
	}

	.event-intro {
		width: 100%;
	}

	.event-intro .card {
		display: flex;
		flex-direction: column;
		text-align: center;
		gap: 1rem;
		padding: 2rem 1rem;
	}

	.event-schedule {
		display: flex;
		padding: 0 var(--space-x-page);
		flex-direction: column;
		gap: 0.5rem;
		width: 100%;
	}

	@media screen and (min-width: 1024px) {
		.event-intro, .event-schedule {
			width: 50%;
		}
	}

</style>