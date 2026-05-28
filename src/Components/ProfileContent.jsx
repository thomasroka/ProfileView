import React from 'react'
import {useState, useEffect } from 'react'
import Profile from './Profile';
const ProfileContent = () => {
    const [users, setUsers]=useState([]);
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
        {users.map((items,index)=>{return <Profile key={items.id} name={items.name}/>})}
    </div>
  )
}

export default ProfileContent