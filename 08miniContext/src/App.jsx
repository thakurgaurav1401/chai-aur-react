import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1 className='text-center py-5'>React with Chai and share is important</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
