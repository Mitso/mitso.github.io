<template>
    <div class="activity-wrapper">
        <div class="activities">
            <div class="profile">
                <h2 class="heading heading--secondary">
                    Profile yam
                </h2>
                {{ fullName }}
                <!-- <p
                    :key="index"
                    :for="(index, item) in fullName"
                    class="profile__fullname"
                >
                    Igama lam: {{ item }}
                </p> -->
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
                <div class="feed__social-media">
                    <ul>
                        <li />
                    </ul>
                </div>

                <div class="feed__municipalities">
                    <ul>
                        <li />
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
    name: "ActivityFeed",
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