<template>
	<div class="progressive-image-wrapper" ref="imageWrapper">
		<img v-if="startLoading && showLowRes" :src="lowResSrc"
			:class="['low-res', { loaded: lowResLoaded }, ...imgClassList]" @load="onLowResLoad" loading="lazy"
			:alt="alt" />
		<img v-if="startLoading" 
			:src="src" 
			:class="['high-res', { loaded: highResLoaded }, ...imgClassList]"
			:style="imgStyle"
			@load="onHighResLoad" loading="lazy" :alt="alt" />
	</div>
</template>

<script>
export default {
	name: 'ImageItem',
	props: {
		src: {
			type: String,
			required: true,
		},
		lowResSrc: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			default: '',
		},
		imgClass: {
			type: [String, Array],
			default: '',
		},
		imgStyle: {
			type: Object,
			default: null,
		}
	},
	data() {
		return {
			lowResLoaded: false,
			highResLoaded: false,
			startLoading: false,
			showLowRes: true,
			observer: null,
		};
	},
	computed: {
		imgClassList() {
			return Array.isArray(this.imgClass)
				? this.imgClass
				: this.imgClass.trim().split(/\s+/);
		},
	},
	mounted() {
		if ('IntersectionObserver' in window) {
			this.observer = new IntersectionObserver(this.handleIntersection, {
				threshold: 0.1,
			});
			this.observer.observe(this.$refs.imageWrapper);
		} else {
			this.startLoading = true;
		}
	},
	beforeUnmount() {
		this.unbindObserver();
	},
	methods: {
		handleIntersection(entries) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					this.startLoading = true;
					this.unbindObserver();
				}
			});
		},
		onLowResLoad() {
			this.lowResLoaded = true;
		},
		onHighResLoad() {
			this.highResLoaded = true;
			this.showLowRes = false;
		},
		unbindObserver() {
			if (this.observer) {
				this.observer.disconnect();
				this.observer = null;
			}
		},
	},
};
</script>

<style scoped>
.progressive-image-wrapper {
	position: relative;
	overflow: hidden;
}

img {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.low-res {
	filter: blur(20px);
}

.low-res.loaded {
	filter: blur(0);
	transition: filter 0.5s ease;
}

.high-res {
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
}

.high-res.loaded {
	opacity: 1;
	transition: opacity 0.5s ease;
}
</style>