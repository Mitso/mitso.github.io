<template>
    <main
        class="main"
        role="main"
    >
        <Nav />
        <router-view />
    </main>
</template>


<script>
import Nav from "./app/components/Nav";

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
    }

    body {
        color: $white;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
        font-size: 16px;

    }

    h1, h2, h3, h4, h5, h6 {
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
