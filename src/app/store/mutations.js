import Vue from "vue";


const mutations = {
    SET_RANDOM: (state, randomdata) => {
        Vue.set(state, "objData", randomdata);
    },
    SET_USER: (state, userAcc) => {
        Vue.set(state, "user", userAcc);
    }
};

export default mutations;