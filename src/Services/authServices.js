import axios from "axios";

const baseUrl = "https://linked-posts.routemisr.com/"


export async function registerApi(formdate){

    try {
        const { data } = await axios.post( baseUrl + "users/signup", formdate)
    return data
    } catch (error) {
        return error.response.data
        
    } 
}

export async function loginApi(formdate){

    try {
        const { data } = await axios.post( baseUrl + "users/signin", formdate)
    return data
    } catch (error) {
        return error.response ? error.response.data.error : error.message;
        
    } 
}