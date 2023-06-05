import axios from "axios";
import { useState, useEffect } from "react";
import BookItem from "./BookItem";


const Books = () => {
  
    const [books, setBooks] = useState<Book[]>([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchBooks = async () => {
        setLoading(true)
        try {
          const response = await axios.get<Book[]>('http://localhost:3001/books')
          const booksData = await response.data.value
            
          console.log(booksData);
        
        setBooks(JSON.parse(booksData))
        } catch(err) {
          if (err instanceof Error) {
            // letting TypeScript know err is Error
            console.log(`Error: ${err.message}`);
          }  
        }
      }
      
      fetchBooks()
    }, [])

  return (
    <>
        <h1>Books</h1>
        <BookItem books={books}/> 
    </>
  )
}

export default Books