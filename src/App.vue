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
    <div class="zoom-background"></div>
  </div>

  <div class="overlay-root">
    <div class="zoom-background"></div>
      <Header />
      <section class="wrapper">
        <div class="top-bar flex justify-end items-end">
          <Navigation />
        </div>
        <div class="middle mt-10">
          <router-view />
        </div>
      </section>
    
  </div>
</template>