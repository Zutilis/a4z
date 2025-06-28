<template>
	<section class="infos-section">
		<div class="infos-header">
			<p class="kensington-xl">Infos Pratiques</p>
		</div>
		<div class="infos-items">
			<div
				class="infos-question"
				v-for="(item, index) in data.faq"
				:key="index"
			>
				<div class="infos-question-header" @click="toggle(index)">
					<p class="kensington-lg">{{ item.question }}</p>
					<svg
						:class="{ open: openIndexes.has(index) }"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M6 9L12 15L18 9" />
					</svg>
				</div>
				<div
					class="infos-answer pouler-md"
					:class="{ open: openIndexes.has(index) }"
				>
					<p>{{ item.answer }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue'
import data from '@/assets/json/data.json'

const openIndexes = ref(new Set())

const toggle = (index) => {
	if (openIndexes.value.has(index)) {
		openIndexes.value.delete(index)
	} else {
		openIndexes.value.add(index)
	}
	openIndexes.value = new Set(openIndexes.value)
}
</script>

<style>
	.infos-section {
		margin-top: var(--space-y-header);
		min-height: calc(100vh - var(--space-y-header));
	}

	.infos-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-inline: var(--space-x-page);
		color: var(--color-text);
	}

	.infos-items {
		padding: 1.5rem var(--space-x-page) 0;
	}

	.infos-question {
		margin-bottom: 1rem;
	}

	.infos-question-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		padding: 1rem 0;
		color: var(--color-beige);
		border-bottom: 1px solid var(--color-beige);
	}

	.infos-question-header:hover {
		background-color: var(--color-beige);
		color: var(--color-navy-blue);
	}

	.infos-question-header:hover svg {
		stroke: var(--color-navy-blue) !important;
	}

	.infos-question-header svg {
		width: 2.5rem;
		height: 2.5rem;
		aspect-ratio: 1 / 1;
		stroke: var(--color-beige) !important;
		stroke-width: 1;
		stroke-linecap: round;

		transition: transform .3s ease;
		transform: rotate(0deg);
	}

	.infos-question-header svg.open {
		transform: rotate(180deg);
	}

	.infos-answer {
		overflow: hidden;
		color: var(--color-beige);
		max-height: 0;
		opacity: 0;
		transition: all .3s ease;
		padding: 0;
	}

	.infos-answer.open {
		max-height: 300px;
		opacity: 1;
		padding: 1rem 0;
	}
</style>