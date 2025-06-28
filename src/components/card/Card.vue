<template>
	<div :class="['card-wrapper', wrapperClass]">
		<div :class="['card', cardClass]" v-bind="$attrs">
			<slot />
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
	variant: {
		type: String,
		default: 'navy',
		validator: (v) => ['beige', 'navy'].includes(v),
	},
	locked: {
		type: Boolean,
		default: false,
	},
})

const theme = ref(document.documentElement.getAttribute('data-theme') || 'light')

let observer
onMounted(() => {
	if (!props.locked) {
		observer = new MutationObserver(() => {
			theme.value = document.documentElement.getAttribute('data-theme') || 'light'
		})
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
	}
})

onBeforeUnmount(() => {
	if (observer) observer.disconnect()
})

const isDark = computed(() => props.locked ? false : theme.value === 'dark')
const useNavy = computed(() => (props.variant === 'beige') === isDark.value)

const wrapperClass = computed(() => useNavy.value ? 'navy-wrapper' : 'beige-wrapper')
const cardClass = computed(() => useNavy.value ? 'navy-card' : 'beige-card')
</script>

<style>
.card-wrapper, .card {
	transition: background-color .3s ease-in-out;
}

.card-wrapper {
	border-radius: 1rem;
	width: 100%;
}

.navy-wrapper {
	padding: .5rem;
	background-color: var(--color-black);
	box-shadow: var(--shadow);
}

.beige-wrapper {
	padding: 0;
	box-shadow: var(--shadow);
}

.card {
	border-radius: 1rem;
	width: 100%;
}

.navy-card {
	padding: 1rem;
	background-color: var(--color-navy-blue);
	color: var(--color-light-blue);
}

.beige-card {
	background-color: var(--color-beige);
	color: var(--color-navy-blue);
	padding: 1.5rem;
}
</style>