import React, { use, useEffect, useState } from "react";
import { getAllPostsApi } from "../Services/postServices";
import LoadingScreen from './LoadingScreen';
import CreatePost from "../componanets/CreatePost";
import Post from './../componanets/Post';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function FeedPage() {

  // const [posts, setposts] = useState([])
  // const [isLoading, setIsLoading] = useState(true);


  
  
  
  const {data, refetch, isLoading} =useQuery({
    queryKey: ["posts"],
    queryFn: getAllPostsApi,
    
  }
  
)



// async function getAllPosts(){

//   const data = await getAllPostsApi();
// setIsLoading(false);
//   if(data.message == "success")
//   {
//     setposts(data.posts);  
//   }

// }

// useEffect(()  => {
//   getAllPosts()
  
// }, [])


  return <>

<CreatePost getAllPosts = {refetch} />
  <div className=" grid gap-0.5 p-4 mx-auto max-w-2xl mt-0  ">

  { isLoading ? <LoadingScreen /> :
    data?.data.posts.map((posts) => <Post callback={refetch} posts={posts} key={posts.id} commentsLimit={1} /> )  
  }
  

  </div> 
  
  
  </>
  
}
