<template>
    <div class="form-wrapper">
        <form
            id="loginForm"
            class="form"
        >
            <div class="fieldset">
                <label for="username">Ibizo lakho</label>
                <input
                    id="username"
                    v-model="username"
                    type="text"
                    placeholder="Ibizo lakho"
                >
            </div>
            <div class="fieldset">
                <input
                    id="password"
                    v-model="password"
                    type="password"
                >
            </div>
        </form>
    </div>
</template>