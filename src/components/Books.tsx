import { useState, useEffect } from "react";
import BookItem from "./BookItem";
import Search from "./Search";
import useBookStore from "../store/store";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";

const Books = () => {

    const [search, setSearch] = useState("")  
    const [book, setBook] = useState<Book>(Object) 
    const { fetchBooks } = useBookStore((state) => state)

    useEffect(() => { 
      fetchBooks()
    }, [])
   
  return (
    <> 
        
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Search search={search} setSearch={setSearch}/>
          <section className="main-section" >
            <BookItem search={search} id={book.id} />
          </section>   
        </ErrorBoundary>
    </>
  )
}

export default Books
