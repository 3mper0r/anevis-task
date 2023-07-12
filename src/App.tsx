import Login from './pages/Login'
import "./App.css"
import Books from './components/Books'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from './components/RequireAuth'
import BookDetails from './components/BookDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="login" element={<Login />} />
        <Route path="/books" element={<RequireAuth/>}> 
          <Route index element={<Books />} />
          <Route path=":id" element={<BookDetails />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
    </>
  )
}

export default App
