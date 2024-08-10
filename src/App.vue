<script setup>
import { ref, computed } from 'vue'

import Navigation from './components/Navigation.vue'
import Landing from './views/Landing.vue'
import NotFound from './views/NotFound.vue'

const heading = 'Welcome to the project'
const routes = {
  '/': Landing
}
const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
const currentView = computed(() => {
  return routes[currentPath.value.slice('/') || '/'] || NotFound
})
</script>

<template>
  <navigation></navigation>
  <template v-if="currentView.__name === 'Landing'">
    <landing :msg="heading"></landing>
  </template>
  <template v-else>
    <component :is="currentView" />
  </template>
</template>