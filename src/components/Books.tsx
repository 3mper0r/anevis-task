import axios from "axios";
import { useState, useEffect } from "react";
import booksData from '../../data/booksData'

interface Book {
    id: string;
    title: string;
    first_published_year: number;
    number_of_pages_median: number;
    covers: {
    S: string;
    M: string;
    L: string;
    }
    author_name: string
}

const Books = () => {
  
    const [books, setBooks] = useState<Book[]>([])

    useEffect(() => {
        const fetchBooks = async () => {
        try {
          const response = await axios.get<Book[]>('http://localhost:3001/books')
          const booksData = await response.data
  
          console.log(booksData);
          
          const { booktitle } = booksData
            
            //console.log(booksData);
            console.log(booktitle);
            
            
          //console.log(JSON.stringify((data.value)));
          //console.log(JSON.parse(data.value));
          //console.log(booksData);
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
            {
                booksData.map(book => (
                    <>
                    <li key={book.id}>{book.title}</li>
                    <img src={book.covers.S} alt={book.title} />
                    <span>{book.author_name}</span>
                    <span>{book.number_of_pages_median}</span>
                    <span>{book.first_publish_year}</span>
                    </>
                ))
                    
            }
        </ul> 
    </>
  )
}

export default Books