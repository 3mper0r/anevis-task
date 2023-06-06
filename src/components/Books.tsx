import axios from "axios";
import { useState, useEffect, ChangeEvent } from "react";
import BookItem from "./BookItem";
import Search from "./Search";


const Books = () => {
  
    const [books, setBooks] = useState<Book[]>([])
    const [error, setError] = useState()
    const [isLoading, setLoading] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchBooks = async () => {
        setLoading(true)
        try {
          const response = await axios.get<Book[]>('http://localhost:3001/books')
          const data = await response.data.value
          const booksData = JSON.parse(data)
        
        setBooks(booksData)
        setLoading(false)
        } catch(err) {
          if (err instanceof Error) {
            // letting TypeScript know err is Error
            console.log(`Error: ${err.message}`);
          }  
        setLoading(false)
        }
      }
      
      fetchBooks()
    }, [])

  return (
    <>
        <h1>Books</h1>
        <Search search={search} setSearch={setSearch}/>
        { isLoading 
            ? <p>Loading...</p> 
            : <BookItem books={books} search={search} /> 
        }
    </>
  )
}

export default Books