<template>
  <Navbar />
  <RouterView />
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/Menu/Navbar.vue'

const route = useRoute()

watch(
  () => route.path,
  (path) => {
    const theme = ['/partners', '/food', '/infos'].includes(path) ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
  },
  { immediate: true }
)
</script>