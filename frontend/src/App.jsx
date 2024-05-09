import React, { useState } from 'react'
import Login_Reg from './Pages/Login_Reg'
import UserProject from './Pages/UserProfile'

function App(){
  const [uid, setUid]= useState(0)
  document.title = 'User Profile'
  const handleUid =(uid)=>{
    setUid(uid)
  }
  const uuid = 1;
  return (
    <div>
      {/* <Login_Reg IdPasser = {handleUid} ></Login_Reg> */}
      <UserProject uid={uuid}></UserProject>
    </div>
  )
}

export default App
