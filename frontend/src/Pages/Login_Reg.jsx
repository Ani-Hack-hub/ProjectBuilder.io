import React, { useState } from 'react'
import axios from 'axios'
import '../Assets/style/login_up.css'

function Login_Reg() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [passwd, setPass] = useState('')
  const [r_passwd, setR_pass] = useState('')
  const [pno, setPno]= useState(0)
  const [cemail, setCemail] = useState('')
  const [cpass, setCpass] = useState('')

  const handleName = (e)=>{
    setName(e.target.value)
  }
  const handleEmail = (e)=>{
    if (!cemail) setEmail(e.target.value)
  }
  const handlePass = (e)=>{
    setPass(e.target.value)
  }
  const handleRPass = (e)=>{
    const check = e.targett.value
    if (check == passwd) setR_pass(e.target.value)
  }
  const handlePno = (e)=>{
    setPno(e.target.value)
  }
  const handleCemail = (e)=>{
    setCemail(e.target.value)
  }
  const handleCPass = (e)=>{
    setCpass(e.target.value)
  }

  const handleLogin=()=>{
    console.log(cemail+'\n'+cpass)
  }
  
  return (
      <ul className='form'>
        <li className='login'>
            <ul >
              <li className='uemail'>
                <label htmlFor="email">USER EMAIL: </label>
                <input type="text" value={cemail} name='email' onChange={handleCemail}/>
              </li>
              <li className='passwd'>
                <label htmlFor="passwd">PASSWORD: </label>
                <input type="text" name='passwd' value={cpass} onChange={handleCPass}/>
              </li>
              <button type='submit' onClick={handleLogin}>LOGIN</button>
              <div className="line1"></div>
            </ul>
        </li>
        <li className='register'>
          <ul >
            <li className='name '>
              <label htmlFor="name">NAME: </label>
              <input type="text" name='name' value={name} onChange={handleName} />
            </li>
            <li className='email'>
              <label htmlFor="mail">EMAIL: </label>
              <input type="text" name='mail' value={email} onChange={handleEmail} />
            </li>
            <li className='pno'> 
              <label htmlFor="pno">PHONE NUMBER: </label>
              <input type="text" name='pno' value={pno} onChange={handlePno} />
            </li>
            <li className='pass'>
              <label htmlFor="pass">PASSWORD: </label>
              <input type="text" name="pass" value={passwd} onChange={handlePass} />
            </li>
            <li className='pass_2'>
              <label htmlFor="passwd_2">RETYPE PASSWORD: </label>
              <input type="text" name='passwd_2' value={r_passwd} onChange={handleRPass}/>
            </li>
            <button type='submit'>REGISTER</button>
          </ul>
        </li>
      </ul>
  )
}

export default Login_Reg
