import axios from "axios";

const baseUrl = "https://linked-posts.routemisr.com/"



export async function getUserApi(){

    try {
        const { data } = await axios.get( baseUrl + "users/profile-data", {
            headers: {
                token: localStorage.getItem("token")
            }
        })
    return data
    } catch (error) {
        return error.response ? error.response.data.error : error.message;
        
    } 
}