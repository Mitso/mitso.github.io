<template>
    <div class="form-wrapper">
        <form
            id="registerForm"
            class="form"
            @submit.prevent="onSubmit()"
        >
            <div class="fieldset">
                <div class="input-group">
                    <label for="username">Igama obizwa ngalo</label>
                    <p class="input-hint">
                        Igama alinyanzelekiswanga
                    </p>
                    <input
                        id="username"
                        v-model="username"
                        type="text"
                    >
                </div>

                <div class="input-group">
                    <label for="phone">Ifowuni yakho</label>
                    <span class="input-requireHint">Linyanzekelekile</span>
                    <p class="input-hint">
                        Ukwemzela uzokwazi ukwazisa abantu ngemiyalezo onayo
                    </p>
                    <input
                        id="phone"
                        v-model="phone"
                        type="text"
                    >
                </div>

                <div class="input-group">
                    <label for="clanName">Isiduko sakho</label>
                    <input
                        id="clanName"
                        v-model="clanName"
                        type="text"
                    >
                </div>
                <div class="submission">
                    <button class="cta-button cta-button-primary">
                        Thumela
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Register",
    data () {
        return {
            username: "",
            phone: "",
            clanName:""
        };
    },
    methods: {
        async onSubmit() {
            let regData = {
                username: this.username,
                phone: this.phone,
                clan: this.clanName
            };
            axios.post("http://localhost:9000/signup", regData)
                .then((res) => {
                    console.log(res, regData);
                    if (res.status == 200)
                        this.$router.push({ path: "/activity-feed" });
                })
                .catch((error) => {
                    console.log(`Record..${error}`);
                });
        }
    },
};

</script>

<style lang="scss">
    form {
        position: relative;
    }
    .fieldset {
        border: none;
    }
    label {
        color: $white;
        display: inline-block;
        font-size: 18px;
    }

    input[type=text],
    input[type=tel] {
        box-shadow: 1px 1px 6px 0 $cyanGray;
        border: none;
        border-radius: 5px;
        display: block;
        padding: 15px 10px;
        width: 70%;
        font-size: 16px;
    }

    .cta-button {
        background-color: $strongRed;
        border-radius: 10px;
        border: none;
        color: $white;
        cursor: pointer;
        font-size: 20px;
        opacity: 1;
        padding: 20px 10px;
        transform: opacity 1s;
        text-align: center;
        width: 250px;
        @media screen and (min-width: 768px) {
            width: 300px;
        }
        &:hover {
            opacity: 0.8;
        }
    }

    .input {
        &-group {
            margin: 10px 0 2em;
        }
        &-hint {
            font-size: 16px;
            font-style: italic;
        }
        &-requireHint {
            font-size: 12px;
        }
    }

    .submission {
        align-items: center;
        display: flex;
        margin: 20px 0;
        justify-content: center;
    }

    .form-wrapper {
        padding: 20px 0 0;
    }
</style>