<template>
  <div class="about">
    <h2 class="heading heading--secondary">
      This is the about page
    </h2>
    <div class="cannabis-list">
      <p
        v-for="item in getCannabis"
        :key="item.brand"
      >
        {{ item.brand }}
      </p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "About",
  data() {
    return {
      cannabis: {
        type: Object,
        default: ""
      }
    };
  },
  computed: {
    ...mapGetters([
      "getRandom"
    ]),
    getCannabis () {
        return this.$store.getters.getRandom;
        //return this.getRandom;
    }
  }
};
</script>

<style lang="scss" scoped>
    .about {
        background-color: $darkGray;
        height: 100vh;
		width: 100%;
        padding: 100px 0 0;
    }

    .heading {
        color: #fff;
        font-size: 18px;
    }
</style>