import React, { use, useEffect, useState } from "react";
import { getAllPostsApi } from "../Services/postServices";
import LoadingScreen from './LoadingScreen';
import CreatePost from "../componanets/CreatePost";
import Post from './../componanets/Post';

export default function FeedPage() {

  const [posts, setposts] = useState([])
  const [isLoading, setIsLoading] = useState(true);

async function getAllPosts(){

  const data = await getAllPostsApi();
setIsLoading(false);
  if(data.message == "success")
  {
    setposts(data.posts);  
  }

}

useEffect(()  => {
  getAllPosts()
  
}, [])


  return <>

<CreatePost getAllPosts = {getAllPosts} />
  <div className=" grid gap-0.5 p-4 mx-auto max-w-2xl mt-0  ">

  { isLoading ? <LoadingScreen /> :
    posts.map((posts) => <Post callback={getAllPosts} posts={posts} key={posts.id} commentsLimit={1} /> )  
  }
  

  </div> 
  
  
  </>
  
}
