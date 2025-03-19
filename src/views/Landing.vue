<script setup lang="ts">
import Signup from '../components/Signup.vue';

</script>

<template>
  <section class="landing" id="landing">
    <div class="intro">
      <h1 class="heading-main">Home page</h1>
    </div>
    <div class="content" >
      <signup></signup>
    </div>
  </section>
</template>

<style lang="scss">
  .landing {
    margin: 0 auto;
    width: 100%;
  }
</style>
