<template>
  <div class="form-wrapper">
    <form
      id="registerForm"
      class="form"
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
        width: 15%;
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
        color: $white;
        background-color: $strongRed;
        border-radius: 10px;
        border: none;
        font-size: 20px;
        padding: 20px 10px;
        text-align: center;
        width: 300px;
    }

    .input-group {
        align-items: center;
        display: flex;
        margin: 10px 0;
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