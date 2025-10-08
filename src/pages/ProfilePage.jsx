import React, { useContext, useState } from 'react'
import { AuthContext } from '../Contexets/authContext';
import { Avatar } from '@heroui/react';

export default function ProfilePage() {

  const { isLoggedin, setisLoggedin, userData } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false)
  const [postCaption, setpostCaption] = useState("")
  const [imageFile, setimageFile] = useState(null)
  const [imagePreview, setimagePreview] = useState("")
  const [isPostSubmitting, setisPostSubmitting] = useState(false)   
  
  
  return (

  <div className=" grid gap-0.5 p-4 mx-auto max-w-2xl mt-0  ">


<div className='max-h-1/4 flex items-center justify-center'>
  Select Cover Photo
  {/* <div className='w-full h-48 bg-gray-300 mt-4 flex items-center justify-center'></div>
    <span className='text-gray-500'>Cover Photo Preview</span> */}
</div>


<div   className="w-fit mx-auto mt-3  flex flex-col justify-center items-center ">

  
  <Avatar
                as="button"
                className="transition-transform"
                color=""
                name="Jason Hughes"
                size="lg"
                src={userData?.photo}  />
  <h1>{userData?.name}</h1>

</div>

<div className=" w-full p-4 mx-auto pb-0 max-w-2xl">


{showForm ?
      <form onSubmit={handleCreatePostSubmit} className="rounded-2xl bg-stone-900 text-white backdrop-blur dark:bg-slate-900/70 shadow-sm">
        {/* header */}
          {/* User Info and Textarea */}
        <div className="flex items-center justify-between px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="" />
            <img className="h-10 mb-9 w-10 rounded-full" src={userData?.photo} alt="" />
            <textarea
              value={postCaption}
              onChange={(e) => setpostCaption(e.target.value)}
            autoFocus
              cols="75"
              rows="3"
              placeholder="What's on your mind?"
              className="outline-none text-slate-100 dark:text-slate-100 placeholder-slate-400 focus:border-transparent resize-none"
            />
          </div>
        </div>

         {/* Image Preview */}
                  { imagePreview && <div className="relative">
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full p-1.5 max-h-fit object-cover rounded-lg"
                        />
                        <button
                            onClick={handleRemoveImage}
                            type="button"
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition duration-200"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>}


       {/* Error Message */}
          {false && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-md text-sm">
              Error
          </div>}

          

        {/* Action Buttons */}
        <div className="px-4 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-3">

            <label >
            <Input onChange={hadleFileChange} id="fileInput" type="file" accept="image/*" className="hidden" />
            <div className="text-slate-400 cursor-pointer hover:text-gray-500 dark:text-slate-300 dark:hover:text-white">📷 Photo</div>

            </label>
            
          </div>
<div className="flex items-center space-x-2">
          {/* Post Button */}
          <Button
          onPress={() => setShowForm(false)}
          type="button"
          variant="text"
            className="px-4 py-2 text-slate-400 hover:text-gray-500 transition duration-200 disabled:opacity-50" >
            Cancel
            </Button>
          <Button isLoading={isPostSubmitting} disabled={postCaption === "" && imageFile == null || isPostSubmitting} type="submit" className="rounded-full bg-linear-to-tr to-stone-800 text-black text-sm font-semibold px-4 py-2">
            Post
          </Button>
          </div>
        </div>


      </form>
    :


          <div className="flex  rounded-2xl items-center  gap-3 max-w-3xl px-4 py-6  bg-stone-900 text-white w-full  shadow-md">
            <div className="" />
            <img className="h-10 w-10 rounded-full" src={userData?.photo} alt="" />
            <label className="">
            <input
              type="text"
              className="hidden"
            />
            <button onClick={() => setShowForm(true)} className=" w-full bg-transparent outline-none text-slate-100 dark:text-slate-100 placeholder-slate-400">
            What's on your mind?
            </button>
        </label>
         

        </div>




}




    </div>






  </div>




  )
}
