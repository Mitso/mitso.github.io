<template>
  <div class="home">
    <Caption msg="Isixeko sam"/>
    <LoginForm/>
    {{ somePrintMethod() }}
  </div>
</template>

<script>
    // @ is an alias to /src
    import Caption from '@/components/Caption.vue'
    import LoginForm from '@/components/Profile-CTA/Login.vue'

    export default {
        name: 'Home',
        data() {
            return {

            }
        },
        components: {
            Caption,
            LoginForm
        },
        methods: {
            somePrintMethod() {
                console.log('yeyiphi le?',this.$router);
            }
        }
    }

</script>
