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

    const theme = ref("light");
    const toggleTheme = () => {
    return theme.value =  theme.value === "light" ? "dark" : "light";
    };
</script>

<template>
    <header class="primary-bar bg-white border border-b-gray-50 flex justify-between w-full h-20 px-6 items-center">
       
        <div class="theme">
            <!-- <button class="theme-toggle" @click="toggleTheme()">
                {{ theme }}
            </button> -->
            <div 
                role="group" 
                dir="ltr" 
                class="bg-gray-700 border-bg-300 inline-flex rounded-full border cursor-pointer" 
                tabindex="0" 
                style="outline: none;"
            >
                <button 
                    type="button" 
                    data-state="on" 
                    role="radio" 
                    aria-checked="true" 
                    class="text-text-500 border-0.5 flex items-center rounded-full font-medium gap-1 py-1 pl-2.5 pr-2.5 text-xs" 
                 
                >
                    Dark
                </button>
                <button 
                    type="button" 
                    data-state="off" 
                    role="radio" 
                    aria-checked="false" 
                    class="text-text-500 border-0.5 flex items-center rounded-full font-medium gap-1 py-1 pl-2.5 pr-2.5 text-xs" 
                >
                    Light
                </button>
            </div>
        </div>
        <div class="logo">
            <a href="#" class="logo-name text-xl font-bold">
                Mitso Qalaba
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