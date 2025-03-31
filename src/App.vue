<script setup>
import { ref, computed, provide } from 'vue';

import Header from './components/Header.vue';
import Navigation from './components/Navigation/Navigation.vue';

//Navigation
//console.log(navigator)

//Network

//Location
//console.log(location)
</script>

<template>
  <div class="root">
      <Header />
      <section class="wrapper">
        <div class="top-bar flex justify-end items-end">
          <Navigation />
        </div>
        <router-view />
      </section>
  </div>
</template>