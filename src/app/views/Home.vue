<template>
  <div class="home">
    <div class="home__intro">
      <div class="home__intro-left">
        <h1 class="heading heading--primary">
          Wamkelekile kwi-website Isixeko sam
        </h1>
        <h4 class="subtitle">
          Isixeko sam website yakhiwe ngabantu abafuna ukukunxumanisa nesixeko sakho kunye noluntu kabanzi.
        </h4>

        <Register />
      </div>
      <div class="home__intro-right">
        <div
          ref="homeAnimation"
          class="home-strip"
        >
          <div class="home-animate">
            <div
              class="home-col home-col-0"
              style="background-image: url('https://greensock.com/images/header/picsum/0.jpg');"
            />
          </div>
        </div>
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
        background-color: $dark;
        padding: 5% 10px 0 10%;
        height: 100vh;
        width: auto;
        &__intro {
            align-items: center;
            display: flex;
            justify-content: space-around;
            overflow: hidden;
            position: relative;
            &-left {
                width: 35%;
            }
            &-right {
                overflow: hidden;
                position: relative;
                width: 65%;
            }
        }

        &-strip {
            align-items: center;
            border: 2px solid #fff;
            border-radius: 2px;
            display: flex;
            height: 680px;
            justify-content: center;
            width: 830px;
        }
        &-animate {
            align-items: center;
            border: 2px solid #fff;
            border-radius: 2px;
            display: flex;
            height: 640px;
            justify-content: center;
            width: 790px;
        }
        &-col {
            background-position: center center;
            background-size: cover;
            border-radius: 2px;
            cursor: pointer;
            height: 600px;
            opacity: 1;
            overflow: hidden;
            position: relative;
            width: 750px;
            will-change: transform, opacity;
            //transform: translate(20%, 10%) rotate(3deg) rotateY(-3deg) rotateX(33deg);
            z-index: 1;
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

    .subtitle {
        font-size: 22px;
        font-weight: 300;
    }
</style>