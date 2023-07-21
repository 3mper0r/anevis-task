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
                  <button className='hover:text-blue-500 hover:bg-blue-100 transition-all duration-300' onClick={() => handleShow(book.id)}>
                   <i className="fas fa-edit">Edit</i>
                  </button>
                    <EditBook isVisible={showModal === book.id} handleClose={() => handleClose(id)} bookId={book.id} />        
                  <button className='hover:text-red-500 transition-all duration-300' onClick={() => removeBook(book.id)}>
                  <i className="fas fa-trash"></i>
                  </button>
                </div>
                <h2 className='text-center text-xl font-bold p-3 text-slate-600 hover:text-blue-800'>{book.title}</h2>
                <img 
                  className='grid place-content-center'
                  src={book.covers?.M ?? book.covers}   
                  alt={book.title} 
                  loading='lazy'
                />
                <div className="book-info mb-6">
                  <span className='block text-slate-500 hover:text-blue-600 text-sm font-bold shadow-md m-1'>{book.author_name}</span>
                  <span className='italic text-sm text-slate-600'>{book.number_of_pages_median}pg - </span>
                  <span className='text-sm font-bold'>{book.first_publish_year}</span>
                </div>
              </article>
      ))
    } 
    </>
  )
}

export default BookItem