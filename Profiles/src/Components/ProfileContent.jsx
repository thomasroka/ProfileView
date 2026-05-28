import React from 'react'
import {useState, useEffect } from 'react'
import Profile from './Profile';
const ProfileContent = () => {
    const [users, setUsers]=useState([]);
    const [visibleUser, setVisibleUser]=useState(4)
    const [display,setDisplay]=useState(false);
    function handleDisplay(){
     //setDisplay(true);
     if(visibleUser==4){
        setVisibleUser(users.length)
         setDisplay(true);
    } else{
        setVisibleUser(4)
        setDisplay(false);
        }
    }
    useEffect(()=>{ 
        const fetchUser=async ()=>{
            try{
                const res= await fetch("https://jsonplaceholder.typicode.com/users");
                const data= await res.json();
                setUsers(data);
            }
            catch(error){
                console.log(error);
            }
          
        }
        fetchUser();
    },[])
  return (
    <div>
        <p className=' m-8 text-2xl'>List of Profiles to view</p>
        <div>
            <label htmlFor="" className='text-xl m-8'> Search</label>
            <input className="h-10 w-80 rounded-sm p-4 border-2 border-black/60"type="text" placeholder='Enter profiles to search' />
        </div>
         <div className='flex flex-row flex-wrap'>
        {users.slice(0,visibleUser).map((items,index)=>{return <Profile key={items.id} name={items.name}/>})}
        </div>
        <button onClick={handleDisplay}>{display?"Show Less":"ShowAll"}</button>
    </div>
  )
   
}

export default ProfileContent