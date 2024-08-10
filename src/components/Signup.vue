<script setup>
import { ref } from 'vue'

const reactiveNameInput = ref(''),
    reactivePhoneInput = ref(''),
    reactiveEmailInput = ref(''),
    reactiveIsFormSubmited = ref(false)

async function submitSignupForm(e) {
    let name = document.getElementById('name'),
        phone = document.getElementById('phone'),
        email = document.getElementById('email')

    const signupDataObject = {
        full_name: name.value, //reactiveNameInput.value
        mobile_number: phone.value, //reactivePhoneInput.value
        email_address: email.value //reactiveEmailInput.value
    }

    const apiUri = 'http://localhost:8080/signup'
    try {
        const response = await fetch(apiUri, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({...signupDataObject})
        })
        if (response.statusText === 'OK') {
            reactiveIsFormSubmited.value = true
        }
    } catch (error) {
        reactiveIsFormSubmited.value = false
        //An exception
        const postError = new Error('Something has got wrong.')
        console.error('Error >', error.message, postError)
        throw postError
    }
}
</script>
<template>
    <!--
        1. Input fields validation
        2. Create API server 
        3. Connection to API
    -->
    <template v-if="reactiveIsFormSubmited">
        <h2>Thank you for signing up.</h2>
        <figure>
            <figcaption>Your signup has been submitted successfully.</figcaption>
        </figure>
    </template>
    <template v-else>
        <div :style="reactiveNameInput || reactivePhoneInput || reactiveEmailInput ? 'display: flex;' : 'display:block;'">
            <div class="form-division">
                <h2>Signup to application content</h2>
                <form @submit.prevent="submitSignupForm" method="post">
                    <figure>
                        <figcaption>Fill in the following input fields once completed, click the submit button.</figcaption>
                    </figure>
                    <div class="group">
                        <fieldset>
                            <input v-model="reactiveNameInput" id="name" type="text" name="name">
                            <label for="name">Full name</label>
                        </fieldset>
                        <fieldset>
                            <!--
                                1. Select country code
                                    a) Create an API with phone number codes endpoint.
                                    b) Fetch list of phone number country codes 
                                    c) Prepopulate field with select data on code input field.
                                    d) Conditionaly validate accepting phone number based on selected country code. 
                            -->
                            <input v-model="reactivePhoneInput"  id="phone" type="text" name="phone">
                            <label for="phone">Contact number</label>
                        </fieldset>
                            <fieldset>
                            <input v-model="reactiveEmailInput"  id="email" type="email" name="email">
                            <label for="email">Email address</label>
                        </fieldset>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div class="data-profile-division" v-if="reactiveNameInput || reactivePhoneInput || reactiveEmailInput">
                <h2>Profile data:</h2>
                <div class="data-profile-division__content">
                    <p>{{ reactiveNameInput }}</p>
                    <p>{{ reactivePhoneInput }}</p>
                    <p>{{ reactiveEmailInput }}</p>
                </div>
            
            </div>
        </div>
    </template>
</template>

<style lang="scss">
    fieldset {
        align-items: center;
        display: flex;
        justify-content: last;
        flex-direction: row-reverse;
    }
    label {
        margin: 0 5px;
    }

    .data-profile-division {
        margin: 0 30px 0;
        text-align: left;
    }
</style>