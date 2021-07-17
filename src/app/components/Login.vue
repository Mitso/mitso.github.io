<template>
  <div class="form-wrapper">
    <form
      id="loginForm"
      class="form"
    >
      <legend>Ngena kwi-account yam:</legend>
      <fieldset>
        <label for="username">Ibizo lakho</label>
        <input
          id="username"
          v-model="username"
          type="text"
          placeholder="Ibizo lakho"
        >
      </fieldset>
      <fieldset>
        <label for="password">Ipin - eyaziwa nguwe wedwa</label>
        <input
          id="password"
          v-model="password"
          type="password"
        >
      </fieldset>
    </form>
  </div>
</template>