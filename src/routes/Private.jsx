import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'
import firebaseAuth from '../Firebase/firebase'

const Private = ({ children }) => {
    const [user] = useAuthState(firebaseAuth)
 
  if (!user) {
      return <Navigate to={'/sign'}/>
  }


  return children;
     
}

export default Private