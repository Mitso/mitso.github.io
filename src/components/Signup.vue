<script setup>
import { computed, onMounted, ref, watch } from 'vue';


const props = defineProps({
    openSignupDialog: Boolean,
});
const getOpenSignupDialog = computed(() => props.openSignupDialog);
const emit = defineEmits([
    "closeSignupDialog"
]);
onMounted(() => {
    const signupDialog = document.getElementById('signup_dialog');
    const signupCloseDialogCross = document.getElementById('signup_close_dialog_cross');
    const signupCloseDialogBtn = document.getElementById('signup_close_dialog_btn');

    watch(getOpenSignupDialog, (value) => {
        if (value === true) {
            signupDialog.showModal();
            const list = [signupCloseDialogCross, signupCloseDialogBtn, signupDialog]
            list.forEach((elem) => {
                elem.addEventListener("click", (e) => {
                    e.stopPropagation();
 
                    if (e.target.tagName === 'DIALOG') {
                        console.log('Background') 
                        signupDialog.close();
                        emit("closeSignupDialog", false);  
                    } else {
                        if (e.target.getAttribute('id') === 'signup_close_dialog_cross' ||
                            e.target.getAttribute('id') === 'signup_close_dialog_btn'
                        ) {
                            console.log('Cross || Button')
                            signupDialog.close();
                            emit("closeSignupDialog", false);  
                        }    
                    }
                });
            })
        }
    });
});


const name = ref(''),
    surname = ref(''),
    mobile = ref(''),
    email_address = ref(''),
    username = ref(''),
    password = ref(''),
    formSubmit = ref(false);

async function handleSignupSubmit() {
    const signup_data = {
        name: name.value,
        surname: surname.value, 
        mobile: mobile.value, 
        email_address: email_address.value,
        username: username.value,
        password: password.value
    };

    const apiUri = import.meta.env.VITE_DEV_API + 'signup';
    try {
        const response = await fetch(apiUri, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({...signup_data})
        });
      
        if (response.statusText === 'Created' ) {
            const data = await response.json();
            formSubmit.value = true;
            const user_data = localStorage.getItem("user");
            if(!user_data) localStorage.setItem('user', JSON.stringify(data));
        } else {
            throw new Error('Something has got wrong.');
        }
    } catch (error) {
        formSubmit.value = false;
        console.error('Error >', error.message);
        throw error;
    };
};
</script>
<template>
    <!--
        1. Input fields validation
        2. Create API server 
        3. Connection to API
    -->
    <dialog id="signup_dialog">
        <template v-if="formSubmit">
            <figure>
                <h2>Thank you for signing up.</h2>
                <figcaption>
                    Please verify your account via your email, <br/>
                    <i><b>If you cannot find email in your inbox, please check the spam folder.</b></i>
                </figcaption>
            </figure>
        </template>
        <template v-else>
            <div 
                class="rounded-xl border bg-card text-card-foreground shadow p-5"
            >
                <div class="intro flex items-center justify-between">
                    <div class="flex flex-col gap-y-1.5 p-6 w-full">
                        <h3 class="font-semibold leading-none tracking-tight">
                            Register
                        </h3>
                        <p class="text-sm text-muted-foreground">
                            Signup to application content
                        </p>
                    </div>
                    <div class="absolute right-0 top-0 p-6">
                        <a 
                            class="signup-close-dialog text-sm text-muted-foreground"
                            id="signup_close_dialog_cross"
                            href="#" 
                        >
                            x
                        </a>
                    </div>
                </div>
                <div class="p-6 pt-0">
                    <form @submit.prevent="handleSignupSubmit">
                        <div class="grid w-full items-left gap-4">
                            <div class="flex flex-col space-y-1.5">
                                <figure>
                                    <figcaption>Fill in the following input fields once completed, click the submit button.</figcaption>
                                </figure>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <label for="name" 
                                    class="label text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                First name
                            </label>
                            <input 
                                v-model="name"
                                class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                id="name" 
                                placeholder="Name"
                                type="text"
                            >
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <label for="surname" 
                                    class="label text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                Surname
                            </label>
                            <input 
                                v-model="surname"
                                class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                id="surname" 
                                placeholder="Surname"
                                type="text"
                            >
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <!--
                                1. Select country code
                                    a) Create an API with mobile number codes endpoint.
                                    b) Fetch list of mobile number country codes 
                                    c) Prepopulate field with select data on code input field.
                                    d) Conditionaly validate accepting mobile number based on selected country code. 
                            -->
                            <label for="mobile" 
                                    class="label text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                Contact number
                            </label>
                            <input 
                                v-model="mobile"
                                class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                id="mobile" 
                                placeholder="Mobile"
                                type="mobile"
                            > 
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <label for="email" 
                                    class="label text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                Email address
                            </label>
                            <input 
                                v-model="email_address"
                                class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                id="email" 
                                placeholder="Email"
                                type="email"
                            > 
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <label for="logname" 
                                    class="label text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                Username
                            </label>
                            <input 
                                v-model="username"
                                class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                id="logname" 
                                placeholder="Username"
                                type="text"
                            >
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <label for="passphrase" 
                                    class="label text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                Password
                            </label>
                            <input 
                                v-model="password"
                                class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                id="passphrase" 
                                placeholder="Password"
                                type="password"
                            >
                        </div>
                        <div class="items-center p-6 px-0 flex justify-between">
                            <button 
                                class="signup-close-dialog inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                                id="signup_close_dialog_btn"
                                type="reset"
                            >
                                Cancel 
                            </button>
                            <button 
                                class="submit-btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div class="data-profile-division">
                    <div class="intro flex items-center justify-between">
                        <div class="flex flex-col gap-y-1.5 py-6 w-full">
                            <h3 class="font-semibold leading-none tracking-tight">
                                Profile data:
                            </h3>
                        </div>
                    </div>
                    <div class="data-profile-division__content">
                        <p>Full name: {{ name }} {{ surname }}</p>
                        <p>Mobile number: {{ mobile }}</p>
                        <p>Email address: {{ email_address }}</p>
                    </div>
                </div>
            </div>
        </template>
    </dialog>
   
</template>

<style lang="scss">
    .data-profile-division {
        margin: 0 30px 0;
        text-align: left;
    }
    .submit-btn {
        border: 1px solid transparent;
        &:hover {
            border: 1px solid white;
        }
    }
</style>