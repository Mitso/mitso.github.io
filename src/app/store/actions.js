import getData from "../api";

const actions = {
    GET_RANDOM: ({commit}) => {
        getData()
            .then(response => {
                commit("SET_RANDOM", response.data);
            }).catch(err => `An error ${err} was encountred` );
    }
};

export default actions;