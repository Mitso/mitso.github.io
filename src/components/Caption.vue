<template>
  <div class="caption">
    <h1 class="heading heading--primary">{{ msg }}</h1>
    <div class="caption__inner">
        <h3 class="heading heading--macro">{{ captionPara }}</h3>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Caption',
        data() {
            return {
                captionPara: `South African is a diverse rainbow nation - a country that belongs to all
                    who live in it, where all people shall have equal rights to speak their own languages.
                `
            }
        },
        props: {
            msg: String
        }
    }
</script>

<style lang="scss" scoped>
    .caption {
        margin: 0 auto;
        text-align: center;
        width: 800px;
        &__inner {
            position: relative;
        }
    }
    .heading {
        &-primary {
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 46px;
        }
        &--macro {
            padding: 0 5%;
        }
    }
</style>
