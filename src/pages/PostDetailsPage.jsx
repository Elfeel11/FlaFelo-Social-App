import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSinglePostsApi } from '../Services/postServices';
import Post from '../componanets/Post';
import LoadingScreen from './LoadingScreen';

export default function PostDetailsPage() {
const [post, setpost] = useState(null);   
  const {id} = useParams();


  async function getSinglePost(){ 

   const response = await getSinglePostsApi(id)
      
if(response.message == "success")
{
setpost(response.post)}

  }
  



  useEffect(() => {

getSinglePost()

  }, [])  

  return (
<div className='  mx-auto max-w-2xl pt-3 '>

{ post ? <Post  posts = {post}  /> : <LoadingScreen/> }  

</div>

)

} 
