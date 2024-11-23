<template>
	<div class="project">
		<div class="main-bg bg-none">
			<div v-for="(position, index) in project.image_positions">
				<div v-if="position.use"
					:key="index"
					class="bg-layer blur"
					:style="{
						backgroundImage: `url(${getLowImageSrc(index)})`,
						opacity: getOpacity(index),
					}">
				</div>
			</div>
		</div>
		<div v-if="project" class="project-container">
			<div class="project-content">
				<ProjectCoverItem 
					:key="project.id" 
					:project="project"
					:getOpacity="getOpacity"
				/>
				<ProjectMenuItem 
					:key="project.id"
					:project="project"
					:onSelectorMove="handleSelectorMove" />
			</div>
		</div>
	</div>
</template>

<script>

import ProjectMenuItem from "@/components/ProjectMenuItem.vue";
import ProjectCoverItem from "@/components/ProjectCoverItem.vue";
import ProjectUtils from "@/utils/ProjectUtils";

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
	methods: {
		async loadProject() {
			this.project = ProjectUtils.getProject(this.projectId);

			if (this.project) {
				const firstUsedIndex = ProjectUtils.getProjectCoverIndex(this.project);
				this.currentIndex = firstUsedIndex !== -1 ? firstUsedIndex : 0;
				await this.$nextTick();
			}
		},
		getOpacity(index) {
			return index === this.currentIndex ? 1 : 0;
		},
		getLowImageSrc(index) {
			return ProjectUtils.getLowImageSrc(this.project, index);
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
	overflow: hidden;
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