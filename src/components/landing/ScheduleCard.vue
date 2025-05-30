<template>
	<NavyCard class="schedule-item">
		<div class="schedule-time-block">
			<p class="schedule-time kensington-lg">
				{{ time }}
			</p>
			<p class="schedule-label pouler-sm">
				{{ label }}
			</p>
		</div>
		<div class="schedule-details">
			<p class="pouler-sm">
				{{ details }}
			</p>
		</div>
	</NavyCard>
</template>

<script setup>
import NavyCard from '@/components/NavyCard.vue';

defineProps({
	time: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
	details: {
		type: String,
		required: true,
	},
})
</script>

<style>
.schedule-item {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	text-align: center;
}

.schedule-time-block {
	width: fit-content;
	max-width: 40%;
}

.schedule-time {
	color: var(--color-beige);
	text-transform: lowercase !important;
}

.schedule-details {
	width: fit-content;
	max-width: 58%;
}
</style>