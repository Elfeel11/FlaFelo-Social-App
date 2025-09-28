import React, { useContext, useState } from 'react'
import userPhoto from '/src/assets/user-photo.png'
import userPhotoFemale  from '/src/assets/user-photo-female.png';
import { AuthContext } from './../Contexets/authContext';
import { Button, Input, useDisclosure } from '@heroui/react';
import { deleteCommentApi, ubdateCommentApi } from '../Services/commentServices';
import {addToast} from "@heroui/toast";
import CardDrobDown from './CardDrobDown';
import ModalComponanets from './ModalComponanets';

    

export default function Comment({comment, callback}) {
const   {userData} =  useContext(AuthContext);
  const {isOpen, onOpen, onClose} = useDisclosure();
    const [backdrop, setBackdrop] =useState("opaque");
      const [isCommentDeleting, setIsCommentDeleting] =useState(false);
      const [isInEditeMode, setisInEditeMode] = useState(false);
      const [NewCommentContent, setNewCommentContent] = useState(comment.content)
      const [isCommentUbating, setIsCommentUbating] =useState(false);
      

    const backdrops = "blur";



function handleOpen(backdrop) {
   setBackdrop(backdrop); 
  onOpen();
} 

async function handleDeletComment(onClose) {
  setIsCommentDeleting(true);
  const response = await deleteCommentApi(comment._id);
  if (response.message == "success"){
    await callback()
    setIsCommentDeleting(false);
    onClose();
    addToast( {title: "Comment deleted successfully", 
       color: 'success',
      timeout: 2000  } );
   }

}

async function hnadleCommentUbdate() {
  setIsCommentUbating(true);
  const response = await ubdateCommentApi(comment._id, NewCommentContent);
  

  if (NewCommentContent.trim() == "") {
    addToast( {title: "Comment content cannot be empty", 
       color: 'danger',
      timeout: 2000  } );
      setisInEditeMode(false)
      return;
  }else{
  if (response.message == "success"){
    await callback()
    setIsCommentUbating(false);
    setisInEditeMode(false)
    addToast( {title: "Comment ubdated successfully", 
       color: 'success',
      timeout: 2000  } );
   }
  }
}
  return (
<div className="flex mt-2 p-1 rounded-lg bg-linear-to-tr from-stone-900 to-stone-800">
  <div className='flex w-full'>
      <img onError={(e) =>{ userData.gender == "male" ? e.target.src = userPhoto : e.target.src = userPhotoFemale }} className=" rounded-full w-10 h-10 mr-3" src={comment.commentCreator.photo} alt="" />
      <div className="w-full">    
        <h3 className="text-md font-semibold ">{comment.commentCreator.name}</h3>
        <p className="text-xs text-gray-500">{comment.createdAt}</p>
    { isInEditeMode ? 
    
           <div className="pt-2">
      <Input value={NewCommentContent} onChange={(e) =>setNewCommentContent(e.target.value) } variant='bordered'/>
             <div className="flex justify-end gap-2 pt-2">
      <Button 
      onPress={() => setisInEditeMode(false)}
      variant='text'
      className=' text-slate-400 hover:text-gray-500 transition duration-200 disabled:opacity-50'>Cancel</Button>
      <Button isLoading={isCommentUbating} onPress={hnadleCommentUbdate} className='bg-linear-to-tr to-stone-800 text-black'>Ubdate</Button>
</div>
</div>
     
     :
     <p className='pt-2'> {comment.content} </p>
     
     }

    

  

      </div>
   </div>   
        { comment.commentCreator._id == userData?._id &&     <CardDrobDown setisInEditeMode={setisInEditeMode}  backdrops={backdrop} handleOpen={handleOpen} />}
    


<ModalComponanets isOpen={isOpen} onClose={onClose} backdrop={backdrops} title={"Delete Comment"} isCommentDeleting={isCommentDeleting} handleDeletComment={handleDeletComment} />




        
</div> 

)
}
