<script setup>
import { computed, onMounted, ref, watch } from 'vue';

const reactiveNameInput = ref(''),
    reactivePhoneInput = ref(''),
    reactiveEmailInput = ref(''),
    reactiveIsFormSubmited = ref(false);

async function submitSignupForm(e) {
    let name = document.getElementById('name'),
        phone = document.getElementById('phone'),
        email = document.getElementById('email');

    const signupDataObject = {
        full_name: name.value, //reactiveNameInput.value
        mobile_number: phone.value, //reactivePhoneInput.value
        email_address: email.value //reactiveEmailInput.value
    };

    const apiUri = 'http://localhost:3000/signup';
    try {
        const response = await fetch(apiUri, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({...signupDataObject})
        })
        console.log('Client request body:', response);
        if (response.statusText === 'OK') {
            reactiveIsFormSubmited.value = true;
        };
    } catch (error) {
        reactiveIsFormSubmited.value = false;
        //An exception
        const postError = new Error('Something has got wrong.');
        console.error('Error >', error.message, postError);
        throw postError;
    };
};

const props = defineProps({
    openSignupDialog: Boolean,
});
const getOpenSignupDialog = computed(() => props.openSignupDialog);

const emit = defineEmits([
    "closeSignupDialog"
]);
onMounted(() => {
    const signupDialog = document.querySelector('.signup-dialog');
    watch(getOpenSignupDialog, (value) => {
        if (value) {
            signupDialog.showModal();
        }
    });
    const closeSignupDialog = document.querySelectorAll('.close-signup-dialog');
    closeSignupDialog.forEach(btn => {
        btn.addEventListener('click', () => {
            signupDialog.close();
            emit('closeSignupDialog');
        });
    });
});

</script>
<template>
    <!--
        1. Input fields validation
        2. Create API server 
        3. Connection to API
    -->
    <dialog class="signup-dialog">
        <template v-if="reactiveIsFormSubmited">
            <h2>Thank you for signing up.</h2>
            <figure>
                <figcaption>Your signup has been submitted successfully.</figcaption>
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
                            class="close-signup-dialog text-sm text-muted-foreground"
                            href="#" 
                        >
                            x
                        </a>
                    </div>
                </div>
                <div class="p-6 pt-0">
                    <form @submit.prevent="submitSignupForm" method="post">
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
                                Full name
                            </label>
                            <input 
                                v-model="reactiveNameInput"
                                class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                id="name" 
                                placeholder="name"
                            >
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <!--
                                1. Select country code
                                    a) Create an API with phone number codes endpoint.
                                    b) Fetch list of phone number country codes 
                                    c) Prepopulate field with select data on code input field.
                                    d) Conditionaly validate accepting phone number based on selected country code. 
                            -->
                            <label for="phone" 
                                    class="label text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                Contact number
                            </label>
                            <input 
                                v-model="reactivePhoneInput"
                                class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                id="phone" 
                                placeholder="Phone"
                            > 
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <!--
                                1. Select country code
                                    a) Create an API with phone number codes endpoint.
                                    b) Fetch list of phone number country codes 
                                    c) Prepopulate field with select data on code input field.
                                    d) Conditionaly validate accepting phone number based on selected country code. 
                            -->
                            <label for="email" 
                                    class="label text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                Email address
                            </label>
                            <input 
                                v-model="reactiveEmailInput"
                                class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                id="email" 
                                placeholder="Email"
                            > 
                        </div>
                        <div class="items-center p-6 px-0 flex justify-between">
                            <button 
                                class="close-signup-dialog inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
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
                <div class="data-profile-division" v-if="reactiveNameInput || reactivePhoneInput || reactiveEmailInput">
                    <div class="intro flex items-center justify-between">
                        <div class="flex flex-col gap-y-1.5 p-6 w-full">
                            <h3 class="font-semibold leading-none tracking-tight">
                                Profile data:
                            </h3>
                        </div>
                    </div>
                    <div class="data-profile-division__content">
                        <p>{{ reactiveNameInput }}</p>
                        <p>{{ reactivePhoneInput }}</p>
                        <p>{{ reactiveEmailInput }}</p>
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
</style>