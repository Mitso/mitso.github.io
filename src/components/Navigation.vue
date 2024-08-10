<template>
    <nav>
        <ul class="nav-list">
            <li class="nav-list__item">
                <a class="nav-list__anchor" href="#">Landing</a>
            </li>
            <li class="nav-list__item">
                <a class="nav-list__anchor" href="#/about">About</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .nav-list {
        margin: 0;
        padding: 0;
        &__item {
            display: inline-block;
            margin: 0 5px;
        }
        &__anchor {
            color: beige;
            text-transform: uppercase;
        }
    }
</style>