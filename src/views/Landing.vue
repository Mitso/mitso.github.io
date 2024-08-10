<script setup lang="ts">
  import Signup from '../components/Signup.vue'
  defineProps<{ msg: string }>()
</script>

<template>
  <section class="landing" id="landing">
    <div class="intro">
      <h1 class="heading-main">{{ msg }}</h1>
    </div>
    <div class="content">
      <signup></signup>
    </div>
  </section>
</template>
