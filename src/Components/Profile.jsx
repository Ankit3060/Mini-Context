import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if (!user) return <div>Not Logged In</div>

  return (
    <>
    <h1>Profile</h1>
    <div>Welcome {user.username}</div>
    
    </>
  )
}

export default Profile