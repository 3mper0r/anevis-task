import { useState, useEffect } from "react";
import BookItem from "./BookItem";
import Search from "./Search";
import axios from '../api/axios'
import {AxiosError, CanceledError } from 'axios'
import { Link } from "react-router-dom";

const BOOKS_URL = '/books'

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
            const response = await axios.get<Book[]>(BOOKS_URL,
            {
                signal: controller.signal,  
                //withCredentials: true
            },
          )
            const data = await response.data
            setBooks(data)     
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
            :  <section className="main-section">
                <BookItem books={books} search={search} />
                </section>
                
        }
    </>
  )
}

export default Books