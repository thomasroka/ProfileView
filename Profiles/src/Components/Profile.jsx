import React from 'react'
import { BsPersonFill } from "react-icons/bs";
const Profile = ({name}) => {
  return (
    <div>
        <div className='border-2 border-black/50 h-95 w-100 bg-gray-300/35 rounded-2xl m-8'> <div className='h-60 w-70 bg-red-400  my-8 mx-14 rounded-xl flex flex-row justify-center items-center'>
            <BsPersonFill size={200} />
           
        </div>
        <p className='text-xl mx-14'>{name}</p>
        </div>
        
        </div>
  )
}

export default Profile