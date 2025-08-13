<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <!-- <TicketingButton /> -->
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/Menu/Navbar.vue'
import TicketingButton from '@/components/TicketingButton.vue'

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