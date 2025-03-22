<script setup>
import { ref, computed, provide } from 'vue';

import Header from './components/Header.vue';
import Navigation from './components/Navigation/Navigation.vue';


const theme = ref("light");
const toggleTheme = () => {
  return theme.value =  theme.value === "light" ? "dark" : "light";
};

//Navigation
//console.log(navigator)

//Network

//Location
//console.log(location)
</script>

<template>
  <main
    :class="theme" 
    class="main"
  >
    <Header />
    <section class="wrapper">
      <div class="top-bar flex justify-end items-end">
        <Navigation />
        <button class="theme-toggle" @click="toggleTheme()">
          {{ theme }}
        </button>
      </div>
      <div class="middle mt-10">
        <router-view />
      </div>
    </section>
  </main>
</template>