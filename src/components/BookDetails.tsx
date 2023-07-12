import { useEffect, useState } from "react"
import useBookStore from "../store/store"
import EditBook from "./modals/EditBook"
import { useParams } from "react-router-dom";

const BookDetails = () => {

    const {books, fetchBooks} = useBookStore((state) => state)

    // useEffect(()=> {
    //     fetchBooks()
    // }, [])
    
    const [showModal, setShowModal] = useState(false)
  
    const handleShow = () => setShowModal(true)   
  
    const handleClose = () => setShowModal(false)

    const {id} = useParams()
    const book = books.find((book) => book.id === id) 

  return (
    <article className="books-section">
        <div>
            <button onClick={handleShow}>Edit Book</button>
            <EditBook isVisible={showModal} handleClose={handleClose} />
        </div> 
        <h2>{book?.title}</h2>
        <img 
            src={book?.covers?.M ?? book?.covers}   
            alt={book?.title}
        />
        <div className="book-info">
            <span>{book?.author_name}</span>
            <span>{book?.number_of_pages_median}pg</span>
            <span>{book?.first_publish_year}</span>
        </div>
    </article>
  )
}

export default BookDetails