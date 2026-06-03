import { useState } from 'react'
import Profile from './Components/Profile'
import ProfileContent from './Components/ProfileContent'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Demo from './Components/Demo'
import FullProfile from './Components/FullProfile'
function App() {
  return(
    <>
    <div className='m-16'>
    <BrowserRouter><Routes>
       <Route path="/" element={<ProfileContent />}/>
      <Route path="/Profile/:id"element={<FullProfile/>}/>
     
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
