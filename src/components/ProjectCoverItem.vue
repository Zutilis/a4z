<template>
	<div class="project-cover rounded shadow">
		<ImageItem v-for="(index, idx) in onlyUsedIndexesMap" :key="idx" class="project-cover-img"
			:src="getImageSrc(onlyUsedIndexesMap, index - 1)" :lowResSrc="getLowImageSrc(onlyUsedIndexesMap, index - 1)"
			:style="{ opacity: getOpacity(index - 1) }" />
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

export default {
	components: {
		ImageItem,
	},
	props: {
		onlyUsedIndexesMap: {
			type: Array,
			required: true,
		},
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
	padding: .5rem .8rem;
}
.project-description p {
	padding: .6rem .9rem;
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