import { useState } from 'react'
import useBookStore from '../store/store'
import EditBook from './modals/EditBook'

interface BooksProps {    
  id: string
  search: string;
}

const BookItem = ({id, search}: BooksProps) => {

  const { books, removeBook} = useBookStore((state) => state)
  const [showModal, setShowModal] = useState<undefined | string>(undefined)
  
  const handleShow = (id: string) => setShowModal(id) 
  const handleClose = (id: string) => setShowModal(id)

  
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
                  <button onClick={() => handleShow(book.id)}>Edit Book</button>
                    <EditBook isVisible={showModal === book.id} handleClose={() => handleClose(id)} bookId={book.id} />        
                  <button onClick={() => removeBook(book.id)}>X</button>
                </div>
                <h2>{book.title}</h2>
                <img 
                  src={book.covers?.M ?? book.covers}   
                  alt={book.title} 
                  loading='lazy'
                />
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