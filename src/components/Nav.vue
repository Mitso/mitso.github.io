<template>
    <div class="nav">
        <ul class="nav-list">
            <router-link to="/" class="nav-list__item">Home</router-link>
            <router-link to="/about" class="nav-list__item">About</router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
/*
    Reusable global sass variables, mixins, functions etc.
*/
    .nav {
        padding: 30px;
        &-list {
            margin: 0;
            padding: 0;
            &__item {
                display: inline-block;
                color: #2c3e50;
                font-weight: bold;
                padding: 0 10px;
                router-link-exact-active {
                    color: #42b983;
                }
            }
        }
    }
</style>