import axios from "axios"

const instance = axios.create({
    // The Api {cloud Function } URL

    baseURL: "https://us-central1-clone-509d3.cloudfunctions.net/api" 
    // baseURL:"http:localhost:5001/clone-509d3/us-central1/api" 
});

export default instance;