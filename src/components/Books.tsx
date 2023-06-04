import axios from "axios";
import { useState, useEffect } from "react";
import BookItem from "./BookItem";

const Books = () => {
  
    const [books, setBooks] = useState<Book[]>([])

    useEffect(() => {
        const fetchBooks = async () => {
        try {
          const response = await axios.get<Book[]>('http://localhost:3001/books')
          const booksData = await response.data
  
          console.log(booksData);
        
            setBooks(books)
        } catch(err) {
  
          if (err.response) {
  
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else {
            console.log(`Error: ${err.message}`);
          }
        }
      }
  
      fetchBooks()
      
    }, [])

  return (
    <>
        <div>Books</div>
    
        <ul>
            <BookItem/>
        </ul> 
    </>
  )
}

export default Books