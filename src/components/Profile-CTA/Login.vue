<template>
    <div class="profile login">
        <form action="" class="login-form" id="login" method="POST" validation>
            <fieldset class="profile-fieldset">
                <legend>Fullname</legend>
                <div class="profile-fieldset__group">
                    <label class="profile-label" id="fullname">I-username</label>
                    <input class="profile-input" id="fullname" type="text" name="fullname" placeholder="Igama okanye i-email"/>
                </div>
            </fieldset>

            <fieldset class="profile-fieldset">
                <legend>Password</legend>
                <div class="profile-fieldset__group">
                    <label class="profile-label"  for="password">I-password</label>
                    <input class="profile-input" id="password" type="password" name="passwrd" placeholder="I-Password yokungena"/>
                </div>
            </fieldset>
            <p>Xa ungekabinayi i-account, cofa apha ku  <router-link to="/register" class="cta-text cta-text--standard">Register</router-link></p>

            <!--
                Re-usable submit button
                    Class
                    Title
            -->
            <button class="profile-submit" type="submit">Thumela</button>
        </form>
    </div>
</template>

<style lang="scss">
    .profile {
        width: 800px;
        margin: 0 auto;
        &-fieldset {
            border-width: 1px;
            border-radius: 5px;
            border-color: gray;
            margin: 0 0 40px;
            &__group {
                align-items: center;
                display: flex;
                align-content: center;
            }
        }
        &-label {
            padding: 0 10px 0;
            width: 100px;
        }
        &-input {
            padding: 8px 10px
        }
        &-submit {
            padding: 10px 15px;
            width: 200px;
        }
    }
    legend {
        text-align: left;
    }
    .cta-text {
        &--standard {
            color: gray;
        }
    }
</style>