<template>
  <Navbar />
  <RouterView />
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'

const route = useRoute()

watch(
  () => route.path,
  (path) => {
    const theme = path === '/foods' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
  },
  { immediate: true }
)
</script>