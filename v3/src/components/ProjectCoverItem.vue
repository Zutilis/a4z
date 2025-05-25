<template>
	<div class="project-cover rounded shadow">
		<div v-for="(position, index) in project.image_positions" >
			<ImageItem v-if="position.use"
				:key="index"
				class="project-cover-img"
				:src="getImageSrc(index)" 
				:lowResSrc="getLowImageSrc(index)"
				:style="{ opacity: getOpacity(index)}"
				:imgStyle="{ objectPosition: getObjectPosition(index) }"
				/>
		</div>
		<div class="project-description">
			<div class="left glass shadow">
				<h3>{{ project.title }}</h3>
				<h4>{{ project.subtitle }}</h4>
			</div>
			<div class="right">
				<p class="glass shadow">{{ project.date }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import ImageItem from "@/components/ImageItem.vue";
import ProjectUtils from "../utils/ProjectUtils";

export default {
	components: {
		ImageItem,
	},
	props: {
		project: {
			type: Object,
			required: true,
		},
		getOpacity: {
			type: Function,
			required: true,
		},
	},
	methods: {
		getImageSrc(index) {
			return ProjectUtils.getImageSrc(this.project, index);
		},
		getLowImageSrc(index) {
			return ProjectUtils.getLowImageSrc(this.project, index);
		},
		getObjectPosition(index) {
			return ProjectUtils.getObjectPosition(this.project, index);
		},
	},
};
</script>

<style scoped>
.project-cover {
	width: 85%;
	height: 100%;
	position: relative;
	border-radius: 20px;
}

.project-description {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	padding: var(--padding-vertical) var(--padding-vertical);
	z-index: 13;
}

.project-description .left {
	padding: var(--padding-label);
}
.project-description p {
	padding: var(--padding-label);
}

.project-description h4 {
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: 8px;
}

.project-description .left,
.project-description .right {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
}

.project-cover-img {
	position: absolute;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 20px;
	z-index: 12;
	transition: opacity 0.5s ease;
}

@media screen and (max-width: 768px) {
	.project-description .right {
		display: none;
	}
}
</style>