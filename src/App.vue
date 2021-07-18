<template>
  <main
    class="main"
    role="main"
  >
    <Nav />
    <A11yButton />
    <router-view />
  </main>
</template>


<script>
import Nav from "./app/components/Nav";
import A11yButton from "./app/components/A11yButton";

export default {
  name:"App",
  components: {
    Nav,
    A11yButton
  },
  data() {
    return {

    };
  },
  mounted() {
    this.$store.dispatch("GET_RANDOM");
  }
};

</script>


<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400;600&display=swap');

    html, body {
        margin: 0;
        height: 100%;
        position: relative;
        overflow:hidden;
    }

    body {
        color: $white;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
        font-size: 16px;

    }

    h1, h2, h3, h4, h5, h6 {
        display: inline-block;
        margin: 0;
    }

    ul, li {
        margin: 0;
        padding: 0;
    }

    p {
        margin: 0;
    }

    .clear {
        display: block;
    }
</style>
