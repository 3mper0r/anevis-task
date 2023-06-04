import { useEffect, useState } from 'react'

import Login from './pages/Login'
import "./App.css"
import Books from './components/Books'

interface User {
  username: string
  password: string
}

function App() {
  
  const [users, setUsers] = useState<User | null>(null)
  const search = new URLSearchParams({
    action: 'query'
  })
  

  return (
    <>
    <div className="wrapper">
      <Login/>
      
    </div>
    <Books/>
    </>
  )
}

export default App
