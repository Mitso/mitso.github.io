<template>
  <div class="form-wrapper">
    <form
      id="registerForm"
      class="form"
      @submit.prevent="onSubmit()"
    >
      <fieldset>
        <legend>Ngena kwi-account yam:</legend>
        <div class="input-group">
          <label for="username">Ibizo lakho</label>
          <input
            id="username"
            v-model="username"
            type="text"
          >
        </div>

        <div class="input-group">
          <label for="fullname">Igama nefani</label>
          <input
            id="fullname"
            v-model="fullname"
            type="text"
          >
        </div>

        <div class="input-group">
          <label for="clanName">Isiduko sakho</label>
          <input
            id="clanName"
            v-model="clanName"
            type="text"
          >
        </div>
        <div class="submission">
          <button class="cta-button cta-button-primary">
            Thumela
          </button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>

export default {
  name: "Register",
  mounted() {
    this.$gtm.trackView("MyScreenName", "currentPath");
  },
  methods: {
    onSubmit() {
      this.$gtm.trackEvent({
        event: "regSubmit-click",
        category: "Profile",
        action: "Submit",
        label: "Register",
        value: "sending",
      });
    }
  },
};

</script>

<style lang="scss">
    form {
        position: relative;
    }
    fieldset {
        border: none;
    }

    legend {
        color: $vDarkGray;
        font-size: 28px;
        font-weight: 500;
        padding: 0;
    }

    label {
        color: $darkGray;
        font-size: 18px;
        margin: 0 10px 0 0;
        @media screen and (min-width: 768px) {
            width: 15%;
        }
    }

    input[type=text] {
        box-shadow: 1px 1px 6px 0 $cyanGray;
        border: none;
        border-radius: 5px;
        padding: 15px 10px;
        width: 70%;
        font-size: 16px;
    }

    .cta-button {
        background-color: $strongRed;
        border-radius: 10px;
        border: none;
        color: $white;
        cursor: pointer;
        font-size: 20px;
        opacity: 1;
        padding: 20px 10px;
        transform: opacity 1s;
        text-align: center;
        @media screen and (min-width: 768px) {
            width: 300px;
        }
        &:hover {
            opacity: 0.8;
        }
    }

    .input-group {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin: 10px 0;
        @media screen and (min-width: 768px) {
            flex-direction: row;
            width: 300px;
        }
    }

    .submission {
        align-items: center;
        display: flex;
        margin: 20px 0;
        justify-content: center;
    }

    .form-wrapper {
        padding: 20px 0 0;
    }
</style>