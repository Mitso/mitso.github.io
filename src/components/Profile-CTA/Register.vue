<template>
    <div class="profile register">
        <form action="" class="login-form" id="login" method="POST" validation>
            <fieldset class="profile-fieldset">
                <legend>Name & surname</legend>
                <label id="name"></label>
                <input id="name" type="text" name="fullname" placeholder="Igama lakho"/>
                <input id="surname" type="text" name="fullname" placeholder="Ifani yakho"/>
            </fieldset>

            <fieldset class="profile-fieldset">
                <legend>Password</legend>
                <label for="password"></label>
                <input id="password" type="password" name="passwrd" placeholder="I-Password yokungena"/>
            </fieldset>

            <!--
                Re-usable submit button
                    Class
                    Title
            -->
            <button></button>
        </form>
        <router-link to="/" class="cta-text cta-text--standard">Back home</router-link>
    </div>
</template>
