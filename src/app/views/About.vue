<template>
  <div class="about">
    <h2 class="heading heading--secondary">
      Ukuzazisa kwethu
    </h2>
    <div class="caption">
      <h4 class="subtitle">
        Xhosa also isiXhosa as an endonym, is a Nguni Bantu language and one of the official languages of
        South Africa.
      </h4>
      <p class="para">
        Xhosa is spoken as a first language by approximately 8.2 million people
        and by another 11 million as a second language in South Africa,
        mostly in Eastern Cape, Western Cape, Gauteng and Northern Cape.

        It has perhaps the heaviest functional load of click consonants in a
        Bantu language (approximately tied with Yeyi),
        with one count finding that 10% of basic vocabulary items contained a click.
      </p>
    </div>
    <div class="cannabis-list">
      <h3 class="heading-micro">
        Intlobontlobo zentsangu
      </h3>
      <p
        v-for="item in getCannabis"
        :key="item.brand"
        class="cannabis-list__item"
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
        background-color: $vLightGray;
        height: 100vh;
        padding: 25% 5% 0;
        @media screen and (min-width: 768px) {
            padding: 5% 15% 0;
        }
    }
    .heading {
        color: $darkGray;
        font-size: 46px;
        padding: 0 0 1em;
        text-align: center;
        &-micro {
            font-size: 18px;
        }
    }

    .subtitle {
        color: $darkGray;
        margin: 0 0 1.5em;
        text-align: center;
    }

    .para {
        color: $vDarkGray;
        font-weight: 300;
        text-align: center;
    }

    .cannabis-list {
        display: inline-block;
        &__item {
            color: #000;
            margin: 10px;
        }
    }
</style>