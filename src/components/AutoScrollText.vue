<template>
	<div ref="container" class="scroll-container">
		<p ref="textEl" class="scroll-text" :class="{ 'is-scrolling': isScrolling }" :style="textStyle"
			v-bind="$attrs">
			{{ text }}
		</p>
	</div>
</template>

<script setup>
import { ref, onMounted, nextTick, computed } from 'vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
	text: { type: String, required: true },
	speed: { type: Number, default: 8 },
})

const isScrolling = ref(false)
const container = ref(null)
const textEl = ref(null)
const offset = ref('0px')

const textStyle = computed(() => ({
	'--scroll-offset': offset.value,
	'--speed': `${props.speed}s`,
}))

onMounted(async () => {
	await nextTick()

	const containerWidth = container.value?.offsetWidth || 0
	const textWidth = textEl.value?.scrollWidth || 0

	console.log(textEl, textWidth, containerWidth);

	if (textWidth > containerWidth) {
		isScrolling.value = true
		offset.value = `-${(textWidth / 1.125) - containerWidth}px`
	}
})
</script>

<style scoped>
.scroll-container {
	display: inline-block;
	width: 100%;
	height: fit-content;
	overflow: hidden;
	white-space: nowrap;
}

.scroll-text {
	min-width: 100%;
	text-align: center;
}

.scroll-text.is-scrolling {
	animation: scrollText var(--speed) ease-in-out infinite;
}

@keyframes scrollText {
	0%, 20%, 80%, 100% {
		transform: translateX(0);
	}
	45%, 50%, 55% {
		transform: translateX(var(--scroll-offset));
	}
}
</style>