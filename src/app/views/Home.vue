<template>
  <div class="home">
    <div class="home__intro">
      <div class="home__intro-left">
        <h1 class="heading heading--primary">
          <span class="clear">Wamkelekile</span> kwi-website Isixeko
          <span class="clear">sam</span>
        </h1>
        <div class="caption">
          <h4 class="subtitle">
            Isixeko sam website yakhiwe ngabantu abafuna ukukunxumanisa nesixeko sakho kunye noluntu kabanzi.
          </h4>
        </div>
      </div>
      <div class="home__intro-right">
        <Register />
      </div>
    </div>
  </div>
</template>

<script>
import Register from "../components/Register.vue";

export default {
  name: "Home",
  components: {
    Register
  },
  data () {
    return {
      menuA11y: 1,
      scrollTop: 0,
      posts: []
    };
  },
  computed: {
    cssVars() {
      return {
        "height": `${this.scrollTop}px`
      };
    }
  }
};
</script>

<style lang="scss">
    .home {
        background-color: $vLightGray;
        padding: 15% 15% 0;
        height: 100vh;
        width: auto;
        &__intro {
            display: flex;
            justify-content: space-around;
            overflow: hidden;
            position: relative;
            &-left {
               width: 50%;
            }
            &-right {
                align-self: flex-end;
                overflow: hidden;
                position: relative;
                width: 50%;
            }
        }
    }

    .data-list {
        position: absolute;
        top: 20%;
        right: 50%;
        &__item {
            align-items: center;
            border: 1px solid #fff;
            display: block;
            margin: 10px 0 0;
            justify-content: center;
        }
        &__label {
            color: #fff;
            font-size: 18px;
        }
    }

    .caption {
        padding: 0 5em 0 0;
    }

    .heading {
        color: $vDarkGray;
        font-size: 55px;
        padding: 0 0 1em;
    }
    .subtitle {
        color: $vDarkGray;
        font-size: 22px;
        font-weight: 300;
    }


</style>