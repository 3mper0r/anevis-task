import useBookStore from '../store/store'
interface BooksProps { 
    search: string
}

const BookItem = ({search}: BooksProps) => {

  const { books, removeBook} = useBookStore((state) => state)
  
  return (
    <>
    {
      books.filter((book) => {
                return search.toLowerCase() === '' 
                  ? book
                  : book.title.toLowerCase().includes(search)
              })
            .map((book) => (
              <article className="books-section" key={book.title}>
                <h2>{book.title}</h2>
                <div>
                <button>
                  Edit Book
                </button>
                <button
                onClick={() => removeBook(book.title)}
                >X</button>
                </div>
                <img 
                  src={book.covers?.M}   
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