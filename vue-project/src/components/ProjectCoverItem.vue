<template>
	<div class="project-cover rounded shadow">
		<ImageItem 
      v-for="(index, idx) in onlyUsedIndexesMap" 
      :key="idx" 
      class="project-cover-img"
			:src="getImageSrc(onlyUsedIndexesMap, index - 1)" 
      :lowResSrc="getLowImageSrc(onlyUsedIndexesMap, index - 1)"
			:style="{ opacity: getOpacity(index - 1) }"
    />
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

.project-cover-img {
	position: absolute;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 20px;
	transition: opacity 0.5s ease;
}
</style>