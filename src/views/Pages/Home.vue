<template>
  <div class="home">
    <Caption msg="Isixeko sam"/>
    <LoginForm/>
  </div>
</template>

<script>
    // @ is an alias to /src
    import Caption from '../../components/Caption.vue'
    import LoginForm from '../../components/Profile-CTA/Login.vue'

    export default {
        name: 'Home',
        components: {
            Caption,
            LoginForm
        }
    }

</script>
