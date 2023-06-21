
import { useState } from "react";
import AddBook from "./AddBook";

interface searchProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({search, setSearch}: searchProps) => {


  const [showModal, setShowModal] = useState(false)
  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

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
    <button onClick={handleShow}>
      Add Book
    </button>
    <AddBook isVisible={showModal} handleClose={handleClose} showModal={showModal} />
    </div>
  )
}

export default Search
