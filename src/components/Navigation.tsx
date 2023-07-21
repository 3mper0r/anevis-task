
import { useState } from "react";
import AddBook from "./AddBook";
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";
import DigitalClock from "./DigitalClock";

interface searchProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Navigation = ({search, setSearch}: searchProps) => {

  const [showModal, setShowModal] = useState(false)
  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  const navigate = useNavigate()

  const handleLogout = () => {
    Cookies.remove('token')
    navigate('/login')  
  }

  return (
    <div className="relative shadow-md">
    <input 
      className="pl-8 w-2/5 mx-3 h-12 text-blue-500 font-bold tracking-widest rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
      type="text"
      id="search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search the title"
    />
    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
      <i className="text-gray-400 fas fa-search"></i>
    </div>
      <button onClick={handleShow}>Add Book</button>
      <AddBook isVisible={showModal} handleClose={handleClose} />
      <button onClick={handleLogout}>Logout</button>
    
      <DigitalClock/>
    </div>
  )
}

export default Navigation
