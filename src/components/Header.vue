<script setup>
    import { ref } from 'vue';

    import Login from  './Login.vue';
    import Signup from  './Signup.vue';
    
    
    const openLoginDialog = ref(false);
    const handleOpenlogin = () => {
        openLoginDialog.value = true;
    };
    const handleCloseLogin = (val) => {
        openLoginDialog.value = false;
    };

    const openSignupDialog = ref(false);
    const handleOpenSignup = () => {
        openSignupDialog.value = true;
    };
    const handleCloseSignup = (val) => {
        openSignupDialog.value = false;
    };
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
                    @click="handleOpenlogin"
                >
                    Login
                </a>
                <span class="px-1 profile-cta__pipe">/</span>
                <a 
                    href="#" 
                    class="profile-cta__anchor profile-cta__signup"
                    @click="handleOpenSignup"
                >
                    Sign up
                </a>
            </p>
        </div>
    </header>
    <Login 
        :open-login-dialog="openLoginDialog"
        @close-login-dialog="handleCloseLogin"
     />
     <Signup 
        :open-signup-dialog="openSignupDialog"
        @close-signup-dialog="handleCloseSignup"
     />
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