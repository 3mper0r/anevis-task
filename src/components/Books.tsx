import { useState, useEffect } from "react";
import BookItem from "./BookItem";
import Search from "./Search";
import useBookStore from "../store/store";
import { ErrorBoundary } from "react-error-boundary";

const Books = () => {

    const [search, setSearch] = useState("")   
    const { fetchBooks } = useBookStore((state) => state)
    
    useEffect(() => {     
      fetchBooks()
    }, [])

  return (
    <> 
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Search search={search} setSearch={setSearch}/>
        <section className="main-section" >
          <BookItem search={search} />
        </section>   
      </ErrorBoundary>  
    </>
  )
}

export default Books