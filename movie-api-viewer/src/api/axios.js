import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params : {
        api_key : "f42c1a467166f72d0b7c3992cedb8ee7",
        language : "ko-KR"
    }
})

export default instance;