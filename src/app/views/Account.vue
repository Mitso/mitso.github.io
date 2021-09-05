<template>
    <div class="activity-wrapper">
        <div class="activities">
            <div class="profile">
                <h2 class="heading heading--secondary">
                    Profile yam
                </h2>
                {{ fullName }}
                <p class="profile__location">
                    I-location yam:
                </p>
            </div>

            <div class="feed">
                <h2 class="heading heading--secondary">
                    Feed
                </h2>
                <h3 class="subtitle">
                    Information about your local goverment on social media and local municipality:
                </h3>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
    name: "Account",
    data () {
        return {
            regUser: null
        };
    },
    computed: {
        ...mapGetters([
            "userReg"
        ]),
        fullName() {
            return this.$store.getters.userReg;
        }
    },
    mounted () {
        console.log("FEED:", this.fullName);
    },
    methods: {
        ...mapActions({
            getUser: "GET_USER"
        })
    }
};

</script>

<style lang="scss">
    .activity-wrapper {
        background-color: $vDarkGray;
        height: 100vh;
        padding: 5% 10%;
    }
    .activities {
        display: flex;
        justify-content: center;
    }

    .profile {
        width: 35%;
    }

    .feed {
        &__social-media {
            position: relative;
        }
        &__municipalities {
            position: relative;
        }
    }

    .heading--secondary {
        font-size: 40px;
    }
</style>