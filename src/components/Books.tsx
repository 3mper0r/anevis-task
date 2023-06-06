import axios, { AxiosError, CanceledError } from "axios";
import { useState, useEffect } from "react";
import BookItem from "./BookItem";
import Search from "./Search";

const Books = () => {
  
    const [books, setBooks] = useState<Book[]>([])
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        const fetchBooks = async () => {
        try {
          const response = await axios.get<Book[]>('http://localhost:3001/books', {
            signal: controller.signal
          })
          const data = await response.data.value
          const booksData = JSON.parse(data)

        setBooks(booksData)
        setLoading(false)
        } catch(err) {
          if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);  
        setLoading(false)
        }
      }
      fetchBooks()

      return () => controller.abort()
    }, [])

  return (
    <>
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        <Search search={search} setSearch={setSearch}/>
        { isLoading 
            ? <p>Loading...</p> 
            : <BookItem books={books} search={search} /> 
        }
    </>
  )
}

export default Books