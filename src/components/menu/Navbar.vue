<template>
	<header>
		<NavbarHeader :isOpen="isMenuOpen" @toggle="toggleMenu" />

		<Transition name="fade">
			<MobileMenu v-if="isMenuOpen" @close="toggleMenu" />
		</Transition>
	</header>
</template>

<script setup>
import { ref } from 'vue'
import NavbarHeader from '@/components/menu/NavbarHeader.vue'
import MobileMenu from '@/components/menu//MobileMenu.vue'

const isMenuOpen = ref(false)
const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>