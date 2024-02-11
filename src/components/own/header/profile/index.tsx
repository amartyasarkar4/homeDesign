import React from 'react'
import LoginBtn from './login'
import SignUpBtn from './signup'

const ProfileSec = () => {
  return (

    <div style={{display:'flex',justifyContent:'space-between'}}>
        <LoginBtn/>
        <SignUpBtn/>
    </div>

  )
}

export default ProfileSec;