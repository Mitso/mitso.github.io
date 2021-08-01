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
        <div
            class="languages"
        >
            <ul class="languages-list">
                <li class="languages-list__item">
                    <a class="languages-list__anchor">
                        Xhosa
                    </a>
                </li>
                <li class="languages-list__item">
                    <a class="languages-list__anchor">
                        English
                    </a>
                </li>
            </ul>
        </div>
        <nav>
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
        </nav>
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

        align-items: center;
        display: flex;
        justify-content: center;
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


    .languages {
        height: 33px;
        overflow: hidden;
        width: 100px;
        @media screen and (min-width: 768px) {
           left: 1em;
           position: absolute;
        }
        &-list {
            list-style: none;
            &__item {
                display: block;
                margin: 5px 10px;
            }
            &__anchor {
                color: #fff;
                font-size: 18px;
            }
        }
    }
</style>