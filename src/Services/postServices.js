
import axios from "axios";

const baseUrl = "https://linked-posts.routemisr.com/"



export async function getAllPostsApi(){

    try {
        const { data } = await axios.get( baseUrl + "posts", {
            headers: {
                token: localStorage.getItem("token")
            },
            params: {
                limit: 40,
                sort: "-createdAt",
            }
        })
    return data
    } catch (error) {
        return error.response ? error.response.data.error : error.message;
        
    } 
}

export async function addPostsApi(formData){

    try {
        const { data } = await axios.post( baseUrl + "posts", formData , {
            headers: {
                token: localStorage.getItem("token")
            }
        })
    return data
    } catch (error) {
        return error.response ? error.response.data.error : error.message;
        
    } 
}





export async function getSinglePostsApi(postId){

    try {
        const { data } = await axios.get( baseUrl + "posts/" + postId , {
            headers: {
                token: localStorage.getItem("token")
            }
        })
    return data
    } catch (error) {
        return error.response ? error.response.data.error : error.message;
        
    } 
}


export async function deletePostsApi(postId){

    try {
        const { data } = await axios.delete( baseUrl + "posts/" + postId , {
            headers: {
                token: localStorage.getItem("token")
            }
        })
    return data
    } catch (error) {
        return error.response ? error.response.data.error : error.message;
        
    } 
}