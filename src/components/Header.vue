<script setup>
    import { ref } from 'vue';
    
    import Login from  './Login.vue';
    
    const isLogin = ref(false);
    const login = () => {
        isLogin.value = true;
    }
</script>

<template>
    <header class="primary-bar flex justify-between w-full h-20 bg-white border-b border-gray-200 px-6 items-center">
        <div class="logo">
            <a href="#" class="logo-name text-xl font-bold">
                Diary
            </a>
        </div>
        <div class="profile">
            <p class="profile-cta flex justify-evenly align-center">
                <a 
                    href="#" 
                    class="profile-cta__anchor profile-cta__login"
                    @click="login"
                >
                    Login
                </a>
                <span class="px-1 profile-cta__pipe">/</span>
                <a href="#" class="profile-cta__anchor profile-cta__signup">Sign up</a>
            </p>
        </div>
    </header>
    <Login :isLogin="isLogin" />
</template>

<style lang="scss">
.logo {
    color: #000;
    font-weight: 700;
}

.light {
    .logo-name {
        color: #000;
    }
}
.dark {
    .logo-name {
        color: #fff;
    }
}

.profile {
    .profile-cta {
        font-size: 14px;
        &__anchor {
            color: #000;
            &:hover {
                color: #535bf2;
            }
        }
    }
}
</style>