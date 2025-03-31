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
    <header class="header primary-bar border w-full md:h-20 px-[1em]">
        <div class="logo header-item">
            <a href="#" class="logo-name text-xl font-bold">
                Mitso Qalaba
            </a>
        </div>
        <div class="theme header-item">
            <!-- <button class="header-toggle" @click="toggleTheme()">
                {{ theme }}
            </button> 
            m-0 flex list-none rounded-[6px] bg-white p-1 
            -->
            <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon h-5 w-5"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg></button>
            <div 
                role="group" 
                dir="ltr" 
                class="header-toggle bg-[var(--color-very-dark-blue)] text-white inline-flex center rounded-full cursor-pointer py-[0.2em] px-[1em]" 
                tabindex="0" 
                style="outline: none;"
            >
                <button 
                    type="button" 
                    data-state="on" 
                    role="radio" 
                    aria-checked="true" 
                    class="header-toggle__item text-text-500 border-0.5 flex items-center rounded-full font-medium gap-1 py-1 pl-2.5 pr-2.5 text-xs" 
                 
                >
                    Dark
                </button>
                <span class="header-toggle__divider">|</span>
                <button 
                    type="button" 
                    data-state="off" 
                    role="radio" 
                    aria-checked="false" 
                    class="header-toggle__item text-text-500 border-0.5 flex items-center rounded-full font-medium gap-1 py-1 pl-2.5 pr-2.5 text-xs" 
                >
                    Light
                </button>
            </div>
        </div>
        <div class="profile header-item">
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
.header {
    background-color: var(--color-some);
    border-color: var(--color-grayish-blue);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        &:first-child {
            justify-content: start;
        }
        &:last-child {
            justify-content: end;
        }
    }
    &-toggle {
        &__item {
            color: var(--color-white);
        }
    }
}

.logo {
    &-name {
        color: #000;
        font-size: 2em;
        font-weight: 900;
    }
}

.light {
    .logo-name {
        color: var(--colo-black);
    }
}
.dark {
    .logo-name {
        color: var(--color-white);
    }
}

.profile {
    .profile-cta {
        font-size: 14px;
        &__anchor {
            color: var(--color-black);
            &:hover {
                color: var(--color-soft-blue);
            }
        }
    }
}
</style>