<script setup>
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps({
    openLoginDialog: Boolean,
});
const getOpenLoginDialog = computed(() => {
    return props.openLoginDialog;
});
const emit = defineEmits([
    "closeLoginDialog"
]);
onMounted(() => {
    const loginDialogElem = document.getElementById("login_dialog");
    const loginCloseDialogCross = document.getElementById("login_close_dialog_cross");
    const loginCloseDialogBtn = document.getElementById("login_close_dialog_btn");

    watch(getOpenLoginDialog, (newVal) => {
        if (newVal === true) {
            loginDialogElem.showModal();
            [loginCloseDialogBtn, loginCloseDialogCross, loginDialogElem].forEach((elem) => {
                elem.addEventListener("click", (e) => {
                    e.stopPropagation();
                    if (e.target.tagName === 'DIALOG') {
                        console.log('Background') 
                        loginDialogElem.close();
                        emit("closeLoginDialog", false);  
                    } else {
                        if (e.target.getAttribute('id') === 'login_close_dialog_cross' ||
                            e.target.getAttribute('id') === 'login_close_dialog_btn'
                        ) {
                            console.log('Cross || Button')
                            loginDialogElem.close();
                            emit("closeLoginDialog", false);    
                        }    
                    }
                });
            })
        }
    });
});

const username = ref(''),
    password = ref(''),
    formSubmitSuccess = ref(false);
async function handleLoginSubmit () {
    // const user_data = localStorage.getItem("user");
    // const results = JSON.parse(user_data);

    const login_data = {
        username: username.value,
        password: password.value,
        // id: results.user_id, 
        // email: results.email
    }
    const apiUri = import.meta.env.VITE_DEV_API + 'login';
    try {
        const response = await fetch(apiUri, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({...login_data})
        });
        console.log('Response:', response);
        if (response.statusText === 'OK') {
            const data = await response.json();
            formSubmitSuccess.value = true;
            console.log('Login data:', data);
            res.status(201).json(data.user.user_metadata);
        };
    } catch (error) {
        formSubmitSuccess.value = false;
        //An exception
        const postError = new Error('Something has got wrong.');
        console.error('Error >', error.message, postError);
        throw postError;
    };
}
</script>

<template>
    <dialog id="login_dialog">
        <div class="rounded-xl border bg-card text-card-foreground shadow w-[350px]">
            <div class="intro flex items-center justify-between">
                <div class="flex flex-col gap-y-1.5 p-6 w-full">
                    <h3 class="text-white font-semibold leading-none tracking-tight">
                        Login
                    </h3>
                    <p class="text-white text-sm text-muted-foreground">
                        Please login to continue.
                    </p>
                </div>
                <div class="absolute right-0 top-0 p-6">
                    <a 
                        class="login-close-dialog text-sm text-muted-foreground"
                        id="login_close_dialog_cross"
                        href="#" 
                    >
                        x
                    </a>
                </div>
            </div>
            
            <div class="p-6 pt-0">
                <form @submit.prevent="handleLoginSubmit">
                    <div class="grid w-full items-left gap-4">
                        <div class="flex flex-col space-y-1.5">
                            <label for="username" 
                                class="label text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Username
                            </label>
                            <input 
                                v-model="username"
                                class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                id="username" 
                                placeholder="Username"
                            >
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <label for="password" 
                                class="label text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Password
                            </label>
                            <input 
                                v-model="password"
                                class="label flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                id="password" 
                                placeholder="Password"
                            >
                        </div>
                    </div>
                    <div class="items-center py-6 flex justify-between">
                        <button 
                            class="login-close-dialog inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                            id="login_close_dialog_btn"
                            type="reset"
                        > 
                            Cancel 
                        </button>
                        <button 
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
    </dialog>
</template>

<style lang="scss">
    label.label {
        padding: 0.5em 0;
    }

    dialog {
        background: var(--color-dark-blue);
        margin: 0 auto;
        border-radius: 12px;
    }
</style>