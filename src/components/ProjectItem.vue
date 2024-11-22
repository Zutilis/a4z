<template>
	<div class="project">
		<div class="main-bg bg-none">
			<div v-for="(index, idx) in onlyUsedIndexesMap" :key="idx" class="bg-layer blur" :style="{
				backgroundImage: `url(${getLowImageSrc(onlyUsedIndexesMap, index - 1)})`,
				opacity: getOpacity(index - 1),
			}"></div>
		</div>
		<div v-if="project" class="project-container">
			<div class="project-content">
				<ProjectCoverItem :key="project.id" :onlyUsedIndexesMap="onlyUsedIndexesMap" :project="project"
					:getOpacity="getOpacity" :get-object-position="getObjectPosition" />
				<ProjectMenuItem :key="project.id" :leftPositions="leftPositions" :rightPositions="rightPositions"
					:project="project" :usedIndexesMap="usedIndexesMap" :onSelectorMove="handleSelectorMove" />
			</div>
		</div>
	</div>
</template>

<script>

import projectsData from "@/assets/json/projects.json";
import ProjectMenuItem from "@/components/ProjectMenuItem.vue";
import ProjectCoverItem from "@/components/ProjectCoverItem.vue";

export default {
	components: {
		ProjectCoverItem,
		ProjectMenuItem,
	},
	props: {
		projectId: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			project: null,
			currentIndex: 0,
		};
	},
	computed: {
		leftPositions() {
			return this.project ? this.project.image_positions.slice(0, 8) : [];
		},
		rightPositions() {
			return this.project ? this.project.image_positions.slice(8, 16) : [];
		},
		usedIndexesMap() {
			let imageIndex = 1;
			return this.project
				? this.project.image_positions.map((pos) =>
					pos.use ? imageIndex++ : null
				)
				: [];
		},
		onlyUsedIndexesMap() {
			return this.usedIndexesMap.filter((idx) => idx !== null);
		},
		filteredIndex() {
			const currentImageIndex = this.usedIndexesMap[this.currentIndex];
			return this.onlyUsedIndexesMap.indexOf(currentImageIndex);
		},
	},
	methods: {
		async loadProject() {
			this.project = projectsData.projects.find((p) => p.id === this.projectId) || null;

			if (this.project) {
				const firstUsedIndex = this.usedIndexesMap.findIndex(
					(item) => item !== null && item === this.project.image_cover
				);
				this.currentIndex = firstUsedIndex !== -1 ? firstUsedIndex : 0;
				await this.$nextTick();
			}
		},
		getOpacity(index) {
			return index === this.filteredIndex ? 1 : 0;
		},
		getObjectPosition(map, index) {
			const usedPositions = this.project.image_positions
				.filter((pos) => pos.use && pos.object_pos) // Ne garder que celles avec `use: true` et un `object_pos` défini
				.map((pos) => pos.object_pos);

			return usedPositions[index] || "50% 50%"; // Si l'index dépasse, renvoyer une chaîne vide
		},
		getLowImageSrc(map, index) {
			const imageIndex = map[index];
			return imageIndex !== null
				? `${this.project.image_low_src}${imageIndex}.webp`
				: "";
		},
		handleSelectorMove(index) {
			this.currentIndex = index;
		},
	},
	watch: {
		"$route.params.id": {
			handler: "loadProject",
			immediate: true,
		},
	},
	mounted() {
		this.loadProject();
	},
};
</script>

<style scoped>
.project {
	width: 100vw;
	height: 100vh;
}

.project-container {
	height: 100%;
	width: 100%;
	padding: var(--padding-vertical) var(--padding-horizontal);
}

.project-content {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	flex-direction: row;
	height: 100%;
	width: 100%;
	gap: 2vh;
}

.bg-layer {
	position: absolute;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	transition: opacity 0.5s ease;
}

@media screen and (max-width: 1024px) {

	.project-content,
	.project-menu {
		flex-direction: column;
	}

	.project-cover,
	.project-menu {
		width: 100%;
	}

	.project-menu .left,
	.project-menu .right {
		display: grid;
		grid-template-columns: repeat(8, minmax(0, 1fr));
		width: 100%;
	}
}
</style>