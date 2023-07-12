import { useEffect, useState } from 'react'
import useBookStore from '../store/store'
import EditBook from './modals/EditBook'
import { Link, useNavigate, useParams } from 'react-router-dom'

interface BooksProps { 
  id: string;
  search: string;
}

const BookItem = ({search, id}: BooksProps) => {

  const {books, fetchBooks, removeBook} = useBookStore((state) => state)
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  
  const handleShow = () => setShowModal(true)   
  
  const handleClose = () => setShowModal(false)

  //const {id} = useParams()
  
  useEffect(() => { 
    fetchBooks()
  }, [])

  return (
    <>
    {
      books.filter((book) => {
                return search?.toLowerCase() === '' 
                ? book
                : book?.title?.toLowerCase().includes(search)
              })
            .map((book) => (
            <article className="books-section" key={book.id}>
              <div>
                <button onClick={handleShow}>Edit Book</button>
                <EditBook isVisible={showModal} handleClose={handleClose} />
                <button onClick={() => removeBook(book.id)}>X</button>
              </div> 
              <h2>{book.title}</h2>
              <Link to={`/books/${id}`}>
                <img 
                  src={book.covers?.M ?? book.covers}   
                  alt={book.title} 
                  loading='lazy'
                />
              </Link>
              <div className="book-info">
                <span>{book.author_name}</span>
                <span>{book.number_of_pages_median}pg</span>
                <span>{book.first_publish_year}</span>
              </div>
            </article>
      ))
    } 
    </>
  )
}

export default BookItem