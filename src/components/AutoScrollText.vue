<template>
	<div ref="container" class="scroll-wrapper">
		<p
			ref="textEl"
			class="scroll-text"
			:class="{ 'is-scrolling': isScrolling }"
			:style="textStyle"
			v-bind="$attrs"
		>
			{{ text }}
		</p>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
	text: { type: String, required: true },
})

const isScrolling = ref(false)
const container = ref(null)
const textEl = ref(null)
const offset = ref('0px')
const speed = ref('8s')

const textStyle = computed(() => ({
	'--scroll-offset': offset.value,
	'--speed': speed.value,
}))

const updateScroll = () => {
	const containerWidth = container.value?.offsetWidth || 0
	const textWidth = textEl.value?.clientWidth || 0

	if (textWidth > containerWidth) {
		offset.value = `-${textWidth - containerWidth}px`
		speed.value = `${textWidth * 0.05}s`
		isScrolling.value = true
	} else {
		isScrolling.value = false
		offset.value = '0px'
		speed.value = '0s'
	}
}

onMounted(async () => {
	await document.fonts.ready
	await nextTick()
	updateScroll()

	window.addEventListener('resize', updateScroll)
})

onUnmounted(() => {
	window.removeEventListener('resize', updateScroll)
})
</script>

<style scoped>
.scroll-wrapper {
	display: inline-block;
	position: relative;
	width: 100%;
	height: fit-content;
	overflow: hidden;
	white-space: nowrap;
}

.scroll-text {
	width: fit-content;
	min-width: 100%;
	text-align: center;
	animation: none;
}

.scroll-text.is-scrolling {
	animation: scrollText var(--speed) linear infinite;
}

@keyframes scrollText {
	0% {
		transform: translateX(0);
	}
	30%, 40% {
		transform: translateX(var(--scroll-offset));
	}
	70%, 100% {
		transform: translateX(0);
	}
}
</style>