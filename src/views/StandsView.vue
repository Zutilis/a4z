<template>
	<Slider title="Les stands" subtitle="17h - 20h" mode="wrap">
		<template #before>
			<div class="filters-wrapper">
				<div class="filters">
					<button 
						v-for="filter in data.stands_filters" :key="filter"
						:class="['filter-btn pouler-md', { active: selectedFilter === filter }]"
						@click="selectedFilter = filter">
						{{ filter }}
					</button>
				</div>
			</div>
		</template>

		<StandCard 
			v-for="stand in filteredStands" 
			:key="stand.name" 
			:name="stand.name" 
			:type="stand.type"
			:img="stand.img" 
		/>
	</Slider>
</template>

<script setup>
import { ref, computed } from 'vue'

import StandCard from '@/components/card/StandCard.vue'
import Slider from '@/components/Slider.vue'
import data from '@/assets/json/data.json'

const selectedFilter = ref('Tout')

const filteredStands = computed(() => {
	if (selectedFilter.value === 'Tout') return data.stands

	return data.stands.filter((stand) =>
		stand.type.toLowerCase().trim() === selectedFilter.value.toLowerCase().trim()
	)
})
</script>

<style>
.slider-section {
	margin-top: var(--space-navbar-header);
}

.filters-wrapper {
	position: relative;
}

.filters {
	display: flex;
	gap: .75rem;
	padding: .75rem var(--space-container-mobile);
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
}

.filter-btn.active {
	background-color: var(--color-navy-blue);
	box-shadow: var(--shadow);
	color: var(--color-beige);
}

.filters-wrapper::before,
.filters-wrapper::after {
	content: '';
	position: absolute;
	top: 0;
	width: 1.5rem;
	height: 100%;
	pointer-events: none;
	z-index: 1;
}

.filters-wrapper::before {
	left: 0;
	background: linear-gradient(to right, var(--color-bg), transparent);
}

.filters-wrapper::after {
	right: 0;
	background: linear-gradient(to left, var(--color-bg), transparent);
}
</style>