<script setup>

</script>
<template>
    <div class="toast">
        <h1 class="toast__heading">{{ title }}</h1>
        <p v-if="caption" class="toast__caption">
            {{ caption }}
        </p>
    </div>
</template>

<style lang="scss">
.toast {
    background-color: #ffffff;
    width: 700px;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    text-align: center;
    padding: 10px 1em;
    &__heading {
        color: #000;
        font-size: 45px;
        text-wrap: nowrap;
    }

}
</style>

