import axios from "axios";

export default function getData() {
    return axios.get("https://random-data-api.com/api/cannabis/random_cannabis?size=10");
}


