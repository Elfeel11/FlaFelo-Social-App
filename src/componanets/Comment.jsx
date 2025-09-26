import React, { useContext } from 'react'
import userPhoto from '/src/assets/user-photo.png'
import userPhotoFemale  from '/src/assets/user-photo-female.png';
import { AuthContext } from './../Contexets/authContext';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react';

    

export default function Comment({comment}) {
const   {userData} =  useContext(AuthContext);




  return (
<div className="flex mt-2 pb-1 justify-between items-start ps-1 pt-0.5 rounded-lg bg-linear-to-tr from-stone-900 to-stone-800">
  <div className='flex '>
      <img onError={(e) =>{ userData.gender == "male" ? e.target.src = userPhoto : e.target.src = userPhotoFemale }} className=" rounded-full w-10 h-10 mr-3" src={comment.commentCreator.photo} alt="" />
      <div>    
        <h3 className="text-md font-semibold ">{comment.commentCreator.name}</h3>
        <p className="text-xs text-gray-500">{comment.createdAt}</p>
    <p className='pt-2'> {comment.content} </p>

  

      </div>
   </div>   
        { comment.commentCreator._id == userData?._id &&       <Dropdown>
          <DropdownTrigger>
     <svg
              className="w-fit rotate-90 p-1 cursor-pointer outline-none"
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
              <circle cx={12} cy={12} r={1} />
              <circle cx={19} cy={12} r={1} />
              <circle cx={5} cy={12} r={1} />
            </svg>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="edit">Edit</DropdownItem>
            <DropdownItem  onPress={() => handleOpen(backdrops)} key="delete" className="text-danger" color="danger">
              Delete
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>}
</div> 








)
}
