
import { useState } from "react";
import AddBook from "./AddBook";
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";

interface searchProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({search, setSearch}: searchProps) => {

  const [showModal, setShowModal] = useState(false)
  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  const navigate = useNavigate()

  const handleLogout = () => {
    Cookies.remove('token')
    navigate('/login')  
  }

  return (
    <div>
    <input 
        type="text"
        id="search"
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
        placeholder="Search the title"
    />
    <button onClick={handleShow}>Add Book</button>
    <AddBook isVisible={showModal} handleClose={handleClose} showModal={showModal} />
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Search
