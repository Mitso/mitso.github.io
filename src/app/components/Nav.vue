<!--
    1. GENERAL PUBLIC MENU
        a) Home
        b) About us
        c) What you will find on the wesite
    2. + GATED MENU - Users
        d) Account -
            a) My location
                Country governance,
                Province governance,
                Local governance [Emphasis on local government]
    3.	+ CMS ACCESS - Admin Users
            b) Publish content
-->
<template>
    <div class="navigation">
        <ul class="menu">
            <li class="menu__item">
                <router-link
                    to="/"
                    class="menu__anchor"
                >
                    Home
                </router-link>
            </li>
            <li class="menu__item">
                <router-link
                    to="/about"
                    class="menu__anchor"
                >
                    About
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>


</script>

<style lang="scss">
    //DESKTOP
    .navigation {
        background: $vDarkBlue;
        margin: 0 auto;
        padding: 20px 10%;
        left: 0;
        position: fixed;
        text-align: center;
        top: 0;
        right: 0;
        z-index: 9999;
    }
    .menu {
        display: inline-block;
        &__item {
            display: inline-block;
            margin: 5px 10px;
        }
        &__anchor {
            color: $white;
            font-size: 18px;
            padding: 5px;
            font-weight: 500;
        }
    }
</style>