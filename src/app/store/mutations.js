import Vue from "vue";


const mutations = {
    SET_RANDOM: (state, randomdata ) => {
        Vue.set(state, "objData", randomdata);
    }
};

export default mutations;