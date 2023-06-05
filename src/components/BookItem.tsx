// //import booksData from '../../data/booksData'

interface BooksProps {
    books: Book[]
}


const BookItem = ({books}: BooksProps) => {
  return (
    <>
    {
        books.map((book) => (
            <article key={book.title}>
            <h2>{book.title}</h2>
            <img 
                src={book.covers?.M}   
                alt={book.title} 
                loading='lazy'
            />
            <span>{book.author_name} </span>
            <span><i>{book.number_of_pages_median}pg </i></span>
            <span>{book.first_publish_year}</span>
            </article>
        ))
    } 
    </>
  )
}

export default BookItem