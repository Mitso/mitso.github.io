<template>
  <div class="form-wrapper">
    <form
      id="registerForm"
      class="form"
    >
      <legend>Ngena kwi-account yam:</legend>
      <fieldset>
        <label for="username">Ibizo lakho</label>
        <input
          id="username"
          v-model="username"
          type="text"
        >
      </fieldset>
      <fieldset>
        <label for="fullname">Igama nefani</label>
        <input
          id="fullname"
          v-model="fullname"
          type="tex"
        >
      </fieldset>
      <fieldset>
        <label for="clanName">Isiduko sakho</label>
        <input
          id="clanName"
          v-model="clanName"
          type="text"
        >
      </fieldset>
    </form>
  </div>
</template>

<style lang="scss">
    fieldset {
        border: none;
    }

    .form-wrapper {
        padding: 20px 0 0;
    }
</style>