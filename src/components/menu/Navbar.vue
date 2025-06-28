<template>
	<header :class="{ 'menu-open': isMenuOpen }" ref="headerRef" tabindex="-1">
		<div class="menu-inner">
			<NavbarHeader :isOpen="isMenuOpen" @toggle="toggleMenu" @close="() => isMenuOpen = false" />

			<Transition name="fade">
				<MobileMenu v-if="isMenuOpen" @close="toggleMenu" />
			</Transition>
		</div>
	</header>
</template>

<script setup>
import { ref, watch, nextTick, onUnmounted } from 'vue'
import NavbarHeader from '@/components/menu/NavbarHeader.vue'
import MobileMenu from '@/components/menu/MobileMenu.vue'

const headerRef = ref(null)
const isMenuOpen = ref(false)
const previousTheme = ref(null)

const updateBodyHeight = () => {
	const headerEl = headerRef.value
	const headerHeight = headerEl?.offsetHeight || 0
	const viewportHeight = window.innerHeight

	if (headerHeight < viewportHeight) {
		headerEl.style.height = '100vh'
		document.body.style.height = '100vh'
	} else {
		headerEl.style.height = 'fit-content'
		document.body.style.height = `${headerHeight}px`
	}
}

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
}

watch(isMenuOpen, async (open) => {
	await nextTick()

	if (open) {
		updateBodyHeight()
		window.addEventListener('resize', updateBodyHeight)

		previousTheme.value = document.documentElement.getAttribute('data-theme')
		document.documentElement.setAttribute('data-theme', 'dark')
	} else {
		const headerEl = headerRef.value
		headerEl.style.height = 'fit-content'
		document.body.style.height = ''
		
		document.documentElement.setAttribute('data-theme', previousTheme.value ?? 'light')
		window.removeEventListener('resize', updateBodyHeight)
	}
})

onUnmounted(() => {
	window.removeEventListener('resize', updateBodyHeight)
})
</script>

<style>
header {
	position: fixed;
	height: fit-content;
	z-index: 10;
	top: 0;
	left: 0;
	right: 0;
	transition: background-color .3s ease;
}

header.menu-open {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 9999;
	background-color: var(--color-navy-blue);
	overflow: visible;
}

header.menu-open .menu-inner {
	width: 100%;
	height: fit-content;
	min-height: 95vh;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity .3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>