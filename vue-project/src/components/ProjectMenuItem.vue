<template>
	<div class="project-menu">
		<div class="project-selector" :style="selectorStyle"></div>
		<div class="left">
			<div v-for="(position, index) in leftPositions" :key="index" class="project-item"
				@click="position.use && handleMoveSelector(index)">
				<ImageItem v-if="position.use" :src="getImageSrc(usedIndexesMap, index)"
					:lowResSrc="getLowImageSrc(usedIndexesMap, index)" alt="" class="project-img shadow" />
			</div>
		</div>
		<div class="right">
			<div v-for="(position, index) in rightPositions" :key="index" class="project-item"
				@click="position.use && handleMoveSelector(leftPositions.length + index)">
				<ImageItem v-if="position.use" :src="getImageSrc(usedIndexesMap, leftPositions.length + index)"
					:lowResSrc="getLowImageSrc(usedIndexesMap, leftPositions.length + index)" alt=""
					class="project-img shadow" />
			</div>
		</div>
	</div>
</template>

<script>
import ImageItem from "@/components/ImageItem.vue";

export default {
	components: {
		ImageItem,
	},
	props: {
		leftPositions: {
			type: Array,
			required: true,
		},
		rightPositions: {
			type: Array,
			required: true,
		},
		project: {
			type: Object,
			required: true,
		},
		usedIndexesMap: {
			type: Array,
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
			currentSelectorIndex: this.usedIndexesMap.findIndex(
				(item) => item !== null && item === this.project.image_cover
			),
		};
	},
	methods: {
		setSelectorPosition(index) {
			const projectItems = document.querySelectorAll(".project-item");
			const targetItem = projectItems[index];

			if (targetItem) {
				const rect = targetItem.getBoundingClientRect();
				const parentRect = targetItem.offsetParent.getBoundingClientRect();
				this.selectorStyle = {
					top: `${rect.top - parentRect.top}px`,
					left: `${rect.left - parentRect.left}px`,
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
		getImageSrc(map, index) {
			const imageIndex = map[index];
			return imageIndex !== null
				? `${this.project.image_src}${imageIndex}.webp`
				: "";
		},
		getLowImageSrc(map, index) {
			const imageIndex = map[index];
			return imageIndex !== null
				? `${this.project.image_low_src}${imageIndex}.webp`
				: "";
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
	display: flex;
	flex-direction: row;
	height: 80%;
	width: 15%;
	min-width: 150px;
	position: relative;
}

.project-menu .left,
.project-menu .right,
.project-selector {
	width: 50%;
}

.project-menu .left,
.project-menu .right {
	display: grid;
	grid-template-rows: repeat(8, minmax(0, 1fr));
	width: 50%;
	height: 100%;
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
</style>