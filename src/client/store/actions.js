import axios from "axios";
import getData from "../api";

const actions = {
    GET_RANDOM: ({commit}) => {
        getData()
            .then(response => {
                commit("SET_RANDOM", response.data);
            }).catch(err => `An error ${err} was encounted` );
    },
    GET_USER: ({commit}) => {
        axios.get("/users")
            .then(res => {
                commit("SET_USER", res.data);
            })
            .catch((error) => {
                console.log(`An error ${error} was encounted`);
            });
    }
};

export default actions;