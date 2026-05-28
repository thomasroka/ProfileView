import React from 'react'

const Profile = ({name}) => {
  return (
    <div>
        <div className='border-2 border-black/50 h-95 w-100 bg-gray-300/35 rounded-2xl'> <div className='h-60 w-70 bg-red-400  my-8 mx-14 rounded-xl'>
            {}
           
        </div>
        <p className='text-xl mx-14'>{name}</p>
        </div>
        
        </div>
  )
}

export default Profile