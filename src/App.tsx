import Login from './pages/Login'
import "./App.css"
import Books from './components/Books'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from './components/RequireAuth'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="login" element={<Login />} />
        <Route element={<RequireAuth/>}> 
          <Route path="books" element={<Books />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
    </>
  )
}

export default App
