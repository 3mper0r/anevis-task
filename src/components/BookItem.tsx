import booksData from '../../data/booksData'

const BookItem = () => {
  return (
    <>
    
    {
        booksData.map(book => (
            <div key={book.title}>
            <h2>{book.title}</h2>
            <img src={book.covers.S} alt={book.title} />
            <span>{book.author_name}</span>
            <span>{book.number_of_pages_median}</span>
            <span>{book.first_publish_year}</span>
            </div>
        ))
        
    }
    </>
  )
}

export default BookItem