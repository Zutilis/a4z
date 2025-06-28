<template>
	<Slider title="Les stands" subtitle="17h - 20h" mode="wrap">
		<template #before>
			<div class="filters-wrapper">
				<div class="filters">
					<div 
						v-for="filter in filters" :key="filter"
						:class="['filter-btn pouler-md', { active: selectedFilter === filter }]"
						@click="selectedFilter = filter">
						{{ filter }}
					</div>
				</div>
			</div>
		</template>

		<StandCard 
			v-for="stand in stands" 
			:key="stand.name" 
			:name="stand.name" 
			:type="stand.type"
			:avatar="stand.avatar" 
			:href="stand.href"
		/>
	</Slider>
</template>

<script setup>
import { ref, computed } from 'vue'

import StandCard from '@/components/card/StandCard.vue'
import Slider from '@/components/Slider.vue'
import data from '@/assets/json/data.json'

const selectedFilter = ref('Tout')

const filters = computed(() => {
	const types = data.stands.map((s) => s.type.trim())
	const unique = [...new Set(types)]
	return ['Tout', ...unique]
})

const stands = computed(() => {
	if (selectedFilter.value === 'Tout') return data.stands

	return data.stands.filter((stand) =>
		stand.type.toLowerCase().trim() === selectedFilter.value.toLowerCase().trim()
	)
})
</script>

<style scoped>
.slider-section {
	margin-top: var(--space-y-header);
	min-height: calc(100vh - var(--space-y-header));
}

.filters-wrapper {
	position: relative;
}

.filters {
	display: flex;
	gap: .75rem;
	padding: .75rem var(--space-x-page);
	overflow-x: auto;
	overflow-y: visible;
}

.filters::-webkit-scrollbar {
	display: none;
}

.filter-btn {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--color-beige);
	color: var(--color-navy-blue);
	box-shadow: var(--shadow);
	border-radius: .75rem;
	padding: .5rem 1rem;
	text-wrap: nowrap;
	border: none;
	cursor: pointer;
}

.filter-btn.active {
	background-color: var(--color-navy-blue);
	box-shadow: var(--shadow);
	color: var(--color-beige);
}
</style>