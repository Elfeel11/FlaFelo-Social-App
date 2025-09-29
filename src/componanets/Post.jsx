import React, {  useContext, useState } from "react";
import Comment from "./Comment";
import { useNavigate } from "react-router-dom";
import { addToast, Button, Input, useDisclosure } from "@heroui/react";
import { addComment } from "../Services/commentServices";
import { AuthContext } from "../Contexets/authContext";
import { deletePostsApi } from "../Services/postServices";
import CardDrobDown from "./CardDrobDown";
import ModalComponanets from "./ModalComponanets";

export default function Post({ posts, commentsLimit, callback }) {
  const [VisibleComments, setVisibleComments] = useState(9);
  const [isLoading, setIsLoading] = useState(false);
  const [commentContent, setcommentContent] = useState("");
  const [isCommentSubmitting, setisCommentSubmitting] = useState(false);
  const {userData} =  useContext(AuthContext);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] =useState("opaque");
  const [isPostDeleting, setisPostDeleting] =useState(false);

  const backdrops = "blur";

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop); 
    onOpen();
  };

  async function handleDeletepost(onClose) 
  {
    setisPostDeleting(true);
    const response = await deletePostsApi(posts.id);
    if (response.message == "success"){
    await callback()
    setisPostDeleting(false);
    onClose();
    addToast( 
    {title: "Post deleted successfully", 
    color: 'success',
    timeout: 2000  } );
     }
  }

  async function handleCommentSubmit() {
    setisCommentSubmitting(true);
   const response = await addComment(commentContent, posts.id);
   setisCommentSubmitting(false);
    setcommentContent("");
    callback()

  }

  function loadMoreComments() {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleComments(VisibleComments * 3);
      setIsLoading(false);
    }, 2000);
  }

  const navigate = useNavigate();
  const postId = posts.id;



  return (
    <div className=" bg-stone-900 text-white w-full rounded-md shadow-md h-auto py-3 px-3 my-5">
      {/* Post Header */}

      <div className="w-full h-16 items-center flex justify-between ">
        <div className="flex">
          <img
            className=" rounded-full w-10 h-10 mr-3"
            src={posts.user.photo}
            alt=""
          />
          <div>
            <h3 className="text-md font-semibold ">{posts.user.name}</h3>
            <p className="text-xs text-gray-500">{posts.createdAt}</p>
          </div>
        </div>
{  posts.user._id == userData?._id &&      <CardDrobDown  backdrops={backdrop} handleOpen={handleOpen} />}

    
       
      </div>

      {/* Post Body */}
      <p className=" max-w-xl  ">{posts.body}</p>
      {posts.image && (
        <img
          src={posts.image}
          alt=""
          className=" w-full object-cover h-100 mt-2 rounded-2xl"
        />
      )}

      {/* Post Footer */}
      <div className="w-full h-8 flex items-center px-3 my-3">
        <div className="bg-blue-500 z-10 w-5 h-5 rounded-full flex items-center justify-center ">
          <svg
            className="w-3 h-3 fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width={27}
            height={27}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b0b0b0"
            strokeWidth={2}
            strokeLinecap="square"
            strokeLinejoin="round"
          >
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
          </svg>
        </div>
        <div className="bg-red-500 w-5 h-5 rounded-full flex items-center justify-center -ml-1">
          <svg
            className="w-3 h-3 fill-current stroke-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width={27}
            height={27}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b0b0b0"
            strokeWidth={2}
            strokeLinecap="square"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
        <div className="w-full flex justify-between">
          <p className="ml-2 text-gray-500">{posts.comments.length}</p>
          <p className="ml-2 text-gray-500">{posts.comments.length} comment</p>
        </div>
      </div>

      {/* Post Action */}
      <div className="grid grid-cols-3 justify-items-center w-full px-5 my-3 border-t border-default-700 pt-4">
        <button className="flex flex-row justify-center items-center w-fit space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={27}
            height={27}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#838383"
            strokeWidth={2}
            strokeLinecap="square"
            strokeLinejoin="round"
          >
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
          </svg>
          <span className="font-semibold text-lg text-gray-600">Like</span>
        </button>
        <button className="flex flex-row justify-center items-center w-fit space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={27}
            height={27}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#838383"
            strokeWidth={2}
            strokeLinecap="square"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span
            onClick={() => navigate("/post-details/" + postId)}
            className="font-semibold text-lg text-gray-600"
          >
            Comment
          </span>
        </button>
        <button className="flex flex-row justify-center items-center w-fit space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={27}
            height={27}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#838383"
            strokeWidth={2}
            strokeLinecap="square"
            strokeLinejoin="round"
          >
            <circle cx={18} cy={5} r={3} />
            <circle cx={6} cy={12} r={3} />
            <circle cx={18} cy={19} r={3} />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          <span className="font-semibold text-lg text-gray-600">Share</span>
        </button>
      </div>

      {/* Post Comments */}

      <div className="flex pt-2 mb-3 ">
        <Input
        value={commentContent}
              onChange={(e) => setcommentContent(e.target.value)}
          className=" max-h-fit max-w-full bg-linear-to-tr from-stone-900 to-stone-500 rounded-lg"
          variant=""
          placeholder="Enter your Comment..." >
        </Input>
        
            <Button
            isLoading={isCommentSubmitting}
              disabled={commentContent.trim().length === 0}
              size="sm"
              onPress={handleCommentSubmit}
              className="mt-1 ms-1 bg-linear-to-tr to-stone-800 text-black"
            >
              Comment
            </Button>

      </div>

      <div>
        {posts.comments.slice(0, commentsLimit ?? VisibleComments) .map((comment) => (<Comment key={comment._id}  callback={callback} comment={comment} />     ))}
      </div>

      {posts.comments.length > VisibleComments && !commentsLimit && (<Button isLoading={isLoading} onPress={loadMoreComments} className="ms-auto block " >  {" "}
          Load More...{" "}
        </Button>)}

      {/* Modal Edit&Delete*/}

<div className="flex flex-wrap gap-3">
        
        
      </div>

      <ModalComponanets isOpen={isOpen} onClose={onClose} backdrop={backdrops} title={"Delete Post"} isCommentDeleting={isPostDeleting} handleDeletComment={handleDeletepost} />
      



        
    </div>







  );
}
