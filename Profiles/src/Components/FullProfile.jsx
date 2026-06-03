import React from 'react'
import {  useState,useEffect } from 'react'
import { Link,useParams} from 'react-router-dom'
const FullProfile = () => {
  const {id} =useParams();
  const [Profiles,setProfiles]=useState([]);
  useEffect(()=>{
    try{
        const fetchData= async()=>{
          const res= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          const data=await res.json();
        setProfiles([data]);
        console.log(Profiles);
        }
        fetchData();}
        catch(error){
          console.log(error)
        }
      },[id])
  return (
    <div className=''>
      <Link to="/">
      <button className='mb-16'>Back to Profiles</button>
      </Link>
      {Profiles.map((profile)=>{ return <div key={id} className='h-120 w-160 border-20 border-red rounded-4xl px-8 py-16'>
        <div className='h-40 w-40 bg-red-500 rounded-full'>
        </div>
        <div className='flex flex-row justify-between w-full px-8 py-4'><span> Name: {profile.name}</span>
        <span>Email:{profile.email}</span>
        </div>
        <div className='flex flex-row justify-between w-full px-8 py-4'><span>StreetName;{profile?.address?.street}</span>
        <span>CityName:{profile?.address?.city}</span>
        </div>
        <div className='flex flex-row justify-between w-full px-8 py-4'><span>CompanyName:{profile?.company?.name}</span>
        </div>
      </div>})
      }
    </div>
  )
}

export default FullProfile