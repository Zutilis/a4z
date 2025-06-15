<template>
	<header :class="{ 'menu-open': isMenuOpen }">
		<NavbarHeader :isOpen="isMenuOpen" @toggle="toggleMenu" />

		<Transition name="fade">
			<MobileMenu v-if="isMenuOpen" @close="toggleMenu" />
		</Transition>
	</header>
</template>

<script setup>
import { ref, watch } from 'vue'
import NavbarHeader from '@/components/menu/NavbarHeader.vue'
import MobileMenu from '@/components/menu//MobileMenu.vue'

const isMenuOpen = ref(false)
const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value
</script>

<style>
header {
	position: fixed;
	height: fit-content;
	z-index: 9999;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	transition: background-color .3s ease;
}

header.menu-open {
	background-color: var(--color-navy-blue);
	min-height: 100vh;
	overflow-y: auto;
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