<template>
	<section class="ticket-section">
		<div class="ticket-header">
			<p class="kensington-xl">Billetterie</p>
		</div>

		<div 
			class="ticket-items" 
			:class="{ 'is-live': isLive }"
		>
			<iframe
				v-if="isLive"
				id="haWidget"
				ref="iframeRef"
				allowtransparency="true"
				src="https://www.helloasso.com/associations/almost4zutified/evenements/a4z-trap-2/widget"
				style="width: 100%; border: none"
			></iframe>

			<Card v-else variant="beige" locked>
				<p class="pouler-md">Ouverture à la vente dans</p>
				<p class="kensington-xl">{{ countdown }}</p>
			</Card>
		</div>
	</section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Card from '@/components/card/Card.vue'
import { setHead } from '@/composables/setHead'

setHead(
	'La billetterie | A4Z Trap #2 – Soirée Rap le 12 juillet à Roanne',
	'Accédez à la billetterie officielle du festival A4Z Trap #2 à Roanne. Informations et réservations pour le 12 juillet à la salle Fontalon.'
)

const isLive = ref(false)
const countdown = ref('')
const iframeRef = ref(null)

const targetDate = new Date('2025-06-28T18:00:00')

const updateCountdown = () => {
	const now = new Date()
	const diff = targetDate - now

	if (diff <= 0) {
		isLive.value = true
		countdown.value = ''
		return
	}

	const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0')
	const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0')
	const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0')

	countdown.value = `${hours}h ${minutes}m ${seconds}s`
}

let interval = null

onMounted(() => {
	updateCountdown()
	interval = setInterval(updateCountdown, 1000)

	window.addEventListener('message', (e) => {
		if (e?.data?.height && iframeRef.value) {
			iframeRef.value.style.height = `${e.data.height}px`
		}
	})
})

onBeforeUnmount(() => {
	clearInterval(interval)
})

</script>

<style>
	.ticket-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: var(--space-y-header);
		min-height: calc(100dvh - var(--space-y-header));
	}

	.ticket-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-inline: var(--space-x-page);
		color: var(--color-text);
	}

	.ticket-items {
		text-align: center;
		margin-top: 3rem;
		padding-inline: var(--space-x-page);
		width: 100%;
	}

	.ticket-items .card {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 2rem 1rem;
	}

	#haWidget {
		width: 100%;
	}

	@media screen and (min-width: 1024px) {
		.ticket-items {
			width: 50%;
			min-width: fit-content;
		}
	}
 
	.ticket-items.is-live {
		width: 100% !important;
		min-width: unset !important;
	}
</style>