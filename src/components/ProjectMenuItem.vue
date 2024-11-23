<template>
	<div class="project-menu">
		<div class="project-selector" :style="selectorStyle"></div>
		<div v-for="(position, index) in project.image_positions" 
			:key="index"
			:class="['project-item', { 'use': position.use }]"
			@click="position.use && handleMoveSelector(index)"
		>
			<ImageItem v-if="position.use" 
				class="project-img shadow" 
				alt=""
				:src="getImageSrc(index)"
				:lowResSrc="getLowImageSrc(index)" 
				:imgStyle="{ objectPosition: getObjectPosition(index) }"
			/>
		</div>
	</div>
</template>

<script>
import ImageItem from "@/components/ImageItem.vue";
import ProjectUtils from "@/utils/ProjectUtils";

export default {
	components: {
		ImageItem,
	},
	props: {
		project: {
			type: Object,
			required: true,
		},
		onSelectorMove: {
			type: Function,
			required: true,
		},
	},
	data() {
		return {
			selectorStyle: { top: "0px", left: "0px" },
			currentSelectorIndex: ProjectUtils.getProjectCoverIndex(this.project)
		};
	},
	methods: {
		setSelectorPosition(index) {
			const projectMenu = document.querySelector(".project-menu");
			const projectItems = document.querySelectorAll(".project-item");
			const targetItem = projectItems[index];

			if (targetItem && projectMenu) {
				const itemRect = targetItem.getBoundingClientRect();
				const menuRect = projectMenu.getBoundingClientRect();

				const scrollLeft = projectMenu.scrollLeft;
				const scrollTop = projectMenu.scrollTop;

				this.selectorStyle = {
					top: `${itemRect.top - menuRect.top + scrollTop}px`,
					left: `${itemRect.left - menuRect.left + scrollLeft}px`,
				};
			}
		},
		handleMoveSelector(index) {
			this.currentSelectorIndex = index;
			this.setSelectorPosition(index);
			if (this.onSelectorMove) {
				this.onSelectorMove(index);
			}
		},
		getImageSrc(index) {
			return ProjectUtils.getImageSrc(this.project, index);
		},
		getLowImageSrc(index) {
			return ProjectUtils.getLowImageSrc(this.project, index);
		},
		getObjectPosition(index) {
			return ProjectUtils.getObjectPosition(this.project, index);
		},
		handleResize() {
			this.setSelectorPosition(this.currentSelectorIndex);
		},
	},
	mounted() {
		window.addEventListener("resize", this.handleResize);
		this.setSelectorPosition(this.currentSelectorIndex);
	},
	beforeUnmount() {
		window.removeEventListener("resize", this.handleResize);
	},
};
</script>

<style scoped>
.project-menu {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(8, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	height: 80%;
	width: 15%;
	min-width: 150px;
	position: relative;
}

.project-selector {
	width: 50%;
}

.project-selector {
	position: absolute;
	border: 1px solid white;
	height: calc(100% / 8);
	z-index: 10;
	transition: top 0.3s ease, left 0.3s ease;
	box-sizing: border-box;
}

.project-item {
	height: 100%;
	width: 100%;
	padding: 5px;
}

.project-selector,
:deep(.project-img) {
	border-radius: 15px;
}

:deep(.project-img) {
	width: 100%;
	height: 100%;
	cursor: pointer;
	object-fit: cover;
}

@media screen and (max-width: 1024px) {
	.project-menu {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		width: 100%;
		height: 150px;
	}

	.project-selector {
		width: calc(100% / 8);
		height: 50%;
	}
}

@media screen and (max-width: 768px) {
	.project-menu {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
		height: 150px;
		overflow-x: scroll;
		overflow-y: hidden;
		scrollbar-width: none;
	}

	.project-item,
	.project-selector {
		width: 20%;
		min-width: 20%;
		height: 50%;
	}

	.project-item:not(.use) {
		display: none;
	}
}
</style>