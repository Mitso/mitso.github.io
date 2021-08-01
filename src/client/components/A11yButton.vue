<template>
    <div
        :id="menuId"
        class="a11y-4-menu"
    >
        <p class="a11y-4-menu__label">
            &darr;
        </p>
    </div>
</template>
<script>
export default {
    name: "A11yButton"
};
</script>


<style lang="scss">
    .a11y-4-menu {
        background-color: $strongRed;
        color: $white;
        cursor: pointer;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        height: 20%;
        justify-content: center;
        padding: 5px;
        position: fixed;
        display: none;
        align-items: center;
        justify-content: center;
        left: 0;
        top: 35%;
        width: 20px;
        z-index: 9999;
        @media screen and (min-width: 768px) {
            display: flex;
        }
        &__label {
            font-weight: 400;
            font-size: 24px;
            text-shadow: $darkGray 1px 0 10px;
        }
    }
</style>